import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import About from '@/components/SitemapContent/About'
import Terms from '@/components/SitemapContent/Terms'
import Privacy from '@/components/SitemapContent/Privacy'
import ResponsibleGaming from '@/components/SitemapContent/ResponsibleGaming'
import Contact from '@/components/SitemapContent/Contact'
import Guide from '@/components/SitemapContent/Guide'
import Account from '@/components/Members/account'
import Profile from '@/components/Members/Profile/Profile'

Vue.use(Router)

var router = new Router({
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
    },
    {
      path: '/guide.html',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/members/account.html',
      name: 'Account',
      component: Account
    },
    {
      path: '/members/profile.html',
      name: 'Profile',
      component: Profile
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
