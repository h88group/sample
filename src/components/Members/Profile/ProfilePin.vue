<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <profile-nav />
      <section class="member-profile-container">
        <div class="tab-content">
          <div id="secure-pin" class="secure-pin-wrapper tab-pane active" role="tabpanel">
            <ul class="secure-pin__tab-nav off">
              <li>
                <a id="secure-pin-step-1" class="done off" role="button">
                  <i class="step-box">1</i> 忘记安全密码
                </a>
              </li>
              <li>
                <a id="secure-pin-step-2" class="off" role="button">
                  <i class="step-box">2</i> 最近一笔存款记录
                </a>
              </li>
              <li>
                <a id="secure-pin-step-3" class="off" role="button">
                  <i class="step-box tick"></i> 恭喜完成
                </a>
              </li>
            </ul>
            <div class="secure-pin__tab-content">
              <section class="secure-pin-step1">
                <form>
                  <p class="form-error-message">请选择获取新安全密码途径</p>
                  <p>
                    <label class="form-label" for="form-secure-pin-method">获取新安全密码途径 :</label>

                    <label class="form-radio">
                      <input type="radio" name="secure_pin_method" value="email" />
                      电子邮件
                    </label>

                    <label class="form-radio">
                      <input type="radio" name="secure_pin_method" value="sms" />手机简讯
                    </label>
                  </p>

                  <p>
                    <label class="form-label" for="form-secure-pin-name">姓名 :</label>

                    <input type="text" id="form-secure-pin-name" name="secure_pin_name" />
                  </p>

                  <p>
                    <label class="form-label">生日日期 :</label>

                    <span class="form-select">
                      <select name="birthyear" style="width:60px">
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                        <option value="1929">1929</option>
                        <option value="1928">1928</option>
                        <option value="1927">1927</option>
                        <option value="1926">1926</option>
                        <option value="1925">1925</option>
                        <option value="1924">1924</option>
                        <option value="1923">1923</option>
                        <option value="1922">1922</option>
                        <option value="1921">1921</option>
                        <option value="1920">1920</option>
                        <option value="1919">1919</option>
                        <option value="1918">1918</option>
                        <option value="1917">1917</option>
                        <option value="1916">1916</option>
                        <option value="1915">1915</option>
                        <option value="1914">1914</option>
                        <option value="1913">1913</option>
                        <option value="1912">1912</option>
                        <option value="1911">1911</option>
                        <option value="1910">1910</option>
                        <option value="1909">1909</option>
                        <option value="1908">1908</option>
                        <option value="1907">1907</option>
                        <option value="1906">1906</option>
                        <option value="1905">1905</option>
                        <option value="1904">1904</option>
                        <option value="1903">1903</option>
                        <option value="1902">1902</option>
                      </select>
                    </span> -
                    <span class="form-select">
                      <select name="birthmonth" style="width:50px">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </span> -
                    <span class="form-select">
                      <select name="birthday" style="width:50px">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                    </span>
                  </p>

                  <p>
                    <label class="form-label" for="form-secure-pin-email">电子邮件 :</label>

                    <input type="text" id="form-secure-pin-email" name="secure_pin_email" />
                  </p>

                  <p>
                    <label class="form-label" for="form-secure-pin-mobile">手机号码 :</label>
                    <input type="text" id="form-secure-pin-mobile" name="secure_pin_mobile" />
                  </p>

                  <p>
                    <label class="form-label" for="form-secure-pin-ic">身份证号码 :</label>

                    <input type="text" id="form-secure-pin-ic" name="secure_pin_ic" />
                  </p>

                  <p>
                    <label class="form-label" for="form-secure-pin-method-change-reason">备注 :</label>
                    <input
                      type="text"
                      id="form-secure-pin-method-change-reason"
                      name="secure_pin_method_change_reason"
                      style="width: 380px;"
                    />
                  </p>

                  <p>
                    <label class="form-label" style="width: 125px;"></label>
                    <button type="submit" class="button red">下一步</button>
                  </p>
                </form>
              </section>

              <section class="secure-pin-step2">
                <form>
                  <p class="form-error-message"></p>

                  <p>
                    <label class="form-label" for="form-deposit-method">存款方式 :</label>

                    <label class="form-radio" style="width:80px;display:inline-block;">
                      <input type="radio" name="deposit_method" value="online" />
                      网上汇款
                    </label>

                    <label class="form-radio" style="width:80px;display:inline-block;">
                      <input type="radio" name="deposit_method" value="alipay" />
                      支付宝
                    </label>

                    <label class="form-radio" style="width:80px;display:inline-block;">
                      <input type="radio" name="deposit_method" value="wechat" />
                      微信支付
                    </label>

                    <label class="form-radio" style="width:80px;display:inline-block;">
                      <input type="radio" name="deposit_method" value="third_party" />
                      线上支付
                    </label>

                    <br />
                    <label class="form-label" for="form-deposit-method"></label>

                    <label class="form-radio" style="width:80px;display:inline-block;">
                      <input type="radio" name="deposit_method" value="qq_wallet" />
                      QQ钱包
                    </label>

                    <label class="form-radio" style="width:80px;display:inline-block;">
                      <input type="radio" name="deposit_method" value="union_pay" />
                      银联存款
                    </label>

                    <label class="form-radio" style="width:80px;display:inline-block;">
                      <input type="radio" name="deposit_method" value="jd_wallet" />
                      京东钱包
                    </label>

                    <label
                      class="form-radio"
                      style="width:80px;display:inline-block;white-space:nowrap;"
                    >
                      <input type="radio" name="deposit_method" value="astropay" />
                      AstroPay点数卡
                    </label>

                    <br />
                    <label class="form-label" for="form-deposit-method"></label>

                    <label class="form-radio" style="width:80px;display:inline-block;">
                      <input type="radio" name="deposit_method" value="no_deposit" />
                      未有存款
                    </label>
                  </p>

                  <p>
                    <label class="form-label"></label>
                    <button type="button" class="button red">上一步</button>
                    <button type="submit" class="button red">下一步</button>
                  </p>
                </form>
              </section>

              <section class="secure-pin-step3">
                <form>
                  <p class="form-error-message"></p>

                  <div id="requestChangePinsBankList">
                    <label class="form-label pull-left" for="form-deposit-bank">存款银行 :</label>

                    <ul class="form-bank-list off">
                      <li>
                        <label>
                          <input type="radio" name="form" value="民生银行" />

                          <span class="form-bank-option">
                            <i class="icon-bank mingsheng"></i>
                            民生银行
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" name="form" value="招商银行" />

                          <span class="form-bank-option">
                            <i class="icon-bank zhaoshang"></i>
                            招商银行
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" name="form" value="农业银行" />

                          <span class="form-bank-option">
                            <i class="icon-bank nongye"></i>
                            农业银行
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" name="form" value="建设银行" />

                          <span class="form-bank-option">
                            <i class="icon-bank jianshe"></i>
                            建设银行
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" name="form" value="工商银行" />

                          <span class="form-bank-option">
                            <i class="icon-bank gongshang"></i>
                            工商银行
                          </span>
                        </label>
                      </li>

                      <li>
                        <label>
                          <input type="radio" name="form" value="其它银行" />

                          <span class="form-bank-option">
                            <i class="icon-bank icon--svg">
                              <img
                                src="https://www.e8lp.com/images/webapp/ui/banks/Other.svg"
                                width="34"
                                height="34"
                                alt="其它银行"
                                style="width: 32px; height: 24px; transform: translateY(-3px);"
                              />
                            </i>
                            其它银行
                          </span>
                        </label>
                      </li>
                    </ul>

                    <label class="form-label"></label>
                  </div>

                  <p>
                    <label class="form-label" for="form-deposit-amount">存款金额 :</label>
                    <input type="text" id="form-deposit-amount" name="deposit_amount" />
                    <span class="inline-label">元</span>
                  </p>

                  <p>
                    <label class="form-label" for="form-transaction-date">交易日期 :</label>

                    <select
                      type="text"
                      class="short-input"
                      name="transaction_year"
                      maxlength="4"
                      style="width: 70px;"
                    >
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                    </select>
                    <span class="inline-label">年</span>

                    <select
                      type="text"
                      class="short-input"
                      name="transaction_month"
                      maxlength="2"
                      style="width: 50px;"
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <span class="inline-label">月</span>

                    <select
                      type="text"
                      class="short-input"
                      name="transaction_day"
                      maxlength="2"
                      style="width: 50px;"
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <span class="inline-label">日</span>
                  </p>
                  <p>
                    <label class="form-label" for="form-transaction-time">交易时间 :</label>
                    <select
                      type="text"
                      class="short-input"
                      name="transaction_hour"
                      maxlength="2"
                      style="width: 70px;"
                    >
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                    </select>
                    <span class="inline-label">时</span>
                    <select
                      type="text"
                      class="short-input"
                      name="transaction_minit"
                      maxlength="2"
                      style="width: 50px;"
                    >
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                      <option value="46">46</option>
                      <option value="47">47</option>
                      <option value="48">48</option>
                      <option value="49">49</option>
                      <option value="50">50</option>
                      <option value="51">51</option>
                      <option value="52">52</option>
                      <option value="53">53</option>
                      <option value="54">54</option>
                      <option value="55">55</option>
                      <option value="56">56</option>
                      <option value="57">57</option>
                      <option value="58">58</option>
                      <option value="59">59</option>
                    </select>
                    <span class="inline-label">分</span>
                    <select
                      type="text"
                      class="short-input"
                      name="transaction_second"
                      maxlength="2"
                      style="width: 50px;"
                    >
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                      <option value="46">46</option>
                      <option value="47">47</option>
                      <option value="48">48</option>
                      <option value="49">49</option>
                      <option value="50">50</option>
                      <option value="51">51</option>
                      <option value="52">52</option>
                      <option value="53">53</option>
                      <option value="54">54</option>
                      <option value="55">55</option>
                      <option value="56">56</option>
                      <option value="57">57</option>
                      <option value="58">58</option>
                      <option value="59">59</option>
                    </select>
                    <span class="inline-label">秒</span>
                  </p>

                  <p>
                    <label class="form-label" for="form-transaction-id">交易流水号 :</label>

                    <input type="text" id="form-transaction-id" name="transaction_id" />
                  </p>

                  <p>
                    <label class="form-label"></label>
                    <button type="button" class="button red">上一步</button>
                    <button type="submit" class="button red">下一步</button>
                  </p>
                </form>
              </section>

              <section class="secure-pin-step4">
                <img
                  src="https://media.wvwuwvuwvw.com/e8fe/images/member/secure-pin-change-success2.gif"
                  srcset="https://media.wvwuwvuwvw.com/e8fe/images/member/secure-pin-change-success2-2x.gif 2x"
                  width="550"
                  height="110"
                  alt="申请表格已成功发送。将会在2小时内处理。"
                />
              </section>
            </div>
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
  name: 'profile-pin',
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
    return {}
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
