const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },
    
    password: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "farmer",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Farmer", FarmerSchema);
