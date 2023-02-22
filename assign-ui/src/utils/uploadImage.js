import axios from "axios";

const CLOUD_NAME = "dssl3epj0";
const PRESET_NAME = "test-upload";
const FOLDER_NAME = "web-501";
const urls = [];

export const uploadImage = async (files) => {
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);

    for (const file of files) {
        formData.append("file", file);

        const res = await axios.post(api, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        urls.push(res.data.secure_url);
    }

    return urls;
};
