import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import Vuelidate from 'vuelidate'
import { carService } from './services/carServices'
import vuetify from '@/vuetify'
import  router from './router.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.mixin(carService);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
