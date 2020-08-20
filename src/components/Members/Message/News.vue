<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <message-nav />
      <section class="member-message-wrapper">
        <div class="tab-content">
          <div id="news" class="tab-pane active" role="tabpanel">
            news
          </div>
        </div>
      </section>
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
