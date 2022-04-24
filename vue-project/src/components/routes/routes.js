import { createWebHistory, createRouter } from "vue-router";

import UnderNav from "../vues/UnderNav.vue";
import Review from "../vues/Review.vue";
import Footer from "../vues/Footer.vue";
import Signup from "../vues/Signup.vue";
import Signin from "../vues/Signin.vue";
import AdminPart from "../vues/AdminPart.vue";
import Posts from "../vues/Posts.vue";
import Post from "../vues/Post.vue";
import AdminProducts from "../vues/AdminProducts.vue";
import Home from "../vues/Home.vue";
const routes = [
  {
    path: "/UnderNav",
    name: "UnderNav",
    component: UnderNav,
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/Review",
    name: "Review",
    component: Review,
  },

  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/AdminPart",
    name: "AdminPart",
    component: AdminPart,
  },
  {
    path: "/Posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/Post",
    name: "Post",
    component: Post,
  },
  {
    path: "/AdminProducts",
    name: "AdminProducts",
    component: AdminProducts,
  },
  {
    path: "/Home",
    name: "Home",
    component:Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
