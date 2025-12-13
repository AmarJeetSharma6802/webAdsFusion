import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.API_KEY , 
    api_secret: process.env.API_SECRET
});

const uploadOnCloudinary = async (localFilePath ) => {
    try {
      if (!localFilePath) return null;
  
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
  
      fs.unlinkSync(localFilePath);
      return response;
    } catch (error) {
      console.error("Cloudinary upload error:", error); 
      fs.unlinkSync(localFilePath);
      return null;
    }
  };
  
  export { uploadOnCloudinary };



//   import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// const uploadOnCloudinary = (buffer, folder = "uploads") => {
//   return new Promise((resolve, reject) => {
//     if (!buffer) return reject("Buffer missing");

//     const stream = cloudinary.uploader.upload_stream(
//       {
//         folder,
//         resource_type: "auto",
//       },
//       (error, result) => {
//         if (error) reject(error);
//         else resolve(result);
//       }
//     );

//     stream.end(buffer);
//   });
// };

// export { uploadOnCloudinary };

// const buffer = Buffer.from(await image.arrayBuffer());
// const uploaded = await uploadOnCloudinary(buffer, "users");