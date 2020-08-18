<template>
  <section>
    <nav class="help-nav-wrapper">
      <ul class="help-nav">
        <li><router-link class="about-us" :to="{ name: 'About' }"><i class="icon"></i> <span class="label">关于易发国际</span></router-link></li>
        <li><router-link class="terms" :to="{ name: 'Terms' }"><i class="icon"></i> <span class="label">服务条款</span></router-link></li>
        <li><router-link class="privacy" :to="{ name: 'Privacy' }"><i class="icon"></i> <span class="label">隐私权声明</span></router-link></li>
        <li><router-link class="responsible-gaming active" :to="{ name: 'ResponsibleGaming' }"><i class="icon"></i> <span class="label">理性博彩</span></router-link></li>
        <li><router-link class="guide" :to="{ name: 'Guide' }"><i class="icon"></i> <span class="label">新手指南</span></router-link></li>
        <li><router-link class="contact" :to="{ name: 'Contact' }"><i class="icon"></i> <span class="label">客服中心</span></router-link></li>
      </ul>
    </nav>
    <article class="container">
      <h1 class="help-heading-wrapper"> <span class="help-heading">理性博彩责任声明</span> </h1>
      <div class="help-content">
        <h2 style="font-size: 16px; color: #505050; font-weight: 700; margin-bottom: 20px;">理性博彩 幸福生活</h2>
        <p class="help__paragraph"> 什么是博彩？让我们来说一说。 </p>
        <p class="help__paragraph"> 博彩，就本质而言，是一种消遣行为，也是一种付费的娱乐方式，但绝对不是在「赌」身家。 <br>
          它是众多娱乐选项中的一种，而不是唯一的一种，行为人要为自己的行为负责任，建立正确的博彩态度。 <br>
          「小赌怡情、适可而止」是进行博彩游戏最重要的守则，也是易发国际所坚持的博彩态度。 <br>
          一直以来，公司都致力于推动理性博彩，鼓励玩家以负责任且理智的态度来参与游戏，不让博彩游戏，成为个人生活负担、感情寄托或生活来源。 <br>
          我们关心每一位会员，努力为每位会员提供舒适、愉快，而又安全的娱乐体验是我们的责任；然而，博彩活动所带来的刺激感，偶尔也会影响会员的自制力及判断力。
          用于博彩的预算超支是博彩爱好者经常出现的问题，我们希望会员在易发国际的所有投注都是负责任的投注，紧记：博彩活动要有底线。 <br>
          任何超出自身能力，或通过借贷方式参与的博彩投入都是不明智的行为，这会对您自身和您周围的人造成伤害。 <br>
          只有在能够承担损失的情况下才博彩，这才是负责任的博彩态度。 <br>
          因此，为免博彩活动影响到您的日常工作与生活，我们建议您遵守以下原则： </p>
        <ul style="padding-left: 0; list-style-position: inside;">
          <li>游戏前设定可负担的投注金额，以防超支。</li>
          <li>设定时间限制并严格遵守。</li>
          <li>记录每次的博彩活动。</li>
          <li>谨记博彩不是您的主要收入来源。</li>
          <li>避免有急于回本的心理。</li>
          <li>不要为博彩而进行借贷。</li>
          <li>切勿在酒精或任何药物的影响下进行游戏。</li>
          <li>要经常休息。</li>
          <li>绝不在担心、紧张或者沮丧的情况下进行投注。</li>
        </ul>
        <p class="help__paragraph"> 如果您认为自己已出现了危机，请您尝试自我控制，控制自己停止两周或一个月的博彩活动，让自己冷静下来。 <br>
          人在心绪不稳的时候，往往很难做出明智的决定。 <br>
          如果您无法办到，易发国际愿意遵照您的意愿暂时性或永久性关闭您的账户，把潜在的博彩伤害降到最低，以创造一个安全和负责任的游戏环境。 <br>
          我们衷心希望所有会员都能在可负担的范围内尽情畅玩，体验精彩刺激的游戏感，但对少数在游戏中，没有欢愉体验的会员，只要您想强迫自己不再进行游戏，或决定永远关闭您的易发账户，您都可以随时与我们的客服联系办理。 </p>
        <p>易发国际，关心您！</p>
      </div>
    </article>
    <div class="bg-help"></div>
  </section>
</template>

<script>
export default {
  name: 'responsible-gaming',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
