<template>
   <div>
    <h1>Register</h1>
    <input type="text" name="name" v-model="name"   />
    <input type="email" name="email" v-model="email" />
    <input type="password" name="password" v-model="password" />
 <div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" />
    <button @click="removeImage">Remove image</button>
  </div> 
    <button @click="register">registrer</button>
   </div>
</template>

<script>
import axios from "axios"
export default {
data() {
   return{
name:'',
email:'',
password:'',
image: ''
   }
},
methods: {
   register(){
   axios.post('http://localhost:5000/signup',{
      username: this.name,
      email: this.email,
      image:this.image,
      password: this.password
   }).then(result => {
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