<template>
  <section>
    <nav class="help-nav-wrapper">
      <ul class="help-nav">
        <li><router-link class="about-us" :to="{ name: 'About' }"><i class="icon"></i> <span class="label">关于易发国际</span></router-link></li>
        <li><router-link class="terms active" :to="{ name: 'Terms' }"><i class="icon"></i> <span class="label">服务条款</span></router-link></li>
        <li><router-link class="privacy" :to="{ name: 'Privacy' }"><i class="icon"></i> <span class="label">隐私权声明</span></router-link></li>
        <li><router-link class="responsible-gaming" :to="{ name: 'ResponsibleGaming' }"><i class="icon"></i> <span class="label">理性博彩</span></router-link></li>
        <li><router-link class="guide" :to="{ name: 'Guide' }"><i class="icon"></i> <span class="label">新手指南</span></router-link></li>
        <li><router-link class="contact" :to="{ name: 'Contact' }"><i class="icon"></i> <span class="label">客服中心</span></router-link></li>
      </ul>
    </nav>
    <article class="container">
      <h1 class="help-heading-wrapper"> <span class="help-heading">服务条款</span> </h1>
      <div class="help-content">
        <dl>
          <dt>1. 服务条款的确认与接纳</dt>
          <dd> <span>当您在使用易发国际娱乐公司（以下称「本公司」）所提供的各项服务（以下称「本服务」）时，应详细阅读本服务条款。</span> <span>您如有违反本服务条款，本公司得随时依据相关规则暂停或中止您使用本服务，您不得异议。</span> </dd>
          <dt>2. 服务条款之增订及修改</dt>
          <dd> <span>本公司保留将来新增、修改或删除本服务之全部或一部之权利，您同意本公司得不另行个别通知，且不得因此要求任何补偿或赔偿。</span> <span>您如有违反本服务条款，本公司得随时依据相关规则暂停或中止您使用本服务，您不得异议。</span> </dd>
          <dt>3. 个人风险承担</dt>
          <dd> <span>凡参与本服务，即视为您同意本公司所提供的服务是公平、公正与合理。您同意使用本服务是基于您的个人意愿，并同意自负任何风险。</span> <span>您如有使用本公司的软体下载安装，或发生任何技术性问题、网络问题、人为操作疏失等不明因素，而直接、间接、附带的或因此而导致之衍生性损失，本公司概不负责。</span> <span>无论在任何情况下，因卫星收讯不良或延误、网络中断，或您使用本站服务时的失误、疏忽，或对本站内容的误解所产生的任何损失，本公司概不负责。</span> </dd>
          <dt>4. 个人隐私安全</dt>
          <dd> <span>您有义务保障本身账户及密码的隐私安全，并且不应允许第三方以任何形式，通过该账户及密码参与本公司的所有游戏，否则，一切责任需由您自行承担。</span> </dd>
          <dt>5. 不诚实/不正当游戏行为</dt>
          <dd> <span>注册多重账号</span>
            <ul class="off">
              <ul>
                <li>您只允许在本公司启动一个账户。</li>
                <li>凡同一账户注册资料、同一存/提款卡号、同一 IP 地址（如123.45.678.89、123.45.678.88、123.45.677.80 IP 位置相近，将被判为相同 IP）即视为同一人，或列入可疑账户。</li>
                <li>您如有多个账户，本公司有权冻结您的账户使用权，乃至取消账户内所有胜出的投注。</li>
                <li>您如与亲属共同使用多个不同的账户，本公司有权限制每人各保留最多一个账户。</li>
              </ul>
            </ul>
            <span>红利猎人</span>
            <ul class="off">
              <ul>
                <li>本公司严禁任何个人或团队滥用公司优惠红利，进行套利行为，如以个人或集体模式进行「无风险」投注，或其他恶意套利方式。</li>
              </ul>
            </ul>
            <span>对赌/对冲投注</span>
            <ul class="off">
              <ul>
                <li>本公司严厉禁止所有对冲、跨网站对赌、多账号等投注方式。</li>
                <li>严禁用户与其他博彩玩客勾结，或企图与其他赌客勾结，于「易发国际」谋取盈利。</li>
              </ul>
            </ul>
            <span>非法软件投注</span>
            <ul class="off">
              <ul>
                <li>本公司严禁用户使用专门设计于干扰/捣毁/计算牌局结果的系统软件 ( 包括机械、电脑、Bots、或其他自动化系统软件 ) ，来干扰游戏运作或影响游戏之公平性。</li>
              </ul>
            </ul>
            <span>专研系统漏洞</span>
            <ul class="off">
              <ul>
                <li>本公司严禁任何利用系统漏洞、BUGS、版本更新缺陷、第三方病毒攻击等，为自己或他人牟利的行为。</li>
              </ul>
            </ul>
            <span>恶意申请「退款」</span>
            <ul class="off">
              <ul>
                <li>本公司严禁用户个人，或促使他人对本站实施恶意或不诚实「退款」行为，或谎称账户信息资料被盗用，或以其他理由，否认以其账户进行的任何交易并要求「退款」。</li>
              </ul>
            </ul>
            <span>若用户在本公司触犯以上任一条例，本公司有权冻结该账号，并没收该帐号所得之盈利。</span> </dd>
          <dt>6. 闲置账户的处置</dt>
          <dd> <span>您如长达 12 个月或以上未登入参与任何游戏，本公司有权冻结您的静止账户，您如需要恢复账户使用权，您需向本公司申请办理账户激活手续，经核准通过，您即可继续使用本服务。</span> <span>您如超过 24 个月或以上未登入参与任何游戏，本公司有权停止您的账户服务，并将闲置的账户余额捐赠慈善公益事业。</span> </dd>
          <dt>7. 交易规则</dt>
          <dd> <span>您在使用本公司所提供的存、提款服务前，应详细阅读、理解并同意本公司的「存款须知」与「提款须知」条款。</span> <span>无论在任何情况下，本公司保留在任何时候撤回、修改或取消任何优惠活动或交易条款的最终决定权，且不承担任何解释说明的责任。</span> </dd>
          <dt>8. 免责声明</dt>
          <dd> <span>请确定您已满18岁或法定年龄，否则请勿浏览本站。</span> <span>若您居住地所在国家已明文规定线上博弈为非法行为，本公司无意邀请您在居住地所在国家非法使用本服务平台。</span> <span>请您自行确认居住地所在国家使用线上博弈是否合法，并自负全责；如有违法之事，本公司概不负责。</span> </dd>
        </dl>
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
