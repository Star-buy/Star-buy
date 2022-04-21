<template>
   <div>
    <h1>admin</h1>
    <input type="text" name="title" v-model="title" /><br/>
    <input type="text" name="desc" v-model="description" /><br/>
    <input type="text" name="desc" v-model="price" /><br/>
  {{data}}
<div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" />
    <button @click="removeImage">Remove image</button>
  </div> 
      <button @click="post">post item</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
data() {
   return{
      data:null,
      imgsrc:null,
      boolean:false,
title:'',
description:'',
image:'',
price:'',


   }
},
methods: {
   post(){
   axios.post('http://localhost:5000/admin',{
      title: this.title,
      description: this.description,
      image:this.image,
      price:this.price,
   }).then((result) => {
    console.log(result.data)
    })
    .catch(err => {
        console.log(err)
    })
   },
  onFileChange(e) {
      var files = e.target.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
}
}
</script>
<style>
#app {
  text-align: center;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
    width: 2cm;
    height: 2cm;
}

</style>