import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
// import Classify from '@/components/classify'
// import Login from '@/components/login'
import Search from '@/components/common/search'
// import Details from '@/components/details/details'
import Register from '@/components/LoginRegister/Register'
import Cart from '@/components/Cart/cart'
// import Recommend from '@/components/recommend/recommend'
import SelectCount from '@/components/details/selectCount'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component:()=>import('@/components/index/index')
    },
    {
      path: '/classify',
      name: 'classify',
      component: ()=>import('@/components/classify')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/components/login')
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/details',
      name: 'Details',
      component: ()=>import('@/components/details/details'),
      children: [
              {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'select',
                component: SelectCount
              }
              ]
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
      component: ()=>import('@/components/recommend/recommend')
    }
  ]
})
