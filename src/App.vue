<template>
  <div id="app">
    <comp-modal />
    <comp-header />
    <router-view />
    <comp-sitemap />
    <comp-footer />
    <div class="livechat"> <a href="https://temp-chat.mstatik.com/widget/standalone.html?eid=204623" target="_blank"><img src="./assets/images/general.svg" alt="" width="100" height="100" /></a> </div>
  </div>
</template>

<script>
import CompHeader from './components/Layout/CompHeader'
import CompFooter from './components/Layout/CompFooter'
import CompSitemap from './components/Layout/CompSitemap'
import CompModal from './components/Modal/CompModal'
import $ from 'jquery'

export default {
  name: 'App',
  components: {
    CompHeader,
    CompFooter,
    CompSitemap,
    CompModal
  },
  mounted: function () {
    $(document).click(function (event) {
      var $target = $(event.target)
      if (!$target.closest('#mini-cashier').length &&
        !$target.closest('.mini-cashier-button').length) {
        $('body').removeClass('is-showing-mini-cashier')
      }
    })
  }
}
</script>

<style>
</style>
