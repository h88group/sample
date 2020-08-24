<template>
  <div v-if="showModal" class="modal-wrapper">
    <div class="modal promotion-detail-wrapper is-visible">
      <i @click="showModal = false" class="close-modal js-close-modal"></i>
      <section class="modal__body promotion-details-container">
        <figure> <img class="promotion__avatar" src="../../assets/images/promotions/282.jpg" width="958" height="258" alt="金牌大赢家">
          <figcaption> 金牌大赢家 </figcaption>
        </figure>
        <div class="promotion-details">
          <p> 指定游戏：WM真人百家乐投注庄/闲/和（任一项），<br>
            <span style="color: red;">获胜</span>并出现<span style="color: red;">「指定牌型」</span>就能领取额外奖励啦！<br>
            让您的喜悦再加倍！ </p>
          <h3 style="margin-top: 20px;">指定牌型及奖金：</h3>
          <table class="promotion-table">
            <tbody>
              <tr>
                <th>牌型</th>
                <th>奖金</th>
                <th>上限</th>
              </tr>
              <tr>
                <td>皇家同花顺</td>
                <td>盈利×20倍</td>
                <td>5,000.00</td>
              </tr>
              <tr>
                <td>同花顺 </td>
                <td>盈利×10倍</td>
                <td>3,000.00</td>
              </tr>
              <tr>
                <td>四条 </td>
                <td>盈利×5倍</td>
                <td>1,000.00</td>
              </tr>
              <tr>
                <td>葫芦 </td>
                <td>盈利×3倍</td>
                <td>1,000.00</td>
              </tr>
              <tr>
                <td>同花 </td>
                <td>盈利×2倍</td>
                <td>1,000.00</td>
              </tr>
              <tr>
                <td>顺子 </td>
                <td>盈利×1倍</td>
                <td>1,000.00</td>
              </tr>
            </tbody>
          </table>
          <h3 style="margin-top: 20px;">申请方式：</h3>
          <ul class="off">
            <li>步骤一：点击「<a onclick="alert(&quot;请先登入账号&quot;)">申请优惠</a>」</li>
            <li>步骤二：选择优惠类别：「金牌大赢家」</li>
            <li>步骤三：在「内容」处填写：（牌局编号XXXX；牌型XXX）</li>
            <li>步骤四：按「提交」，大功告成！</li>
          </ul>
          <div class="promotion-terms">
            <h3> 条例与规则</h3>
            <ul class="terms-details">
              <li>玩家每日可申请5次。</li>
              <li>投注胜方以「非例牌」达到指定牌型，即符合申请条件。</li>
              <li>每局限定投注「庄/闲/和」任一项，不可同局投两项。</li>
              <li>玩家必须在投注日提交申请，逾期无效。</li>
              <li>获取奖金后，限定WM真人平台完成5倍流水，即可提款。</li>
              <li style="display: none;">一般优惠条例及规则应用于此优惠活动。</li>
              <div class="canclose" style="display:none;">
                <li>易发代理玩家均不符合申请此项优惠资格。</li>
                <li>玩家账号须绑定姓名、有效身份证号码、电子邮件以及联络电话方符合参与此优惠活动。</li>
                <li>每笔“存款编号”或“投注编号”只能成功申请一次优惠，如欲想同时参与其他优惠活动，可另再存款或投注申请。</li>
                <li>玩家领取红利后须在90日内进行投注，否则将会扣除该笔红利。</li>
                <li>「电子游戏」"休闲游戏"将不被计算流水投注额内。</li>
                <li> 有效投注额只限于有输赢结果的投注。任何「非正规投注」，「无效投注」以及「无风险投注」，一律不计算为有效投注额。
                  <ul>
                    <li>「非正规投注」指以软件，对赌，打水等等投注方式</li>
                    <li>「无效投注」任何游戏或赛事结果，又或是各种原因导致退还本金的投注</li>
                    <li>「无风险投注」指同一局/场中同时下注正反两种结果的对冲投注（如在百家乐中同时投注庄闲）</li>
                  </ul>
                </li>
                <li>无论是个人或团体，如有任何威胁、滥用、骗取「易发国际」的优惠行为，经财务审核，「易发国际」保留取消、收回优惠红利以及优惠红利产生的赢利，以支付一切行政费用。</li>
                <li>每名会员只能拥有一个账户，如发现同一会员拥有多个不同账户，或有任何骗取「易发国际」的优惠行为（违反「服务条款」行为者），「易发国际」有权冻结该会员的账户使用权，并保留取消、收回所派出的红利或礼品之权利，而无须另行通知。</li>
                <li>「易发国际」保留权利随时更改此优惠之条例，而无须另行通知。如有任何争议，「易发国际」保留最终决定权。</li>
              </div>
            </ul>
          </div>
        </div>
        <p class="btn_close"><a @click="showModal = false" href="#" role="button">立即参与</a></p>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'promotion-modal',
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
