const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const readGSheet = require('./src/readGoogleSheet');
const connectDB = require('./src/config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// Routes
// const userRouter = require('./routes/user');

// app.use('/user', userRouter);
app.post('/readGSheet', async (req, res) => {
    const { SHEET_ID } = req.body;
    try {
        let result = await readGSheet(SHEET_ID);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
