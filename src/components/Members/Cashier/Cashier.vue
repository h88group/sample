<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <cashier-nav />
      cashier
    </section>
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import CashierNav from './CashierNav'

export default {
  name: 'cashier',
  components: {
    CompMembersLeftMenu,
    CashierNav
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
