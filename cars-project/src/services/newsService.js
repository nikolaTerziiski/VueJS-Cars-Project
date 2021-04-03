import {HTTP} from '../helper/httpHelper.js'

import config from '@/config/config'
const authString = btoa(`${config.appKey}:${config.appSecret}`)
import { store } from '../store.js'

export const newsService = {
    createNew,
}

async function createNew(topic, description, authorName){
     HTTP.defaults.headers.post['Authorization'] = `Kinvey ${store.getters['userAuth/getAuthToken']}`
     return await HTTP.post(`https://baas.kinvey.com/appdata/${config.appKey}/news`, {
        topic, description, authorName
    });
}