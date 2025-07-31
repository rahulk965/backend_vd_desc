import pkg from "cloudinary";
const { v2: cloudinary } = pkg;

import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        //upload file on cloudinary
       const response =  await  cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        //file has been iploaded successfully
        console.log("File uploaded successfully", response.url);
        return response;

    }catch(error){
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation failed
        return null;


    }
}

export {uploadOnCloudinary}