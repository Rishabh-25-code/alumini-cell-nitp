const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const readGSheet = require('./src/readGoogleSheet');
const connectDB = require('./src/config/db');
const addAlumni = require('./src/controller/alumni.controller');
const webPush = require('web-push');
const SubscriptionModel = require('./subscriptionModel');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// DB Connection
connectDB();

// app.use('/user', userRouter);
app.post('/readGSheet/:sheetID', async (req, res) => {
    const { sheetID } = req.params;
    try {
        let result = await readGSheet(sheetID);
        const persons = result.data;
        let count = 0;
        for (const person of persons) {
            await addAlumni(person, count++);
        }
        res.json({ success: true, result: persons });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Server Error', error: error.message, stack: error.stack });
    }
});

app.post('/subscribe', async (req, res, next) => {
    const { subscription, uid } = req.body;
    try {
        const newSubscription = await SubscriptionModel.create({ uid, ...subscription });
        res.status(201).json(newSubscription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/unsubscribe', async (req, res, next) => {
    const { endpoint } = req.body;
    try {
        const deletedSubscription = await SubscriptionModel.findOneAndDelete({
            endpoint
        });
        res.status(200).json(deletedSubscription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post('/sendNotification', async (req, res, next) => {
    const subscriptions = await SubscriptionModel.find({
        uid: req.body.uid
    });

    const options = {
        vapidDetails: {
            subject: 'mailto:myemail@example.com',
            publicKey: process.env.VAPID_PUBLIC_KEY,
            privateKey: process.env.VAPID_PRIVATE_KEY,
        },
    };

    try {
        for (const subscription of subscriptions) {
            await webPush.sendNotification(
                subscription,
                JSON.stringify({
                    title: req.body.title,
                    description: req.body.description,
                    image: 'https://alumini-nitp.vercel.app/apple-icon.png',
                }),
                options
            );
        }
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
