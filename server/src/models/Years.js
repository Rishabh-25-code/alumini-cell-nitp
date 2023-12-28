const mongoose = require('mongoose');

const yearSchema = new mongoose.Schema({
    year: {
        type: String,
        trim: true,
        required: true,
    },
}, {
    timestamps: true
})



const Year = mongoose.model('Year', yearSchema);
module.exports = Year;