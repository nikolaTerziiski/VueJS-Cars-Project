import config from '@/config/config'
import { HTTP } from '../helper/httpHelper'

const authString= btoa(`${config.appKey}:${config.appSecret}`)


export const userService = {
    login(username, password){
            HTTP.defaults.headers.post['Authorization'] = `Basic ${authString}`
            let response = HTTP.post(`/user/${config.appKey}/login`, {username, password})
            localStorage.setItem('authToken', JSON.stringify(response));
            return response
    },
    register(username, password, email){
            HTTP.defaults.headers.post['Authorization'] = `Basic ${authString}`
            let response = HTTP.post(`/user/${config.appKey}`, {username, password, email})
            return response;
    },
    logout(){
        localStorage.removeItem('authToken')
        console.log('username');
        localStorage.removeItem('username')
        console.log('username');

    }

}