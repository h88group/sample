import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import About from '@/components/SitemapContent/About'
import Terms from '@/components/SitemapContent/Terms'
import Privacy from '@/components/SitemapContent/Privacy'
import ResponsibleGaming from '@/components/SitemapContent/ResponsibleGaming'
import Contact from '@/components/SitemapContent/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register.html',
      name: 'Register',
      component: Register
    },
    {
      path: '/about.html',
      name: 'About',
      component: About
    },
    {
      path: '/terms.html',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/privacy.html',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/responsible-gaming.html',
      name: 'ResponsibleGaming',
      component: ResponsibleGaming
    },
    {
      path: '/contact.html',
      name: 'Contact',
      component: Contact
    }
  ]
})
