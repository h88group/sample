<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <message-nav />
      <section class="member-message-wrapper">
        <div class="tab-content">
          <div id="admin-inbox" class="admin-inbox tab-pane active" role="tabpanel">
            <form>
              <p class="form-error-message"></p>
              <p>亲爱的贵客：</p>
              <p>很高兴能为您服务，我们非常在意您的建议或投诉，您可使用以下表格，传达您的意见或想法，客服总监将亲自为您服务，谢谢！</p>
              <p>
                <label class="form-label">姓名:</label>
                <input type="text" name="form-username" placeholder="输入您的姓名" class="form-error">
                <span class="form-error-message" style="margin-left: 95px;">请输入您的姓名。</span>
              </p>
              <p>
                <label class="form-label">联络电话:</label>
                <input type="text" name="form-phone" placeholder="输入您的手机号码">
                <span class="form-error-message" style="margin-left: 95px;"></span> </p>
              <p>
                <label class="form-label">电子邮箱:</label>
                <input type="text" name="form-email" placeholder="输入您的电子邮箱">
                <span class="form-error-message" style="margin-left: 95px;"></span> </p>
              <p> <span class="form-label">反馈类型:</span>
                <label style="margin-right: 10px;">
                  <input type="radio" name="feedback_type" value="我要建议">
                  我要建议 </label>
                <label style="margin-right: 10px;">
                  <input type="radio" name="feedback_type" value="我要投诉">
                  我要投诉 </label>
                <label>
                  <input type="radio" name="feedback_type" value="我要留言">
                  我要留言 </label>
              </p>
              <p> <span class="form-label">回复通知:</span>
                <label style="margin-right: 10px;">
                  <input type="radio" name="reply_notification" value="no">
                  不需要 </label>
                <label>
                  <input type="radio" name="reply_notification" value="电子邮件">
                  电子邮件 </label>
              </p>
              <p>
                <label class="form-label" for="form-feedback-description">问题描述/<br>
                  其他建议:</label>
                <textarea id="form-feedback-description" name="feedback_description" placeholder="只限500个中文字"></textarea>
                <span class="form-error-message" style="margin-left: 95px;"></span> </p>
              <p> <span class="form-success-message" style="margin-left: 95px;"></span> </p>
              <p>
                <label class="form-label"></label>
                <button type="button" class="button red">重设</button>
                <button type="submit" class="button red">提交</button>
              </p>
              <figure class="admin-inbox-bg"></figure>
            </form>
            <div id="my-inbox">
              <ul class="my-inbox__content off">
                <li class="table-row"> <span class="table-column full-width">暂无信息</span> </li>
              </ul>
            </div>
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
  name: 'message-admin',
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
