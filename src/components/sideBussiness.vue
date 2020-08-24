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
    <div class="classification">
      分类：
      <a-checkbox @change="onChange">全选</a-checkbox>
    </div>
    <div>
      <a-checkbox-group @change="onSQFLChange">
        <a-row>
          <a-col :span="12">
            <a-checkbox value="E">
              创意园
              <span class="digital">2</span>
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
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder="请选择商圈"
      allowClear
    >
      <!-- <span
            v-if="key === '0-0-1'"
            slot="title"
            slot-scope="{ key, value }"
            style="color: #08c"
          >Child Node1 {{ value }}</span>-->
    </a-tree-select>
    <a-input placeholder="请输入客户名称" style="width: 300px;" />
    <div class="classification">
      营销分类：
      <a-checkbox @change="onChange">全选</a-checkbox>
    </div>
    <div class="wage-box">
      <div class="wage" @click="changeStatus($event, 1)">开户 5</div>
      <div class="wage" @click="changeStatus($event, 2)">待选 1</div>
      <div class="wage" @click="changeStatus($event, 3)">目标 5</div>
    </div>
    <div class="classification">
      名称：
      <div>109户</div>
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
  TreeSelect
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
      options: bankList
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    },
    onBankChange(value, label) { // 四个组件都用
      let bankCircleShow4 = value === "hubin" ? true : false;
      Bus.$emit("circleShow4", bankCircleShow4, this.curKey);
    },
    onSQFLChange(checkValues) {
      // console.log(checkValues)
      Bus.$emit("checkSQFL", checkValues);
    },
  }
};
</script>

<style lang="stylus">
@import '../assets/css/common.styl'
</style>
