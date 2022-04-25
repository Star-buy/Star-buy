<template>
   <div>
    <h1>admin</h1>
    <input type="text" placeholder="title" name="title" v-model="title" /><br/>
    <input type="text" placeholder='description' name="desc" v-model="description" /><br/>
    <input type="text" placeholder='price' name="desc" v-model="price" /><br/>
    <input type="text" placeholder='discount' name="desc" v-model="discount" /><br/>
    <select  @change="change($event)"  name="gender">
	<option value="none" selected>Gender</option>
	<option  value="male">Male</option>
	<option  value="female">Female</option>
	<option  value="kids">kids</option>
</select>
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
discount:'',
gender:''
   }
},
methods: {
  change(e){
    var g = e.target.value
    this.gender = g
  },
   post(){
     if(this.title && this.description && this.image && this.price){
   axios.post('http://localhost:5000/admin',{  
      title: this.title,
      description: this.description,
      image:this.image,
      price:this.price,
      discount:this.discount,
      gender:this.gender
   }).then((result) => {
    alert(result.data)
    window.location.reload()
    })
    .catch(err => {
        console.log(err)
    })
    }else{
      alert('please fill all the fields')
    }
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
    }}
}

</script>
<style>
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