<template>
  <nav class="tabs-nav-wrapper">
    <ul class="tab-nav container">
      <li class=""> <router-link :to="{ name: 'Profile' }">账户资料</router-link> </li>
      <li class=""> <router-link :to="{ name: 'ProfilePassword' }">更改账户密码</router-link> </li>
      <li class=""> <router-link :to="{ name: 'ProfileChangepin' }">更改安全密码</router-link> </li>
      <li class=""> <router-link :to="{ name: 'ProfilePin' }">忘记安全密码</router-link> </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'profile-nav',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
