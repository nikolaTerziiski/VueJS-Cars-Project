import router from './router.js'

import { userService } from './services/userService.js';

/* eslint-disable */ 
const cookies = JSON.parse(localStorage.getItem('authToken'));

const userState = cookies ? {status: {isItLoggedIn : true}, user: JSON.parse(localStorage.getItem('user'))} : { status : {}, user:null  };

export const userAuth = {
    namespaced: true,
    state: userState,
    getters: {
        isItLoggedIn: (state) => {
            return state.status.isItLoggedIn;
        },
        username: (state) => {
            return userState.user.username;
        },
        getUserInfo: (state) => {
            return userState.user
        },
        getAuthToken: (state) => {
            let authToken = localStorage.getItem('authToken');
            authToken = authToken.substring(1, authToken.length - 1);
            return authToken;
        }
    },
    actions: {
        login({dispatch, commit}, {username, password}) {
            userService.login(username, password).then((response) => {
                
                //Setting the tokens
                localStorage.setItem('authToken', JSON.stringify(response.data._kmd.authtoken ));
                localStorage.setItem('user', JSON.stringify(response.data))

                router.push('/');
                router.go();
            }, (error) => {console.log(error)});
        },
        register({dispatch, comit}, {username, password, email}){
            userService.register(username, password, email).then((user) => {
                
                localStorage.setItem('authToken', JSON.stringify(user.data._kmd.authtoken ));
                localStorage.setItem('username', user.data.username)

                router.push('/');
                router.go();
            }, (error) => {console.log(error);})
        },
        logout({commit}) {
            userService.logout();
            router.push('/');
            router.go();
        }
    }

}