<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <profile-nav />
      <section class="member-profile-container">
        <div class="tab-content">
          <div id="account-password" class="account-password tab-pane active" role="tabpanel">
            <form class="text-center">
              <p class="form-error-text text-center">必须填写安全密码</p>
              <div>
              <div style="margin:30px 0;">请输入「安全密码」以「更改账户密码」。</div>
                <label class="form-label">安全密码</label>
                <div class="input-container form-toggle-password-wrapper has-keypad" tabindex="-1">
                  <input class="digitOnly" type="password" name="secure_pin" maxlength="4" autocomplete="off" inputmode="none" style="height: 26px;" readonly="">
                  <a class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a>
                  <div class="secure-keypad">
                    <button class="key" type="button" tabindex="-1">1</button>
                    <button class="key" type="button" tabindex="-1">2</button>
                    <button class="key" type="button" tabindex="-1">3</button>
                    <button class="key" type="button" tabindex="-1">4</button>
                    <button class="key" type="button" tabindex="-1">5</button>
                    <button class="key" type="button" tabindex="-1">6</button>
                    <button class="key" type="button" tabindex="-1">7</button>
                    <button class="key" type="button" tabindex="-1">8</button>
                    <button class="key" type="button" tabindex="-1">9</button>
                    <button class="key" type="button" tabindex="-1">
                      <svg width="60" height="50" viewBox="0 0 60 50"><path d="M13 22.9l.9-1c1.1.7 2.1 1.5 3 2.3-.4.5-.8.9-1 1.1-1.1-.9-2.1-1.7-2.9-2.4zm.5 10.8c.7-2.2 1.3-4.4 1.8-6.8.5.2 1 .4 1.4.5-.6 2.2-1.1 4.4-1.7 6.7l-1.5-.4zm.2-15.3l.9-.9c.8.6 1.8 1.4 3 2.5-.4.4-.7.7-1.1 1-1.2-1.2-2.1-2.1-2.8-2.6zm3.9 4.8h5.8V22h-4.6v-1.1h4.6v-1.2h-5.2v-1.1h5.2V17h1.3v1.6h5.5v1.1h-5.5v1.2h5V22h-5v1.2h5.8v1.1H17.6v-1.1zm2.5 11.1h-1.3v-8.9h10.4v6.9c0 1.2-.6 1.9-1.9 1.9h-2.9c-.1-.4-.1-.8-.3-1.3 1.1.1 2 .1 2.6.1.7 0 1.1-.3 1.1-.9v-.9h-7.7v3.1zm7.7-7.8h-7.7v1.2h7.7v-1.2zM20.1 30h7.7v-1.2h-7.7V30zm17.3-8.5l1 1c-2.3 1.8-4.4 3.2-6.4 4.3-.4-.5-.7-.9-1.1-1.1 2.3-1.1 4.5-2.5 6.5-4.2zm-5.8 10.6h7.3v-4.6h-5.5v-1.3h12.5v1.3h-5.5v4.6h7.3v1.3H31.6v-1.3zm.1-12.8h7.6c-.3-.5-.6-1.1-1-1.7l1.3-.6c.5.7.9 1.4 1.2 2l-.6.3h7.4v3.4h-1.4v-2.1h-13v2.1h-1.4v-3.4zm10.2 2.3c2.5 1.5 4.6 2.8 6.4 4.1l-1 1.2c-1.8-1.4-3.8-2.8-6.2-4.3l.8-1z" fill="#fff"></path><path d="M11.7 21.7l.9-1c1.1.7 2.1 1.5 3 2.3-.4.5-.8.9-1 1.1-1-1-2-1.8-2.9-2.4zm.6 10.8c.7-2.2 1.3-4.4 1.8-6.8.5.2 1 .4 1.4.5-.6 2.2-1.1 4.4-1.7 6.7l-1.5-.4zm.1-15.4l.9-.9c.8.6 1.8 1.4 3 2.5-.4.4-.7.7-1.1 1-1.1-1.1-2.1-2-2.8-2.6zm3.9 4.9h5.8v-1.2h-4.6v-1.1h4.6v-1.2h-5.2v-1.1h5.2v-1.6h1.3v1.6h5.5v1.1h-5.5v1.2h5v1.1h-5V22h5.8v1.1H16.3V22zm2.6 11h-1.3v-8.9H28V31c0 1.2-.6 1.9-1.9 1.9h-2.9c-.1-.4-.1-.8-.3-1.3 1.1.1 2 .1 2.6.1.7 0 1.1-.3 1.1-.9v-.9h-7.7V33zm7.7-7.8h-7.7v1.2h7.7v-1.2zm-7.7 3.6h7.7v-1.2h-7.7v1.2zm17.2-8.5l1 1c-2.3 1.8-4.4 3.2-6.4 4.3-.4-.5-.7-.9-1.1-1.1 2.4-1.2 4.5-2.6 6.5-4.2zm-5.7 10.6h7.3v-4.6h-5.5V25h12.5v1.3h-5.5v4.6h7.3v1.3H30.4v-1.3zm.1-12.8h7.6c-.3-.5-.6-1.1-1-1.7l1.3-.6c.5.7.9 1.4 1.2 2l-.6.3h7.4v3.4H45v-2.1H32v2.1h-1.4v-3.4zm10.1 2.2c2.5 1.5 4.6 2.8 6.4 4.1l-1 1.2c-1.8-1.4-3.8-2.8-6.2-4.3l.8-1z" fill="#438eff"></path></svg>
                    </button>
                    <button class="key" type="button" tabindex="-1">0</button>
                    <button class="key" type="button" tabindex="-1">
                      <svg width="60" height="50" viewBox="0 0 60 50"><path fill="#fff" d="M36.386 21.336l.707.707-7.283 7.284-.707-.708z"></path><path fill="#fff" d="M37.115 28.61l-.708.706-7.273-7.294.709-.706z"></path><path d="M24.2 17.5L16 24.9l8 8.7h21V17.5H24.2zm19.6 15H25l-7-7.7 7-6.4h18.8v14.1z" fill="#fff"></path><path fill="#438eff" d="M35.386 20.336l.707.707-7.283 7.284-.707-.708z"></path><path fill="#438eff" d="M36.115 27.61l-.708.706-7.273-7.294.709-.706z"></path><path d="M23.2 16.5L15 23.9l8 8.7h21V16.5H23.2zm19.6 15H24l-7-7.7 7-6.4h18.8v14.1z" fill="#438eff"></path></svg>
                    </button>
                    </div>
                    </div>
                    <button type="submit" class="button red" style="transform: translateY(2px);">验证</button>
                </div>
            </form>
            <form style="">
              <p class="form-error-text">请输入现时密码。</p>
              <p>
                <label for="form-current-password" class="form-label">现时密码 <span class="required">*</span></label>
                <span class="form-toggle-password-wrapper">
                <input type="password" id="form-current-password" name="current_password" autocomplete="off" class="form-error">
                <a class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a> </span> </p>
              <p>
                <label for="form-new-password" class="form-label">新密码 <span class="required">*</span></label>
                <span class="form-toggle-password-wrapper">
                <input type="password" id="form-new-password" name="new_password" autocomplete="off">
                <a class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a> </span> </p>
              <p>
                <label for="form-confirm-password" class="form-label">确认新密码 <span class="required">*</span></label>
                <span class="form-toggle-password-wrapper">
                <input type="password" id="form-confirm-password" name="confirm_password" autocomplete="off">
                <a class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a> </span> </p>
              <p class="note">*密码长度为8-12，其中必须包含英文字母及数字</p>
              <p>
                <label class="form-label"></label>
                <button type="reset" class="button red">重设</button>
                <button type="submit" class="button red" style="margin-left: 18px;">确定</button>
              </p>
            </form>
          </div>
        </div>
        <profile-setting />
      </section>
    </section>
    <profile-modal-name ref="profileModalName" />
    <profile-modal-ic ref="profileModalIc" />
    <profile-modal-email ref="profileModalEmail" />
    <profile-modal-phone ref="profileModalPhone" />
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import ProfileNav from './ProfileNav'
import ProfileSetting from './ProfileSetting'
import ProfileModalName from './ProfileModal/ProfileModalName'
import ProfileModalIc from './ProfileModal/ProfileModalIc'
import ProfileModalEmail from './ProfileModal/ProfileModalEmail'
import ProfileModalPhone from './ProfileModal/ProfileModalPhone'

export default {
  name: 'profile-password',
  components: {
    CompMembersLeftMenu,
    ProfileNav,
    ProfileSetting,
    ProfileModalName,
    ProfileModalIc,
    ProfileModalEmail,
    ProfileModalPhone
  },
  data () {
    return {
    }
  },
  methods: {
    showModalName () {
      this.$refs.profileModalName.actShowModal()
    },
    hideModalName () {
      this.$refs.profileModalName.actHideModal()
    },
    showModalIc () {
      this.$refs.profileModalIc.actShowModal()
    },
    hideModalIc () {
      this.$refs.profileModalIc.actHideModal()
    },
    showModalEmail () {
      this.$refs.profileModalEmail.actShowModal()
    },
    hideModalEmail () {
      this.$refs.profileModalEmail.actHideModal()
    },
    showModalPhone () {
      this.$refs.profileModalPhone.actShowModal()
    },
    hideModalPhone () {
      this.$refs.profileModalPhone.actHideModal()
    }
  }
}
</script>

<style scoped>

</style>
