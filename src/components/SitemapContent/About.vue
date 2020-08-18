<template>
  <section>
    <nav class="help-nav-wrapper">
      <ul class="help-nav">
        <li><router-link class="about-us active" :to="{ name: 'About' }"><i class="icon"></i> <span class="label">关于易发国际</span></router-link></li>
        <li><router-link class="terms" :to="{ name: 'Terms' }"><i class="icon"></i> <span class="label">服务条款</span></router-link></li>
        <li><router-link class="privacy" :to="{ name: 'Privacy' }"><i class="icon"></i> <span class="label">隐私权声明</span></router-link></li>
        <li><router-link class="responsible-gaming" :to="{ name: 'ResponsibleGaming' }"><i class="icon"></i> <span class="label">理性博彩</span></router-link></li>
        <li><router-link class="guide" :to="{ name: 'Guide' }"><i class="icon"></i> <span class="label">新手指南</span></router-link></li>
        <li><router-link class="contact" :to="{ name: 'Contact' }"><i class="icon"></i> <span class="label">客服中心</span></router-link></li>
      </ul>
    </nav>
    <article class="container">
      <h1 class="help-heading-wrapper"> <span class="help-heading">关于易发国际</span> </h1>
      <div class="help-content" style="padding: 0 56px">
        <section class="column"> <img src="../../assets/images/cert.png" alt="Interactive Gaming License" width="291" height="390"> </section>
        <section class="company-info column">
          <h2><span style="vertical-align: text-bottom;">Lucky City Group Limited /</span> <span class="chinese">经营权售书</span></h2>
          <div class="paper">
            <h3><i class="icon"></i>关于<span>易发国际</span></h3>
            <p>易发国际娱乐公司（简称「易发国际」），成立于1998年，总部设在英国伦敦，并在菲律宾领取经营执照，是一家合法经营的线上娱乐公司。公司所推出的游戏与服务，均受菲律宾卡格扬经济特区（CEZA, Cagayan Special Economic Zone Authority）和第一卡格扬(FCLRC, First Cagayan Leisure and Resort Corporation)的授权和监管。「易发国际」在世界各地皆设有服务办事处，协助客户处理日常事务。官方网站标定时间为国际时区东八区时间，即港澳时间（GMT+8）。</p>
          </div>
          <div class="paper">
            <h3><i class="icon shape2"></i>安全<span>系统</span></h3>
            <p>客户所提供的个人资料，将透过128位SSL加密技术传输与保管，确保客户的密码、账号、私人资讯、交易资讯等机密性资料的安全，使它于网络上传输时，不会被第三者窃知。严格的安全管理系统，确保客户所有交易活动于网络传输时的资料正确性、隐密性及安全性。</p>
            <p>客户完全不必担心资金安全，「易发国际」对系统统一监控、统一维护，及时排除客户面对的问题。安全、稳定、高效的系统环境，确保客户资金有最好的安全性。</p>
          </div>
          <div class="paper">
            <h3><i class="icon shape2"></i>隐私<span>保护政策</span></h3>
            <p>「易发国际」非常重视客户的隐私权利，所取得的个人资料，仅供易发国际于其内部、依照原说明的使用目的和范围加以使用。在未经客户同意之下，除非事先说明、或依照相关法律规定，否则公司绝不会加以泄漏、转售或与其他机构进行交换。公司会将这些资料加密储存在安全的伺服器中，以保护客户资料使用之安全。</p>
          </div>
          <div class="paper">
            <h3><i class="icon shape3"></i>诚信<span>经营</span>、热诚<span>服务</span></h3>
            <p>「诚信经营」是我们的企业灵魂，「热诚服务」是我们的优良传统。</p>
            <p>「易发国际」以公正、安全为经营信念，透过完整的监督机制、严谨的作业程序与规格、国际认证的安全技术，为客户打造完美的游戏体验，确保每一场次的娱乐游戏，都是在公平、公正、公开的状态下进行，呈现独树一帜的娱乐品牌，是亚洲No.1娱乐公司。</p>
            <p>「易发国际」客户免收开户费用，即可享受高画质／高素质的游戏体验、快速与便捷的存／提款到账服务等，更重要的是，全天候不打烊的「客服中心」，为客户提供最即时的关怀与协助，透过多元联系管道，如客服信箱、服务专线、线上即时通、微信、QQ、SKYPE、等，快速回复客户最想知道的问&amp;答。</p>
          </div>
        </section>
      </div>
    </article>
    <div class="bg-help"></div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
