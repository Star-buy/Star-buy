/********************* Requires *********************/
var express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
//DATA

/***************** Including Routes *****************/
//ToDo
const testRoutes = require("./routes/test");
const registrer = require("./routes/registrer");

/********************* Database *********************/
var test = require("./database-mongo");
var test1 = require("./database-mysql");

/******************** Middleware ********************/
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../vue-project/dist"));
app.use(fileUpload());
app.use(cors());
/********************** Routes **********************/
//ToDo
app.use("/", testRoutes);
app.use("/", registrer);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
