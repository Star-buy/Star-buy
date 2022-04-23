<template>
  <article>
    <h3>{{ post.title }}</h3>
    <p>{{post.body}}</p>

    <img v-bind:src="`${post.image}`"/>
    <!-- <p>{{post.image}}</p> -->
  </article>
</template>
<script>
export default {
  name:"Post",
  props: ["post"]
};
</script>