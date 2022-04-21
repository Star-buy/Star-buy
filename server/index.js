/********************* Requires *********************/
var express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
const dotenv =require("dotenv");
dotenv.config()

/***************** Including Routes *****************/
//ToDo
const reviewRoutes = require("./routes/test");
const registrer = require("./routes/registrer");

/********************* Database *********************/
var test = require("./database-mongo");
var test1 = require("./database-mysql");

/******************** Middleware ********************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../vue-project/dist"));
app.use(fileUpload());
app.use(cors());
/********************** Routes **********************/
//ToDo
app.use("/", reviewRoutes);
app.use("/", registrer);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
