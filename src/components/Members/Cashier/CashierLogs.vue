<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <cashier-nav />
      <div data-v-c61e7a54="" class="tab-content cashier-history-wrapper">
        <div class="text-right">
          <button class="refresh-button"> <i class="icon icon-refresh"></i> 刷新 </button>
        </div>
        <div style="padding-top: 20px;">
          <nav class="cashier-history-filter">
            <ul class="off">
              <li class="label">交易记录 :</li>
              <li class="active"> <a role="button">全部</a> </li>
              <li> <a role="button">提款</a> </li>
              <li> <a role="button">存款</a> </li>
              <li> <a role="button">户内转账</a> </li>
            </ul>
            <ul class="off">
              <li class="label">状况 :</li>
              <li class="active"> <a role="button">全部</a> </li>
              <li> <a role="button">待定</a> </li>
              <li> <a role="button">失败</a> </li>
              <li> <a role="button">成功</a> </li>
            </ul>
            <ul class="pull-right off">
              <li class="label">最近交易记录 :</li>
              <li class="active"> <a role="button">最近10笔</a> </li>
              <li> <a role="button">最近20笔</a> </li>
              <li> <a role="button">最近50笔</a> </li>
            </ul>
          </nav>
          <div class="responsive-table">
            <table class="cashier-history-table">
              <thead>
                <tr>
                  <th style="width: 168px;">日期及时间</th>
                  <th style="width: 200px;">交易方式</th>
                  <th class="hide-on-mobile" style="width: 160px;">编号</th>
                  <th style="width: 100px;">有效日期</th>
                  <th style="width: 100px;">状态</th>
                  <th style="width: 160px;">金额 (RMB)</th>
                  <th class="hide-on-mobile" style="width: 160px;">当前余额 (RMB)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="7">没有交易记录</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import CashierNav from './CashierNav'

export default {
  name: 'cashier-logs',
  components: {
    CompMembersLeftMenu,
    CashierNav
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
