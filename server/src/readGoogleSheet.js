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
                d1[header[i]] = row._rawData[i];
            }
            await addYear({ year: d1['admission_year'] });
            // let member = await addMember(d1);
            // result.push(d1);
        }

        return {
            success: true,
        };
    };

    return await loadSheet();
}

module.exports = readGSheet;

// name
// current position
// nitp postion - course
// year - batch
// placeHolder