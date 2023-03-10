import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import Login from "@/components/Login/Login.vue";
import CalendarForm from "@/components/CalendarForm/CalendarForm";
import MeasuringCard from "@/components/MeasuringCard/MeasuringCard";
import Customer from "@/components/Customer/Customer";
import MainPage from "@/components/MainPage/MainPage";
import Others from "@/components/Others/Others";
import {AuthHelpers} from "@/helpers/AuthHelpers";



const routes = [

    {path: '/Login', component: Login, name: 'Login'},
    {path: '/', component: MainPage, name: 'MainPage', meta: {layout: 'main'}},
    {path: '/CalendarForm', component: CalendarForm, meta: {layout: 'main'}},
    {path: '/Customer', component: Customer, meta: {layout: 'main'}},
    {path: '/MeasuringCard', component: MeasuringCard, meta: {layout: 'main'}},
    {path: '/Others', component: Others, meta: {layout: 'main'}},
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
