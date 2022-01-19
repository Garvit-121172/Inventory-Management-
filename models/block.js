const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blockSchema = new Schema({
  pinCode: {
    type: Number,
  },
  orders: {
    type: [mongoose.Types.ObjectId],
  },
});
module.exports = mongoose.model("Block", blockSchema);
