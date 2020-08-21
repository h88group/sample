<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <cashier-nav />
      <section class="member-cashier-wrapper">
        <div class="tab-content">
          <button class="cashier-info-btn open-modal withdrawal" type="button" data-modal="#modal-withdrawal-info">提款须知</button>
          <button class="cashier-info-btn open-modal deposit" type="button" data-modal="#modal-deposit-info" style="display: block;">存款须知</button>
          <div id="cashier-deposit" class="cashier-deposit tab-pane active" role="tabpanel">
            <p>请选择您的存款方式 :</p>
            <ul class="payment-options">
              <li><a @click.prevent="setActiveStep('step-deposit1')" :class="{ active: isActiveStep('step-deposit1') }" href="#step-deposit1">支付宝/微信支付</a></li>
              <li><a @click.prevent="setActiveStep('step-deposit2')" :class="{ active: isActiveStep('step-deposit2') }" href="#step-deposit2">支付宝 3</a></li>
              <li><a @click.prevent="setActiveStep('step-deposit3')" :class="{ active: isActiveStep('step-deposit3') }" href="#step-deposit3">线上支付</a></li>
            </ul>
            <div id="step-deposit1" class="payment-options-content" :class="{ 'active': isActiveStep('step-deposit1') }">
              <p>支付宝单笔存款下限为 <strong>RMB 1,999.00</strong>, 上限为 <strong>RMB 8,900.00</strong></p>
              <p>微信支付单笔存款下限为 <strong>RMB 1,980.00</strong>, 上限为 <strong>RMB 8,900.00</strong></p>
              <div style="margin-bottom: 9px;">
                <label for="form-deposit-amount" class="form-label">存款金额</label>
                <input id="form-deposit-amount" class="amountOnly" type="text" name="deposit_amount">
                <span class="form-error-text">请输入存款金额</span> </div>
              <p>
                <label for="form-withdrawal-amount" class="form-label">短信通知</label>
                <label>
                  <input type="radio" name="deposit_sms" id="deposit_sms" value="1" @click="showModalPhone()" class="open-modal">
                  通知</label>
                <label style="margin-left:20px;">
                  <input type="radio" name="deposit_sms" value="0" checked="">
                  不通知</label>
                <label style="margin-left:20px;">
                  <input type="checkbox" name="deposit_sms_bind" value="1">
                  绑定通知选项</label>
              </p>
              <p>
                <label class="form-label"></label>
                <button type="submit" class="button red">下一步</button>
              </p>
            </div>
            <div id="step-deposit2" class="payment-options-content" :class="{ 'active': isActiveStep('step-deposit2') }">
              <p><span>支付宝 3</span>单笔存款下限为 <strong>RMB <span>300.00</span></strong>, 上限为 <strong>RMB <span>5,000.00</span></strong> </p>
              <div style="margin-bottom: 9px;">
                <label for="form-deposit-amount" class="form-label">存款金额</label>
                <input id="form-deposit-amount" class="amountOnly" type="text" name="deposit_amount">
                <span class="form-error-text">请输入存款金额</span> </div>
              <p>
                <label for="form-withdrawal-amount" class="form-label">短信通知</label>
                <label>
                  <input type="radio" name="deposit_sms" id="deposit_sms" value="1" @click="showModalPhone()" class="open-modal">
                  通知</label>
                <label style="margin-left:20px;">
                  <input type="radio" name="deposit_sms" value="0" checked="">
                  不通知</label>
                <label style="margin-left:20px;">
                  <input type="checkbox" name="deposit_sms_bind" value="1">
                  绑定通知选项</label>
              </p>
              <p>
                <label class="form-label"></label>
                <button type="submit" class="button red">下一步</button>
              </p>
            </div>
            <div id="step-deposit3" class="payment-options-content" :class="{ 'active': isActiveStep('step-deposit3') }">
              <p><span>线上支付</span>单笔存款下限为 <strong>RMB <span>100.00</span></strong>, 上限为 <strong>RMB <span>50,000.00</span></strong> </p>
              <div style="margin-bottom: 9px;">
                <label for="form-deposit-amount" class="form-label">存款金额</label>
                <input id="form-deposit-amount" class="amountOnly" type="text" name="deposit_amount">
                <span class="form-error-text">请输入存款金额</span> </div>
              <p>
                <label for="form-withdrawal-amount" class="form-label">短信通知</label>
                <label>
                  <input type="radio" name="deposit_sms" id="deposit_sms" value="1" @click="showModalPhone()" class="open-modal">
                  通知</label>
                <label style="margin-left:20px;">
                  <input type="radio" name="deposit_sms" value="0" checked="">
                  不通知</label>
                <label style="margin-left:20px;">
                  <input type="checkbox" name="deposit_sms_bind" value="1">
                  绑定通知选项</label>
              </p>
              <p>
                <label class="form-label"></label>
                <button type="submit" class="button red">下一步</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <profile-modal-phone ref="profileModalPhone" />
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import CashierNav from './CashierNav'
import ProfileModalPhone from '../Profile/ProfileModal/ProfileModalPhone'

export default {
  name: 'cashier',
  components: {
    CompMembersLeftMenu,
    CashierNav,
    ProfileModalPhone
  },
  data () {
    return {
      activeItemStep: 'step-deposit1'
    }
  },
  methods: {
    isActiveStep (menuItemStep) {
      return this.activeItemStep === menuItemStep
    },
    setActiveStep (menuItemStep) {
      this.activeItemStep = menuItemStep
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
