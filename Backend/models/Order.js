const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer" },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "Buyer" }, // optional for now
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    totalAmount: Number,
    status: {
      type: String,
      default: "PENDING",
      enum: ["PENDING", "ACCEPTED", "REJECTED", "COMPLETED"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
