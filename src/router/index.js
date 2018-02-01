import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Classify from '@/components/classify'
import Login from '@/components/login'
import Search from '@/components/common/search'
import Details from '@/components/details/details'
import Register from '@/components/LoginRegister/Register'
<<<<<<< HEAD
import Cart from '@/components/Cart/cart'
=======
import Recommend from '@/components/recommend/recommend'
>>>>>>> 8ab6f8df9c484798f8528ef9725b142a9616ecc1
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }
  ]
})
