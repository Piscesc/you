import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Classify from '@/components/classify'
import Login from '@/components/login'

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
    }
  ]
})
