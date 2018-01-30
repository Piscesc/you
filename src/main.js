import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/css/reset.css'
import 'swiper/dist/css/swiper.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
