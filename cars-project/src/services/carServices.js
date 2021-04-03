import {HTTP} from '../helper/httpHelper.js'

import config from '@/config/config'
const authString = btoa(`${config.appKey}:${config.appSecret}`)
import { store } from '../store.js'



export const carService = {
       createCar,
       getAllCars,
       getOneCar,
       updateCar,
       getCarCountForUser
}

async function createCar(carBrand, carModel, price, carImage, description){
    HTTP.defaults.headers.post['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
     return await HTTP.post(`https://baas.kinvey.com/appdata/${config.appKey}/cars`, {
        carBrand, carModel, price, carImage, description
    })
}
async function getAllCars(){
    HTTP.defaults.headers.get['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
    return await HTTP.get(`https://baas.kinvey.com/appdata/${config.appKey}/cars`);
}
async function getOneCar(carId) {
    HTTP.defaults.headers.get['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
    return await HTTP.get(`https://baas.kinvey.com/appdata/${config.appKey}/cars/${carId}`)
}
async function updateCar(carId, carBrand, carModel, price, carImage, description){
    HTTP.defaults.headers.put['Authorization'] = `Basic a2lkX1NrcERfLVpCXzpiY2ViZDUwNDRiOTQ0ZGI4YTdlMDdhMzNlMGM5NmFlMw==`;
    return await HTTP.put(`https://baas.kinvey.com/appdata/${config.appKey}/cars/${carId}`, {
         carBrand, carModel, price, carId, carImage, description
    })
}
async function getCarCountForUser(){
    HTTP.defaults.headers.get['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`;
    let creator = store.getters['userAuth/getUserInfo'];
    return await HTTP.get(`https://baas.kinvey.com/appdata/${config.appKey}/cars/?query={"_acl.creator":"${creator._id}"}`)
}   