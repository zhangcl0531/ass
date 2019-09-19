import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../components/login.vue'
import index from '../components/index.vue'
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
      redirect:{name:'index'}
    },{
      name:'index',
      path:'/index',
      component:index
    }
  ]
})
