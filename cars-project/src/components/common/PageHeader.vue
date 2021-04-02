<template>

  <div>
    <v-app-bar v-if=isLoggedIn
      color="gray"
      dense
      dark
    >
      <v-toolbar-title>
        <span>
        <a href="/">Car place</a>
        </span>
        </v-toolbar-title>

      <v-spacer></v-spacer>
      <span>
          <a href="/cars/create">Create Car</a>
          <a href="/cars/all">All Cars</a>
          <a href="#">Welcome</a>
          <a href="/logout">Logout</a>

        </span>
    </v-app-bar>
    <v-app-bar v-else
      color="gray"
      dense
      dark
    >
      <v-toolbar-title>
        <span>
        <a href="/">Car place</a>
        </span>
        </v-toolbar-title>

      <v-spacer></v-spacer>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
    </v-app-bar>
  </div>
</template>

<script>
/* eslint-disable */
import { authenticate } from '../../services/authService';
import {store} from '../../store.js'

export default {
    computed: {
        isLoggedIn() {
            return store.getters['userAuth/isItLoggedIn']
        }
    },
    mixins: [ authenticate ],
    methods: {
      logout(){
         this.logout().then(res => this.$router.push('/login'));
      }
    }
}
</script>

<style>
.navbar-nav > li{
  padding: left 30px;;
  padding: right 30px;;
}
html,
body,
header,
.view {
  height: 100%;
}
header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 0 50px;
}

header a {
  float: left;
  color: purple;
  text-align: center;
  padding: 18px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
}

header a.logo {
  font-size: 25px;
  font-weight: bold;
}

header .header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  header a {
    float: none;
    display: block;
    text-align: left;
  }

  header-right {
    float: none;
  }
}
</style>