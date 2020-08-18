<template>
  <section class="home-slides-wrapper2">
    <VueSlickCarousel class="home-slides2" v-bind="settings">
      <div class="slide">
          <img src="../../assets/images/wm-launch.jpg" alt />
      </div>
      <div class="slide">
          <img src="../../assets/images/promo282.jpg" alt />
      </div>
      <div class="slide">
          <img src="../../assets/images/wm-launch.jpg" alt />
      </div>
      <div class="slide">
          <img src="../../assets/images/promo282.jpg" alt />
      </div>
      <div class="slide">
          <img src="../../assets/images/wm-launch.jpg" alt />
      </div>
      <div class="slide">
          <img src="../../assets/images/promo282.jpg" alt />
      </div>
      <div class="slide">
          <img src="../../assets/images/wm-launch.jpg" alt />
      </div>
    </VueSlickCarousel>
    <div class="home-slides__news">
      <div class="home-news__container">
        <div class="home-news__label">
          公告栏
          <i class="icon icon--speaker">
            <svg viewBox="0 0 27 21">
              <path
                d="M24.6 19.9c-.7.8-1.5 0-1.5 0-.8-.9.1-2.3.1-2.3 3.3-5.8.8-13.4.8-13.4-1.3-2.7-.5-3.2-.5-3.2.7-.7 1.5.5 1.5.5 1.7 2.9 2 8.4 2 8.4 0 6.9-2.4 10-2.4 10zm-5.3-1.5c-.8-.8.1-1.9.1-1.9 3.3-4.8.7-11.1.7-11.1-1.3-2.2-.5-2.7-.5-2.7.7-.6 1.5.4 1.5.4C23 5.6 23 10.4 23 10.4c0 5.7-2.2 8-2.2 8-.7.7-1.5 0-1.5 0zm-2.5-2.7c-.5-.5-.2-1.3-.2-1.3 2.2-3.2.5-7.3.5-7.3-.9-1.5 0-1.8 0-1.8.5-.4 1 .3 1 .3 1.2 1.6 1.2 4.8 1.2 4.8 0 3.8-1.5 5.3-1.5 5.3-.5.4-1 0-1 0zM6.4 4.3l6-4.3v21l-5.9-3.8V4.3zM0 5.3h4.7v10.6H0V5.3z"
              />
            </svg>
          </i>
        </div>
        <div class="home-news">
          <div class="home-news__inner">
            <marquee
              behavior="scroll"
              direction="left"
              onmouseover="this.stop();"
              onmouseout="this.start();"
            >
              【通告】：新玩家首存即将送100%礼金, 高达3888元。&nbsp;&nbsp;&nbsp;
              【通告】：大奖来袭，狂送不停，每周18888元&nbsp;&nbsp;&nbsp;
              【通告】：真人火爆加码，回赠高达100%&nbsp;&nbsp;&nbsp;
              【通告】：推荐好友、双向奖励, 每位推荐享受128元奖金&nbsp;&nbsp;&nbsp;
              【通告】：体育扭转「钱」坤，体育救援金，最高返还2,000元！&nbsp;&nbsp;&nbsp;
              【通告】：全部游戏每日返水1.5%&nbsp;&nbsp;&nbsp;
            </marquee>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'comp-index-slider',
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        arrows: true,
        dots: true,
        dotsClass: 'home-slides-pager2 container',
        autoplay: true,
        autoplaySpeed: 3e3,
        infinite: true,
        lazyLoad: 'progressive',
        draggable: true
      }
    }
  }
}
</script>

<style scoped>
.home-slides2 .slide img{
  pointer-events: none;
}
</style>
