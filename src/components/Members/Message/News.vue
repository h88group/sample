<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <message-nav />
      news
    </section>
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import MessageNav from './MessageNav'

export default {
  name: 'news',
  components: {
    CompMembersLeftMenu,
    MessageNav
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
