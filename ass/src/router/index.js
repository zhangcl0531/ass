import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../components/login.vue'
import index from '../components/index.vue'
// import header from '../components/header.vue'
// import aside from '../components/aside.vue'

import serverlist from '../components/serverlist.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'login',
      path:'/login',
      component:login
    },
    {
      name:'root',
      path:'/',
      // redirect:{name:'index'}
      components: {
        main:index
      }
    },
  ]
})
