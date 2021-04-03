import {HTTP} from '../helper/httpHelper.js'
import config from '@/config/config'
import { store } from '../store.js'

const authString = btoa(`${config.appKey}:${config.appSecret}`)



export const newsService = {
    createNew,
    getAllNews
}

async function createNew(topic, description, authorName){
     HTTP.defaults.headers.post['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
     return await HTTP.post(`https://baas.kinvey.com/appdata/${config.appKey}/news`, {
        topic, description, authorName
    });
}
async function getAllNews(){
    HTTP.defaults.headers.get['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
    return await HTTP.get(`https://baas.kinvey.com/appdata/${config.appKey}/news`);
}