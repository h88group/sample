<template>
  <div class="member-menu-wrapper">
    <ul class="member-menu off">
      <li> <router-link :to="{ name: 'Account' }">
        <div class="menu"> <i class="icon">
          <svg viewBox="0 0 18 18">
            <path d="M9 1c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zM5 6h1l2 3H6v1h3v1H6v1h3v2h1v-2h3v-1h-3v-1h3V9h-2l2-3h1V5h-2L9.5 8.5 7 5H5v1z"></path>
          </svg>
          </i> <span class="label">我的余额</span> </div>
        </router-link> </li>
      <li> <router-link :to="{ name: 'Profile' }">
        <div class="menu"> <i class="icon">
          <svg viewBox="0 0 18 18">
            <path d="M5.8 4.5c0-1.7 1.5-3 3.3-3 1.8 0 3.3 1.4 3.3 3 0 1.7-1.5 3-3.3 3-1.9.1-3.3-1.3-3.3-3zM16.5 16v.5h-15V16c0-4.7 3.9-7.6 7.5-7.6 3.6.1 7.5 3 7.5 7.6z"></path>
          </svg>
          </i> <span class="label">个人资料</span> </div>
        </router-link>
        <ul class="submenu">
          <li class=""> <router-link :to="{ name: 'Profile' }">账户资料</router-link> </li>
          <li class=""> <router-link :to="{ name: 'ProfilePassword' }">更改账户密码</router-link> </li>
          <li class=""> <router-link :to="{ name: 'ProfileChangepin' }">更改安全密码</router-link> </li>
          <li class=""> <router-link :to="{ name: 'ProfilePin' }">忘记安全密码</router-link> </li>
        </ul>
      </li>
      <li> <router-link :to="{ name: 'Cashier' }">
        <div class="menu"> <i class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M15.9 15.5H3c-1.9 0-2.2-1.7-2.2-1.7V4.2h11.6c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H1c.5-1 2-.9 2-.9h11.4c1.1 0 1.1.8 1.1.8V5h.9c.8 0 .8.6.8.6v2.1h-3.4c-1.7 0-1.7 2.6-1.7 2.6-.2 2.5 1.7 2.6 1.7 2.6h3.4v1.8c-.2 1.1-1.3.8-1.3.8zm-2.2-6.1s.4-.9.9-.9h2.6v2.6h-2.6c-.1.1-1.2.2-.9-1.7z"></path>
          </svg>
          </i> <span class="label">财务中心</span> </div>
        </router-link>
        <ul class="submenu">
          <li class=""> <router-link :to="{ name: 'Cashier' }">存款</router-link> </li>
          <li class=""> <router-link :to="{ name: 'CashierWithdrawal' }">提款</router-link> </li>
          <li class=""> <router-link :to="{ name: 'CashierLogs' }">交易记录</router-link> </li>
        </ul>
      </li>
      <!-- <li> <router-link :to="{ name: 'Bonus' }">
        <div class="menu"> <i class="icon">
          <svg viewBox="0 0 18 18">
            <path d="M1.7 8.9c-.6-.7-.9-1.6-.5-2.6.3-.9 1.1-1.6 2-1.7-.2-1 .2-1.9 1-2.5.8-.6 1.8-.6 2.6-.2C7.2 1.1 8 .5 9 .5c1 0 1.9.6 2.3 1.6.9-.5 1.9-.4 2.8.2.8.6 1.1 1.6.9 2.5.9.2 1.6.9 1.9 1.8.3 1 0 1.9-.7 2.6.6.7.8 1.7.5 2.6-.3.9-1.1 1.6-2 1.7.1.9-.3 1.9-1.1 2.4s-1.8.6-2.6.2c-.4.8-1.3 1.3-2.3 1.3-1 0-1.8-.6-2.2-1.4-.8.4-1.8.3-2.6-.3s-1.1-1.6-1-2.5C2 13 1.3 12.4 1 11.4c-.2-.8.1-1.8.7-2.5zm8.9 4c.3.4.8.6 1.4.6.6 0 1.1-.2 1.5-.6.4-.4.6-1 .6-1.7s-.2-1.3-.5-1.6c-.4-.4-.9-.6-1.5-.6s-1.1.2-1.5.6c-.4.4-.6 1-.6 1.7.1.7.3 1.2.6 1.6zm-3.4.5l5.4-8.8h-.9l-5.4 8.8h.9zm-2.6-5c.3.4.8.6 1.3.6.6 0 1.1-.2 1.5-.6.4-.5.6-1 .6-1.7s-.2-1.2-.5-1.6c-.4-.4-.8-.6-1.4-.6-.7 0-1.1.2-1.5.6-.4.5-.6 1-.6 1.7s.2 1.2.6 1.6zM6 5.2c.4 0 .6.1.8.4.2.3.3.7.3 1.1 0 .5-.1.9-.3 1.1-.2.4-.4.5-.8.5s-.6-.1-.8-.4c-.2-.3-.3-.6-.3-1.1 0-.5.1-.9.3-1.2.2-.2.5-.4.8-.4zm6.1 4.5c.3 0 .6.1.8.4.2.3.3.6.3 1.1 0 .5-.1.9-.3 1.1-.2.3-.5.4-.8.4-.4 0-.6-.1-.8-.4-.2-.3-.3-.6-.3-1.1 0-.5.1-.9.3-1.2.1-.2.4-.3.8-.3z"></path>
          </svg>
          </i> <span class="label">申请优惠</span> </div>
        </router-link> </li> -->
      <li> <router-link :to="{ name: 'Message' }">
        <div class="menu"> <i class="icon">
          <svg viewBox="0 0 18 18">
            <path d="M6.3 8.5L1 14V4l5.3 4.5zm2.5 2.1c.1.1.1.1.2.1s.2 0 .2-.1l2-1.6 5.3 5.5h-15L6.8 9l2 1.6zM1.6 3.5h14.9L9 9.9 1.6 3.5zM17 4v10l-5.3-5.5L17 4z"></path>
          </svg>
          </i> <span class="label"> 信息 <span class="message-notice-total">[36]</span> </span> </div>
        </router-link> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'comp-members-left-menu',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
