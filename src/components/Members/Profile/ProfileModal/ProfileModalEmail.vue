<template>
<div id="modal-wrapper" v-if="showModal" class="modal-wrapper">
  <div id="modal-email-binding" class="modal is-visible">
    <div class="profile-binding-modal">
      <header class="modal__header"> 绑定电子邮箱 <i @click="showModal = false" class="close-modal js-close-modal"></i> </header>
      <div class="modal__body">
        <div class="profile-binding-wrapper">
          <ul class="profile-binding__tab-nav off">
            <li> <a class="done" role="button"> <i class="step-box">1</i> 输入电子邮件 </a> </li>
            <li> <a role="button"> <i class="step-box">2</i> 输入验证码 </a> </li>
            <li> <a role="button"> <i class="step-box tick"></i> 恭喜完成 </a> </li>
          </ul>
          <div class="profile-binding__tab-content" style="width: 1800px; transform: translateX(0px);">
            <section class="email-binding-step1">
              <form class="text-center" style="padding: 0 54px;">
                <p class="form-error-message"></p>
                <div class="form-control">
                  <label class="form-label">电子邮件 :</label>
                  <div class="text-left">
                    <input type="text">
                    <p class="form-error-text"></p>
                    <p class="note"> *QQ邮箱可能无法收到我们的邮件， <br>
                      建议更换别的邮箱 </p>
                  </div>
                </div>
                <div class="modal__footer" style="margin-top: 50px;">
                  <button type="button" class="button red">取消</button>
                  <button type="submit" class="button red">确定</button>
                </div>
              </form>
            </section>
            <section class="email-binding-step2">
              <form class="text-center" style="padding: 0 10px;">
                <p class="form-error-message"></p>
                <div class="form-control">
                  <label class="form-label">验证码 :</label>
                  <div class="text-left">
                    <input class="digitOnly" type="text">
                    <button type="button" class="button blue">重发验证码</button>
                    <p class="form-error-text"></p>
                    <p class="note">【验证码已经发送到您的邮箱】</p>
                  </div>
                </div>
                <div class="modal__footer" style="margin-top: 50px;">
                  <button type="button" class="button red">取消</button>
                  <button type="submit" class="button red">确定</button>
                </div>
              </form>
            </section>
            <section class="name-binding-step2 text-center">
              <h3 class="success-text">恭喜您！已成功绑定电子邮件！</h3>
              <figure class="profile-wheel-chart" data-percent="100%">
                <svg width="100" height="100">
                  <g>
                    <circle cx="50" cy="50" r="45" stroke-width="7" stroke="#e1e1e1" fill="#fff"> </circle>
                  </g>
                  <g>
                    <circle cx="50" cy="50" r="45" stroke-width="7" stroke="#fd3153" fill="none" style="stroke-dasharray: 282.74; transition: stroke-dashoffset 1s linear 0s; stroke-dashoffset: 0;"> </circle>
                  </g>
                </svg>
              </figure>
              <p class="account-safe-stat"> 您的账号安全指数达 <span style="font-weight:bold;">一般</span> </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'profile-modal-email',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    actShowModal () {
      this.showModal = true
    },
    actHideModal () {
      this.showModal = false
    }
  }
}
</script>

<style scoped>

</style>
