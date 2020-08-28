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
    <div class="classification">
      分类：
      <a-checkbox @change="onChange">全选</a-checkbox>
    </div>
    <div>
      <a-checkbox-group @change="onSQFLChange">
        <a-row>
          <a-col :span="12" v-for="item in districtlist" :key="item.id">
            <a-checkbox :value="item.id">
              <span>
                <img :src="item.icon" alt />
              </span>
              {{item.label}}
              <span
                class="digital"
                v-if="valueWDBank =='yananlu'"
              >{{item.count2}}</span>
              <span class="digital" v-if="valueWDBank =='hubin'">{{item.count1}}</span>
            </a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
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
    <a-select placeholder="请选择商圈" style="width: 300px;margin-bottom:10px">
      <a-select-option v-for="province in provinceData" :key="province">{{ province }}</a-select-option>
    </a-select>
    <a-input placeholder="请输入客户名称" style="width: 300px;" />
    <div class="classification">
      营销分类：
      <a-checkbox @change="onChange">全选</a-checkbox>
    </div>
    <div class="wage-box">
      <div
        class="wage"
        v-for="item in personlist"
        :key="item.id"
        :value="item.id"
        @click="changeStatus($event, item.id)"
      >{{item.label}} {{item.num}}</div>
    </div>
    <div class="classification">
      名称：
      <div>9户</div>
    </div>
    <div class="agriculture-box" v-for="item in companylist" :key="item.id" :value="item.id">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconyikaihu-huang" />
        </svg>
        <span>{{item.label}}</span>
      </div>
      <div>{{item.num}}m</div>
    </div>
     <div class="paging">
          <a-pagination  v-model="current" :total="30" show-less-items />
        </div>
  </div>
</template>

<script>
import Vue from "vue";
import Bus from "../api/bus";
import bankList from "../api/bankList";
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
  data() {
    return {
      options: bankList,
      valueWDBank: null,
      circleRange: 1,
       current: 1,
      districtlist: [
        {
          id: "A",
          label: "小微园区",
          icon: require("../assets/icon/wd_xwyq_mid.png"),
          count1: 2,
          count2: 4,
        },
        {
          id: "B",
          label: "综合体",
          icon: require("../assets/icon/wd_zht_mid.png"),
          count1: 4,
          count2: 8,
        },
        {
          id: "C",
          label: "专业市场",
          icon: require("../assets/icon/wd_zysc_mid.png"),
          count1: 2,
          count2: 9,
        },
        {
          id: "D",
          label: "创意园",
          icon: require("../assets/icon/wd_cyy_mid.png"),
          count1: 0,
          count2: 15,
        },
        {
          id: "F",
          label: "写字楼",
          icon: require("../assets/icon/wd_xzl_mid.png"),
          count1: 3,
          count2: 10,
        },
      ],
      companylist: [
        { id: 1, label: "浙江锋千亚网络公司", num: 100 },
        { id: 2, label: "浙江仕佳网络公司", num: 120 },
        { id: 3, label: "浙江创峰科技有限公司", num: 150 },
        { id: 4, label: "浙江迈磊凯家具公司", num: 190 },
        { id: 5, label: "杭州朗珮科技有限公司", num: 253 },
        { id: 6, label: "浙江迈磊凯家具公司", num: 367 },
        { id: 7, label: "杭州朗珮科技有限公司", num: 379 },
        { id: 8, label: "浙江迈磊凯家具公司", num: 467 },
        { id: 9, label: "杭州朗珮科技有限公司", num: 580 },
      ],
      provinceData: ["杭州大厦", "元茂大厦", "西溪金座", "IT公园"],
      personlist: [
        { id: 64, label: "开户", num: 5 },
        { id: 65, label: "待选", num: 2 },
        { id: 66, label: "目标", num: 7 },
      ],
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    },
    onBankChange(value, label) {
      // 四个组件都用
      let bankCircleShow4 = (this.valueWDBank === "hubin" ||this.valueWDBank ===  "yananlu") ? true : false;
      Bus.$emit("circleShow4", bankCircleShow4, this.valueWDBank);
    },
    onSQFLChange(checkValues) {
      // console.log(checkValues)
      Bus.$emit("checkSQFL", checkValues);
    },
    rangeChange() {
      let radius = null;
      if(this.circleRange == 1) {
        radius = 500;
         Bus.$emit("radiusRange4", radius);
      } else if (this.circleRange == 2) {
        radius = 1500;
         Bus.$emit("radiusRange4", radius);
      }
    },
    changeStatus(e, number) {
      if (e.target.className.indexOf("wages") == -1) {
        e.target.className = "wage wages"; //选中div样式
      } else {
        e.target.className = "wage"; //未选中div样式
      }
    },
  },
};
</script>

<style lang="stylus">
@import '../assets/css/common.styl';
</style>
