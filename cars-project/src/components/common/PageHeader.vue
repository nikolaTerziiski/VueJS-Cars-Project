<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul v-if="!isAuthenticated" class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/register">Register</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/login">Login</router-link></a>
      </li>
    </ul>
    <ul v-else class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/cars/create">Create Car</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/cars/all">All Cars</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="onLogoutClick()"><router-link to="/">Logout</router-link></a>
      </li>
    </ul>
  </div>
</nav> -->

  <div>
    <v-app-bar
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
          <a href="/cars/create">Create</a>
          <a href="#">Welcome</a>
          <a href="#">Logout</a>
          <!-- <a href="/register">Register</a>
              <a href="/login">Login</a> -->
        </span>
    </v-app-bar>
  </div>
</template>

<script>
/* eslint-disable */
import { authenticate } from '../../services/authService';

export default {
    mixins: [authenticate],
    methods: {
      onLogoutClick(){
         this.logout().then(res => this.$root.$emit('logged-in', null))
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