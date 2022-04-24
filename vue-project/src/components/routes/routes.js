import {createWebHistory,createRouter} from "vue-router"
import UnderNav from "../vues/UnderNav.vue"
import Review from "../vues/Review.vue"
import Footer from "../vues/Footer.vue"
import Signup from "../vues/Signin.vue"
import Signin from "../vues/Signin.vue"
const routes =[
    {
        path: "/UnderNav", 
        name:"UnderNav",
        component:UnderNav
    },
    {
        path: "/Footer", 
        name:"Footer",
        component:Footer
    },
    {
        path: "/Review", 
        name:"Review",
        component:Review
    },
   
    {
         path: "/Signup", 
         name:"Signup",
         component:Signup
    },
    {
        path: "/Signin", 
        name:"Signin",
        component:Signin
   },
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;