<template>
  <nav class="tabs-nav-wrapper">
    <ul class="tab-nav container">
      <li class=""> <router-link :to="{ name: 'Message' }">留言 <span class="message-notice-total">[0]</span></router-link> </li>
      <li class=""> <router-link :to="{ name: 'News' }">最新公告</router-link> </li>
      <li class=""> <router-link :to="{ name: 'MessageAdmin' }">总监信箱</router-link> </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'message-nav',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
