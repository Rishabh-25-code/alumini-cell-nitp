const { GoogleSpreadsheet } = require("google-spreadsheet");

const API_KEY = "AIzaSyAHW073Zt_haxZMayloty2wYPMZTJfL8Qo";

async function readGSheet(SHEET_ID) {
    const doc = new GoogleSpreadsheet(SHEET_ID, { apiKey: API_KEY });
    const result = [];

    async function loadSheet() {
        await doc.loadInfo();
        console.log('>>', doc.title);

        const sheet = doc.sheetsByIndex[0];
        console.log(sheet.title);
        const rows = await sheet.getRows({ offset: 0 /*limit:5*/ });

        const header = rows[0]._worksheet.headerValues;
        for (const row of rows) {
            let d1 = {};
            for (let i = 0; i < row._rawData.length; i++) {
                d1[header[i]] = row._rawData[i];
            }
            result.push(d1);
        }

        return result;
    };

    return await loadSheet();
}

module.exports = readGSheet;

// name
// current position
// nitp postion - course
// year - batch