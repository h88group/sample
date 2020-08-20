<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <message-nav />
      <section class="member-message-wrapper">
        <div class="tab-content">
          <div id="inbox" class="tab-pane active" role="tabpanel">
            <section class="inbox-header">
              <p> 您现有<span class="message-notice-total">[0]</span>条留言信息，敬请查阅。 </p>
              <div>
                <label class="header__type" for="inbox_all">全部</label>
                <label class="header__type" for="inbox_info">通知</label>
                <label class="header__type" for="inbox_promo">优惠</label>
              </div>
            </section>
            <section class="inbox-wrapper">
              <div class="inbox-message-list">
                <input type="radio" id="inbox_all" name="inboxType" value="all">
                <ul class="table-body off" style="display:block">
                  <li class="table-row">
                    <div class="table-column content"> <img class="message__thumbnail" width="55" height="40" alt="message" src="https://media.wvwuwvuwvw.com/e8fe/images/inbox/notice.jpg"> <span>EG争锋群战第二波！</span> </div>
                    <div class="table-column timestamp">2020-08-18 16:05:54</div>
                    <div class="table-column status">已阅读</div>
                  </li>
                  <li class="table-row">
                    <div class="table-column content"> <img class="message__thumbnail" width="55" height="40" alt="message" src="https://media.wvwuwvuwvw.com/e8fe/images/inbox/notice.jpg"> <span>诈骗谣言！易发会员勿信！</span> </div>
                    <div class="table-column timestamp">2020-08-17 11:33:10</div>
                    <div class="table-column status">已阅读</div>
                  </li>
                </ul>
                <input type="radio" id="inbox_info" name="inboxType" value="info">
                <ul class="table-body off">
                  <li class="table-row">
                    <div class="table-column content"> <img class="message__thumbnail" width="55" height="40" alt="message" src="https://media.wvwuwvuwvw.com/e8fe/images/inbox/notice.jpg"> <span>EG争锋群战第二波！</span> </div>
                    <div class="table-column timestamp">2020-08-18 16:05:54</div>
                    <div class="table-column status">已阅读</div>
                  </li>
                  <li class="table-row">
                    <div class="table-column content"> <img class="message__thumbnail" width="55" height="40" alt="message" src="https://media.wvwuwvuwvw.com/e8fe/images/inbox/notice.jpg"> <span>诈骗谣言！易发会员勿信！</span> </div>
                    <div class="table-column timestamp">2020-08-17 11:33:10</div>
                    <div class="table-column status">已阅读</div>
                  </li>
                </ul>
                <input type="radio" id="inbox_promo" name="inboxType" value="promo">
                <ul class="table-body off">
                  <li class="table-row">
                    <div class="table-column content" style="color: #bababa;">暂无优惠信息</div>
                    <div class="table-column timestamp"></div>
                    <div class="table-column status"></div>
                  </li>
                </ul>
              </div>
              <div class="inbox-reading-pane">
                <div class="inbox-reading-pane__header">
                  <figure style="margin-bottom: 10px;"> <img width="290" height="80" src="https://media.wvwuwvuwvw.com/e8fe/images/inbox/large/notice.jpg"> </figure>
                  <h3 class="title">【通知】 <span>诈骗谣言！易发会员勿信！</span></h3>
                  <h4 class="timestamp">时间日期 <span style="margin-left: 10px;">2020-08-17 11:33:10</span></h4>
                </div>
                <div class="inbox-reading-pane__body">
                  <div>尊敬的客户 您好，<br>
                    <br>
                    近期有不法网站冒充易发国际欺骗用户，易发国际独立运营至今从无更名、无子公司，在近期亦无与其他网站合并，这都是不法份子的诡计！请大家务必关闭相关网站连结，避免掉入诈欺犯的圈套里。<br>
                    <br>
                    有任何问题，可随时透过「QQ：2877969013」或「易发微客服 ID：e8_service 及 e8_service28」，与客服联系！<br>
                    <br>
                    感谢您的支持！<br>
                    <br>
                    「易发国际」营运团队 敬上</div>
                </div>
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
  name: 'message',
  components: {
    CompMembersLeftMenu,
    MessageNav
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
