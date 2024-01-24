const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItem",
    },
  ],
  couponUsed: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coupon",
  },
  totalMoney: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
