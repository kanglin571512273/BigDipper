<template>
  <div class="Sidebar">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="网点">
        <a-tree-select
          style="width: 300px;margin-bottom:10px"
          :dropdown-style="{ maxHeight: '400px', overflow: 'auto',}"
          :tree-data="options"
          placeholder="请选择机构名称"
          allowClear
          @change="onBankChange"
        >
          <span
            v-if="key === '0-0-1'"
            slot="title"
            slot-scope="{ key, value }"
            style="color: #08c"
          >Child Node1 {{ value }}</span>
        </a-tree-select>
        <div class="classification">分类：</div>
        <div>
          <a-radio-group default-value="a" button-style="solid">
            <a-radio-button value="a" style="width:145px">网点</a-radio-button>
            <a-radio-button value="b" style="width:145px">自主银行</a-radio-button>
          </a-radio-group>
        </div>
        <div class="digital lndependent">网点35个，自助银行16个。</div>
        <div class="radioGroups">
          <a-checkbox-group @change="onWDChange">
            <div class="radioGroup-lint">
                <a-checkbox :value="1">
                  营业中心
                  <span class="digital">9</span>
                </a-checkbox>
                <a-checkbox :value="2">
                  商圈型
                  <span class="digital">7</span>
                </a-checkbox>
                <a-checkbox :value="3">
                  社区型
                  <span class="digital">9</span>
                </a-checkbox>
            </div>
            <div class="radioGroup-lint">
              <a-checkbox :value="4">
                乡政型
                <span class="digital">2</span>
              </a-checkbox>
              <a-checkbox :value="5">
                市场型
                <span class="digital">5</span>
              </a-checkbox>
              <a-checkbox :value="6">
                园区型
                <span class="digital">6</span>
              </a-checkbox>
            </div>
          </a-checkbox-group>
        </div>
        <div class="classification">距离：</div>
        <a-radio-group name="radioGroup" :default-value="2">
          <div class="radioGroup-lint">
            <a-radio :value="2">1公里</a-radio>
            <a-radio :value="1">3公里</a-radio>
            <a-radio :value="3">
              <input class="inputs" maxlength="2" placeholder="99" />公里
            </a-radio>
          </div>
        </a-radio-group>
        <div class="classification">
          生态：
          <div style="    margin-right: 13px;">
            <a-checkbox @change="onChange">全选</a-checkbox>
            <a-button type="primary" size="small" @click="showModals">新增</a-button>
            <a-modal
              v-model="visibles"
              title="新增生态"
              @ok="handleOks"
              ok-text="确认"
              cancel-text="取消"
              width="70%"
            >
              <div>
                <div class="logynames">
                  <div class="logyname">
                    <span>生态名称：</span>
                    <a-input placeholder="请输入" />
                  </div>
                  <div class="logyname">
                    <span>生态名称：</span>
                    <a-input placeholder="请输入" />
                  </div>
                </div>
                <div class="ecotype margintop30">生态类型：</div>
                <div class="nextype">
                  <a-checkbox-group @change="onChange">
                    <a-checkbox value="A">房产中介</a-checkbox>
                    <a-checkbox value="B">综合体</a-checkbox>
                    <a-checkbox value="C">专业市场</a-checkbox>
                    <a-checkbox value="D">创意园</a-checkbox>
                    <a-checkbox value="E">高档小区</a-checkbox>
                    <a-checkbox value="F">写字楼</a-checkbox>
                  </a-checkbox-group>
                  <a-checkbox-group>
                    <a-checkbox value="G">汽车租凭</a-checkbox>
                    <a-checkbox value="J">风景区</a-checkbox>
                    <a-checkbox value="I">在杭商会</a-checkbox>
                    <a-checkbox value="H">4S店&emsp;</a-checkbox>
                    <a-checkbox value="K">医院&#12288;&#12288;</a-checkbox>
                    <a-checkbox value="L">学校&emsp;</a-checkbox>
                  </a-checkbox-group>
                </div>
                <div class="longname margintop30">
                  <span>生态地址：</span>
                  <a-input placeholder="浙江省杭州市余杭区余杭塘路278号" />
                </div>
                <div class="logynames margintop30">
                  <div class="logyname">
                    <span>生态名称：</span>
                    <a-input placeholder="请输入" />
                  </div>
                  <div class="logyname">
                    <span>生态名称：</span>
                    <a-input placeholder="请输入" />
                  </div>
                </div>
                <div class="longname margintop30">
                  <span>备注：</span>
                  <a-textarea placeholder="请输入备注" :rows="4" />
                </div>
              </div>
            </a-modal>
          </div>
        </div>
        <div>
          <a-checkbox-group @change="onChange">
            <a-row>
              <a-col :span="12">
                <a-checkbox value="A">
                  房产中介
                  <span class="digital">6</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="B">
                  综合体
                  <span class="digital">4</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="C">
                  专业市场
                  <span class="digital">8</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="D">
                  创意园
                  <span class="digital">12</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="E">
                  高档小区
                  <span class="digital">14</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="F">
                  写字楼
                  <span class="digital">2</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="G">
                  汽车租凭
                  <span class="digital">5</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="H">
                  4 S 店
                  <span class="digital">6</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="I">
                  在杭商会
                  <span class="digital">12</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="J">
                  风景区
                  <span class="digital">5</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="K">
                  &#12288;医院&#12288;
                  <span class="digital">4</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="L">
                  学校&emsp;
                  <span class="digital">3</span>
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <div class="classification">银行网点：</div>
        <div>
          <a-checkbox-group @change="onChange">
            <a-row>
              <a-col :span="8">
                <a-checkbox value="A">
                  农行
                  <span class="digital">3</span>
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="B">
                  工行
                  <span class="digital">2</span>
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="C">
                  建行
                  <span class="digital">2</span>
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="D">
                  中行
                  <span class="digital">1</span>
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="E">
                  杭银
                  <span class="digital">1</span>
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="F">
                  其他
                  <span class="digital">5</span>
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <div class="classification">名称：</div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>农业银行城东支行</span>
          </div>
          <div>251m</div>
        </div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>农业银行西湖支行</span>
          </div>
          <div>451m</div>
        </div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>农业银行拱墅支行</span>
          </div>
          <div>871m</div>
        </div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>招商银行延安路支行</span>
          </div>
          <div>678m</div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="客户" force-render>
        <a-tree-select
          style="width: 300px;margin-bottom:10px"
          :dropdown-style="{ maxHeight: '400px', overflow: 'auto',}"
          :tree-data="options"
          placeholder="请选择机构名称"
          allowClear
        >
          <span
            v-if="key === '0-0-1'"
            slot="title"
            slot-scope="{ key, value }"
            style="color: #08c"
          >Child Node1 {{ value }}</span>
        </a-tree-select>
        <a-input placeholder="请输入客户名称" style="width: 300px;margin-top:10px" />
        <div class="classification">
          客户分类：
          <a-checkbox @change="onChange">全选</a-checkbox>
        </div>
        <div>
          <a-checkbox-group @change="onChange">
            <a-row>
              <a-col :span="12">
                <a-checkbox value="A">
                  百行进万企业
                  <span class="digital">23</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="B">
                  五件完成情况
                  <span class="digital">43</span>
                </a-checkbox>
              </a-col>
              <a-col :span="14">
                <a-checkbox value="C">
                  政府采购供应商
                  <span class="digital">45</span>
                </a-checkbox>
              </a-col>
              <a-col :span="14">
                <a-checkbox value="D">
                  拟授信上市公司
                  <span class="digital">23</span>
                </a-checkbox>
              </a-col>
            </a-row>
            <div class="line"></div>
            <a-row>
              <a-col :span="12">
                <a-checkbox value="E">
                  省属国企
                  <span class="digital">12</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="F">
                  市属国企
                  <span class="digital">54</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="G">
                  重点民企
                  <span class="digital">67</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="H">
                  纳税大户
                  <span class="digital">34</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="I">
                  发债客户
                  <span class="digital">2</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="J">
                  凤凰行动
                  <span class="digital">2</span>
                </a-checkbox>
              </a-col>
            </a-row>
            <div class="line"></div>
            <a-row>
              <a-col :span="14">
                <a-checkbox value="01">
                  中央行政事业单位
                  <span class="digital">4</span>
                </a-checkbox>
              </a-col>
              <a-col :span="14">
                <a-checkbox value="02">
                  市级行政事业单位
                  <span class="digital">32</span>
                </a-checkbox>
              </a-col>
              <a-col :span="14">
                <a-checkbox value="03">
                  区县行政事业单位
                  <span class="digital">54</span>
                </a-checkbox>
              </a-col>
            </a-row>
            <div class="line"></div>
            <a-row>
              <a-col :span="12">
                <a-checkbox value="04">
                  国际结算大户
                  <span class="digital">21</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="05">
                  农业龙头企业
                  <span class="digital">64</span>
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <div class="classification">距离：</div>
        <a-radio-group name="radioGroup" :default-value="2">
          <div class="radioGroup-lint">
            <a-radio :value="2">1公里</a-radio>
            <a-radio :value="1">3公里</a-radio>
            <a-radio :value="3">
              <input class="inputs" maxlength="2" placeholder="99" />公里
            </a-radio>
          </div>
        </a-radio-group>
        <div class="classification">
          范围内客户清单：
          <div style="    margin-right: 13px;">
            <a-button type="primary" size="small" @click="showModal">全景查看</a-button>
            <a-modal
              v-model="visible"
              width="90%"
              title="延安支行和平支行重点客户全景-10公里"
              :footer="null"
              @ok="hideModal"
            >
              <Panorama></Panorama>
            </a-modal>
          </div>
        </div>
        <div>
          <table class="gridtable">
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.15);">
              <th></th>
              <th>总客类别</th>
              <th>户数</th>
            </tr>
            <tr>
              <td></td>
              <td>
                <span class="iconfont iconzong-kongxinhong"></span>&nbsp;&nbsp;
                <span>总客户数</span>
              </td>
              <td>422</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconyikaihu-huang" />
                </svg>&nbsp;&nbsp;
                <span>以开户数</span>
              </td>
              <td>50</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconyiduijie-zise" />
                </svg>&nbsp;&nbsp;已对接数
              </td>
              <td>320</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconyiduijie-zisebeifen" />
                </svg>&nbsp;&nbsp;大数据推荐
              </td>
              <td>500</td>
            </tr>
          </table>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="发现">
        <a-tree-select
          style="width: 300px;margin-bottom:10px"
          :dropdown-style="{ maxHeight: '400px', overflow: 'auto',}"
          :tree-data="options"
          placeholder="请选择机构名称"
          allowClear
        >
          <span
            v-if="key === '0-0-1'"
            slot="title"
            slot-scope="{ key, value }"
            style="color: #08c"
          >Child Node1 {{ value }}</span>
        </a-tree-select>
        <a-select
          label-in-value
          placeholder="请选择机构清单"
          style="width: 300px;margin-bottom:10px"
          @change="Checklist"
        >
          <a-select-option value="jack">法人客户清单</a-select-option>
          <a-select-option value="lucy">个人客户清单</a-select-option>
          <a-select-option value="payts">纳税企业清单</a-select-option>
          <a-select-option value="recruitment">招聘企业清单</a-select-option>
          <a-select-option value="houses">房屋交易清单</a-select-option>
        </a-select>
        <div v-show="num==0"></div>
        <div v-show="num==1">
          <a-input placeholder="请输入客户名称" style="width: 300px;" />
          <div class="classification">
            营销：
            <a-checkbox @change="onChange">全选</a-checkbox>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,1)">代发工资</div>
            <div class="wage" @click="changeStatus($event,2)">高管开户</div>
            <div class="wage" @click="changeStatus($event,3)">ETC</div>
          </div>
          <div class="classification">
            客群：
            <a-checkbox @change="onChange">全选</a-checkbox>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,5)">有贷户 25</div>
            <div class="wage" @click="changeStatus($event,6)">无贷户 35</div>
          </div>
          <div class="classification">距离：</div>
          <a-radio-group name="radioGroup" :default-value="2">
            <div class="radioGroup-lint">
              <a-radio :value="2">1公里</a-radio>
              <a-radio :value="1">3公里</a-radio>
              <a-radio :value="3">
                <input class="inputs" maxlength="2" placeholder="99" />公里
              </a-radio>
            </div>
          </a-radio-group>
          <div class="classification">
            名称：
            <div>
              <a-radio-group name="radioGroup" :default-value="2">
                <a-radio :value="2">未开通</a-radio>
                <a-radio :value="1">已开通</a-radio>
              </a-radio-group>
            </div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
              <span>浙江锋千亚网络公司</span>
            </div>
            <div>100m</div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
              <span>浙江仕佳网络公司</span>
            </div>
            <div>200m</div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
              <span>浙江创峰科技有限公司</span>
            </div>
            <div>300m</div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
              <span>浙江迈磊凯家具公司</span>
            </div>
            <div>400m</div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
              <span>杭州朗珮科技有限公司</span>
            </div>
            <div>500m</div>
          </div>
        </div>
        <div v-show="num==2">
          <a-input placeholder="请输入客户名称" style="width: 300px;" />
          <div class="classification">
            营销：
            <a-checkbox @change="onChange">全选</a-checkbox>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,3)">ETC</div>
            <div class="wage" @click="changeStatus($event,2)">管户</div>
            <div class="wage" @click="changeStatus($event,1)">掌银</div>
            <div class="wage" @click="changeStatus($event,4)">对攻扩户</div>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,5)">管户</div>
            <div class="wage" @click="changeStatus($event,6)">贷记卡</div>
          </div>
          <div class="classification">
            客群：
            <a-checkbox @change="onChange">全选</a-checkbox>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,7)">VIP 254</div>
            <div class="wage" @click="changeStatus($event,8)">贷款户 353</div>
            <div class="wage" @click="changeStatus($event,9)">理财 136</div>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,10)">代发工资 234</div>
            <div class="wage" @click="changeStatus($event,11)">企业高管 143</div>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,12)">TOP500 89</div>
            <div class="wage" @click="changeStatus($event,13)">有车族 8</div>
            <div class="wage" @click="changeStatus($event,14)">贷记卡 10</div>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,15)">POS商户 45</div>
            <div class="wage" @click="changeStatus($event,16)">公积金贷款 4</div>
          </div>
          <div class="classification">距离：</div>
          <a-radio-group name="radioGroup" :default-value="2">
            <div class="radioGroup-lint">
              <a-radio :value="2">1公里</a-radio>
              <a-radio :value="1">3公里</a-radio>
              <a-radio :value="3">
                <input class="inputs" maxlength="2" placeholder="99" />公里
              </a-radio>
            </div>
          </a-radio-group>
          <div class="classification">
            范围内客户清单：
            <div>651户</div>
          </div>
          <div>
            <table class="gridtable">
              <tr style="border-bottom: 1px solid rgba(0,0,0,0.15);">
                <th></th>
                <th>客户姓名</th>
                <th>客户经理</th>
              </tr>
              <tr>
                <td></td>
                <td>旷筠振</td>
                <td>阿妍梅</td>
              </tr>
              <tr>
                <td></td>
                <td>孟佳</td>
                <td>保伊先</td>
              </tr>
              <tr>
                <td></td>
                <td>操思辰</td>
                <td>百梅</td>
              </tr>
              <tr>
                <td></td>
                <td>丘勇群</td>
                <td>洛春娥</td>
              </tr>
            </table>
          </div>
        </div>
        <div v-show="num==3">
          <a-input placeholder="请输入客户名称" style="width: 300px;" />
          <div class="classification">距离：</div>
          <a-radio-group name="radioGroup" :default-value="2">
            <div class="radioGroup-lint">
              <a-radio :value="2">1公里</a-radio>
              <a-radio :value="4">3公里</a-radio>
              <a-radio :value="3">
                <input class="inputs" maxlength="2" placeholder="99" />公里
              </a-radio>
            </div>
          </a-radio-group>
          <div class="classification">
            名称：
            <div style="display:flex">
              <a-radio-group name="radioGroup" :default-value="2">
                <a-radio :value="2">A级</a-radio>
                <a-radio :value="9">B级</a-radio>
              </a-radio-group>
              <div>109户</div>
            </div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>

              <span>浙江锋千亚网络公司</span>
            </div>
            <div>100m</div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
              <span>浙江仕佳网络公司</span>
            </div>
            <div>200m</div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
              <span>浙江创峰科技有限公司</span>
            </div>
            <div>300m</div>
          </div>
          <div class="agriculture-box">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
              <span>浙江迈磊凯家具公司</span>
            </div>
            <div>400m</div>
          </div>
          <div class="agriculture-box">
            <div>
               <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
              <span>杭州朗珮科技有限公司</span>
            </div>
            <div>500m</div>
          </div>
        </div>
        <div v-show="num==4">
          <a-select
            label-in-value
            placeholder="请选择企业再招人数"
            style="width: 300px"
            @change="handleChange"
          >
            <a-select-option value="jack">0～10人</a-select-option>
            <a-select-option value="lucy">10～30人</a-select-option>
            <a-select-option value="recruitment">30～50人</a-select-option>
            <a-select-option value="payts">50以上人</a-select-option>
          </a-select>
          <div class="classification">
            营销：
            <a-checkbox @change="onChange">全选</a-checkbox>
          </div>
          <div class="wage-box">
            <div class="wage" @click="changeStatus($event,21)">代发工资</div>
            <div class="wage" @click="changeStatus($event,22)">高管开户</div>
            <div class="wage" @click="changeStatus($event,20)">ETC</div>
          </div>
          <div class="classification">距离：</div>
          <a-radio-group name="radioGroup" :default-value="2">
            <div class="radioGroup-lint">
              <a-radio :value="2">1公里</a-radio>
              <a-radio :value="1">3公里</a-radio>
              <a-radio :value="3">
                <input class="inputs" maxlength="2" placeholder="99" />公里
              </a-radio>
            </div>
            <div class="classification">名称：</div>
            <div class="agriculture-box">
              <div>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
                <span>浙江锋千亚网络公司</span>
              </div>
              <div>100m</div>
            </div>
            <div class="agriculture-box">
              <div>
                 <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
                <span>浙江仕佳网络公司</span>
              </div>
              <div>200m</div>
            </div>
            <div class="agriculture-box">
              <div>
                  <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
                <span>浙江创峰科技有限公司</span>
              </div>
              <div>300m</div>
            </div>
            <div class="agriculture-box">
              <div>
                 <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
                <span>浙江迈磊凯家具公司</span>
              </div>
              <div>400m</div>
            </div>
            <div class="agriculture-box">
              <div>
                 <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
                <span>杭州朗珮科技有限公司</span>
              </div>
              <div>500m</div>
            </div>
          </a-radio-group>
        </div>
        <div v-show="num==5">
          <a-input placeholder="请输入客户名称" style="width: 300px;" />
          <div class="classification">距离：</div>
          <a-radio-group name="radioGroup" :default-value="2">
            <div class="radioGroup-lint">
              <a-radio :value="2">1公里</a-radio>
              <a-radio :value="1">3公里</a-radio>
              <a-radio :value="3">
                <input class="inputs" maxlength="2" placeholder="99" />公里
              </a-radio>
            </div>
            <div class="classification">
              范围内客户清单：
              <div>109户</div>
            </div>
            <div class="agriculture-box">
              <div>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
                <span>名称公寓</span>
              </div>
              <div>100m</div>
            </div>
            <div class="agriculture-box">
              <div>
               <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
                <span>延安路</span>
              </div>
              <div>200m</div>
            </div>
            <div class="agriculture-box">
              <div>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
                <span>平海公寓</span>
              </div>
              <div>300m</div>
            </div>
            <div class="agriculture-box">
              <div>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
                <span>中山山路</span>
              </div>
              <div>400m</div>
            </div>
            <div class="agriculture-box">
              <div>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
                <span>延安路</span>
              </div>
              <div>500m</div>
            </div>
            <div class="agriculture-box">
              <div>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyiduijie-zise" />
              </svg>
                <span>平海公寓</span>
              </div>
              <div>500m</div>
            </div>
            <div class="agriculture-box">
              <div>
               <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconyikaihu-huang" />
              </svg>
                <span>未央村</span>
              </div>
              <div>500m</div>
            </div>
          </a-radio-group>
        </div>
      </a-tab-pane>
      <a-tab-pane key="4" tab="商圈">
        <a-tree-select
          style="width: 300px;margin-bottom:10px"
          :dropdown-style="{ maxHeight: '400px', overflow: 'auto',}"
          :tree-data="options"
          placeholder="请选择机构名称"
          allowClear
        >
          <span
            v-if="key === '0-0-1'"
            slot="title"
            slot-scope="{ key, value }"
            style="color: #08c"
          >Child Node1 {{ value }}</span>
        </a-tree-select>
        <div class="classification">
          分类：
          <a-checkbox @change="onChange">全选</a-checkbox>
        </div>
        <div>
          <a-checkbox-group @change="onChange">
            <a-row>
              <a-col :span="12">
                <a-checkbox value="E">
                  创意园
                  <span class="digital">12</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="F">
                  综合体
                  <span class="digital">54</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="G">
                  专业市场
                  <span class="digital">67</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="H">
                  写字楼
                  <span class="digital">34</span>
                </a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="I">
                  小微园区
                  <span class="digital">2</span>
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <div class="classification">距离：</div>
        <a-radio-group name="radioGroup" :default-value="2">
          <div class="radioGroup-lint">
            <a-radio :value="2">1公里</a-radio>
            <a-radio :value="1">3公里</a-radio>
            <a-radio :value="3">
              <input class="inputs" maxlength="2" placeholder="99" />公里
            </a-radio>
          </div>
        </a-radio-group>
        <a-tree-select
          style="width: 300px;margin-bottom:10px"
          :dropdown-style="{ maxHeight: '400px', overflow: 'auto',}"
          placeholder="请选择商圈"
          allowClear
        >
          <!-- <span
            v-if="key === '0-0-1'"
            slot="title"
            slot-scope="{ key, value }"
            style="color: #08c"
          >Child Node1 {{ value }}</span> -->
        </a-tree-select>
        <a-input placeholder="请输入客户名称" style="width: 300px;" />
        <div class="classification">
          营销分类：
          <a-checkbox @change="onChange">全选</a-checkbox>
        </div>
        <div class="wage-box">
          <div class="wage" @click="changeStatus($event,1)">开户 5</div>
          <div class="wage" @click="changeStatus($event,2)">待选 1</div>
          <div class="wage" @click="changeStatus($event,3)">目标 5</div>
        </div>
        <div class="classification">
          名称：
          <div>109户</div>
        </div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>浙江锋千亚网络公司</span>
          </div>
          <div>100m</div>
        </div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>浙江仕佳网络公司</span>
          </div>
          <div>200m</div>
        </div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>浙江创峰科技有限公司</span>
          </div>
          <div>300m</div>
        </div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>浙江迈磊凯家具公司</span>
          </div>
          <div>400m</div>
        </div>
        <div class="agriculture-box">
          <div>
            <span></span>
            <span>杭州朗珮科技有限公司</span>
          </div>
          <div>500m</div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Panorama from "@/components/Panorama.vue";
import Vue from "vue";
import {
  Tabs,
  Select,
  Radio,
  Checkbox,
  Col,
  Row,
  Button,
  Input,
  Modal,
  Cascader,
  TreeSelect,
} from "ant-design-vue";
Vue.use(Tabs);
Vue.use(Select);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Input);
Vue.use(Modal);
Vue.use(Cascader);
Vue.use(TreeSelect);
export default {
  components: {
    Panorama,
  },
  data() {
    return {
      num: 0,
      visible: false,
      visibles: false,
      bankCircleShow: false,
      options: [
        {
          value: "hangzhou",
          label: "杭州分行",
          children: [
            {
              value: "xihu",
              label: "西湖支行",
              children: [
                {
                  value: "hubin",
                  label: "湖滨支行",
                },
              ],
            },
            {
              value: "yuhang",
              label: "余杭支行",
              children: [
                {
                  value: "xihua",
                  label: "West Lake",
                },
              ],
            },
          ],
        },
        {
          value: "sahnghai",
          label: "上海分行",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    showModals() {
      this.visibles = true;
    },
    handleOks(e) {
      console.log(e);
      this.visibles = false;
    },
    callback(key) {
      console.log(key);
    },
    handleChange(value) {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    },
    Checklist(value) {
      // if(value.key=="jack"){
      //     this.num=1
      // }
      switch (value.key) {
        case "jack":
          this.num = 1;
          break;
        case "lucy":
          this.num = 2;
          break;
        case "payts":
          this.num = 3;
          break;
        case "recruitment":
          this.num = 4;
          break;
        case "houses":
          this.num = 5;
        default:
      }
    },
    onBankChange(value, label) {
      this.bankCircleShow = value === "hubin" ? true : false;
      console.log(value, this.bankCircleShow)
      this.$emit('circleShow', this.bankCircleShow)
    },
    onWDChange(checkValue) {
      console.log(checkValue)
    },
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    },
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    changeStatus(e, number) {
      if (e.target.className.indexOf("wages") == -1) {
        e.target.className = "wage wages"; //选中div样式
      } else {
        e.target.className = "wage"; //未选中div样式
      }
    },
    displayRender({ labels }) {
      return labels[labels.length - 1];
    },
  },
};
</script>
<style lang="stylus">
.Sidebar {
  width: 25%;
  height: 669px;
  overflow: auto;
  padding: 0px 30px 30px 30px;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 1;
  background: #FFF;
  border-radius: 10px 0px 0px 10px;
  box-shadow: -4px 0px 22px 0px rgba(23, 125, 220, 0.15);
}

.ant-tabs-nav .ant-tabs-tab {
  padding: 12px 19px;
}

.classification {
  text-align: left;
  font-size: 14px;
  color: rgba(24, 144, 255, 1);
  line-height: 22px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.radioGroups {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
}

.radioGroup-lint {
  width: 300px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.agriculture-box {
  display: flex;
  justify-content: space-between;
}

.digital {
  font-size: 12px;
  color: rgba(82, 196, 26, 1);
}

.ant-col-12 .ant-col-8 {
  text-align: left;
}

.ant-col-8, .ant-col-12, .ant-col-14 {
  margin-bottom: 10px;
  text-align: left;
}

.ant-tabs-nav .ant-tabs-tab {
  margin: 0;
}

.line {
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
  margin: 10px 0;
}

table.gridtable {
  width: 300px;
  font-size: 14px;
  color: #000;
  border-collapse: collapse;
  text-align: left;
}

table.gridtable th {
  width: 22px;
  border: 0;
  padding-left: 8px;
}

table.gridtable td {
  padding: 8px;
  border: 0;
}

.ant-modal-title {
  text-align: left;
}

.ant-modal {
  top: 40px;
}

.wage-box {
  display: flex;
}

.wage {
  padding: 5px 10px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: #000;
  cursor: pointer;
  margin: 5px 6px;
}

.wages {
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  background: #1890FF;
  color: #FFF;
}

.logynames {
  display: flex;
}

.margintop30 {
  margin-top: 30px;
}

.logyname {
  display: flex;
  width: 300px;
  margin-right: 70px;

  span {
    width: 100px;
    line-height: 30px;
    color: #1890FF;
  }
}

.longname {
  display: flex;
  width: 667px;

  span {
    width: 80px;
    line-height: 30px;
    color: #1890FF;
  }
}

.ecotype {
  text-align: left;
  color: #1890FF;
}

.nextype {
  width: 59%;
  text-align: left;
  margin-left: 70px;

  div {
    margin-top: 10px;
  }
}

.lndependent {
  text-align: left;
  margin-top: 10px;
}

.inputs {
  width: 33px;
  height: 24px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>