const sdk = require('node-appwrite');

let client = new sdk.Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('65911d3f132f4163e49b') // Your project ID
    .setKey(process.env.APPWRITE_API_KEY) // Your secret API key
    .setSelfSigned() // Use only on dev mode with a self-signed SSL cert
    ;

const databases = new sdk.Databases(client);

module.exports = { sdk, client, databases };