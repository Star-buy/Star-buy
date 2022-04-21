<template>
   <div>
    <h1>Signin</h1>
    <input type="email" name="email" v-model="email" />
    <input type="password" name="password" v-model="password" />
    <button @click="login">registrer</button><br/>
  {{data}}
    <img v-if="boolean" v-bind:src="`${imgsrc}`"/>   
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
email:'',
password:'',
   }
},
methods: {
   login(){
   axios.post('http://localhost:5000/login',{
      email: this.email,
      password: this.password
   }).then(() => {
     axios.post('http://localhost:5000/getUserinfo',{
        email: this.email,
     }).then(result => {
        this.data=result.data[0]
        this.imgsrc = result.data[1]
        this.boolean=true
     })
    })
    .catch(err => {
        console.log(err)
    })
   },
}
}
</script>
