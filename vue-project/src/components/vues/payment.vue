<template>
<div> 

    <h1>Payment </h1>
    <img :src="image" class="product-image"/>
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
    name : 'payment',
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
<style>
 section{
    background-color:#e5e8f6;
}
.product{
    position: relative;
    overflow: hidden;
    padding: 20px 0;
}
.product-category{
    text-align: center;
    color:rgb(212, 141, 141);
    padding: 0 10vw;
    font-size: 43px;
    font-weight: 500;
    margin-bottom: 40px;
    text-transform: capitalize;
}
.product-container{
    padding: 0 10vw;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth; 
}
.product-container::-webkit-scrollbar{
    display: none;
}
.product-card{
    flex: 0 0 auto;
    width: 250px;
    height: 450px;
    margin-right: 40px;
}
.product-image{
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
}
.product-thumb{
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius:16px
}
.discount-tag {
    position: absolute;
    background: #fff;
    padding: 11px;
    border-radius: 6px;
    color: #ff7d7d;
    font-size: 16px;
    right: 10px;
    top: 10px;
    text-transform: capitalize;
}
.card-btn{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    width: 90%;
    text-transform: capitalize;
    border: none;
    outline: none;
    background: #fff;
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;
    opacity: 0;
}
.product-card:hover .card-btn{
    opacity: 1;
}
.card-btn:hover{
    background: #efefef;
}
.product-info{
    width: 100%;
    height: 100px;
    padding-top: 10px;
}
.product-brand{
    text-transform: uppercase;
    font-size:17px
}
.product-short-des{
    width: 100%;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    opacity: 0.7;
    font-size:12px;
    text-transform: capitalize;
    margin: 5px 0;
}
.price{
    font-weight: 900;
    font-size: 20px;
}
.actual-price{
    margin-left: 20px;
    opacity: 0.5;
    text-decoration: line-through;
        font-weight: 900;
    font-size: 20px;
    color :red;
}  
</style>