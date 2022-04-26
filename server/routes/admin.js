const {updateitem,deleteitem, postItemwithoutdisc,postItemwithdisc,getItem } = require("../database-mysql/index");

const router = require("express").Router();

const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;

router.post("/admin", async (req, res) => {
  const discount = req.body.discount 
  if(discount){
  const { title, description, image, price,discount,gender } = req.body;
  const response = await cloudinar.uploader.upload(
    image,
    async function (error, result) {
      if(error){res.send(error)}
      const image = result.secure_url;
      postItemwithdisc(title, description, image, price,discount,gender, (err, result) => {
        if (err) {
          res.send(err);
        }
        res.send('items added successfully');
      });
    }
  )}else{
    const { title, description, image, price ,gender} = req.body;
    const response = await cloudinar.uploader.upload(
      image,
      async function (error, result) {
        if(error){res.send(error)}
        const image = result.secure_url;
        postItemwithoutdisc(title, description, image, price,gender, (err, result) => {
          if (err) {
            res.send(err);
          }
          res.send('itme added successfully');
        });
      }
    )}
});

router.get('/admin',(req, res)=>{
  getItem((err, result) => {
    if(err){return res.send(err)}res.send(result)
  })
})

 router.delete('/:id', (req, res)=>{
   const id= req.params.id
   deleteitem(id, (err, result) =>{
     if(err){res.send(err)}else{res.send(result)}
   })
 })

router.put('/:id',async (req, res)=>{
  const id = req.params.id 
  const { title, description, image, price,discount,gender } = req.body;
  const response = await cloudinar.uploader.upload(
    image,
    async function (error, result) {
      if(error){res.send(error)}
      const image = result.secure_url;
      updateitem(id,title, description, image, price,discount,gender, (err, result) => {
        if (err) {
          res.send(err);
        }
        res.send('items updated successfully');
      });
    }
  )  
})

module.exports = router;
