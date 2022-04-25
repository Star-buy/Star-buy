<template>
   <div>
    <h1>Signin</h1>
    <input type="email" name="email" v-model="email" />
        {{mesage}}

    <input type="password" name="password" v-model="password" />
    <button @click="login">login</button><br/>
  {{data}}
    <img v-if="imgsrc" v-bind:src="`${imgsrc}`"/>   
   </div>
</template>

<script>
import axios from "axios"
export default {

data() {
   return{
      func:this.mesage,
      data:null,
      imgsrc:null,
email:'',
password:'',
   }
},
methods: {
   login(){
      if(this.email && this.password){
   axios.post('http://localhost:5000/login',{
      email: this.email,
      password: this.password
   }).then((result) => {
      if(result.data === 'hi admin'){
         alert(result.data)
     axios.post('http://localhost:5000/getUserinfo',{
        email: this.email,
     }).then(result => {
        if(result){
        this.data=result.data[0]
        this.imgsrc = result.data[1]
        this.confirm=true
        }else{
           alert('Something went wrong when getting userinfo')
           return;
        }
     }).catch((error) => {
        console.log(error);
     })}
       else if(result.data === 'login successful' ){
    alert(result.data)
     axios.post('http://localhost:5000/getUserinfo',{
        email: this.email,
     }).then(result => {
        if(result){
        this.data=result.data[0]
        this.imgsrc = result.data[1]
        }else{
           alert('Something went wrong when getting userinfo')
           return;
        }
     }).catch((error) => {
        console.log(error);
     })  
        }
        else{
           alert(result.data)
        }
    })
    .catch(err => {
        console.log(err)
    })}else{
       alert('please fill all the fields')
    }
   },
},

}
</script>
