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
    gender: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    roll_no: {
        type: String,
        trim: true,
    },
    admission_year: {
        type: String,
        trim: true,
    },
    academic_session: {
        type: String,
        trim: true,
    },
    degree: {
        type: String,
        trim: true,
    },
    department: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    isPWD: {
        type: Boolean,
        default: false,
    },
    currently_employed: {
        type: String,
        trim: true,
    },
    current_company: {
        type: String,
        trim: true,
    },
    designation: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true
})



const Member = mongoose.model('Member', memberSchema);
module.exports = Member;