<template>
<div> 

    <h1>Payment </h1>
    <img :src="image" />
     <input v-model="title" readonly="readonly"  placeholder='title' /><br/>
    <input v-model="price"  readonly="readonly" placeholder='price' /><br/>
    <input v-model="quantity" type="number" placeholder="quantity" /><br/>
    <input @click='post' :name="btnName" type="submit" /> 
    {{index}}
</div>    
</template>

<script>
import axios from "axios"


export default {
    props:{msg:Object},

data() {
   return{
title:this.msg[0],
image:this.msg[1],
price:this.msg[2],
quantity:'',

   }
},

methods: {
    
   post(){
       if(this.title && this.price && this.quantity && this.image){
 axios.post('http://localhost:5000/pay',{
     title: this.title,
     price: this.price,
     image: this.image,
      quantity: this.quantity
 }).then((response)=>{
    window.location.href = response.data
     }).catch((err)=>{
         console.log(err)})}
else{
    alert('fill all the fields')
}

     },
      clg(){
     console.log(this.props)
 }

}
}
</script>