<template>
  <div id="app">
    <comp-header />
    <comp-index />
    <comp-sitemap />
    <comp-footer />
    <div class="livechat"> <a href="https://temp-chat.mstatik.com/widget/standalone.html?eid=204623" target="_blank"><img src="./assets/images/general.svg" alt="" width="100" height="100" /></a> </div>
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader";
import CompFooter from "./components/CompFooter";
import CompSitemap from "./components/CompSitemap";
import CompIndex from "./components/CompIndex";

export default {
  name: "App",
  components: {
    CompHeader,
    CompFooter,
    CompSitemap,
    CompIndex,
  },
};
</script>

<style>
</style>
