<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <cashier-nav />
      cashier withdrawal
    </section>
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import CashierNav from './CashierNav'

export default {
  name: 'cashier-withdrawal',
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
