<template>
  <div>
    <a-tree-select
      style="width: 300px;margin-bottom:10px"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :tree-data="options"
      placeholder="请选择机构名称"
      v-model="valueWDBank"
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
    <a-input
      placeholder="请输入客户名称"
      style="width: 300px;margin-top:10px"
    />
    <div class="classification">
      客户分类：
      <a-checkbox @change="onChange">全选</a-checkbox>
    </div>
    <div>
      <a-checkbox-group @change="onChange">
        <div v-for="(itemList, index) in customStyleList" :key="index">
          <a-row>
            <a-col :span="12" v-for="item in itemList" :key="item.id">
              <a-checkbox :value="item.id">
                {{item.name}}
                <span v-if="valueWDBank =='hubin'" class="digital">{{item.count1}}</span>
              </a-checkbox>
            </a-col>
          </a-row>
          <div v-if="index != customStyleList.length - 1" class="line"></div>
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
      范围内客户清单：
      <div style="    margin-right: 13px;">
        <a-button type="primary" size="small" @click="showModal"
          >全景查看</a-button
        >
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
        <tr v-for="(item, index) in cusCountList" :key="index">
          <td></td>
          <td>
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon" /></svg
            >&nbsp;&nbsp;
            <span>{{item.name}}</span>
          </td>
          <td v-if="valueWDBank =='hubin'">{{item.count}}</td>
          <td v-else>0</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Bus from "../api/bus";
import bankList from "../api/bankList";
import Panorama from "@/components/Panorama.vue";
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
  name: "custom",
  components: {
    Panorama
  },
  data() {
    return {
      visible: false,
      valueWDBank: null,
      options: bankList,
      customStyleList:[
        [
          {id:"A",name:"百行进万企业",count1:23,count2:34},
          {id:"B",name:"五件完成情况",count1:13,count2:10},
          {id:"C",name:"政府采购供应商",count1:34,count2:23},
          {id:"D",name:"拟授信上市公司",count1:36,count2:20},
        ],
        [
          {id:"E",name:"省属国企",count1:12,count2:34},
          {id:"F",name:"市属国企",count1:54,count2:10},
          {id:"G",name:"重点民企",count1:67,count2:23},
          {id:"H",name:"纳税大户",count1:34,count2:20},
          {id:"I",name:"发债客户",count1:2,count2:23},
          {id:"J",name:"凤凰行动",count1:2,count2:20},
        ],
        [
          {id:"01",name:"中央行政事业单位",count1:4,count2:34},
          {id:"02",name:"市级行政事业单位",count1:32,count2:10},
          {id:"03",name:"区县行政事业单位",count1:54,count2:23},
        ],
        [
          {id:"04",name:"国际结算大户",count1:21,count2:20},
          {id:"05",name:"农业龙头企业",count1:64,count2:23},
        ]
      ],
      cusCountList: [
        {name:'总客户数', count: 422, icon:"#iconzong-kongxinhong"},
        {name:'以开户数', count: 50, icon:"#iconyikaihu-huang"},
        {name:'已对接数', count: 320, icon:"#iconyiduijie-zise"},
        {name:'大数据推荐', count: 500, icon:"#iconyiduijie-zisebeifen"},
      ]
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    },
    onBankChange(value, label) { // 四个组件都用
      let bankCircleShow2 = value === "hubin" ? true : false;
      console.log( bankCircleShow2, this.valueWDBank)
      Bus.$emit("circleShow2", bankCircleShow2, this.valueWDBank);
    },
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
  }
};
</script>

<style lang="stylus">
@import '../assets/css/common.styl'
</style>
