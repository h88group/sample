<template>
<section>
  <div class="container sitemap-content">
    <div class="column">
      <section class="client-downloads">
        <h4>客户端下载 <img src="../../assets/images/client-download-icon.gif" width="14" height="15" alt="客户端下载" style="vertical-align: baseline;"></h4>
        <ul class="clients">
          <li> <a href="#">
            <div class="client__logo"> <img src="https://media.wvwuwvuwvw.com/e8fe/images/ui/footer/clients/ag.png" srcset="https://media.wvwuwvuwvw.com/e8fe/images/ui/footer/clients/ag-2x.png 2x" width="105" height="30" alt="AG综合游戏"> </div>
            <div class="client__label">AG <span class="label--chinese">综合游戏</span></div>
            </a> </li>
          <li> <a href="#">
            <div class="client__logo"><i class="ea"></i></div>
            <div class="client__label">EA <span class="label--chinese">真人视频</span></div>
            </a> </li>
          <li> <a href="#" target="_blank" rel="noopener">
            <div class="client__label">易发登录器</div>
            <div class="client__label">易发登录器</div>
            </a> </li>
        </ul>
      </section>
      <section class="browsers-recommendation">
        <ul class="browser-list off">
          <li>
            <h4>建议浏览器</h4>
          </li>
          <li> <a href="#" target="_blank" rel="noopener"><i class="icon icon-chrome"></i> 13.0</a> </li>
          <li> <a href="#" target="_blank" rel="noopener"><i class="icon icon-firefox"></i> 12.0</a> </li>
        </ul>
      </section>
    </div>
    <div class="column">
      <section class="directory">
        <h4>&nbsp;</h4>
        <ul>
          <li><router-link :to="{ name: 'About' }">关于「红88」</router-link></li>
          <li><a href="app" target="_blank">下载专区</a></li>
          <li><router-link :to="{ name: 'Terms' }">服务条款</router-link></li>
          <li><router-link :to="{ name: 'Privacy' }">隐私权声明</router-link></li>
          <li><router-link :to="{ name: 'Contact' }">客服中心</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">新手指南</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">存款须知</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">如何转账</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">提款须知</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">如何更改密码</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">绑定银行信息</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">忘记登入密码</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">账户问题</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">注册问题</router-link></li>
          <li><router-link :to="{ name: 'Guide' }">常见问题</router-link></li>
        </ul>
      </section>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'comp-sitemap',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
