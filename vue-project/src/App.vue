<template>
  <div>
   <main><Navbar /></main> 
    <router-view/>
  </div>
  <div> 
    <AdminPart/>
  </div>
</template>

<script>

// import UnderNav from "./components/UnderNav.vue";
 import Footer from "./components/vues/Footer.vue";
 import Navbar from "./components/vues/Navbar.vue"
export default {
  name: "App",
  components: {
    Navbar,
},
};
</script>

<style></style>
