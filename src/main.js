import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/css/reset.css'
import 'swiper/dist/css/swiper.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'assets/css/iconfont/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // mounted(){
  // 	axios.get('http://localhost:3000/test',{headers:{"Content-Type":""}})
  // 	.then(function(res){
  // 		console.log(res.data);
  // 	});
  // }
})
