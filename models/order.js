const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderItem: {
      itemName: {
        type: String,
      },
      itemWeight: {
        type: Number,
      },
      itemLength: {
        type: Number,
      },
      itemBreadth: {
        type: Number,
      },
      itemHeight: {
        type: Number,
      },
      //later convert to array
    },
    orderSupplierId: {
      type: mongoose.Types.ObjectId,
    },
    orderReceiverId: {
      type: mongoose.Types.ObjectId,
    },
    orderToPincode: {
      type: Number,
    },
    orderFromPincode: {
      type: Number,
    },
    orderType: {
      type: String,
    },
    blockNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("order", orderSchema);
