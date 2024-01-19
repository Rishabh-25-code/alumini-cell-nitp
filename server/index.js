const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const readGSheet = require('./src/readGoogleSheet');
const connectDB = require('./src/config/db');
const Member = require('./src/models/Member');
const Years = require('./src/models/Years');
const addAlumni = require('./src/controller/alumni.controller');
const { users } = require('./src/config/appwrite');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

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

app.post('/addrole', async (req, res) => {
    try {
        const { uid, labels } = req.body;
        const response = await users.updateLabels(uid, labels);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Server Error', error: error.message, stack: error.stack });
    }
})

app.get('/years', async (req, res) => {
    try {
        const data = await Years.find();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.get('/members', async (req, res) => {
    // Extract optional query parameters
    const {
        admission_year,
        degree,
        department,
        category,
        isPWD,
        currently_employed,
        gender,
        academic_session,
        itemsPerPage,
        page = 1  // Default to page 1 if not provided
    } = req.query;

    // Create a filter object based on provided query parameters
    let filter = {
        admission_year,
        degree,
        department,
        category,
        isPWD,
        currently_employed,
        gender,
        academic_session,
    };

    // Remove undefined or null values from the filter object
    for (let key in filter) {
        if (filter[key] === undefined || filter[key] === null) {
            delete filter[key];
        }
    }

    const ITEMS_PER_PAGE = parseInt(itemsPerPage) || 25;

    console.log(filter);

    try {
        // Calculate skip value for pagination
        const skip = (page - 1) * ITEMS_PER_PAGE;

        // Query the database with the filter and pagination
        const data = await Member.find(filter)
            .skip(skip)
            .limit(ITEMS_PER_PAGE);

        res.status(200).json({
            page: +page,
            hasNextPage: data.length === ITEMS_PER_PAGE,
            hasPreviousPage: +page > 1,
            nextPage: +page + 1,
            previousPage: page - 1,
            dataPerPage: ITEMS_PER_PAGE,
            data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
