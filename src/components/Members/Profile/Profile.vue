<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <profile-nav />
      <section class="member-profile-container">
        <div class="tab-content">
          <div id="member-profile" class="tab-pane active" role="tabpanel">
            <form class="account-password text-center">
              <p class="form-error-text text-center">必须填写安全密码</p>
              <div>
                <div style="margin:30px 0;">请输入「安全密码」查看「个人资料」。</div>
                <label class="form-label">安全密码</label>
                <div class="input-container form-toggle-password-wrapper has-keypad" tabindex="-1">
                  <input class="digitOnly" type="password" name="secure_pin" id="code" maxlength="4">
                  <a class="btn-toggle-password" role="button"><i class="icon icon--toggle-password"></i></a>
                  <div class="secure-keypad">
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '1';}">1</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '2';}">2</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '3';}">3</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '4';}">4</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '5';}">5</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '6';}">6</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '7';}">7</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '8';}">8</button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '9';}">9</button>
                    <button class="key" type="button" tabindex="-1">
                    <svg width="60" height="50" viewBox="0 0 60 50">
                      <path d="M13 22.9l.9-1c1.1.7 2.1 1.5 3 2.3-.4.5-.8.9-1 1.1-1.1-.9-2.1-1.7-2.9-2.4zm.5 10.8c.7-2.2 1.3-4.4 1.8-6.8.5.2 1 .4 1.4.5-.6 2.2-1.1 4.4-1.7 6.7l-1.5-.4zm.2-15.3l.9-.9c.8.6 1.8 1.4 3 2.5-.4.4-.7.7-1.1 1-1.2-1.2-2.1-2.1-2.8-2.6zm3.9 4.8h5.8V22h-4.6v-1.1h4.6v-1.2h-5.2v-1.1h5.2V17h1.3v1.6h5.5v1.1h-5.5v1.2h5V22h-5v1.2h5.8v1.1H17.6v-1.1zm2.5 11.1h-1.3v-8.9h10.4v6.9c0 1.2-.6 1.9-1.9 1.9h-2.9c-.1-.4-.1-.8-.3-1.3 1.1.1 2 .1 2.6.1.7 0 1.1-.3 1.1-.9v-.9h-7.7v3.1zm7.7-7.8h-7.7v1.2h7.7v-1.2zM20.1 30h7.7v-1.2h-7.7V30zm17.3-8.5l1 1c-2.3 1.8-4.4 3.2-6.4 4.3-.4-.5-.7-.9-1.1-1.1 2.3-1.1 4.5-2.5 6.5-4.2zm-5.8 10.6h7.3v-4.6h-5.5v-1.3h12.5v1.3h-5.5v4.6h7.3v1.3H31.6v-1.3zm.1-12.8h7.6c-.3-.5-.6-1.1-1-1.7l1.3-.6c.5.7.9 1.4 1.2 2l-.6.3h7.4v3.4h-1.4v-2.1h-13v2.1h-1.4v-3.4zm10.2 2.3c2.5 1.5 4.6 2.8 6.4 4.1l-1 1.2c-1.8-1.4-3.8-2.8-6.2-4.3l.8-1z" fill="#fff"></path>
                      <path d="M11.7 21.7l.9-1c1.1.7 2.1 1.5 3 2.3-.4.5-.8.9-1 1.1-1-1-2-1.8-2.9-2.4zm.6 10.8c.7-2.2 1.3-4.4 1.8-6.8.5.2 1 .4 1.4.5-.6 2.2-1.1 4.4-1.7 6.7l-1.5-.4zm.1-15.4l.9-.9c.8.6 1.8 1.4 3 2.5-.4.4-.7.7-1.1 1-1.1-1.1-2.1-2-2.8-2.6zm3.9 4.9h5.8v-1.2h-4.6v-1.1h4.6v-1.2h-5.2v-1.1h5.2v-1.6h1.3v1.6h5.5v1.1h-5.5v1.2h5v1.1h-5V22h5.8v1.1H16.3V22zm2.6 11h-1.3v-8.9H28V31c0 1.2-.6 1.9-1.9 1.9h-2.9c-.1-.4-.1-.8-.3-1.3 1.1.1 2 .1 2.6.1.7 0 1.1-.3 1.1-.9v-.9h-7.7V33zm7.7-7.8h-7.7v1.2h7.7v-1.2zm-7.7 3.6h7.7v-1.2h-7.7v1.2zm17.2-8.5l1 1c-2.3 1.8-4.4 3.2-6.4 4.3-.4-.5-.7-.9-1.1-1.1 2.4-1.2 4.5-2.6 6.5-4.2zm-5.7 10.6h7.3v-4.6h-5.5V25h12.5v1.3h-5.5v4.6h7.3v1.3H30.4v-1.3zm.1-12.8h7.6c-.3-.5-.6-1.1-1-1.7l1.3-.6c.5.7.9 1.4 1.2 2l-.6.3h7.4v3.4H45v-2.1H32v2.1h-1.4v-3.4zm10.1 2.2c2.5 1.5 4.6 2.8 6.4 4.1l-1 1.2c-1.8-1.4-3.8-2.8-6.2-4.3l.8-1z" fill="#438eff"></path>
                    </svg>
                    </button>
                    <button class="key" type="button" tabindex="-1" onclick="if (document.getElementById('code').value.length < '4') {document.getElementById('code').value=document.getElementById('code').value + '0';}">0</button>
                    <button class="key" type="button" tabindex="-1">
                    <svg width="60" height="50" viewBox="0 0 60 50">
                      <path fill="#fff" d="M36.386 21.336l.707.707-7.283 7.284-.707-.708z"></path>
                      <path fill="#fff" d="M37.115 28.61l-.708.706-7.273-7.294.709-.706z"></path>
                      <path d="M24.2 17.5L16 24.9l8 8.7h21V17.5H24.2zm19.6 15H25l-7-7.7 7-6.4h18.8v14.1z" fill="#fff"></path>
                      <path fill="#438eff" d="M35.386 20.336l.707.707-7.283 7.284-.707-.708z"></path>
                      <path fill="#438eff" d="M36.115 27.61l-.708.706-7.273-7.294.709-.706z"></path>
                      <path d="M23.2 16.5L15 23.9l8 8.7h21V16.5H23.2zm19.6 15H24l-7-7.7 7-6.4h18.8v14.1z" fill="#438eff"></path>
                    </svg>
                    </button>
                  </div>
                </div>
                <button type="submit" class="button red" style="transform: translateY(2px);">验证</button>
              </div>
            </form>
            <form>
              <p class="form-error-text">个人资料更新成功！</p>
              <div class="member-profile">
                <ul class="off">
                  <li>
                    <div class="form-label">姓名 :</div>
                    <div class="form-control" id="member-bind-name">
                      <div></div>
                      <a @click="showModalName()" class="modal-name-binding">立即绑定姓名</a> </div>
                  </li>
                  <li>
                    <div class="form-label">昵称 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <input type="text" name="nickname">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">性别 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <label class="form-radio">
                          <input type="radio" name="gender" value="1">
                          男</label>
                        <label class="form-radio">
                          <input type="radio" name="gender" value="2">
                          女</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">生日日期 :</div>
                    <div class="form-control" id="member-bind-bd">
                      <div> <span></span>-<span></span>-<span></span> </div>
                      <a @click="showModalIc()" class="open-modal" data-modal="#modal-ic-binding" role="button">立即绑定生日日期</a> </div>
                  </li>
                  <li>
                    <div class="form-label">身份证号码 :</div>
                    <div class="form-control" id="member-bind-ic">
                      <div></div>
                      <a @click="showModalIc()" class="open-modal" data-modal="#modal-ic-binding" role="button">立即绑定身份证号码</a> </div>
                  </li>
                  <li>
                    <div class="form-label">电子邮箱 :</div>
                    <div class="form-control" id="member-bind-email">
                      <div></div>
                      <a @click="showModalEmail()" class="open-modal" data-modal="#modal-email-binding" role="button">立即绑定电子邮箱</a> </div>
                  </li>
                  <li>
                    <div class="form-label">手机号码 :</div>
                    <div class="form-control" id="member-bind-phone">
                      <div></div>
                      <a @click="showModalPhone()" class="open-modal" data-modal="#modal-phone-binding" role="button">立即绑定手机号码</a> </div>
                  </li>
                  <li>
                    <div class="form-label">存款通知 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span>不通知</span> <br>
                      </div>
                      <div class="edit-control">
                        <label class="form-radio">
                          <input type="radio" name="SMSDFLAG" value="2">
                          通知</label>
                        <label class="form-radio">
                          <input type="radio" name="SMSDFLAG" value="0" checked="checked">
                          不通知</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">提款通知 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span>不通知</span> <br>
                      </div>
                      <div class="edit-control">
                        <label class="form-radio">
                          <input type="radio" name="SMSWFLAG" value="2">
                          通知</label>
                        <label class="form-radio">
                          <input type="radio" name="SMSWFLAG" value="0" checked="checked">
                          不通知</label>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="off">
                  <li>
                    <div class="form-label">国家 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> </div>
                      <div class="edit-control">
                        <div class="form-select">
                          <select name="country">
                            <option value="42">中华人民共和国</option>
                            <option value="39">中非共和国</option>
                            <option value="54">丹麦</option>
                            <option value="195">乌克兰</option>
                            <option value="201">乌兹别克斯坦</option>
                            <option value="194">乌干达</option>
                            <option value="199">乌拉圭</option>
                            <option value="40">乍得</option>
                            <option value="208">也门</option>
                            <option value="11">亚美尼亚</option>
                            <option value="96">以色列</option>
                            <option value="93">伊拉克</option>
                            <option value="94">伊朗</option>
                            <option value="21">伯里兹</option>
                            <option value="37">佛得角群岛</option>
                            <option value="158">俄罗斯</option>
                            <option value="31">保加利亚</option>
                            <option value="50">克罗地亚</option>
                            <option value="80">关岛</option>
                            <option value="73">冈比亚</option>
                            <option value="90">冰岛</option>
                            <option value="83">几内亚</option>
                            <option value="84">几内亚比绍</option>
                            <option value="113">列支敦士登</option>
                            <option value="45">刚果</option>
                            <option value="53">刚果人民 民主共和国</option>
                            <option value="112">利比亚</option>
                            <option value="111">利比里亚</option>
                            <option value="36">加拿大</option>
                            <option value="76">加纳</option>
                            <option value="72">加蓬</option>
                            <option value="89">匈牙利</option>
                            <option value="103">北朝鲜</option>
                            <option value="169">南非</option>
                            <option value="104">南韩</option>
                            <option value="27">博茨瓦纳</option>
                            <option value="155">卡塔尔</option>
                            <option value="157">卢旺达</option>
                            <option value="115">卢森堡</option>
                            <option value="91">印度</option>
                            <option value="92">印度尼西亚</option>
                            <option value="82">危地马拉</option>
                            <option value="58">厄瓜多尔</option>
                            <option value="63">厄立特里亚</option>
                            <option value="182">叙利亚</option>
                            <option value="49">古巴</option>
                            <option value="212">台湾</option>
                            <option value="106">吉尔吉斯斯坦</option>
                            <option value="55">吉布提</option>
                            <option value="101">哈撒克斯坦</option>
                            <option value="44">哥伦比亚</option>
                            <option value="47">哥斯达黎加</option>
                            <option value="35">喀麦隆</option>
                            <option value="191">土库曼斯坦</option>
                            <option value="192">土耳其和凯科斯群岛</option>
                            <option value="178">圣卢西亚</option>
                            <option value="177">圣基茨和尼维斯联邦</option>
                            <option value="160">圣多美和普林西比</option>
                            <option value="179">圣文森特和格林纳丁斯群岛</option>
                            <option value="159">圣马力诺</option>
                            <option value="85">圭亚那</option>
                            <option value="185">坦桑尼亚</option>
                            <option value="59">埃及</option>
                            <option value="65">埃塞俄比亚</option>
                            <option value="184">塔吉克斯坦</option>
                            <option value="183">塔希提岛</option>
                            <option value="163">塞内加尔</option>
                            <option value="209">塞尔维亚黑山</option>
                            <option value="165">塞拉里昂</option>
                            <option value="51">塞浦路斯</option>
                            <option value="164">塞舌尔群岛</option>
                            <option value="126">墨西哥</option>
                            <option value="187">多哥</option>
                            <option value="57">多米尼加共和国</option>
                            <option value="56">多米尼加群岛</option>
                            <option value="14">奥地利</option>
                            <option value="203">委内瑞拉</option>
                            <option value="18">孟加拉国</option>
                            <option value="8">安哥拉</option>
                            <option value="7">安圭拉岛</option>
                            <option value="9">安提瓜及巴布达岛</option>
                            <option value="6">安道尔</option>
                            <option value="139">尼加拉瓜</option>
                            <option value="141">尼日利亚</option>
                            <option value="140">尼日尔</option>
                            <option value="134">尼泊尔</option>
                            <option value="146">巴勒斯坦</option>
                            <option value="16">巴哈马群岛</option>
                            <option value="145">巴基斯坦</option>
                            <option value="19">巴巴多斯</option>
                            <option value="148">巴布亚新几内亚</option>
                            <option value="149">巴拉圭</option>
                            <option value="147">巴拿马</option>
                            <option value="17">巴林</option>
                            <option value="28">巴西</option>
                            <option value="32">布基纳法索</option>
                            <option value="33">布隆迪</option>
                            <option value="78">希腊</option>
                            <option value="46">库克群岛</option>
                            <option value="38">开曼群岛</option>
                            <option value="75">德国</option>
                            <option value="97">意大利</option>
                            <option value="168">所罗门群岛</option>
                            <option value="108">拉托维亚</option>
                            <option value="143">挪威</option>
                            <option value="52">捷克共和国</option>
                            <option value="127">摩尔多瓦</option>
                            <option value="130">摩洛哥</option>
                            <option value="30">文莱塔鲁萨拉姆</option>
                            <option value="67">斐济</option>
                            <option value="173">斯威士兰</option>
                            <option value="172">斯洛伐克</option>
                            <option value="167">斯洛文尼亚</option>
                            <option value="176">斯里兰卡</option>
                            <option value="166">新加坡</option>
                            <option value="137">新喀里多尼亚</option>
                            <option value="138">新西兰</option>
                            <option value="99">日本</option>
                            <option value="41">智利</option>
                            <option value="34">柬埔寨</option>
                            <option value="79">格林纳达</option>
                            <option value="218">格陵兰</option>
                            <option value="74">格鲁吉亚</option>
                            <option value="22">比利时</option>
                            <option value="124">毛里塔尼亚</option>
                            <option value="125">毛里求斯</option>
                            <option value="188">汤加群岛</option>
                            <option value="161">沙特阿拉伯</option>
                            <option value="70">法国</option>
                            <option value="69">法属圭亚那</option>
                            <option value="66">法罗群岛</option>
                            <option value="152">波兰队</option>
                            <option value="154">波多黎哥</option>
                            <option value="26">波斯尼亚-黑塞哥维那</option>
                            <option value="186">泰国</option>
                            <option value="210">津巴布韦</option>
                            <option value="87">洪都拉斯</option>
                            <option value="86">海地</option>
                            <option value="13">澳大利亚</option>
                            <option value="116">澳门</option>
                            <option value="95">爱尔兰</option>
                            <option value="64">爱沙尼亚</option>
                            <option value="98">牙买加</option>
                            <option value="193">特立尼达和多巴哥</option>
                            <option value="25">玻利维亚</option>
                            <option value="181">瑞典</option>
                            <option value="174">瑞士</option>
                            <option value="81">瓜德罗普岛</option>
                            <option value="202">瓦努阿图</option>
                            <option value="20">白俄罗斯</option>
                            <option value="24">百慕大群岛</option>
                            <option value="77">直布罗陀</option>
                            <option value="105">科威特</option>
                            <option value="48">科特迪瓦</option>
                            <option value="150">秘鲁</option>
                            <option value="189">突尼斯</option>
                            <option value="114">立陶宛</option>
                            <option value="170">索马里</option>
                            <option value="100">约旦</option>
                            <option value="133">纳米比亚</option>
                            <option value="132">缅甸</option>
                            <option value="156">罗马尼亚</option>
                            <option value="200">美属维尔京群岛</option>
                            <option value="5">美属萨摩亚群岛</option>
                            <option value="107">老挝</option>
                            <option value="102">肯尼亚</option>
                            <option value="68">芬兰</option>
                            <option value="180">苏里南</option>
                            <option value="197">英国</option>
                            <option value="29">英属维尔京群岛</option>
                            <option value="136">荷兰安的列斯群岛</option>
                            <option value="131">莫桑比克</option>
                            <option value="110">莱索托</option>
                            <option value="151">菲律宾</option>
                            <option value="60">萨尔瓦多</option>
                            <option value="153">葡萄牙</option>
                            <option value="128">蒙古</option>
                            <option value="129">蒙特塞拉特岛</option>
                            <option value="171">西班牙</option>
                            <option value="206">西萨摩亚群岛</option>
                            <option value="23">贝宁</option>
                            <option value="207">赞比亚</option>
                            <option value="62">赤道几内亚</option>
                            <option value="204">越南</option>
                            <option value="15">阿塞拜疆</option>
                            <option value="2">阿富汗</option>
                            <option value="4">阿尔及利亚</option>
                            <option value="3">阿尔巴尼亚</option>
                            <option value="144">阿曼</option>
                            <option value="10">阿根廷</option>
                            <option value="196">阿联酋</option>
                            <option value="12">阿鲁巴岛</option>
                            <option value="214">马其顿</option>
                            <option value="122">马尔代夫</option>
                            <option value="118">马拉维</option>
                            <option value="123">马提尼克岛</option>
                            <option value="121">马来西亚</option>
                            <option value="120">马耳他</option>
                            <option value="117">马达加斯加</option>
                            <option value="119">马里</option>
                            <option value="109">黎巴嫩</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">所在地区 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <input type="text" name="province2" style="width: 77px" placeholder="省">
                        <input type="text" name="province1" style="width: 76px;" placeholder="市">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">邮政编号 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <input type="text" name="postcode">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">住址 :</div>
                    <div class="form-control"> <span class="non-edit-item"> <span></span> <br>
                      </span> <span class="edit-control">
                      <input type="text" name="address">
                      </span> </div>
                  </li>
                  <li>
                    <div class="form-label">QQ :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <input type="text" name="qq">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">微信号 :</div>
                    <div class="form-control"> <span class="non-edit-item"> <span></span> <br>
                      </span> <span class="edit-control">
                      <input type="text" name="wechat">
                      </span> </div>
                  </li>
                </ul>
              </div>
              <div class="member-profile is-edit">
                <ul class="off">
                  <li>
                    <div class="form-label">姓名 :</div>
                    <div class="form-control" id="member-bind-name">
                      <div></div>
                      <a class="modal-name-binding">立即绑定姓名</a> </div>
                  </li>
                  <li>
                    <div class="form-label">昵称 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <input type="text" name="nickname">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">性别 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <label class="form-radio">
                          <input type="radio" name="gender" value="1">
                          男</label>
                        <label class="form-radio">
                          <input type="radio" name="gender" value="2">
                          女</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">生日日期 :</div>
                    <div class="form-control" id="member-bind-bd">
                      <div> <span></span>-<span></span>-<span></span> </div>
                      <a class="open-modal" data-modal="#modal-ic-binding" role="button">立即绑定生日日期</a> </div>
                  </li>
                  <li>
                    <div class="form-label">身份证号码 :</div>
                    <div class="form-control" id="member-bind-ic">
                      <div></div>
                      <a class="open-modal" data-modal="#modal-ic-binding" role="button">立即绑定身份证号码</a> </div>
                  </li>
                  <li>
                    <div class="form-label">电子邮箱 :</div>
                    <div class="form-control" id="member-bind-email">
                      <div></div>
                      <a class="open-modal" data-modal="#modal-email-binding" role="button">立即绑定电子邮箱</a> </div>
                  </li>
                  <li>
                    <div class="form-label">手机号码 :</div>
                    <div class="form-control" id="member-bind-phone">
                      <div></div>
                      <a class="open-modal" data-modal="#modal-phone-binding" role="button">立即绑定手机号码</a> </div>
                  </li>
                  <li>
                    <div class="form-label">存款通知 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span>不通知</span> <br>
                      </div>
                      <div class="edit-control">
                        <label class="form-radio">
                          <input type="radio" name="SMSDFLAG" value="2">
                          通知</label>
                        <label class="form-radio">
                          <input type="radio" name="SMSDFLAG" value="0" checked="checked">
                          不通知</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">提款通知 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span>不通知</span> <br>
                      </div>
                      <div class="edit-control">
                        <label class="form-radio">
                          <input type="radio" name="SMSWFLAG" value="2">
                          通知</label>
                        <label class="form-radio">
                          <input type="radio" name="SMSWFLAG" value="0" checked="checked">
                          不通知</label>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="off">
                  <li>
                    <div class="form-label">国家 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> </div>
                      <div class="edit-control">
                        <div class="form-select">
                          <select name="country">
                            <option value="42">中华人民共和国</option>
                            <option value="39">中非共和国</option>
                            <option value="54">丹麦</option>
                            <option value="195">乌克兰</option>
                            <option value="201">乌兹别克斯坦</option>
                            <option value="194">乌干达</option>
                            <option value="199">乌拉圭</option>
                            <option value="40">乍得</option>
                            <option value="208">也门</option>
                            <option value="11">亚美尼亚</option>
                            <option value="96">以色列</option>
                            <option value="93">伊拉克</option>
                            <option value="94">伊朗</option>
                            <option value="21">伯里兹</option>
                            <option value="37">佛得角群岛</option>
                            <option value="158">俄罗斯</option>
                            <option value="31">保加利亚</option>
                            <option value="50">克罗地亚</option>
                            <option value="80">关岛</option>
                            <option value="73">冈比亚</option>
                            <option value="90">冰岛</option>
                            <option value="83">几内亚</option>
                            <option value="84">几内亚比绍</option>
                            <option value="113">列支敦士登</option>
                            <option value="45">刚果</option>
                            <option value="53">刚果人民 民主共和国</option>
                            <option value="112">利比亚</option>
                            <option value="111">利比里亚</option>
                            <option value="36">加拿大</option>
                            <option value="76">加纳</option>
                            <option value="72">加蓬</option>
                            <option value="89">匈牙利</option>
                            <option value="103">北朝鲜</option>
                            <option value="169">南非</option>
                            <option value="104">南韩</option>
                            <option value="27">博茨瓦纳</option>
                            <option value="155">卡塔尔</option>
                            <option value="157">卢旺达</option>
                            <option value="115">卢森堡</option>
                            <option value="91">印度</option>
                            <option value="92">印度尼西亚</option>
                            <option value="82">危地马拉</option>
                            <option value="58">厄瓜多尔</option>
                            <option value="63">厄立特里亚</option>
                            <option value="182">叙利亚</option>
                            <option value="49">古巴</option>
                            <option value="212">台湾</option>
                            <option value="106">吉尔吉斯斯坦</option>
                            <option value="55">吉布提</option>
                            <option value="101">哈撒克斯坦</option>
                            <option value="44">哥伦比亚</option>
                            <option value="47">哥斯达黎加</option>
                            <option value="35">喀麦隆</option>
                            <option value="191">土库曼斯坦</option>
                            <option value="192">土耳其和凯科斯群岛</option>
                            <option value="178">圣卢西亚</option>
                            <option value="177">圣基茨和尼维斯联邦</option>
                            <option value="160">圣多美和普林西比</option>
                            <option value="179">圣文森特和格林纳丁斯群岛</option>
                            <option value="159">圣马力诺</option>
                            <option value="85">圭亚那</option>
                            <option value="185">坦桑尼亚</option>
                            <option value="59">埃及</option>
                            <option value="65">埃塞俄比亚</option>
                            <option value="184">塔吉克斯坦</option>
                            <option value="183">塔希提岛</option>
                            <option value="163">塞内加尔</option>
                            <option value="209">塞尔维亚黑山</option>
                            <option value="165">塞拉里昂</option>
                            <option value="51">塞浦路斯</option>
                            <option value="164">塞舌尔群岛</option>
                            <option value="126">墨西哥</option>
                            <option value="187">多哥</option>
                            <option value="57">多米尼加共和国</option>
                            <option value="56">多米尼加群岛</option>
                            <option value="14">奥地利</option>
                            <option value="203">委内瑞拉</option>
                            <option value="18">孟加拉国</option>
                            <option value="8">安哥拉</option>
                            <option value="7">安圭拉岛</option>
                            <option value="9">安提瓜及巴布达岛</option>
                            <option value="6">安道尔</option>
                            <option value="139">尼加拉瓜</option>
                            <option value="141">尼日利亚</option>
                            <option value="140">尼日尔</option>
                            <option value="134">尼泊尔</option>
                            <option value="146">巴勒斯坦</option>
                            <option value="16">巴哈马群岛</option>
                            <option value="145">巴基斯坦</option>
                            <option value="19">巴巴多斯</option>
                            <option value="148">巴布亚新几内亚</option>
                            <option value="149">巴拉圭</option>
                            <option value="147">巴拿马</option>
                            <option value="17">巴林</option>
                            <option value="28">巴西</option>
                            <option value="32">布基纳法索</option>
                            <option value="33">布隆迪</option>
                            <option value="78">希腊</option>
                            <option value="46">库克群岛</option>
                            <option value="38">开曼群岛</option>
                            <option value="75">德国</option>
                            <option value="97">意大利</option>
                            <option value="168">所罗门群岛</option>
                            <option value="108">拉托维亚</option>
                            <option value="143">挪威</option>
                            <option value="52">捷克共和国</option>
                            <option value="127">摩尔多瓦</option>
                            <option value="130">摩洛哥</option>
                            <option value="30">文莱塔鲁萨拉姆</option>
                            <option value="67">斐济</option>
                            <option value="173">斯威士兰</option>
                            <option value="172">斯洛伐克</option>
                            <option value="167">斯洛文尼亚</option>
                            <option value="176">斯里兰卡</option>
                            <option value="166">新加坡</option>
                            <option value="137">新喀里多尼亚</option>
                            <option value="138">新西兰</option>
                            <option value="99">日本</option>
                            <option value="41">智利</option>
                            <option value="34">柬埔寨</option>
                            <option value="79">格林纳达</option>
                            <option value="218">格陵兰</option>
                            <option value="74">格鲁吉亚</option>
                            <option value="22">比利时</option>
                            <option value="124">毛里塔尼亚</option>
                            <option value="125">毛里求斯</option>
                            <option value="188">汤加群岛</option>
                            <option value="161">沙特阿拉伯</option>
                            <option value="70">法国</option>
                            <option value="69">法属圭亚那</option>
                            <option value="66">法罗群岛</option>
                            <option value="152">波兰队</option>
                            <option value="154">波多黎哥</option>
                            <option value="26">波斯尼亚-黑塞哥维那</option>
                            <option value="186">泰国</option>
                            <option value="210">津巴布韦</option>
                            <option value="87">洪都拉斯</option>
                            <option value="86">海地</option>
                            <option value="13">澳大利亚</option>
                            <option value="116">澳门</option>
                            <option value="95">爱尔兰</option>
                            <option value="64">爱沙尼亚</option>
                            <option value="98">牙买加</option>
                            <option value="193">特立尼达和多巴哥</option>
                            <option value="25">玻利维亚</option>
                            <option value="181">瑞典</option>
                            <option value="174">瑞士</option>
                            <option value="81">瓜德罗普岛</option>
                            <option value="202">瓦努阿图</option>
                            <option value="20">白俄罗斯</option>
                            <option value="24">百慕大群岛</option>
                            <option value="77">直布罗陀</option>
                            <option value="105">科威特</option>
                            <option value="48">科特迪瓦</option>
                            <option value="150">秘鲁</option>
                            <option value="189">突尼斯</option>
                            <option value="114">立陶宛</option>
                            <option value="170">索马里</option>
                            <option value="100">约旦</option>
                            <option value="133">纳米比亚</option>
                            <option value="132">缅甸</option>
                            <option value="156">罗马尼亚</option>
                            <option value="200">美属维尔京群岛</option>
                            <option value="5">美属萨摩亚群岛</option>
                            <option value="107">老挝</option>
                            <option value="102">肯尼亚</option>
                            <option value="68">芬兰</option>
                            <option value="180">苏里南</option>
                            <option value="197">英国</option>
                            <option value="29">英属维尔京群岛</option>
                            <option value="136">荷兰安的列斯群岛</option>
                            <option value="131">莫桑比克</option>
                            <option value="110">莱索托</option>
                            <option value="151">菲律宾</option>
                            <option value="60">萨尔瓦多</option>
                            <option value="153">葡萄牙</option>
                            <option value="128">蒙古</option>
                            <option value="129">蒙特塞拉特岛</option>
                            <option value="171">西班牙</option>
                            <option value="206">西萨摩亚群岛</option>
                            <option value="23">贝宁</option>
                            <option value="207">赞比亚</option>
                            <option value="62">赤道几内亚</option>
                            <option value="204">越南</option>
                            <option value="15">阿塞拜疆</option>
                            <option value="2">阿富汗</option>
                            <option value="4">阿尔及利亚</option>
                            <option value="3">阿尔巴尼亚</option>
                            <option value="144">阿曼</option>
                            <option value="10">阿根廷</option>
                            <option value="196">阿联酋</option>
                            <option value="12">阿鲁巴岛</option>
                            <option value="214">马其顿</option>
                            <option value="122">马尔代夫</option>
                            <option value="118">马拉维</option>
                            <option value="123">马提尼克岛</option>
                            <option value="121">马来西亚</option>
                            <option value="120">马耳他</option>
                            <option value="117">马达加斯加</option>
                            <option value="119">马里</option>
                            <option value="109">黎巴嫩</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">所在地区 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <input type="text" name="province2" style="width: 77px" placeholder="省">
                        <input type="text" name="province1" style="width: 76px;" placeholder="市">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">邮政编号 :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <input type="text" name="postcode">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">住址 :</div>
                    <div class="form-control"> <span class="non-edit-item"> <span></span> <br>
                      </span> <span class="edit-control">
                      <input type="text" name="address">
                      </span> </div>
                  </li>
                  <li>
                    <div class="form-label">QQ :</div>
                    <div class="form-control">
                      <div class="non-edit-item"> <span></span> <br>
                      </div>
                      <div class="edit-control">
                        <input type="text" name="qq">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="form-label">微信号 :</div>
                    <div class="form-control"> <span class="non-edit-item"> <span></span> <br>
                      </span> <span class="edit-control">
                      <input type="text" name="wechat">
                      </span> </div>
                  </li>
                </ul>
              </div>
              <div class="text-center">
                <button type="button" class="button red">更改资料</button>
              </div>
            </form>
          </div>
        </div>
        <profile-setting />
      </section>
    </section>
    <profile-modal-name ref="profileModalName" />
    <profile-modal-ic ref="profileModalIc" />
    <profile-modal-email ref="profileModalEmail" />
    <profile-modal-phone ref="profileModalPhone" />
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import ProfileNav from './ProfileNav'
import ProfileSetting from './ProfileSetting'
import ProfileModalName from './ProfileModal/ProfileModalName'
import ProfileModalIc from './ProfileModal/ProfileModalIc'
import ProfileModalEmail from './ProfileModal/ProfileModalEmail'
import ProfileModalPhone from './ProfileModal/ProfileModalPhone'

export default {
  name: 'profile',
  components: {
    CompMembersLeftMenu,
    ProfileNav,
    ProfileSetting,
    ProfileModalName,
    ProfileModalIc,
    ProfileModalEmail,
    ProfileModalPhone
  },
  data () {
    return {
    }
  },
  methods: {
    showModalName () {
      this.$refs.profileModalName.actShowModal()
    },
    hideModalName () {
      this.$refs.profileModalName.actHideModal()
    },
    showModalIc () {
      this.$refs.profileModalIc.actShowModal()
    },
    hideModalIc () {
      this.$refs.profileModalIc.actHideModal()
    },
    showModalEmail () {
      this.$refs.profileModalEmail.actShowModal()
    },
    hideModalEmail () {
      this.$refs.profileModalEmail.actHideModal()
    },
    showModalPhone () {
      this.$refs.profileModalPhone.actShowModal()
    },
    hideModalPhone () {
      this.$refs.profileModalPhone.actHideModal()
    }
  }
}
</script>

<style scoped>

</style>
