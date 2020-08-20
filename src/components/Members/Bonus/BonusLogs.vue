<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <bonus-nav />
    bonus logs
    </section>
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import BonusNav from './BonusNav'

export default {
  name: 'bonus-logs',
  components: {
    CompMembersLeftMenu,
    BonusNav
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
