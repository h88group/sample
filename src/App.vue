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
    $(document).ready(function () {
      $('.btn-toggle-password').click(function () {
        var e = $(this).parent().find('input')
          , t = 'password' === e.attr('type') ? 'text' : 'password'
        e.attr('type', t)
      })

      $('.js-autotab input').keyup(function () {
        var e = $(this)
        e.val().length >= e.attr('maxlength') && e.next('input').focus()
      })

      $.each($('.has-keypad'), function () {
        var e, t = $(this),
          s = $(this).find('input').get(0),
          i = t.find('.secure-keypad'),
          n = !1
        t.on('click focusin', function () {
          clearTimeout(e), n || (n = !0, i.addClass('is-visible')), setTimeout(function () {
            s.focus()
          }, 0)
        }).on('focusout', function () {
          e = setTimeout(function () {
            n = !1, i.removeClass('is-visible')
          }, 0)
        })
      })

      $('#code').keydown(function (event) {
        return false
      })
    })
  }
}
</script>

<style>
</style>
