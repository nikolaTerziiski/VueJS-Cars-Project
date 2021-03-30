<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
    <page-footer></page-footer>
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
</style>
