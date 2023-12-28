const Year = require('../models/Years');

const addYear = async (data) => {
    const { year } = data;

    if(!year) return;

    const newYear = new Year({
        year,
    });

    try {
        // find if year already exists
        const yearExists = await Year.findOne({ year: year });
        if (yearExists) {
            return yearExists;
        } else {
            await newYear.save();
            return newYear;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = addYear;