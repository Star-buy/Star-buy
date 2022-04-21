var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost/test";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
var db = mongoose.connection;

module.exports = db
