<template>
  <div id="app">
   
      <input
            type="text" 
            v-model="search"
            class="search-box"
            placeholder="search brand/Product"
          />

    <div v-for="post in filteredPosts" :key="post.id">
      <post :post="post"></post>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "App",
  components: {
    Post
  },
  data() {
    return {
      search: "",
      
      posts: [
        {
          id: 1,
          title: "chemise",
          body: "100 dt",
          image : "https://i.pinimg.com/236x/a1/8d/ee/a18dee75ca75e2d0503a8bf79a90c778.jpg"
        },
        {
          id: 2,
          title: "pantallon",
          body: "59 DN",
          image:"https://www.cache-cache.fr/dw/image/v2/BCHM_PRD/on/demandware.static/-/Sites-Cache_cache_master/default/dwf7328799/pantalon-paperbag-taille-haute-gris-clair-femme-dc-36125381360080214.jpg?sw=300&sh=400",
         
        },
          {
          id: 3,
          title: "pantallon",
          body: "70 DN",
          image:"https://www.nafnaf.com/phototheque/nafnaf.com/48500/medium/01W048301A.jpg",
         
        },
         {
          id: 4,
          title: "robe",
          body: "70 DN",
          image:"https://static.e-stradivarius.net/5/photos3/2022/V/0/1/p/2333/355/139/01/2333355139_1_1_2.jpg?t=1649943156825",
         
        }
      ]
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post =>
        post.title.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>




