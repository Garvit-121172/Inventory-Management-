require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const methodOverride = require("method-override");
const dbConnection = require("./config/db");

const app = express();

dbConnection();

//Defining Routes
const orderRoute = require("./routes/api/order");

// Setting Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/order", orderRoute);

//Listening to ports
app.listen(process.env.PORT, (req, res) => {
  console.log("Listening at port 3000");
});
