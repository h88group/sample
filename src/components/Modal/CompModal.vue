<template>
  <div id="modal-wrapper" v-if="showModal" class="modal-wrapper">
    <div id="modal-login-signup"  class="modal modal-login-signup is-visible">
      <div class="modal-login-signup-wrapper" :class="modalClass">
        <header class="modal__header"> <a @click="IsLogin()" class="modal-login-header" role="button" style="border-radius: 3px 0 0 0;">登入</a> <a @click="IsForgotPassword()" class="modal-forgot-password-header" role="button">忘记密码</a> <i @click="showModal = false" class="close-modal js-close-modal"></i> </header>
        <section class="modal__body">
          <div class="modal-login-signup-container">
            <div id="modal-login" class="modal-login__inner">
              <form action="" method="POST" accept-charset="UTF-8">
                <p id="modal-login-message" class="form-error-message text-center">登入超时，请重新登入</p>
                <p style="margin-bottom: 16px;">
                  <label class="form-label">账号</label>
                  <span class="input-container">
                  <input type="text" name="username" placeholder="请输入您的账号">
                  </span> </p>
                <p style="margin-bottom: 20px;">
                  <label class="form-label">密码</label>
                  <span class="input-container form-toggle-password-wrapper">
                  <input type="password" name="password" placeholder="输入您的密码">
                  <a class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a> </span> </p>
                <p style="padding-left: 67px">
                  <button type="submit" class="button">登入</button>
                </p>
                <p class="text-center" style="padding-left: 40px"> <a href="#" role="button">注册账号</a> </p>
              </form>
            </div>
            <div id="modal-forgot-password" class="modal-forgot-password__inner">
              <div class="modal-forgot-password-wrapper">
                <div class="modal-forgot-password__tab-content">
                  <section class="modal-forgot-password-step1">
                    <form>
                      <p class="text-center" style="padding-bottom: 30px;">请填写您的账号。</p>
                      <p class="form-error-message" style="text-align: center; margin-top: -20px;"></p>
                      <p>
                        <label class="form-label" for="form-username">账号</label>
                        <span class="input-container">
                        <input type="text" id="form-username" name="username" placeholder="请输入您的账号" maxlength="17">
                        </span> </p>
                      <p style="padding-left: 67px;">
                        <button type="submit" class="button">下一步</button>
                      </p>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'comp-modal',
  data () {
    return {
      showModal: false,
      modalClass: 'is-login'
    }
  },
  methods: {
    actShowModal () {
      this.showModal = true
    },
    actHideModal () {
      this.showModal = false
    },
    IsForgotPassword () {
      this.modalClass = 'is-forgot-password'
    },
    IsLogin () {
      this.modalClass = 'is-login'
    }
  }
}
</script>

<style scoped>

</style>
