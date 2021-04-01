import axios from 'axios'

export const HTTP = axios.create({
            baseURL: 'https://baas.kinvey.com',
            headers: {  'Content-Type': 'application/json'
            }
});