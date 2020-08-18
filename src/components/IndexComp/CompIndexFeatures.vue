<template>
  <section class="home-features-wrapper container">
    <div class="home-features__header">
      <div class="item">热门活动</div>
      <div class="item">会员优势</div>
      <div class="item">霸币商城</div>
    </div>
    <div class="home-features__body">
      <VueSlickCarousel class="home-feature-carousel" v-bind="settings">
        <div class="item">
            <img src="../../assets/images/hot17.jpg" width="318" height="358" alt="伐木累" />
            <div class="feature__frame">
              <h3 class="feature__title">伐木累</h3>
              <p>每月精彩8号及28号，约定您！</p>
            </div>
        </div>
        <div class="item">
            <img src="../../assets/images/hot37.jpg" width="318" height="358" alt="伐木累" />
            <div class="feature__frame">
              <h3 class="feature__title">气势逼「真」人</h3>
              <p>锲而不舍，5,288可镂！</p>
            </div>
        </div>
        <div class="item">
            <img src="../../assets/images/hot38.jpg" width="318" height="358" alt="伐木累" />
            <div class="feature__frame">
              <h3 class="feature__title">真人火爆加码</h3>
              <p>周周存，周周送！回赠100%！</p>
            </div>
        </div>
        <div class="item">
            <img src="../../assets/images/hot29.jpg" width="318" height="358" alt="伐木累" />
            <div class="feature__frame">
              <h3 class="feature__title">未赌先赢</h3>
              <p>EA首存即送30%</p>
            </div>
        </div>
      </VueSlickCarousel>
      <ul class="home-feature-advantage">
        <li class="item">
          <a href="#">
            <img src="../../assets/images/feature16.jpg" width="270" height="166" alt="地表最强VIP" />
            <div class="feature__frame">
              <h3 class="feature__title">地表最强VIP</h3>
              <p>尊享福利非一般</p>
            </div>
          </a>
        </li>
        <li class="item">
          <a href="#">
            <img src="../../assets/images/ebank.jpg" width="270" height="166" alt="易行钱包" />
            <div class="feature__frame">
              <h3 class="feature__title">易行钱包</h3>
              <p>年利率高达 18%</p>
            </div>
          </a>
        </li>
        <li class="item">
          <a href="#">
            <img src="../../assets/images/sponsor.jpg" width="270" height="166" alt="易发赞助" />
            <div class="feature__frame">
              <h3 class="feature__title">易发赞助</h3>
              <p>搞活动？没经费？ 来这就对了！</p>
            </div>
          </a>
        </li>
        <li class="item">
          <a href="#" target="_blank" rel="noopener">
            <img src="../../assets/images/feature13.jpg" width="270" height="166" alt="洗码佣金" />
            <div class="feature__frame">
              <h3 class="feature__title">全新代理模式</h3>
              <p>易发国际让你轻松走上致富路</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="home-feature-babi">
        <div class="item">
          <a href="#" target="_blank" rel="noopener">
            <img src="../../assets/images/babi64.jpg" width="287" height="360" alt="霸币商城" />
            <div class="feature__frame">
              <h3 class="feature__title">霸币商城</h3>
              <p>霸币是独有的游戏币，可以让您玩游戏也可以让您换礼品!</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'comp-index-features',
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2e3,
        infinite: true,
        lazyLoad: 'progressive',
        dots: true,
        draggable: true
      }
    }
  }
}
</script>

<style>
  .home-feature-carousel .item img{
    pointer-events: none;
  }
</style>
