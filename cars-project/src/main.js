import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import axiosPlugin from '@/plugins/axiosPlugin' 
import { authService } from './services/authService'
import {carService} from './services/carServices'
Vue.use(axiosPlugin);
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(axiosPlugin);
Vue.mixin(authService);
Vue.mixin(carService);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
