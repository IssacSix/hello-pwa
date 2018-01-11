import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    }
  ]
})
