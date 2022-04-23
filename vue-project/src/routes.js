import {createWebHistory,createRouter} from "vue-router"
import UnderNav from "./components/UnderNav.vue"
import Review from "./components/Review.vue"
import Footer from "./components/Footer.vue"
import Signin from "./components/Signin.vue"
import Signup from "./components/Signup.vue"
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
        path: "/Signin", 
        name:"Signin",
        component:Signin
    },
    {
         path: "/Signup", 
         name:"Signup",
         component:Signup
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;