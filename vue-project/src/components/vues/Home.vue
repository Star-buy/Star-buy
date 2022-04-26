<template>
  <div class="hero">
    <div class="co">
        <img src="/images/light.png" class="logoo" alt="">
        <p class="sub">best fashion collection of all time</p>
    </div>
</div>
<Footer/>
</template>

<script>
import Footer from "./Footer.vue"
export default {
  name:"Home",
  components: {
      Footer
  }
}
</script>

<style>

.hero{
    width: 100%;
    height: calc(100vh - 120px);
    background-image: url('/images/header.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero .logoo{
    height: 150px;
    display: block;
    margin: auto;
}

.hero .sub{
    margin-top: 10px;
    text-align: center;
    color: #fff;
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 300;
}
</style>