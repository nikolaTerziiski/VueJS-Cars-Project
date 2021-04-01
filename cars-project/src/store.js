import Vue from 'vue'
import Vuex from 'vuex'
import carMutations from '@/cars/carsMutations.js'
import carActions from '@/cars/carsActions.js'
import {userAuth} from './auth-module.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        userAuth
    }
    // state: {
    //     cars: [],
    // },
    // getters: {
    //     getAllCars: state => state.cars,
    //     getOneCar: state => id => state.cars.find(e => e._id === id),
        
    // },
    // mutations: carMutations,
    // actions: carActions
})