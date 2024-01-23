import { databases, DATABASE_ID } from "../../config/appwrite";
import { ID, Query } from "appwrite";

export const createDocument = async (COLLECTION_ID, data) => {
    try {
        const res = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), data);
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getDocuments = async (COLLECTION_ID, limit = 100, offset = 0) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(limit),
            Query.offset(offset),
        ]);
        return res.documents;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getTeamMembers = async (COLLECTION_ID, limit = 100, offset = 0, query_key, query_value) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(limit),
            Query.offset(offset),
            Query.equal(query_key, [query_value])
        ]);
        return res.documents;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getDocument = async (COLLECTION_ID, DOCUMENT_ID) => {
    try {
        const res = await databases.getDocument(DATABASE_ID, COLLECTION_ID, DOCUMENT_ID);
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const updateDocument = async (COLLECTION_ID, DOCUMENT_ID, data) => {
    try {
        const res = await databases.updateDocument(DATABASE_ID, COLLECTION_ID, DOCUMENT_ID, data);
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteDocument = async (COLLECTION_ID, ID) => {
    try {
        const res = await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, ID);
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getDocumentsCount = async (COLLECTION_ID) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        return res.sum;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getUserTestimonials = async (COLLECTION_ID, USER_ID) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(100),
            Query.offset(0),
            Query.equal('id', [USER_ID])
        ]);
        return res.documents;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getUserPostedJobInternships = async (COLLECTION_ID, USER_ID) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(100),
            Query.offset(0),
            Query.equal('userID', [USER_ID])
        ]);
        return res.documents;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getAlumniProfile = async (COLLECTION_ID, email) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('email', [email])
        ]);

        return res.documents.length > 0 ? res.documents[0] : null;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getPaginatedDocuments = async (COLLECTION_ID, limit = 20, offset = 0) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(limit),
            Query.offset(offset),
        ]);
        return res.documents;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getPaginatedPublishedDocs = async (COLLECTION_ID, limit = 24, offset = 0, status = "published", search = "", type = "") => {
    const queries = [
        Query.limit(limit),
        Query.offset(offset),
        Query.equal('status', [status]),
        Query.orderDesc('$createdAt'),
    ]

    if (search && type) queries.push(Query.search(type, [search]));
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, queries);
        return res.documents;
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}


export const getAlumniData = async (limit = 24, offset = 0, role, search, type, branch) => {
    // only fetch alumni with no status or status is approved
    const queries = [
        Query.limit(limit),
        Query.offset(offset),
        Query.equal('role', [role]),
        Query.isNull('status'),
    ];

    if (branch) queries.push(Query.equal('branch', [branch]));

    if (search && type) queries.push(Query.search(type, [search]));

    try {
        const res = await databases.listDocuments(DATABASE_ID, "alumni", queries);
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}