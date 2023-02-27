import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import NewsView from '@/views/News.vue'
import PaymentAndShipping from "@/views/PaymentAndShipping.vue";

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component: HomeView
        },
        {
            path:'/about',
            name:'AboutUs',
            component:AboutUs
        },
        {
            path:'/news',
            name:'News',
            component:NewsView
        },
        {
            path:'/payment-shipping',
            name:'Payment and shipping',
            component:PaymentAndShipping
        }
    ]
})
