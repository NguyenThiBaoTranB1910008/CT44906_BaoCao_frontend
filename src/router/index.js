import { createWebHistory, createRouter } from "vue-router";
// import ContactBook from "@/views/ContactBook.vue";
 import HomePage from "@/views/HomePage.vue";



const routes= [
    {
        path:"/",
        name: "homepage",
        component: HomePage,
    },

    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "notfound",
    //     component: () => import("@/views/NotFound.vue"),
    // },

    {
        path:"/cart",
        name: "cartpage",
        component: ()=> import("@/views/CartPage.vue"),
        props: true
    },
    
    {
        path:"/product",
        name: "product",
        component: ()=> import("@/views/ProductPage.vue"),
        props: true
    },

    {
        path:"/order",
        name: "order",
        component: ()=> import("@/views/OrderPage.vue"),
        props: true
    },

    {
        path:"/productedit",
        name: "product.edit",
        component: ()=> import("@/views/EditProduct.vue"),
        props: true
    },
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
