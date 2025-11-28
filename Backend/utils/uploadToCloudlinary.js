const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const uploadToCloudinary = async (filePath) => {
  try {


    const result = await cloudinary.uploader.upload(filePath, {
      folder: "agrihub_products",
    });


    fs.unlinkSync(filePath); // delete temp file

    return result.secure_url;
  } catch (err) {
    fs.unlinkSync(filePath); // delete even on error
    return null;
  }
};

module.exports = uploadToCloudinary;
