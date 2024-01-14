const { databases, sdk } = require("../config/appwrite");

const addAlumni = async (data, count) => {
    try {
        const response = await databases.createDocument("65911fc061ec3e446c84", "alumni", sdk.ID.unique(), data);
        console.log(count + 1, "Added : ", data.email);
        return response;
    } catch (error) {
        console.log(count + 1, "Error for : ", data.email, error.message);
    }
}

module.exports = addAlumni;