<template>
  <nav class="tabs-nav-wrapper">
    <ul class="tab-nav container">
      <li class=""> <router-link :to="{ name: 'Cashier' }">存款</router-link> </li>
      <li class=""> <router-link :to="{ name: 'CashierWithdrawal' }">提款</router-link> </li>
      <li class=""> <router-link :to="{ name: 'CashierLogs' }">交易记录</router-link> </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'cashier-nav',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
