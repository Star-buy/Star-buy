const {
    getman,
    getfemale,
    getkids,
  } = require("../database-mysql/index");
  const router = require("express").Router();



router.get("/male",(req, res)=>{
    getman((err, result)=>{
        if(err){return res.send(err)}res.send(result)
    })
})
router.get("/female",(req, res)=>{
    getfemale((err, result)=>{
        if(err){return res.send(err)}res.send(result)
    })
})

router.get("/kids",(req, res)=>{
    getkids((err, result)=>{
        if(err){return res.send(err)}res.send(result)
    })
})



  module.exports = router;
  