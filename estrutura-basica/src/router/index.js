import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Contato from '@/components/Contato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sobre',
      name: 'About',
      component: About
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})
