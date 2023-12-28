const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [3, 'Email must be at least 3 characters long']
    },
}, {
    timestamps: true
})



const Member = mongoose.model('Member', memberSchema);
module.exports = Member;