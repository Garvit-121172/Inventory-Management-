const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
  },
  userFlatNo: {
    type: String,
  },
  userLocality: {
    type: String,
  },
  userCity: {
    type: String,
  },
  userPincode: {
    type: Number,
  },
  userContactNo: {
    type: String,
  },
});
module.exports = mongoose.model("User", userSchema);
