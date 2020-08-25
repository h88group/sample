<template>
  <header class="main-header">
    <div id="main-header" class>
      <div class="main-header__inner container" style="width: 1320px;">
        <section class="main-header__left">
          <router-link :to="{ name: 'Index' }">
            <img class="header-logo" src="../../assets/images/logo.png" width="266" height="80" alt />
            <img
              class="header-logo--condensed"
              src="../../assets/images/logo2.png"
              alt
              width="133"
              height="44"
            />
          </router-link>
        </section>
        <section class="main-header__right">
          <div class="top">
            <span class="item hide--condensed">
              <a @click="showModalPassword()" class="open-modal-forgot-password" role="button">忘记密码</a>
            </span>
            <span id="header-login-form" class="main-header-wide-menu main-header__login-form">
              <form>
                <input type="text" name="username" placeholder="账号" />
                <span class="form-toggle-password-wrapper">
                  <input class="input--password" type="password" name="password" placeholder="密码" />
                  <a @click="togglePassword()" class="btn-toggle-password" role="button">
                    <i class="icon icon--toggle-password"></i>
                  </a>
                </span>
                <button type="submit" class="btn">登入</button>
              </form>
              <router-link class="btn gray" :to="{ name: 'Register' }">注册</router-link>
            </span>
            <span class="main-header__login-form main-header-condensed-menu">
              <a @click="showModal()" class="btn open-modal-login">登入</a>
              <router-link class="btn gray" :to="{ name: 'Register' }">注册</router-link>
            </span>
            <span class="item hide--condensed">
              <router-link :to="{ name: 'Cashier' }">
                <i class="icon icon--svg icon--wallet">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10.3 6.5c-.2-.3-.4-.3-.6 0L7 9.2c-.3.3-.2.5 0 .7.3.3.4.3.7 0 .5-.6 1.2-1.4 1.8-1.9.1 0 0 4 0 5.9 0 .4.1.5.5.5.3 0 .6 0 .5-.5V8l1.9 1.9c.3.4.5.1.7-.1.3-.2.3-.4 0-.6-.9-.9-1.9-1.7-2.8-2.7zM20 3.3c0-1.5-.8-2.3-2.3-2.3H2.1C.9 1 0 1.9 0 3v4.8c0 1.2.9 2 2.1 2h1.6c.3 0 .4.1.4.4v7.5c0 .9.4 1.3 1.4 1.3h9c1 0 1.4-.4 1.4-1.4v-7.5c0-.3.1-.5.4-.4h1.4c1.4 0 2.2-.8 2.3-2.3V3.3zm-5.5 15h-9c-.2 0-.4-.3-.4-.6 0-.4.2-.2.4-.2h9.2c.2 0 .5-.2.5.2-.2.3-.5.6-.7.6zm0-1.8h-9c-.2 0-.5-.2-.4-.5 0-.3.3-.1.4-.1h9c.1 0 .4-.2.5.1 0 .5-.2.5-.5.5zm-.1-1.5H5.5c-.5 0-.6-.1-.6-.6V6c0-.5.1-.5.5-.5h9.1c.4 0 .5 0 .5.5v8.4c0 .4-.1.6-.6.6zM18 6c0 .9 0 1-1.1 1h-1.4V5.3c0-.4-.1-.5-.5-.5H4.9c-.4 0-.5.1-.5.5V7H2.3c-.4 0-.5 0-.5-.3V3.9c0-.3.1-.3.4-.3h15.5c.3 0 .4.1.4.3L18 6z"
                    />
                  </svg>
                </i> 存款
              </router-link>
            </span>
            <span class="item stick hide--condensed">
              <router-link :to="{ name: 'CashierWithdrawal' }">
                <i class="icon icon--svg icon--wallet">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.4 11.4c-.5.6-1.3 1.2-1.8 1.8V7.3c0-.4-.1-.5-.5-.5-.3 0-.6 0-.5.5v5.9l-1.9-1.9c-.3-.4-.5-.1-.7.1-.3.2-.3.4 0 .6l2.7 2.7c.3.3.4.3.6 0L13 12c.3-.3.2-.5 0-.7s-.5-.2-.6.1zM20 3.8c0-1.5-.8-2.3-2.3-2.3H2.1C.9 1.5 0 2.4 0 3.6v4.8c0 1.2.9 2 2.1 2h1.6c.3 0 .4.1.4.4v6.1c0 .9.4 1.6 1.4 1.6h9c1 0 1.4-.7 1.4-1.7v-6c0-.3.1-.5.4-.4h1.4c1.4 0 2.2-.8 2.3-2.3V3.8zm-5.5 13.8h-9c-.2 0-.4 0-.4-.3s.2-.5.4-.5h9c.2 0 .5.2.5.5 0 .4-.3.3-.5.3zm-.1-1.8H5.5c-.5 0-.6-.1-.6-.6V6.5c0-.4.1-.5.5-.5h9.1c.4 0 .5.1.5.5v8.7c0 .5-.1.6-.6.6zM18 6.7c0 .9 0 1-1.1 1h-1.4V5.9c0-.4-.1-.5-.5-.5H4.9c-.4 0-.5.1-.5.5v1.8H2.3c-.4 0-.5-.1-.5-.4V4.5c0-.3.1-.3.4-.3h15.5c.3 0 .4.1.4.3L18 6.7z"
                    />
                  </svg>
                </i> 提款
              </router-link>
            </span>
            <span class="item stick hide--condensed mini-cashier-button" v-on:mouseover="mouseover">
              <router-link :to="{ name: 'Account' }">
                <i class="icon icon--money"></i> 余额
              </router-link>
              <div id="mini-cashier" class="mini-cashier-wrapper">
                <section class="mini-cashier-container">
                  <header class="mini-cashier__header">
                    <ul class="mini-cashier__column-list off">
                      <li class="item">
                        <div class="column" style="padding-right: 6px;">
                          <div class="title">自动转账</div>启动后，余额将自动转换到游戏里
                        </div>
                        <div class="column">
                          <div class="form-switch text-right">
                            <input id="auto-transfer-toggle" type="checkbox" />
                            <label for="auto-transfer-toggle" class="switch__toggle"></label>
                          </div>
                        </div>
                      </li>
                      <li class="item is-underline">
                        <div class="column">总余额</div>
                        <div class="column">
                          <button class="btn--refresh button-unstyled" type="button">刷新</button>
                          <span>0.00</span>
                        </div>
                      </li>
                    </ul>
                  </header>
                  <div class="mini-cashier__body">
                    <ul class="mini-cashier__column-list is-stripe off">
                      <li class="item">
                        <div class="column">中心钱包</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">SB 体育/电竞</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">XJ 体育</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">YSB 体育</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">IM 体育/电竞</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">IA 电竞</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">LH 电竞</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">WM 真人</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">N2 真人</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">EA 真人</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">eBET 真人</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">HG 真人/电子</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">AG 真人/电子</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">EG 真人</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">KMG 电子</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">PT 电子</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">TPG 电子</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">PG 电子</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">PP 电子</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">KG 彩票</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">LB 彩票</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">VR 彩票</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">IG 彩票</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">KY 棋牌</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">SGWIN 棋牌</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">MT 棋牌</div>
                        <div class="column">0.00</div>
                      </li>
                      <li class="item">
                        <div class="column">MWG 捕鱼/电子游戏</div>
                        <div class="column">0.00</div>
                      </li>
                    </ul>
                  </div>
                  <div class="mini-cashier__footer">
                    <button class="btn--action btn--red button-unstyled" type="button">一键回收</button>
                    <button
                      class="btn--action button-unstyled"
                      type="button"
                      style="background-color: #898989;"
                    >交易记录</button>
                  </div>
                </section>
              </div>
            </span>
            <span class="item stick hide--condensed">
              <router-link :to="{ name: 'Message' }">
                <i class="icon icon-envelop"></i>
                <span class="message-notice has-message"></span> 信息
              </router-link>
            </span>
            <span class="item">
              <router-link :to="{ name: 'Profile' }">
                <img src="../../assets/images/shield.svg" width="34" height="32" alt /> 您好,
                <strong>mat88993</strong>
              </router-link>
            </span>
            <a class="btn" href="#">登出</a>
          </div>
          <ul class="main-header-menu" role="navigation">
            <li>
              <a class="drop-down" href="#">
                <img
                  src="../../assets/images/menu/new.svg"
                  width="38"
                  height="18"
                  alt="新品"
                  style="position: absolute; top: -12px; left: -33px;"
                /> 真人视频
              </a>
              <div class="submenu">
                <ul class="submenu__inner zhenren__submenu">
                  <!-- <li class="is-new">
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/zhenren/wm.jpg"
                      width="188"
                      height="120"
                      alt="WM"
                    />
                    <div class="providers-title">
                      <nav class="game__menus">
                        <a class="item off" onclick="alert(&quot;请先登入账号&quot;)">经典版</a>
                        <a class="item off" onclick="alert(&quot;请先登入账号&quot;)">棋牌版</a>
                      </nav>
                    </div>
                  </li> -->
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/zhenren/ag.jpg" alt="EG" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/zhenren/n2.jpg" alt="EA" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M1.5 24v-7.4h3.2v3.7h14.8v-3.7h3.2V24H1.5zM12 18.1L5 9.6h4.6V3.9h4.5v5.7H19l-7 8.5zM13.9 2h-4c-.1 0-.2-.1-.2-.3V.3c0-.2.1-.3.2-.3h4c.2 0 .3.1.3.3v1.4c0 .2-.1.3-.3.3z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/zhenren/hog.jpg" alt="N2Live" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/zhenren/bbin.jpg" alt="EBet" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/zhenren/allbet.jpg" alt="AG" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M1.5 24v-7.4h3.2v3.7h14.8v-3.7h3.2V24H1.5zM12 18.1L5 9.6h4.6V3.9h4.5v5.7H19l-7 8.5zM13.9 2h-4c-.1 0-.2-.1-.2-.3V.3c0-.2.1-.3.2-.3h4c.2 0 .3.1.3.3v1.4c0 .2-.1.3-.3.3z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/zhenren/ebet.jpg" alt="HG" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a class="drop-down" href="#">
                <img
                  src="../../assets/images/menu/hot.svg"
                  width="38"
                  height="18"
                  alt="人气"
                  style="position: absolute; top: -12px; left: -24px; z-index: 1;"
                /> 体育
              </a>
              <div class="submenu">
                <ul class="submenu__inner sport__submenu">
                  <li class="is-hot">
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/sport/sport1.jpg" alt="沙巴体育" />
                    <a href="#" class="providers-title"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="#">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li class="is-hot">
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/sport/sport2.jpg" alt="沙巴体育" />
                    <a href="#" class="providers-title"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="#" role="button">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li class="is-hot">
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/sport/sport3.jpg" alt="沙巴体育" />
                    <a href="#" class="providers-title"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="#">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/sport/sport4.jpg" alt="沙巴体育" />
                    <a href="#" class="providers-title"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="#" role="button">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a class="drop-down" role="button">电竞</a>
              <div class="submenu">
                <ul class="submenu__inner esport__submenu">
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/esport/saba1.jpg" alt="ESports" />
                    <a class="providers-title" href="#" target="_blank" rel="noopener"></a>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/esport/saba2.jpg" alt="ESports" />
                    <a class="providers-title" href="#" target="_blank" rel="noopener"></a>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/esport/matrix.jpg" alt="ESports" />
                    <a class="providers-title" href="#"></a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a class="drop-down" href="#">电子游戏</a>
              <div class="submenu">
                <ul class="submenu__inner rng__submenu">
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/slot/all-games.jpg" alt="电子游戏" />
                    <a class="providers-title" href="#"></a>
                  </li>
                  <li class="rng__popular">
                    <a class="skew-slides-container" href="#" target="_blank" rel="noopener">
                      <figure class="skew-slides">
                        <img
                          src="../../assets/images/menu/slot/popular6.jpg"
                          width="492"
                          height="120"
                          alt="PP电游"
                        />
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a class="drop-down" href="#">
                <img
                  src="../../assets/images/menu/new.svg"
                  width="38"
                  height="18"
                  alt="新品"
                  style="position: absolute; top: -12px; left: -33px;"
                /> 捕鱼
              </a>
              <div class="submenu">
                <ul class="submenu__inner fishing__submenu" style="justify-content: flex-start;">
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/fishing/ag.jpg" alt="捕鱼" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                  </li>
                  <li class="is-new">
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/fishing/saba.jpg" alt="捕鱼" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                  </li>
                  <li class="is-new">
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/fishing/mega.jpg" alt="捕鱼" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                  </li>
                  <li class="is-new">
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/fishing/techplay.jpg" alt="捕鱼" />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a class="drop-down" href="#">彩票</a>
              <div class="submenu">
                <ul class="submenu__inner caipiao__submenu">
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/loto/kg.jpg"
                      width="250"
                      height="120"
                      alt="KG奇乐彩"
                    />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/loto/vr.jpg"
                      width="250"
                      height="120"
                      alt="VR彩票"
                    />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/loto/ig.jpg"
                      width="250"
                      height="120"
                      alt="IG彩票"
                    />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                  <li>
                    <img
                      class="submenu__hover"
                      src="../../assets/images/menu/loto/lbkeno.jpg"
                      width="250"
                      height="120"
                      alt="LB 奇乐彩"
                    />
                    <a class="providers-title" onclick="alert(&quot;请先登入账号&quot;)"></a>
                    <nav class="submenu__nav-group">
                      <a href="#" target="_blank" rel="noopener">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M17.7 0H6.3C4.9 0 3.8 1.1 3.8 2.5v19c0 1.4 1.1 2.5 2.5 2.5h11.5c1.4 0 2.5-1.1 2.5-2.5v-19C20.2 1.1 19.1 0 17.7 0zm-7.5 1.9h3.7v1.3h-3.7V1.9zM12 23.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6.9-3.6H5.1V4.1h13.8v15.6z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a onclick="alert(&quot;请先登入账号&quot;)">
                        <span class="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="M22.5 17.3h-8.2v2.8h1.3c.5 0 .9.4.9.9v.2H7.6V21c0-.5.4-.9.9-.9h1.2v-2.8H1.5c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v11.5c0 .8-.7 1.5-1.5 1.5zm.3-12.8c0-.4-.3-.7-.6-.7H1.9c-.4 0-.6.3-.6.7v11.1c0 .4.3.7.6.7h20.3c.4 0 .6-.3.6-.7V4.5zm-1.7 10.9H2.9c-.4 0-.6-.3-.6-.7V5.2c0-.4.3-.6.6-.6h18.2c.4 0 .6.3.6.6v9.6c0 .3-.3.6-.6.6z"
                            />
                          </svg>
                        </span>
                      </a>
                    </nav>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a class="providers-title" href="#">棋牌</a>
            </li>
            <li>
              <router-link :to="{ name: 'Promotions' }">福利专区</router-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <comp-modal ref="modalLogin"></comp-modal>
  </header>
</template>

<script>
import CompModal from '../Modal/CompModal'

export default {
  name: 'comp-header',
  data () {
    return {
      passType: 'text'
    }
  },
  components: {
    CompModal
  },
  methods: {
    handleSCroll (event) {
      let header = document.querySelector('#main-header')
      if (
        window.scrollY > 80 &&
        !header.className.includes('main-header--condensed')
      ) {
        header.classList.add('main-header--condensed')
      } else if (window.scrollY < 100) {
        header.classList.remove('main-header--condensed')
      }
    },
    showModal () {
      this.$refs.modalLogin.actShowModal()
      this.$refs.modalLogin.IsLogin()
    },
    showModalPassword () {
      this.$refs.modalLogin.actShowModal()
      this.$refs.modalLogin.IsForgotPassword()
    },
    hideModal () {
      this.$refs.modalLogin.actHideModal()
    },
    mouseover: function () {
      document.body.classList.add('is-showing-mini-cashier')
    },
    togglePassword: function () {
      this.passType = 'text'
    }
  },
  created () {
    window.addEventListener('scroll', this.handleSCroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleSCroll)
  }
}
</script>

<style>
</style>
