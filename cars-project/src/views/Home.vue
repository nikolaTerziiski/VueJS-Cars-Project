<template>
  <html lang="en">
    <body>
          <div class="view" style="background-image: url('https://www.topspeed.com/cars/audi/2018-audi-rs8-ar146596.html'); background-repeat: no-repeat; background-size: cover; background-position: center center;">         
            <div class="mask rgba-gradient align-items-center">
              <div class="container">
                <div class="row">
                  <div v-if="isLoggedIn" class="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                    <h1 class="h1-responsive font-weight-bold mt-sm-5">Welcome to my app! </h1>
                    <hr class="hr-light">
                    <button type="button" class="btn btn-primary"><router-link style="color:white" to="/news/all">
                    Check our news
                  </router-link></button>
                    <button type="button" class="btn btn-secondary" style="margin-left:50px"><router-link style="color: white" to="/cars/all">
                    Check our cars
                  </router-link></button>  
                  </div>
                  <div v-else class="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                    <h1 class="h1-responsive font-weight-bold mt-sm-5">Welcome to my app! </h1>
                    <hr class="hr-light">
                    <v-btn
                    class="ma-2"
                    outlined
                    color="indigo"
                  >
                  <router-link to="/login">
                    Log in 
                  </router-link>
                  </v-btn>
                  if you have an account OR
                  <v-btn
                    class="ma-2"
                    outlined
                    color="indigo"
                  >
                  <router-link to="/register">
                    Register
                  </router-link>
                  </v-btn>
                  to make one FREE!
                  </div>
                  <div class="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight" data-wow-delay="0.3s">
                    <img src="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90HOC174A021001.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
          </div>
    </body>
</html>
</template>

<script>
// @ is an alias to /src
import {store} from '../store.js'
export default {
  name: 'home',
  computed: {
    isLoggedIn() {
      return store.getters['userAuth/isItLoggedIn'];
    },
  }
}
</script>
<style>
html,
body,
header,
.view {
  height: 100%;
}

@media (max-width: 740px) {
  html,
  body,
  header,
  .view {
    height: 1000px;
  }
}
@media (min-width: 800px) and (max-width: 850px) {
  html,
  body,
  header,
  .view {
    height: 600px;
  }
}
</style>