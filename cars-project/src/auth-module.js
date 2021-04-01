import router from './router.js'

import { userService } from './services/userService.js';

/* eslint-disable */ 
const cookies = JSON.parse(localStorage.getItem('authToken'));

const userState = cookies ? {status: {isItLoggedIn : true}, username: cookies.username} : { status : {}, user: null};

export const userAuth = {
    namespaced: true,
    state: userState,
    getters: {
        isItLoggedIn: (state) => {
            return state.status.isItLoggedIn;
        },
        user: (state) => {
            return state.user;
        },
    },
    actions: {
        login({dispatch, commit}, {username, password}) {
            userService.login(username, password).then( (user) => {
                localStorage.setItem('authToken', JSON.stringify(user.data._kmd.authtoken ));
                localStorage.setItem('username', user.data.username)

                router.push('/');
                router.go();
            }, (error) => {console.log(error)});
        },
        register({dispatch, comit}, {username, password, email}){
            console.log('inside register')

            userService.register(username, password, email).then((user) => {

                console.log(user)
                console.log(user.data._kmd.authtoken)
                
                localStorage.setItem('authToken', JSON.stringify(user.data._kmd.authtoken ));
                localStorage.setItem('username', user.data.username)

                router.push('/');
                router.go();
            }, (error) => {console.log(error);})
        },
        logout({commit}) {
            localStorage.removeItem('authToken')
            router.push('/');
            router.go();
        }
    }

}