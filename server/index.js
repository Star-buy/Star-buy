/********************* Requires *********************/
var express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
<<<<<<< HEAD
//DATA
=======
const dotenv =require("dotenv");
const bodyParser = require('body-parser')

dotenv.config()
>>>>>>> d22c6412939968309b8f5f6570c351830044bec8

/***************** Including Routes *****************/
//ToDo
const reviewRoutes = require("./routes/review");
const registrer = require("./routes/registrer");
const admin = require("./routes/admin");
/********************* Database *********************/
var test = require("./database-mongo");
var test1 = require("./database-mysql");

/******************** Middleware ********************/
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/../vue-project/dist"));
app.use(fileUpload());
app.use(cors());
/********************** Routes **********************/
//ToDo
app.use("/", reviewRoutes);
app.use("/", registrer);
app.use("/",admin)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
