import config from '@/config/config'
const authString= btoa(`${config.appKey}:${config.appSecret}`)
/* eslint-disable */
let authToken = null
const clearToken = () => {
    localStorage.removeItem("user"),
    localStorage.removeItem("authToken")
}

export const authService = {
    data() {
        return {
        }
    },
    computed: {
        isAuthenticated(){
            console.log(authToken);
            console.log(authToken);
            return authToken !== null;
        }
    },
    created(){
        this.$root.$on('logged-in', authtoken => this.authToken = authtoken);
    }
}

export const authenticate = {
    methods: {
        onRegisterUser(username, password){
            return this.authenticate(`/user/${config.appKey}`, username, password)
        },
        onLoginUser(username, password){
            return this.authenticate(`/user/${config.appKey}/login`, username, password)
        },
        authenticate(url, username, password){
            this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
            return this.$http.post(url,{
                username, password
            }).then(({data}) => loginUser({
                user: {username, password},
                authToken: data._kmd.authtoken 
            }));
        },
        logout(){
            console.log(JSON.stringify(localStorage.getItem('authToken')));
            return fetch(`https://baas.kinvey.com/user/${config.appKey}/_logout`,{
            method: 'POST',
            headers: {
                'Authorization': `Kinvey ${this.authToken}`,
                'Content-Type': 'application/json'
            },
            data: null
            }).then(res => {console.log(res)})
        }
        
    },

}