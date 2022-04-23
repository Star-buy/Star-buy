<template>
  <div>
   <main><Navbar /></main> 
    <router-view/>
  </div>
  <div> 
  </div>
</template>

<script>

// import UnderNav from "./components/UnderNav.vue";
 import Footer from "./components/Footer.vue";
 import Navbar from "./components/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar,
},
};
</script>

<style></style>
