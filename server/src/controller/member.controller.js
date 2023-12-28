const Member = require('../models/Member');

const addMember = async (data) => {
    const { email, name_prefix, name, gender, roll_no, admission_year, academic_session, degree, department, category, isPWD, Photo, currently_employed, current_company, designation } = data;

    const newMember = new Member({
        email,
        name: name_prefix + " " + name,
        gender,
        roll_no,
        admission_year,
        academic_session,
        degree,
        department,
        category,
        isPWD: isPWD === "Yes" ? true : false,
        currently_employed,
        current_company,
        designation,
    });

    try {
        await newMember.save();
        return newMember;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = addMember;