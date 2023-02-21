import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import Login from "@/components/Login/Login.vue";
import MainPage from "@/components/MainPage/MainPage.vue";
import CustomerRecord from "@/components/CustomerRecord/CustomerRecord";

import {AuthHelpers} from "@/helpers/AuthHelpers";

const routes = [

            {path: '/', component: MainPage, name: 'MainPage'},
            {path: '/Login', component: Login, name: 'Login'},
            {path: '/Customers', component: CustomerRecord, name: 'CustomerRecord'},
            {path: '/:pathMatch(.*)*', redirect: '/'},
            {path: '/:pathMatch(.*)', redirect: '/'},

        ];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const publicPage = ['Login'];
    const currentPage = String(to.name || to.path.replace('/', ''));
    const isAuth = AuthHelpers.userIsAuth();
    const authRequired = !publicPage.includes(currentPage);

    if (authRequired && !isAuth) {
        return next('/Login');
    }

    if (currentPage === 'Login' && isAuth) {
        return next('/');
    }

    next();
});

export {router};
