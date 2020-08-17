import Vue from 'vue'
import Router from 'vue-router'
import CompLayout from '@/components/CompLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CompLayout',
      component: CompLayout
    }
  ]
})
