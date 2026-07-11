import { Client, Databases, Account, Storage } from 'appwrite';
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID;
export const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';

const client = new Client()

client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(PROJECT_ID)

const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);


export default client;
export { databases, account, storage };
