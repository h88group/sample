<template>
  <section>
    <div id="promotions" class="promotion-module">
      <article class="container">
        <section>
          <ul class="promotion-nav">
            <li><a @click.prevent="setActiveStep('promotion-nav1')" :class="{ active: isActiveStep('promotion-nav1') }" href="#promotion-nav1">全部</a></li>
            <li><a @click.prevent="setActiveStep('promotion-nav2')" :class="{ active: isActiveStep('promotion-nav2') }" href="#promotion-nav2">真人优惠</a></li>
            <li><a @click.prevent="setActiveStep('promotion-nav3')" :class="{ active: isActiveStep('promotion-nav3') }" href="#promotion-nav3">体育优惠</a></li>
          </ul>
          <p><a class="famulei__banner" href="#"> <img src="../../assets/images/promotions/famulei.jpg" width="1168" height="150" alt="伐木累"> </a></p>
          <div id="promotion-nav1" class="payment-options-content" :class="{ 'active': isActiveStep('promotion-nav1') }">
            <div class="promotionalist clearfix">
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
            </div>
          </div>
          <div id="promotion-nav2" class="payment-options-content" :class="{ 'active': isActiveStep('promotion-nav2') }">
            <div class="promotionalist clearfix">
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
            </div>
          </div>
          <div id="promotion-nav3" class="payment-options-content" :class="{ 'active': isActiveStep('promotion-nav3') }">
            <div class="promotionalist clearfix">
              <div class="ppromotion" @click="showModal()">
                <div class="promotion__img"><img src="../../assets/images/promotions/282-web.jpg" alt="" /></div>
                <div class="promotion__inner">
                  <h3 class="promotion__title">金牌大赢家</h3>
                  <div class="promotion__preface"> 皇家同花顺，可遇不可求！ </div>
                </div>
                <button class="promotion__details" type="button">查看更多</button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
    <promotion-modal ref="promotionModal"></promotion-modal>
  </section>
</template>

<script>
import PromotionModal from './PromotionModal'

export default {
  name: 'promotions',
  components: {
    PromotionModal
  },
  data () {
    return {
      activeItemStep: 'promotion-nav1'
    }
  },
  methods: {
    isActiveStep (menuItemStep) {
      return this.activeItemStep === menuItemStep
    },
    setActiveStep (menuItemStep) {
      this.activeItemStep = menuItemStep
    },
    showModal () {
      this.$refs.promotionModal.actShowModal()
    },
    hideModal () {
      this.$refs.promotionModal.actHideModal()
    }
  }
}
</script>

<style scoped>

</style>
