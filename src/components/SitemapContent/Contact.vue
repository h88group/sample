<template>
  <section>
    <nav class="help-nav-wrapper">
      <ul class="help-nav">
        <li><router-link class="about-us" :to="{ name: 'About' }"><i class="icon"></i> <span class="label">关于易发国际</span></router-link></li>
        <li><router-link class="terms" :to="{ name: 'Terms' }"><i class="icon"></i> <span class="label">服务条款</span></router-link></li>
        <li><router-link class="privacy" :to="{ name: 'Privacy' }"><i class="icon"></i> <span class="label">隐私权声明</span></router-link></li>
        <li><router-link class="responsible-gaming" :to="{ name: 'ResponsibleGaming' }"><i class="icon"></i> <span class="label">理性博彩</span></router-link></li>
        <li><router-link class="guide" :to="{ name: 'Guide' }"><i class="icon"></i> <span class="label">新手指南</span></router-link></li>
        <li><router-link class="contact active" :to="{ name: 'Contact' }"><i class="icon"></i> <span class="label">客服中心</span></router-link></li>
      </ul>
    </nav>
    <article id="help-contact">
      <section class="contact-us-wrapper container">
        <h1 class="help-heading-wrapper"> <span class="help-heading">24小时线上客服</span> </h1>
        <div class="contact-us tab-pane" role="tabpanel">
          <figure class="text-center"> <img src="../../assets/images/24_7days.jpg" width="96" height="68" alt="全天候无休服务"> </figure>
          <div class="contact-channels">
            <div class="channel">
              <figure class="channel__icon"></figure>
              <div class="channel__content">
                <h3 class="channel__title">电子邮件</h3>
                <a class="channel__btn copy-to-clipboard" data-clipboard-text="info@e8casino.com" role="button">info@e8casino.com</a> </div>
            </div>
            <div class="channel">
              <figure class="channel__icon skype"></figure>
              <div class="channel__content">
                <h3 class="channel__title">SKYPE</h3>
                <a class="channel__btn copy-to-clipboard" data-clipboard-text="e8_service" role="button">e8_service</a> </div>
            </div>
            <div class="channel">
              <figure class="channel__icon qq"></figure>
              <div class="channel__content">
                <h3 class="channel__title">QQ</h3>
                <a class="channel__btn copy-to-clipboard" data-clipboard-text="2877969013" role="button">2877969013</a> </div>
            </div>
          </div>
          <div class="social-channels">
            <figure class="wechat"> <img src="../../assets/images/wechat.png"  width="54" height="53" alt="WECHAT 微信">
              <figcaption>WECHAT 微信</figcaption>
            </figure>
            <a class="e8service copy-to-clipboard" href="wechat:e8_service" data-clipboard-text="e8_service"> <img src="../../assets/images/q1.png"  width="100" height="100" alt="易发客服号">
            <div class="e8service__note">
              <h3>易发微客服（1） <span class="highlight">e8_service</span></h3>
            </div>
            </a> <a class="e8service copy-to-clipboard" href="wechat:e8_service28" data-clipboard-text="e8_service28"> <img src="../../assets/images/q1.png"  width="100" height="100" alt="易发客服号">
            <div class="e8service__note">
              <h3>易发微客服（2） <span class="highlight">e8_service28</span></h3>
            </div>
            </a> </div>
        </div>
      </section>
    </article>
    <div class="bg-help"></div>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
