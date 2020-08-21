<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <message-nav />
      <section class="member-message-wrapper">
        <div class="tab-content">
          <div id="news" class="tab-pane active" role="tabpanel">
            <ul class="news-header">
              <li><a @click.prevent="setActiveStep('news_all')" :class="{ active: isActiveStep('news_all') }" href="#news_all">全部</a></li>
              <li><a @click.prevent="setActiveStep('news_general')" :class="{ active: isActiveStep('news_general') }" href="#news_general">一般</a></li>
              <li><a @click.prevent="setActiveStep('news_maintenance')" :class="{ active: isActiveStep('news_maintenance') }" href="#news_maintenance">维护</a></li>
              <li><a @click.prevent="setActiveStep('news_transaction')" :class="{ active: isActiveStep('news_transaction') }" href="#news_transaction">交易</a></li>
              <li><a @click.prevent="setActiveStep('news_promo')" :class="{ active: isActiveStep('news_promo') }" href="#news_promo">优惠</a></li>
            </ul>
            <section class="news-wrapper">
                <div class="news-content" id="news_all" :class="{ 'active': isActiveStep('news_all') }">
                  <ul class="news-list">
                    <li> <span class="date">2020-08-21</span> <span class="news-item">【通告】：「EG平台」将于8月21日13:00至13:30进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「IG平台」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「IM平台」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「IM电竞」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「MWG平台」将于8月24日10:00至12:00进行维护，届时所有玩家暂时无法进行户内转账及游戏，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「PT平台」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「SG及MT棋牌」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-03</span> <span class="news-item">【游戏通告】：超强真人平台「WM」已隆重推出，欢迎各位点击游戏享受其中！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【重要通告】：近期发现不法分子冒充「易发微信客服」或「易发QQ客服」进行诈骗行为，在此声明易发微信客服号为「ID：e8_service」，「ID：e8_service28」以及易发QQ客服号为「QQ：2877969013」。绝无其他！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【游戏通告】：由于配合菲律宾政府的防疫政策，「HG、Ebet、AG真人视频」平台将会关闭大部分游戏桌，目前不受影响的平台有EA &amp; N2 &amp; EG真人视频，欢迎大家选择使用！防止疫情，人人有责，世界加油！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【通告】：近期发现打开易发官网可能会出现「网站跳转」！在此声明「易发国际」独立运营至今从无更名、无子公司，亦无与其他网站合拼。 请尊客务必谨慎提防「诈骗集团」，切勿透露任何「账户资料及密码」给任何人！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【通告】：近期发现不法分子以短讯方式冒充「易发国际」进行优惠诈骗行为，在此声明易发国际并没推出短讯领奖金活动，一切皆以「易发官网」优惠活动为准！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【通告】：我们不会向用户索取账号密码，切勿向任何人泄露个人敏感信息</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【通告】：「中国建设银行」以及「中国农业银行」每日22:00至隔日00:00将进行二小时结算，促请各位玩家在这段时间使用其他银行进行转账，若带来不便，敬请见谅。</span> </li>
                  </ul>
                </div>
                <div class="news-content" id="news_general" :class="{ 'active': isActiveStep('news_general') }">
                  <ul class="off news-list">
                    <li> <span class="date">2020-08-03</span> <span class="news-item">【游戏通告】：超强真人平台「WM」已隆重推出，欢迎各位点击游戏享受其中！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【重要通告】：近期发现不法分子冒充「易发微信客服」或「易发QQ客服」进行诈骗行为，在此声明易发微信客服号为「ID：e8_service」，「ID：e8_service28」以及易发QQ客服号为「QQ：2877969013」。绝无其他！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【通告】：近期发现打开易发官网可能会出现「网站跳转」！在此声明「易发国际」独立运营至今从无更名、无子公司，亦无与其他网站合拼。 请尊客务必谨慎提防「诈骗集团」，切勿透露任何「账户资料及密码」给任何人！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【通告】：近期发现不法分子以短讯方式冒充「易发国际」进行优惠诈骗行为，在此声明易发国际并没推出短讯领奖金活动，一切皆以「易发官网」优惠活动为准！</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【通告】：我们不会向用户索取账号密码，切勿向任何人泄露个人敏感信息</span> </li>
                  </ul>
                </div>
                <div class="news-content" id="news_maintenance" :class="{ 'active': isActiveStep('news_maintenance') }">
                  <ul class="off news-list">
                    <li> <span class="date">2020-08-21</span> <span class="news-item">【通告】：「EG平台」将于8月21日13:00至13:30进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「IG平台」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「IM平台」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「IM电竞」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「MWG平台」将于8月24日10:00至12:00进行维护，届时所有玩家暂时无法进行户内转账及游戏，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「PT平台」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-12</span> <span class="news-item">【通告】：「SG及MT棋牌」将于8月24日10:00至12:00进行维护，届时玩家们将暂时无法进行游戏及户内转账，直到维护完毕。</span> </li>
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【游戏通告】：由于配合菲律宾政府的防疫政策，「HG、Ebet、AG真人视频」平台将会关闭大部分游戏桌，目前不受影响的平台有EA &amp; N2 &amp; EG真人视频，欢迎大家选择使用！防止疫情，人人有责，世界加油！</span> </li>
                  </ul>
                </div>
                <div class="news-content" id="news_transaction" :class="{ 'active': isActiveStep('news_transaction') }">
                  <ul class="off news-list">
                    <li> <span class="date">2020-08-01</span> <span class="news-item">【通告】：「中国建设银行」以及「中国农业银行」每日22:00至隔日00:00将进行二小时结算，促请各位玩家在这段时间使用其他银行进行转账，若带来不便，敬请见谅。</span> </li>
                  </ul>
                </div>
                <div class="news-content" id="news_promo" :class="{ 'active': isActiveStep('news_promo') }">
                  <p class="text-center">暂无优惠公告</p>
                </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import MessageNav from './MessageNav'

export default {
  name: 'news',
  components: {
    CompMembersLeftMenu,
    MessageNav
  },
  data () {
    return {
      activeItemStep: 'news_all'
    }
  },
  methods: {    
    isActiveStep (menuItemStep) {
      return this.activeItemStep === menuItemStep
    },
    setActiveStep (menuItemStep) {
      this.activeItemStep = menuItemStep
    }
  }
}
</script>

<style scoped>

</style>
