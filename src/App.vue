<template>
  <div id="app">
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

export default {
  name: 'App',
  components: {
    CompHeader,
    CompFooter,
    CompSitemap
  }
}
</script>

<style>
</style>
