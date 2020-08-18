<template>
  <section>
    <nav class="help-nav-wrapper">
      <ul class="help-nav">
        <li><router-link class="about-us" :to="{ name: 'About' }"><i class="icon"></i> <span class="label">关于易发国际</span></router-link></li>
        <li><router-link class="terms" :to="{ name: 'Terms' }"><i class="icon"></i> <span class="label">服务条款</span></router-link></li>
        <li><router-link class="privacy active" :to="{ name: 'Privacy' }"><i class="icon"></i> <span class="label">隐私权声明</span></router-link></li>
        <li><router-link class="responsible-gaming" :to="{ name: 'ResponsibleGaming' }"><i class="icon"></i> <span class="label">理性博彩</span></router-link></li>
        <li><router-link class="guide" :to="{ name: 'Guide' }"><i class="icon"></i> <span class="label">新手指南</span></router-link></li>
        <li><router-link class="contact" :to="{ name: 'Contact' }"><i class="icon"></i> <span class="label">客服中心</span></router-link></li>
      </ul>
    </nav>
    <article class="container">
      <h1 class="help-heading-wrapper"> <span class="help-heading">隐私权声明</span> </h1>
      <div class="help-content"> 易发国际非常重视您的隐私，并制订了「易发国际网站隐私权声明」，载明我们如何搜集、处理及利用您的个人资料。建议您阅读本声明， 以了解我们的作法：
        <dl>
          <dt>1. 客户基本资料的保护</dt>
          <dd> <span>本公司所取得的个人资料，仅供易发国际于其内部、依照原说明的使用目的和范围加以使用。当您注册成为本网站之会员时，根据所提供的服务性质， 本公司会请您 提供个人资料，包括：姓名、出生年月日、手机号码、电子信箱、银行卡号、银行账号、交易账户资料及其他相关的必要资料。</span> <span>易发国际将尽力以合理之技术及程序，保障所有个人资料之安全。</span> </dd>
          <dt>2. 我们是否会将所收取的资料与他人共享？</dt>
          <dd> <span>本公司确保客户的隐私权利，客户的资料仅于本公司搜集之特定目的必要范围内处理及利用，包含但不限于参与本公司相关业务、处理账务管理、个人资料查询、提供个人化服务、促销活动或商业及市场分析。</span> <span>在未经客户同意之下，除非事先说明、或依照相关法律规定，否则我们绝不会将您的个人资料提供给任何本公司以外的团体或其他第三者，也绝不会任意出售、 交换或出租任何您的个人资料给其他团体或个人。</span> </dd>
          <dt>3. 客户提供不实的账户资料</dt>
          <dd> <span>若您提供任何错误或不实的资料，除非另有说明不适合（未必需要）使用真实资料，易发国际有权拒绝提供您以该账号登入或使用网站之全部或部份服务。 易发国际亦有权处理违反使用规则会员的权利以保护其他会员之使用权益。</span> </dd>
        </dl>
      </div>
    </article>
    <div class="bg-help"></div>
  </section>
</template>

<script>
export default {
  name: 'privacy',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
