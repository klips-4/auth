import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import Login from "@/components/Login/Login.vue";
import MainPage from "@/components/MainPage/MainPage.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes:
        [
            {path: '/login', component: Login},
            {path: '/mainpage', component: MainPage},

        ]
})