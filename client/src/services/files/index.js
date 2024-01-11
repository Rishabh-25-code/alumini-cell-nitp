import { storage, BUCKET_ID } from "../../config/appwrite";
import { ID } from "appwrite";

export const uploadFile = async (files, type = "image") => {
    try {
        const response = await storage.createFile(
            BUCKET_ID,
            ID.unique(),
            files
        );

        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteFile = async (fileId) => {
    try {
        const response = await storage.deleteFile(BUCKET_ID, fileId);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getImageURL = (fileId, width = 0, height = 0, gravity = "center", quality = "90") => {
    return storage.getFilePreview(BUCKET_ID, fileId, width, height, gravity, quality);
}

export const getDownloadURL = (fileId) => {
    return storage.getFileDownload(BUCKET_ID, fileId);
}