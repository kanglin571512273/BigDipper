<template>
  <div>
    <a-tree-select
      style="width: 300px;margin-bottom:10px"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
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
        >Child Node1 {{ value }}</span
      >
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
    <div v-show="num == 0"></div>
    <div v-show="num == 1">
      <a-input placeholder="请输入客户名称" style="width: 300px;" />
      <div class="classification">
        营销：
        <a-checkbox @change="onChange">全选</a-checkbox>
      </div>
      <div class="wage-box">
        <div class="wage" @click="changeStatus($event, 1)">代发工资</div>
        <div class="wage" @click="changeStatus($event, 2)">高管开户</div>
        <div class="wage" @click="changeStatus($event, 3)">ETC</div>
      </div>
      <div class="classification">
        客群：
        <a-checkbox @change="onChange">全选</a-checkbox>
      </div>
      <div class="wage-box">
        <div class="wage" @click="changeStatus($event, 5)">有贷户 25</div>
        <div class="wage" @click="changeStatus($event, 6)">无贷户 35</div>
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
    <div v-show="num == 2">
      <a-input placeholder="请输入客户名称" style="width: 300px;" />
      <div class="classification">
        营销：
        <a-checkbox @change="onChange">全选</a-checkbox>
      </div>
      <div class="wage-box">
        <div class="wage" @click="changeStatus($event, 3)">ETC</div>
        <div class="wage" @click="changeStatus($event, 2)">管户</div>
        <div class="wage" @click="changeStatus($event, 1)">掌银</div>
        <div class="wage" @click="changeStatus($event, 4)">对攻扩户</div>
      </div>
      <div class="wage-box">
        <div class="wage" @click="changeStatus($event, 5)">管户</div>
        <div class="wage" @click="changeStatus($event, 6)">贷记卡</div>
      </div>
      <div class="classification">
        客群：
        <a-checkbox @change="onChange">全选</a-checkbox>
      </div>
      <div class="wage-box">
        <div class="wage" @click="changeStatus($event, 7)">VIP 254</div>
        <div class="wage" @click="changeStatus($event, 8)">贷款户 353</div>
        <div class="wage" @click="changeStatus($event, 9)">理财 136</div>
      </div>
      <div class="wage-box">
        <div class="wage" @click="changeStatus($event, 10)">代发工资 234</div>
        <div class="wage" @click="changeStatus($event, 11)">企业高管 143</div>
      </div>
      <div class="wage-box">
        <div class="wage" @click="changeStatus($event, 12)">TOP500 89</div>
        <div class="wage" @click="changeStatus($event, 13)">有车族 8</div>
        <div class="wage" @click="changeStatus($event, 14)">贷记卡 10</div>
      </div>
      <div class="wage-box">
        <div class="wage" @click="changeStatus($event, 15)">POS商户 45</div>
        <div class="wage" @click="changeStatus($event, 16)">公积金贷款 4</div>
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
    <div v-show="num == 3">
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
    <div v-show="num == 4">
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
        <div class="wage" @click="changeStatus($event, 21)">代发工资</div>
        <div class="wage" @click="changeStatus($event, 22)">高管开户</div>
        <div class="wage" @click="changeStatus($event, 20)">ETC</div>
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
    <div v-show="num == 5">
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
  </div>
</template>

<script>
import Vue from "vue";
import Bus from "../api/bus"
import bankList from "../api/bankList"
import {Tabs,Select,Radio,Checkbox,Col,Row,Button,Input,Modal,Cascader,TreeSelect} from "ant-design-vue";
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
  data(){
    return {
      num: 0,
      disRadioShow3: false,
      options: bankList,
    }
  },
  methods: {
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    },
    onBankChange(value, label) { // 四个组件都用
      let bankCircleShow3 = value === "hubin" ? true : false;
      Bus.$emit("circleShow3", bankCircleShow3, this.curKey);
    },
    handleChange(value) {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    },
    Checklist(value) {
      // if(value.key=="jack"){
      //     this.num=1
      // }
      this.disRadioShow3 = true;
      Bus.$emit("disRadio", this.disRadioShow3);
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
    changeStatus(e, number) {
      if (e.target.className.indexOf("wages") == -1) {
        e.target.className = "wage wages"; //选中div样式
      } else {
        e.target.className = "wage"; //未选中div样式
      }
    },
  }
};
</script>

<style lang="stylus">
@import '../assets/css/common.styl'
</style>