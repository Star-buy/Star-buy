const Test = require("../DataBase-mongo/models/test.model.js");
const router = require("express").Router();

router.get("/lol", (req, res) => {
  Test.find({})
    .then((data) => {
      console.log("GETTING FROM THE DATA SUCCESSFULY");
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}); //Tested

router.post("/test", (req, res) => {
  Test.insertMany({
    test: req.body.test,
  })
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}); //Tested

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  Test.findOneAndRemove(id)
    .then(() => {
      res.send("Sucsees with delete");
    })
    .catch((err) => {
      res.send(err);
    });
}); //Tested
module.exports = router;
