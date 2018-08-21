import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import Soon from '@/views/Soon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/search/:searchKey',
      component: Search
    },
    {
      path:'/detail/:id',
      component: Detail
    },
    {
      path:'/Soon',
      component: Soon
    },
  ]
})
