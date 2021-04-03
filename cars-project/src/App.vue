<template>
  <div id="app">
    <v-app>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <page-header></page-header>
    <v-main>  <router-view/></v-main>
    <page-footer></page-footer>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/common/PageHeader'
import PageFooter from '@/components/common/PageFooter'
export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #bg {
    width: 100%;
    height: 100%;
    background: url('https://www.google.com/search?q=car+background&tbm=isch&ved=2ahUKEwi4x8K11tjvAhWNw7sIHa4dBVEQ2-cCegQIABAA&oq=car+back&gs_lcp=CgNpbWcQARgAMgQIIxAnMgIIADIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjoFCAAQsQM6BAgAEEM6CAgAELEDEIMBOgQIABADUPMPWM4hYMUnaANwAHgAgAGoAYgB2gqSAQQwLjExmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=xHFjYLjVDo2H7_UPrruUiAU&bih=666&biw=1536#imgrc=HlaflOpa_naU7M') no-repeat center center fixed;

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    -webkit-animation: myfirst 5s ; /* Chrome, Safari, Opera */
    animation: myfirst 5s ;
  }

  /* Chrome, Safari, Opera */
  @-webkit-keyframes myfirst {
    from {opacity: 0.2;}
    to {opacity: 1;}
  }

  /* Standard syntax */
  @keyframes myfirst {
    from {opacity: 0.2;}
    to {opacity: 1;}
  }

v-application a {
  color: none;
}
</style>
