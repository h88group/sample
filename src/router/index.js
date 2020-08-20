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
import ProfilePassword from '@/components/Members/Profile/ProfilePassword'
import ProfileChangepin from '@/components/Members/Profile/ProfileChangepin'
import ProfilePin from '@/components/Members/Profile/ProfilePin'
import Cashier from '@/components/Members/Cashier/Cashier'
import CashierWithdrawal from '@/components/Members/Cashier/CashierWithdrawal'
import CashierLogs from '@/components/Members/Cashier/CashierLogs'
import Bonus from '@/components/Members/Bonus/Bonus'
import BonusLogs from '@/components/Members/Bonus/BonusLogs'
import Message from '@/components/Members/Message/Message'
import News from '@/components/Members/Message/News'
import MessageAdmin from '@/components/Members/Message/MessageAdmin'

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
    },
    {
      path: '/members/profile/password.html',
      name: 'ProfilePassword',
      component: ProfilePassword
    },
    {
      path: '/members/profile/changepin.html',
      name: 'ProfileChangepin',
      component: ProfileChangepin
    },
    {
      path: '/members/profile/pin.html',
      name: 'ProfilePin',
      component: ProfilePin
    },
    {
      path: '/members/cashier.html',
      name: 'Cashier',
      component: Cashier
    },
    {
      path: '/members/cashier/withdrawal.html',
      name: 'CashierWithdrawal',
      component: CashierWithdrawal
    },
    {
      path: '/members/cashier/logs.html',
      name: 'CashierLogs',
      component: CashierLogs
    },
    {
      path: '/members/bonus.html',
      name: 'Bonus',
      component: Bonus
    },
    {
      path: '/members/bonus/logs.html',
      name: 'BonusLogs',
      component: BonusLogs
    },
    {
      path: '/members/message.html',
      name: 'Message',
      component: Message
    },
    {
      path: '/members/news.html',
      name: 'News',
      component: News
    },
    {
      path: '/members/message/admin.html',
      name: 'MessageAdmin',
      component: MessageAdmin
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
