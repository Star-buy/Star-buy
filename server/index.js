/********************* Requires *********************/
var express = require("express");
const app = express();

/***************** Including Routes *****************/
const testRoutes = require('./routes/test')


/********************* Database *********************/
var test = require('./database-mongo');



/******************** Middleware ********************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/../client/public"));


/********************** Routes **********************/
app.use("/", testRoutes);

const port =process.env.PORT || 5000;
app.listen(port,()=>{console.log(`Server started on port ${port}`)})
