<template>
<section>
  <article class="container">
    <div id="registration" class="registration-wrapper tab-pane" role="tabpanel">
      <ul class="registration__tab-nav off">
        <li><a id="registration-step-1" class="done" role="button">输入登入资料</a></li>
        <li><a id="registration-step-3" class="" role="button"><i class="step-box tick"></i> 恭喜成为会员</a></li>
      </ul>
      <div class="registration__tab-content">
        <section class="registration-step1">
          <form>
            <ul class="off" style="margin-left: 300px;">
              <li class="form-row">
                <label class="form-label" for="form-register-username">易发账号</label>
                <div class="input-container">
                  <input type="text" id="form-register-username" name="username" maxlength="15"  >
                </div>
                <span class="form-error-text">账号必须是5至15个英文数字</span>
                <span class="form-tip">5至15个英文数字</span>
              </li>
              <li class="form-row">
                <label class="form-label" for="form-password">密码</label>
                <div class="input-container form-toggle-password-wrapper">
                  <input :type="passwordFieldType" v-model="password" id="form-password" name="password" maxlength="12">
                  <a v-on:click="switchVisibility" class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a> </div>
                  <span class="form-error-text">密码必须是8至12个英文数字</span>
                <span class="form-tip">8至12个英文数字</span> </li>
              <li class="form-row">
                <label class="form-label" for="form-confirm-password">确认密码</label>
                <div class="input-container form-toggle-password-wrapper">
                  <input type="password" id="form-confirm-password" name="confirm_password" maxlength="12">
                  <a class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a> </div>
                  <span class="form-error-text">密码和确认密码必须一致</span>
                <span class="form-tip">密码和确认密码必须一致</span> </li>
              <li class="form-row">
                <label class="form-label" for="form-password">安全密码</label>
                <div class="input-container form-toggle-password-wrapper has-keypad" tabindex="-1">
                  <input class="digitOnly" type="password" name="secure_pin" value="" id="code" maxlength="4" >
                  <a class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a>
                  <div class="secure-keypad">
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '1';}">1</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '2';}">2</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '3';}">3</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '4';}">4</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '5';}">5</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '6';}">6</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '7';}">7</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '8';}">8</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '9';}">9</button>
                    <button class="key" type="button" tabindex="-1" onclick="document.getElementById('code').value=document.getElementById('code').value.length = null;">
                    <svg width="60" height="50" viewBox="0 0 60 50">
                      <path d="M13 22.9l.9-1c1.1.7 2.1 1.5 3 2.3-.4.5-.8.9-1 1.1-1.1-.9-2.1-1.7-2.9-2.4zm.5 10.8c.7-2.2 1.3-4.4 1.8-6.8.5.2 1 .4 1.4.5-.6 2.2-1.1 4.4-1.7 6.7l-1.5-.4zm.2-15.3l.9-.9c.8.6 1.8 1.4 3 2.5-.4.4-.7.7-1.1 1-1.2-1.2-2.1-2.1-2.8-2.6zm3.9 4.8h5.8V22h-4.6v-1.1h4.6v-1.2h-5.2v-1.1h5.2V17h1.3v1.6h5.5v1.1h-5.5v1.2h5V22h-5v1.2h5.8v1.1H17.6v-1.1zm2.5 11.1h-1.3v-8.9h10.4v6.9c0 1.2-.6 1.9-1.9 1.9h-2.9c-.1-.4-.1-.8-.3-1.3 1.1.1 2 .1 2.6.1.7 0 1.1-.3 1.1-.9v-.9h-7.7v3.1zm7.7-7.8h-7.7v1.2h7.7v-1.2zM20.1 30h7.7v-1.2h-7.7V30zm17.3-8.5l1 1c-2.3 1.8-4.4 3.2-6.4 4.3-.4-.5-.7-.9-1.1-1.1 2.3-1.1 4.5-2.5 6.5-4.2zm-5.8 10.6h7.3v-4.6h-5.5v-1.3h12.5v1.3h-5.5v4.6h7.3v1.3H31.6v-1.3zm.1-12.8h7.6c-.3-.5-.6-1.1-1-1.7l1.3-.6c.5.7.9 1.4 1.2 2l-.6.3h7.4v3.4h-1.4v-2.1h-13v2.1h-1.4v-3.4zm10.2 2.3c2.5 1.5 4.6 2.8 6.4 4.1l-1 1.2c-1.8-1.4-3.8-2.8-6.2-4.3l.8-1z" fill="#fff"></path>
                      <path d="M11.7 21.7l.9-1c1.1.7 2.1 1.5 3 2.3-.4.5-.8.9-1 1.1-1-1-2-1.8-2.9-2.4zm.6 10.8c.7-2.2 1.3-4.4 1.8-6.8.5.2 1 .4 1.4.5-.6 2.2-1.1 4.4-1.7 6.7l-1.5-.4zm.1-15.4l.9-.9c.8.6 1.8 1.4 3 2.5-.4.4-.7.7-1.1 1-1.1-1.1-2.1-2-2.8-2.6zm3.9 4.9h5.8v-1.2h-4.6v-1.1h4.6v-1.2h-5.2v-1.1h5.2v-1.6h1.3v1.6h5.5v1.1h-5.5v1.2h5v1.1h-5V22h5.8v1.1H16.3V22zm2.6 11h-1.3v-8.9H28V31c0 1.2-.6 1.9-1.9 1.9h-2.9c-.1-.4-.1-.8-.3-1.3 1.1.1 2 .1 2.6.1.7 0 1.1-.3 1.1-.9v-.9h-7.7V33zm7.7-7.8h-7.7v1.2h7.7v-1.2zm-7.7 3.6h7.7v-1.2h-7.7v1.2zm17.2-8.5l1 1c-2.3 1.8-4.4 3.2-6.4 4.3-.4-.5-.7-.9-1.1-1.1 2.4-1.2 4.5-2.6 6.5-4.2zm-5.7 10.6h7.3v-4.6h-5.5V25h12.5v1.3h-5.5v4.6h7.3v1.3H30.4v-1.3zm.1-12.8h7.6c-.3-.5-.6-1.1-1-1.7l1.3-.6c.5.7.9 1.4 1.2 2l-.6.3h7.4v3.4H45v-2.1H32v2.1h-1.4v-3.4zm10.1 2.2c2.5 1.5 4.6 2.8 6.4 4.1l-1 1.2c-1.8-1.4-3.8-2.8-6.2-4.3l.8-1z" fill="#438eff"></path>
                    </svg>
                    </button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '0';}">0</button>
                    <button class="key" type="button" tabindex="-1" onclick="document.getElementById('code').value=document.getElementById('code').value.slice(0, -1);">
                    <svg width="60" height="50" viewBox="0 0 60 50">
                      <path fill="#fff" d="M36.386 21.336l.707.707-7.283 7.284-.707-.708z"></path>
                      <path fill="#fff" d="M37.115 28.61l-.708.706-7.273-7.294.709-.706z"></path>
                      <path d="M24.2 17.5L16 24.9l8 8.7h21V17.5H24.2zm19.6 15H25l-7-7.7 7-6.4h18.8v14.1z" fill="#fff"></path>
                      <path fill="#438eff" d="M35.386 20.336l.707.707-7.283 7.284-.707-.708z"></path>
                      <path fill="#438eff" d="M36.115 27.61l-.708.706-7.273-7.294.709-.706z"></path>
                      <path d="M23.2 16.5L15 23.9l8 8.7h21V16.5H23.2zm19.6 15H24l-7-7.7 7-6.4h18.8v14.1z" fill="#438eff"></path>
                    </svg>
                    </button>
                  </div>
                </div>
                <span class="form-error-text">安全密码必须是4位数字组成</span>
                <span class="form-tip">4位数字组成</span> </li>
              <li class="form-row">
                <label class="form-label" for="form-referral">推荐代码</label>
                <div class="input-container js-autotab">
                  <input class="short-input" type="text" id="form-referral" name="referral" maxlength="1">
                  <input class="short-input" type="text" name="referral2" maxlength="1">
                  <input class="short-input" type="text" name="referral3" maxlength="1">
                  <input class="short-input" type="text" name="referral4" maxlength="1">
                </div>
                <span class="form-tip" style="visibility: visible;">(如无推荐代码可忽略此步)</span> </li>
              <li class="form-row">
                <label class="form-label" for="form-gotcha">验证码</label>
                <div class="input-container">
                  <input class="digitOnly" type="text" id="form-gotcha" name="gotcha" style="width: 128px;" maxlength="4">
                </div>
                <div class="gotcha" style="cursor: pointer;"> <img class="gotcha-image" id="gotchaImage" src="../assets/images/captcha.png" width="128" height="35" alt="Verification code"> <a><i class="icon icon-refresh"></i></a> </div>
                <span class="form-error-text">请输入验证码</span>
              </li>
              <li class="form-row">
                <label class="form-label"></label>
                <div class="input-container"> <span class="form-error-text"></span> </div>
              </li>
              <li class="form-row">
                <label class="form-label"></label>
                <button type="submit" class="button" style="width:100px;">确定</button>
              </li>
            </ul>
            <p class="registration__terms" style="font-size: 12px; margin-top: 25px; padding-left: 405px;"> 当您进行注册即表示您同意接受易发国际的<a href="#" target="_blank" rel="noopener">「服务条款」</a>。 </p>
          </form>
        </section>
        <section class="registration-step3">
          <h3 class="success-title">恭喜您！已加入易发大家庭！</h3>
          <ul class="registered-info-table off">
            <li class="row">
              <div class="label">账号</div>
              <div class="value">mat88993</div>
            </li>
            <li class="row">
              <div class="label">密码</div>
              <div class="value">**********</div>
            </li>
            <li class="row">
              <div class="label">安全密码</div>
              <div class="value" style="font-size: 20px; color: #eb0a35; font-weight: bold;">2456</div>
            </li>
          </ul>
          <p class="text-center" style="margin: 25px 0 56px;"> <i class="icon icon-padlock"></i><span class="secured-seal">【安全密码】</span>用于申请提款及完成各项验证，务必牢记在心。 </p>
          <p class="registration__login-btn text-center">
            <button type="button" class="button open-modal-login">立即登入</button>
          </p>
        </section>
      </div>
    </div>
  </article>
  <figure class="bg-registration"></figure>
</section>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      password: '',
      passwordFieldType: 'password'
    }
  },
  methods: {
    switchVisibility () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style scoped>

</style>
