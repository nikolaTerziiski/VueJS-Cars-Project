import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from '../src/components/authentication/Register.vue'
import Login from '../src/components/authentication/Login.vue'
import CreateCar from '../src/components/cars/CreateCar.vue'
import AllCars from '../src/components/cars/AllCars.vue'
import CarDetails from '../src/components/cars/CarDetails.vue'
import NotFound from '../src/components/common/NotFound.vue'
import EditCar from '../src/components/cars/EditCar.vue'
import Logout from '../src/components/authentication/Logout.vue'
import VueRouter from 'vue-router'
import Profile from '../src/components/user/Profile.vue'
import CreateNew from '../src/components/news/CreateNew.vue'
import AllNews from '../src/components/news/AllNews.vue'

import { store } from './store.js';



Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/cars/create',
    name: 'createCar',
    component: CreateCar
  },
  {
    path: '/cars/all',
    name: 'allCars',
    component: AllCars
  },
  {
    path: '/cars/:id',
    name: 'carDetails',
    component: CarDetails
  },
  {
    path: '/editCar/:id',
    name: 'editCar',
    component: EditCar
  },
  { 
    path: '/news/create',
    name: 'CreateNews',
    component: CreateNew
    
  },
  { 
    path: '/news/all',
    name: 'AllNews',
    component: AllNews
    
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
    const guestPages = ['/register', '/login'];

    let status = store.getters['userAuth/isItLoggedIn'];

    if(guestPages.includes(to.path) && status){
        return next('/');
    }
    if((to.path == '/logout' || to.path == '/cars/create' || to.path == '/profile' || to.path == '/cars/edit'
    || to.path == '/cars/details' || to.path == '/cars/all') && !status){
        return next('/login');
    }

    return next();
});
export default router