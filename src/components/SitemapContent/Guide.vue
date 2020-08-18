<template>
  <section>
    <nav class="help-nav-wrapper">
      <ul class="help-nav">
        <li><router-link class="about-us" :to="{ name: 'About' }"><i class="icon"></i> <span class="label">关于易发国际</span></router-link></li>
        <li><router-link class="terms" :to="{ name: 'Terms' }"><i class="icon"></i> <span class="label">服务条款</span></router-link></li>
        <li><router-link class="privacy" :to="{ name: 'Privacy' }"><i class="icon"></i> <span class="label">隐私权声明</span></router-link></li>
        <li><router-link class="responsible-gaming" :to="{ name: 'ResponsibleGaming' }"><i class="icon"></i> <span class="label">理性博彩</span></router-link></li>
        <li><router-link class="guide active" :to="{ name: 'Guide' }"><i class="icon"></i> <span class="label">新手指南</span></router-link></li>
        <li><router-link class="contact" :to="{ name: 'Contact' }"><i class="icon"></i> <span class="label">客服中心</span></router-link></li>
      </ul>
    </nav>
    <article>
      <section id="step-by-step-guide" class="step-by-step-guide">
        <div class="step-by-step-guide__inner container">
          <h1 class="help-heading-wrapper"> <span class="help-heading">新手指南</span> </h1>
          <ul id="step-nav" class="step-nav">
            <li><a @click.prevent="setActiveStep('step-join')" :class="{ active: isActiveStep('step-join') }" href="#step-join">如何参与</a></li>
            <li><a @click.prevent="setActiveStep('step-deposit')" :class="{ active: isActiveStep('step-deposit') }" href="#step-deposit">如何存款</a></li>
            <li><a @click.prevent="setActiveStep('step-withdrawal')" :class="{ active: isActiveStep('step-withdrawal') }" href="#step-withdrawal">如何提款</a></li>
          </ul>
          <div class="step-by-step-guide__carousel">
            <div class="step-by-step-guide__carousel__inner">
              <div id="step-join" class="step-by-step-pane" :class="{ 'active': isActiveStep('step-join') }">
                <VueSlickCarousel class="step-carousel-image" v-bind="settings">
                  <div class="slide">
                      <img src="../../assets/images/help/signup/cert.png" alt />
                      <p class="step-heading"><span>步骤 1</span> 请点击网页右上角“注册”按钮。</p>
                  </div>
                  <div class="slide">
                      <img src="../../assets/images/help/signup/step2.png" alt />
                      <p class="step-heading"><span>步骤 2</span> 请填写全部资料。</p>
                  </div>
                  <div class="slide">
                      <img src="../../assets/images/help/signup/step3.png" alt />
                      <p class="step-heading"><span>步骤 3</span> 注册成功！请检查个人注册资料，即可选择「立即登入」存款进行游戏。</p>
                  </div>
                </VueSlickCarousel>
              </div>
              <div id="step-deposit" class="step-by-step-pane" :class="{ 'active': isActiveStep('step-deposit') }">
                <VueSlickCarousel class="step-carousel-image" v-bind="settings">
                  <div class="slide">
                      <img src="../../assets/images/help/deposit/step1.png" alt />
                      <p class="step-heading"><span>步骤 1</span> 请在登入易发账号后，点击「我要存款」。</p>
                  </div>
                  <div class="slide">
                      <img src="../../assets/images/help/deposit/step2.png" alt />
                      <p class="step-heading"><span>步骤 2</span> 输入「存款金额」与选择「存款方式」点击「下一步」。 </p>
                  </div>
                  <div class="slide">
                      <img src="../../assets/images/help/deposit/step3.png" alt />
                      <p class="step-heading"><span>步骤 3</span> 取得有效的「收款账户」后，在有效时间内进行转账。</p>
                  </div>
                </VueSlickCarousel>
              </div>
              <div id="step-withdrawal" class="step-by-step-pane" :class="{ 'active': isActiveStep('step-withdrawal') }">
                <VueSlickCarousel class="step-carousel-image" v-bind="settings">
                  <div class="slide">
                      <img src="../../assets/images/help/withdrawal/step1.png" alt />
                      <p class="step-heading"><span>步骤 1</span> 请在登入易发账号后，点击「我要提款」。</p>
                  </div>
                  <div class="slide">
                      <img src="../../assets/images/help/withdrawal/step2.png" alt />
                      <p class="step-heading"><span>步骤 2</span> 填写所有提款资料（银行名称、银行账号、提款金额，安全密码），点击「提交」。 </p>
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="faq">
        <div class="faq__top-bar"></div>
        <div class="faq__wrapper container">
          <ul class="vertical-tabs">
            <li>
              <a @click.prevent="setActive('common-faq')" :class="{ active: isActive('common-faq') }" href="#common-faq"><i class="icon"></i> 一般常见问题</a>
            </li>
            <li>
              <a @click.prevent="setActive('account-faq')" :class="{ active: isActive('account-faq') }" href="#account-faq"><i class="icon account-faq"></i> 账户常见问题</a>
            </li>
            <li>
              <a @click.prevent="setActive('deposit-faq')" :class="{ active: isActive('deposit-faq') }" href="#deposit-faq"><i class="icon deposit"></i> 存款须知</a>
            </li>
            <li>
              <a @click.prevent="setActive('withdrawal-faq')" :class="{ active: isActive('withdrawal-faq') }" href="#withdrawal-faq"><i class="icon withdrawal"></i> 提款须知</a>
            </li>
          </ul>
          <div class="tab-content faq__content">
            <div class="tab-pane" :class="{ 'active': isActive('common-faq') }" id="common-faq">
              <dl>
                <dt>1: 谁是易发国际娱乐公司？</dt>
                <dd>请查阅「<a href="https://www.e8lp.com/help/about" target="_blank" rel="noopener">关于易发国际</a>」。</dd>
                <dt>2: 在易发投注是否安全？</dt>
                <dd>易发国际网站绝对安全，亦非常重视您的隐私，详情请查阅「<a href="https://www.e8lp.com/help/privacy" target="_blank" rel="noopener">隐私权声明</a>」。</dd>
                <dt>3: 网上博彩是否合法？</dt>
                <dd>有些国家或当地地区法律禁止博彩，在这种情况下，请您务必遵守当地法律，如有任何疑问，请寻求当地法律部门的意见。本公司不能亦不会接受任何人士违犯当地法律所引致之任何责任。</dd>
                <dt>4: 我是否要交博彩税？</dt>
                <dd>在易发国际进行投注完全免税。</dd>
                <dt>5: 在易发进行投注是否有年龄限制？</dt>
                <dd>请确定您已满18岁或法定年龄，否则请勿浏览本站。</dd>
                <dt>6: 注册页面的「推荐代码」需要填写吗？</dt>
                <dd>这是属于易发合营商的推荐代码，若您不是易发合营商推荐的会员，请无需填写。</dd>
                <dt>7: 如何成为易发代理？</dt>
                <dd>请查阅「<a href="https://www.e8daili.com" target="_blank" rel="noopener">代理计划</a>」。</dd>
                <dt>8: 无法登入游戏，点击后没有反应？</dt>
                <dd>这可能是您的电脑浏览器已设置「不允许窗口弹出」导致无法弹出窗口运行游戏，您必须将浏览器设置「允许窗口弹出」再尝试打开游戏。</dd>
                <dt>9: 最低的系统配置要求是什么？</dt>
                <dd>游览器要求： <i class="icon icon-chrome"></i> 13.0 &nbsp; <i class="icon icon-firefox"></i> 12.0 (附加插件 [Flash Player 10] 与 [JavaScript]）以及电脑屏幕分辨率在 [1024×768] 以上)。</dd>
              </dl>
            </div>
            <div class="tab-pane" :class="{ 'active': isActive('account-faq') }" id="account-faq">
              <dl>
                <dt>1: 账户是否要填写真实姓名？</dt>
                <dd> 是的，基于安全理由，进行交易时财务部会按照注册姓名进行审核，银行姓名必须与注册姓名相同方可成功交易，所以请您在「个人资料」必须绑定真实姓名。</dd>
                <dt>2: 所有联系资料是否必须填写？</dt>
                <dd>我们强烈建议您填写及绑定完整且正确的个人资料作为我们日后对会员进行发放优惠的联系。</dd>
                <dt>3: 已经成功存款，但是游戏内没有余额？</dt>
                <dd>请开通「自动转账」或手动将「中心钱包」余额转入相关「游戏账户」，若需要进行提款，即需将「游戏账户」结余转出至「中心钱包」。</dd>
                <dt>4: 如何更改「登入密码」？</dt>
                <dd>请登入账号后在「我的户口」点击「更改账户密码」进行操作。</dd>
                <dt>5: 忘记登入密码？</dt>
                <dd>请点击「<a class="open-modal" data-modal="#modal-login-signup?do-reset-password" role="button">忘记密码</a>」，并按照要求输入相关资料，系统将会发送登入密码至您。</dd>
                <dt>6: 账号因为输入太多次错误密码冻结了，怎么办？</dt>
                <dd>为保障客户账号安全，只要账号连续输入3次错误密码，账号将会被系统自动冻结。如您的账号被冻结，请通过「客服中心」与我们联系。</dd>
                <dt>7: 「安全密码」用途？遗忘了，怎么办？</dt>
                <dd>一旦您成功注册，请记下页面所提供的「安全密码」，此安全密码用于申请提款、绑定提款账号和更改部分个人资料。如您遗忘了「安全密码」，请登入账号后在「我的户口」点击「忘记安全密码」进行操作。</dd>
                <dt>8: 绑定银行卡的用途？</dt>
                <dd>为了您的账号资金安全有保障，建议尊客绑定提款账号，一旦绑定成功，您往后仅限使用绑定的账号进行提款。</dd>
              </dl>
            </div>
            <div class="tab-pane" :class="{ 'active': isActive('deposit-faq') }" id="deposit-faq">
              <dl>
                <dt>1: 请选择受理使用的网络银行</dt>
                <dd>中国工商银行 / 招商银行 / 中国农业银行 / 中国建设银行 / 中国民生银行 / 其他银行</dd>
                <dt>2: 单笔存款上、下限之限制</dt>
                <dd>
                  <table>
                    <thead>
                      <tr>
                        <th>存款方式</th>
                        <th>下限（人民币）</th>
                        <th>上限（人民币）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>在线支付</td>
                        <td>100.00</td>
                        <td>20,000.00</td>
                      </tr>
                      <tr>
                        <td>网上汇款</td>
                        <td>100.00</td>
                        <td>100,000.00</td>
                      </tr>
                      <tr>
                        <td>微信支付</td>
                        <td>100.00</td>
                        <td>3,000.00</td>
                      </tr>
                      <tr>
                        <td>支付宝</td>
                        <td>100.00</td>
                        <td>5,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <small> 备注:
                  <ol>
                    <li>存款免收手续费。</li>
                    <li>部分第三方支付平台征收手续费将由客户支付。</li>
                  </ol>
                  </small> </dd>
                <dt>3: 存款步骤</dt>
                <dd>
                  <ol>
                    <li>请在登入易发账号后，点击「存款」，再输入「存款金额」与选择「存款方式」后，按步骤操作。</li>
                    <li>尊客仅可使用「存款页面」所显示的「收款账户」进行汇款或转账，若将款项存入错误的「收款账户」，或将款项存入已过期失效的「收款账户」，尊客所蒙受的损失，本公司概不负责。</li>
                  </ol>
                </dd>
                <dt>4: 「网上汇款」操作方式</dt>
                <dd>
                  <ol>
                    <li>选择「网上汇款」方式，系统将自动在「附言」处显示四个代码（仅供一次性使用），尊客须在20分钟有效时间内进行网银转账，否则该笔存款交易将失败。</li>
                    <li>尊客在网银的安全页面进行转账时，须将系统在「附言」处提供的四个代码输入网银页面的「附言／备注／转账用途」处，即可完成存款交易，并享有及时到账服务，无需另行通知客服人员。</li>
                    <li>贴心小说明：为免发生存款迟到账的困扰，尊客在进行转账时，切勿勾选「不允许收款人查看付款账户信息」，以免影响财务部进行款项的确认与通过。</li>
                  </ol>
                </dd>
                <dt>5: 其他应注意事项</dt>
                <dd>
                  <ol>
                    <li>尊客在存款成功后，必须进行有效的全额投注，否则将无法申请提款，请尊客按需求进行存款。</li>
                    <li>如尊客不遵守本法则进行存款，所蒙受的任何损失，本公司概不负责。</li>
                  </ol>
                </dd>
              </dl>
            </div>
            <div class="tab-pane" :class="{ 'active': isActive('withdrawal-faq') }" id="withdrawal-faq">
              <dl>
                <dt>1: 易发国际所接受的提款银行</dt>
                <dd>
                  <ul class="off">
                    <li>（1）中国农业银行</li>
                    <li>（2）中国建设银行</li>
                    <li>（3）招商银行</li>
                    <li>（4）中国民生银行</li>
                    <li>（5）中国工商银行</li>
                    <li>（6）交通银行</li>
                    <li>（7）华夏银行</li>
                    <li>（8）中国银行</li>
                    <li>（9）光大银行</li>
                    <li>（10）中信银行</li>
                    <li>（11）兴业银行</li>
                    <li>（12）广发银行</li>
                    <li>（13）浦发银行</li>
                    <li>（14）渤海银行</li>
                    <li>（15）平安银行</li>
                    <li>（16）邮政储蓄</li>
                  </ul>
                </dd>
                <dt>2: 单笔（日）提款上、下限之限制</dt>
                <dd>
                  <table>
                    <thead>
                      <tr>
                        <th>单笔提款下限</th>
                        <th>单笔提款上限</th>
                        <th>单日提款上限</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>RMB 100.00</td>
                        <td>RMB 50,000.00</td>
                        <td>RMB 1,500,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <small> 备注：
                  <ol>
                    <li>每日（22:00~10:00）提款限额为 RMB 500,000.00。</li>
                    <li>提款前，必须将余额转账至【中心钱包】凡能申请提款。</li>
                  </ol>
                  </small> </dd>
                <dt>3: 绑定提款账号很重要！</dt>
                <dd>
                  <ol>
                    <li>为了尊客的账号资金安全有保障，建议尊客绑定提款账号，一旦绑定成功，尊客往后仅限使用绑定的账号进行提款。</li>
                    <li>绑定提款账号小步骤：进入提款页面，点击「绑定账号」，接着输入「安全密码」，即可添加绑定的提款资料。</li>
                    <li>每个账户仅限绑定三张提款账号，尊客亦可通过「绑定账号」页面，执行取消绑定账号动作。</li>
                  </ol>
                </dd>
                <dt>4: 其他应注意事项</dt>
                <dd>
                  <ol>
                    <li>我们提供全天候7x24小时的提款服务。在正常情况下，财务部会严格按照规定办理，提款申请在审查无误的情况下，会准时在30分钟内到账，本公司将不收取任何费用。</li>
                    <li>尊客在成功存款后，必须进行有效的全额投注，「轮盘」与「六合彩」仅计算30%投注流水量，否则提款申请将无法通过审查，请尊客按需求进行存款。</li>
                    <li>易发国际严厉禁止任何个人或群体以「不诚实」的方式进行游戏，一经查实，玩家账号及结余都将被冻结及没收。</li>
                  </ol>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </article>
    <div class="bg-help"></div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'guide',
  components: { VueSlickCarousel },
  data () {
    return {
      activeItem: 'common-faq',
      activeItemStep: 'step-join',
      settings: {
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2e3,
        infinite: false,
        lazyLoad: 'progressive',
        dots: true
      }
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
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
