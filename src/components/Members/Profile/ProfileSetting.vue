<template>
  <div id="member-profile-binding" class="profile-settings-container tab-content">
    <figure class="member__rank"> <img src="https://media.wvwuwvuwvw.com/e8fe/images/member/member-badges/普通会员.jpg" width="290" height="116" alt="普通会员">
      <figcaption class="member__rank-title"> <img src="https://www.e8lp.com/images/member/member-badges/普通会员.svg" width="76" height="25" alt="普通会员"> </figcaption>
    </figure>
    <ul class="profile-settings off">
      <li class="setting-item"> <i class="setting-icon e8-shield"></i>
        <h3> 安全设置 <br>
          <small>绑定所有资料，提升安全保障。</small> </h3>
      </li>
      <li class="setting-item"> <i class="setting-icon username verified"></i> 已绑定姓名 </li>
      <li class="setting-item"> <i class="setting-icon identification"></i> <a class="open-modal" data-modal="#modal-ic-binding" role="button">未绑定</a>身份证号码 </li>
      <li class="setting-item"> <i class="setting-icon email verified"></i> 已绑定邮箱 </li>
      <li class="setting-item"> <i class="setting-icon phone"></i> <a class="open-modal" data-modal="#modal-phone-binding" role="button">未绑定</a>手机 </li>
      <li>
        <p class="form-error-text"></p>
      </li>
      <li> *绑定资料及进行<span class="highlight">10次</span>存款即可领取奖赏。 </li>
      <li>奖金只需达到5千元流水量即可申请提款</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'profile-setting',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
