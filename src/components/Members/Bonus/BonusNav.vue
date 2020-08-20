<template>
  <nav class="tabs-nav-wrapper">
    <ul class="tab-nav container">
      <li class=""> <router-link :to="{ name: 'Bonus' }">申请优惠</router-link> </li>
      <li class=""> <router-link :to="{ name: 'BonusLogs' }">申请优惠详情</router-link> </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'bonus-nav',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
