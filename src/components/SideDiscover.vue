<template>
  <div>
    <a-tree-select
      style="width: 300px;margin-bottom:10px"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :tree-data="options"
      placeholder="请选择机构名称"
      allowClear
      v-model="valueWDBank"
      @change="onBankChange"
    >
      <span
        v-if="key === '0-0-1'"
        slot="title"
        slot-scope="{ key, value }"
        style="color: #08c"
      >Child Node1 {{ value }}</span>
    </a-tree-select>
    <a-modal v-model="visible" width="92%" title="杭州爱迷尚服装公司-企业画像" :footer="null" @ok="handleOk">
      <Customerportrait></Customerportrait>
    </a-modal>
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
        <div
          class="wage"
          v-for="item in personlist"
          :key="item.id"
          :value="item.id"
          @click="changeStatus($event, item.id)"
        >{{item.label}}</div>
      </div>
      <div class="classification">
        客群：
        <a-checkbox @change="onChange">全选</a-checkbox>
      </div>
      <div class="wage-box">
        <div
          class="wage"
          v-for="item in personlist1"
          :key="item.id"
          :value="item.id"
          @click="changeStatus($event, item.id)"
        >{{item.label}} {{item.num}}</div>
      </div>
      <div class="classification">距离：</div>
      <a-radio-group name="radioGroup" v-model="circleRange" @change="rangeChange">
        <div class="radioGroup-lint">
          <a-radio :value="1">1公里</a-radio>
          <a-radio :value="2">3公里</a-radio>
          <a-radio :value="3">
            <input class="inputs" maxlength="2" placeholder="99" />公里
          </a-radio>
        </div>
      </a-radio-group>
      <div class="classification">
        名称：
        <div>
          <a-radio-group name="radioGroup" :default-value="2">
            <a-radio :value="2" @change="cantf">未开通</a-radio>
            <a-radio :value="1" @change="cantt">已开通</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div
        class="agriculture-box"
        v-show="cant==1"
        v-for="item in companylist"
        :key="item.id"
        :value="item.id"
      >
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyikaihu-huang" />
          </svg>
          <a @click="showModal">{{item.label}}</a>
        </div>
        <div>{{item.num}}m</div>
      </div>
      <div
        class="agriculture-box"
        v-show="cant==2"
        v-for="item in companylist"
        :key="item.num"
        :value="item.id"
      >
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyiduijie-zise" />
          </svg>
          <a @click="showModal">{{item.label}}</a>
        </div>
        <div>{{item.num}}m</div>
      </div>
      <div class="paging">
        <a-pagination v-model="current" :total="30" show-less-items />
      </div>
    </div>
    <div v-show="num == 2">
      <a-input placeholder="请输入客户名称" style="width: 300px;" />
      <div class="classification">
        营销：
        <a-checkbox @change="onChange">全选</a-checkbox>
      </div>
      <div class="wage-box">
        <div
          class="wage"
          v-for="item in personallist"
          :key="item.id"
          :value="item.id"
          @click="changeStatus($event, item.id)"
        >{{item.label}}</div>
      </div>
      <div class="classification">
        客群：
        <a-checkbox @change="onChange">全选</a-checkbox>
      </div>
      <div class="wage-box">
        <div
          class="wage"
          v-for="item in personallist1"
          :key="item.id"
          :value="item.id"
          @click="changeStatus($event, item.id)"
        >{{item.label}} {{item.num}}</div>
      </div>

      <div class="classification">距离：</div>
      <a-radio-group name="radioGroup" v-model="circleRange" @change="rangeChange">
        <div class="radioGroup-lint">
          <a-radio :value="1">1公里</a-radio>
          <a-radio :value="2">3公里</a-radio>
          <a-radio :value="3">
            <input class="inputs" maxlength="2" placeholder="99" />公里
          </a-radio>
        </div>
      </a-radio-group>
      <div class="classification">
        范围内客户清单：
        <div>21户</div>
      </div>
      <div>
        <table class="gridtable">
          <tr style="border-bottom: 1px solid rgba(0,0,0,0.15);">
            <th></th>
            <th>客户姓名</th>
            <th>客户经理</th>
          </tr>
          <tr v-for="item in customer" :key="item.id" :value="item.id">
            <td></td>
            <td>{{item.name}}</td>
            <td>{{item.name2}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-show="num == 3">
      <a-input placeholder="请输入客户名称" style="width: 300px;" />
      <div class="classification">距离：</div>
      <a-radio-group name="radioGroup" v-model="circleRange" @change="rangeChange">
        <div class="radioGroup-lint">
          <a-radio :value="1">1公里</a-radio>
          <a-radio :value="2">3公里</a-radio>
          <a-radio :value="3">
            <input class="inputs" maxlength="2" placeholder="99" />公里
          </a-radio>
        </div>
      </a-radio-group>
      <div class="classification">
        名称：
        <div style="display:flex">
          <a-radio-group name="radioGroup" :default-value="2">
            <a-radio :value="2" @change="cantf">A级</a-radio>
            <a-radio :value="9" @change="cantt">B级</a-radio>
          </a-radio-group>
          <div>19户</div>
        </div>
      </div>
      <div
        class="agriculture-box"
        v-show="cant==1"
        v-for="item in companylist"
        :key="item.id"
        :value="item.id"
      >
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyikaihu-huang" />
          </svg>
          <a @click="showModal">{{item.label}}</a>
        </div>
        <div>{{item.num}}m</div>
      </div>
      <div
        class="agriculture-box"
        v-show="cant==2"
        v-for="item in companylist"
        :key="item.num"
        :value="item.id"
      >
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyiduijie-zise" />
          </svg>
          <a @click="showModal">{{item.label}}</a>
        </div>
        <div>{{item.num}}m</div>
      </div>
      <div class="paging">
        <a-pagination v-model="current" :total="30" show-less-items />
      </div>
    </div>
    <div v-show="num == 4">
      <a-select label-in-value placeholder="请选择企业再招人数" style="width: 300px" @change="handleChange">
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
        <div
          class="wage"
          v-for="item in personlist"
          :key="item.id"
          :value="item.id"
          @click="changeStatus($event, item.id)"
        >{{item.label}}</div>
      </div>
      <div class="classification">距离：</div>
      <a-radio-group name="radioGroup" v-model="circleRange" @change="rangeChange">
        <div class="radioGroup-lint">
          <a-radio :value="1">1公里</a-radio>
          <a-radio :value="2">3公里</a-radio>
          <a-radio :value="3">
            <input class="inputs" maxlength="2" placeholder="99" />公里
          </a-radio>
        </div>
        <div class="classification">名称：</div>
        <div class="agriculture-box" v-for="item in companylist" :key="item.id" :value="item.id">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconyikaihu-huang" />
            </svg>
            <a @click="showModal">{{item.label}}</a>
          </div>
          <div>{{item.num}}m</div>
        </div>
        <div class="paging">
          <a-pagination v-model="current" :total="30" show-less-items />
        </div>
      </a-radio-group>
    </div>
    <div v-show="num == 5">
      <a-input placeholder="请输入客户名称" style="width: 300px;" />
      <div class="classification">距离：</div>
      <a-radio-group name="radioGroup" v-model="circleRange" @change="rangeChange">
        <div class="radioGroup-lint">
          <a-radio :value="1">1公里</a-radio>
          <a-radio :value="2">3公里</a-radio>
          <a-radio :value="3">
            <input class="inputs" maxlength="2" placeholder="99" />公里
          </a-radio>
        </div>
        <div class="classification">
          范围内客户清单：
          <div>109户</div>
        </div>
        <div class="agriculture-box" v-for="item in apartment" :key="item.id" :value="item.id">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconyikaihu-huang" />
            </svg>
            <span>{{item.label}}</span>
          </div>
          <div>{{item.num}}m</div>
        </div>
        <div class="paging">
          <a-pagination v-model="current" :total="30" show-less-items />
        </div>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Bus from "../api/bus";
import bankList from "../api/bankList";
import Customerportrait from "@/components/Customerportrait.vue";
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
  Pagination,
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
Vue.use(Pagination);
export default {
  components: {
    Customerportrait,
  },
  data() {
    return {
      num: 0,
      cant: 2,
      current: 1,
      disRadioShow3: false,
      visible: false,
      options: bankList,
      valueWDBank: null,
      circleRange: 1,
      personlist: [
        { id: 1, label: "代发工资" },
        { id: 2, label: "高管开户" },
        { id: 3, label: "ETC" },
      ],
      personallist: [
        { id: 1, label: "ETC" },
        { id: 2, label: "管户" },
        { id: 3, label: "掌银" },
        { id: 4, label: "对攻扩户" },
        { id: 5, label: "贷记卡" },
      ],
      personlist1: [
        { id: 5, label: "有贷户", num: 25 },
        { id: 6, label: "无贷户", num: 35 },
      ],
      companylist: [
        { id: 23, label: "浙江锋千亚网络公司", num: 100 },
        { id: 24, label: "浙江仕佳网络公司", num: 120 },
        { id: 25, label: "浙江创峰科技有限公司", num: 150 },
        { id: 26, label: "浙江迈磊凯家具公司", num: 190 },
        { id: 85, label: "杭州朗珮科技有限公司", num: 250 },
        { id: 65, label: "杭州朗珮科技有限公司", num: 250 },
        { id: 165, label: "杭州朗珮科技有限公司", num: 250 },
        { id: 265, label: "杭州朗珮科技有限公司", num: 250 },
        { id: 365, label: "杭州朗珮科技有限公司", num: 250 },
        { id: 465, label: "杭州朗珮科技有限公司", num: 250 },
        { id: 565, label: "杭州朗珮科技有限公司", num: 250 },
      ],
      apartment: [
        { id: 1, label: "名称公寓", num: 100 },
        { id: 2, label: "延安路", num: 120 },
        { id: 3, label: "平海公寓", num: 150 },
        { id: 4, label: "中山山路", num: 190 },
        { id: 5, label: "延安路", num: 350 },
        { id: 6, label: "平海公寓", num: 450 },
        { id: 7, label: "未央村", num: 650 },
        { id: 14, label: "中山山路", num: 190 },
        { id: 776, label: "平海公寓", num: 450 },
        { id: 77, label: "未央村", num: 650 },
        { id: 714, label: "中山山路", num: 190 },
        { id: 25, label: "延安路", num: 350 },
        { id: 36, label: "平海公寓", num: 450 },
        { id: 47, label: "未央村", num: 650 },
      ],
      personallist1: [
        { id: 6, label: "VIP", num: 23 },
        { id: 7, label: "贷款户", num: 27 },
        { id: 8, label: "掌银", num: 43 },
        { id: 9, label: "理财", num: 54 },
        { id: 10, label: "代发工资", num: 33 },
        { id: 11, label: "企业高管", num: 53 },
        { id: 12, label: "TOP500", num: 57 },
        { id: 13, label: "有车族", num: 7 },
        { id: 14, label: "贷记卡", num: 37 },
        { id: 15, label: "POS商户", num: 27 },
        { id: 16, label: "公积金贷款", num: 87 },
      ],
      customer: [
        { id: 1, name: "旷筠振", name2: "阿妍梅" },
        { id: 2, name: "孟佳", name2: "保伊先" },
        { id: 3, name: "操思辰", name2: "百梅" },
        { id: 4, name: "丘勇群", name2: "洛春娥" },
      ],
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    },
    onBankChange(value, label) {
      // 四个组件都用
      let bankCircleShow3 =
        this.valueWDBank === "hubin" || this.valueWDBank === "yananlu"
          ? true
          : false;
      Bus.$emit("circleShow3", bankCircleShow3, this.valueWDBank);
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
    rangeChange() {
      let radius = null;
      if (this.circleRange == 1) {
        radius = 500;
        Bus.$emit("radiusRange3", radius);
      } else if (this.circleRange == 2) {
        radius = 1500;
        Bus.$emit("radiusRange3", radius);
      }
    },
    changeStatus(e, number) {
      if (e.target.className.indexOf("wages") == -1) {
        e.target.className = "wage wages"; //选中div样式
      } else {
        e.target.className = "wage"; //未选中div样式
      }
    },
    cantf() {
      console.log(12321);
      this.cant = 2;
    },
    cantt() {
      this.cant = 1;
    },
    showModal() {
      console.log(2222);
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl';
</style>
