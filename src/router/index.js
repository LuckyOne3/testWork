import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Edit from '@/components/todoedit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/edit/:PIndexMass',
      name: 'todoedit',
      component: Edit
    }],
  mode: 'history',
  base: '/',
  linkActiveClass: 'active'
})
