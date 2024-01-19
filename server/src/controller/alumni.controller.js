const { Query } = require("node-appwrite");
const { databases, sdk } = require("../config/appwrite");

const addAlumni = async (data, count) => {
    try {
        const { email } = data;
        const users = await databases.listDocuments("65911fc061ec3e446c84", "alumni", [
            Query.equal("email", [email]),
        ]);

        if (users.documents.length > 0) {
            console.log(count + 1, "Already exists : ", data.email);
            return;
        }

        const response = await databases.createDocument("65911fc061ec3e446c84", "alumni", sdk.ID.unique(), data);
        console.log(count + 1, "Added : ", data.email);
        return response;
    } catch (error) {
        console.log(count + 1, "Error for : ", data.email, error.message);
    }
}

module.exports = addAlumni;