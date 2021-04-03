import {HTTP} from '../helper/httpHelper.js'

import config from '@/config/config'
const authString = btoa(`${config.appKey}:${config.appSecret}`)
import { store } from '../store.js'



export const carService = {
        createCar(carBrand, carModel, price, carImage, description){
            HTTP.defaults.headers.post['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
             return HTTP.post(`https://baas.kinvey.com/appdata/${config.appKey}/cars`, {
                carBrand, carModel, price, carImage, description
            })
        },
        getAllCars(){
            HTTP.defaults.headers.get['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
            return HTTP.get(`https://baas.kinvey.com/appdata/${config.appKey}/cars`);
        },
        getOneCar(carId) {
            HTTP.defaults.headers.get['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
            return HTTP.get(`https://baas.kinvey.com/appdata/${config.appKey}/cars/${carId}`)
        },
        updateCar(carId, carBrand, carModel, price, carImage, description){
            HTTP.defaults.headers.put['Authorization'] = `Basic a2lkX1NrcERfLVpCXzpiY2ViZDUwNDRiOTQ0ZGI4YTdlMDdhMzNlMGM5NmFlMw==`;
            return HTTP.put(`https://baas.kinvey.com/appdata/${config.appKey}/cars/${carId}`, {
                 carBrand, carModel, price, carId, carImage, description
            })
        },
        getCarCountForUser(){
            HTTP.defaults.headers.get['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`;
            let creator = store.getters['userAuth/getUserInfo'];

            return HTTP.get(`https://baas.kinvey.com/appdata/${config.appKey}/cars/?query={"_acl.creator":"${creator._id}"}`)
        }   
}