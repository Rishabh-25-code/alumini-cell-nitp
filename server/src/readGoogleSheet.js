const { GoogleSpreadsheet } = require("google-spreadsheet");
const addYear = require('./controller/year.controller');
const addMember = require('./controller/member.controller');

async function readGSheet(SHEET_ID) {
    const doc = new GoogleSpreadsheet(SHEET_ID, { apiKey: process.env.GOOGLE_API_KEY });
    const result = [];

    async function loadSheet() {
        await doc.loadInfo();
        console.log('>>', doc.title, "loaded");

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows({ offset: 0 /*limit:5*/ });

        const header = rows[0]._worksheet.headerValues;
        for (const row of rows) {
            let d1 = {};
            for (let i = 0; i < row._rawData.length; i++) {
                d1[header[i]] = row._rawData[i].trim();
            }
            d1["email"] = d1["email"].toLowerCase();
            d1["fname"] = d1["name"].split(" ")[0];
            d1["lname"] = d1["name"].split(" ").slice(1).join(" ");
            let degree = d1["degree"];
            let role = "";
            if (degree === "B.Tech." || degree === "B.Arch.") {
                role = "ug";
            } else if (degree === "M.Tech.") {
                role = "pg";
            } else if (degree === "Ph.D.") {
                role = "phd";
            } else {
                role = "faculty-staff";
            }
            d1["batchStart"] = null;
            d1["username"] = d1["email"].split("@")[0];
            d1["showEmail"] = true;
            d1["showPhone"] = false;
            d1["role"] = role;
            d1["hobbies"] = [];
            d1["achievements"] = [];
            d1["photo"] = convertDriveLink(d1["photo"]);
            d1["linkedin"] = removeSearchParams(d1["linkedin"]);

            delete d1["name"];
            delete d1["dept"];
            delete d1["course"];
            delete d1["other"];
            delete d1["photo"];
            // await addYear({ year: d1['admission_year'] });
            // let member = await addMember(d1);
            // result.push(member);
            result.push(d1);
        }

        return {
            success: true,
            data: result,
        };
    };

    return await loadSheet();
}

function convertDriveLink(originalLink) {
    // Extract the file ID from the original link
    const url = new URL(originalLink);
    const fileId = url.searchParams.get("id");

    // Construct the new download link
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    return downloadLink;
}

function removeSearchParams(link) {
    try {
        // Check if it is a valid URL
        const url = new URL(link);

        // Remove search parameters
        url.search = "";

        // Convert the modified URL object back to a string
        const modifiedLink = url.toString();
        return modifiedLink;
    } catch (error) {
        return link ? link : null;
    }
}

module.exports = readGSheet;