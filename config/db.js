// Establoshing Connection with DataBase:
const mongoose = require("mongoose");
const makeCon = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connextdto DB!");
  } catch (err) {
    console.log(err);
  }
};
module.exports = makeCon;
