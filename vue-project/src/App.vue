<template>
  <div>
   <main><Navbar /></main> 
    <router-view/>
    
  </div>
  <div>
      <Signin/>
     
      
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import UnderNav from "./components/UnderNav.vue";
 import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
},
};
</script>

<style></style>
