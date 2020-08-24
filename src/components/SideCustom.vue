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
        <tr>
          <td></td>
          <td>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconzong-kongxinhong" /></svg
            >&nbsp;&nbsp;
            <span>总客户数</span>
          </td>
          <td>422</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconyikaihu-huang" /></svg
            >&nbsp;&nbsp;
            <span>以开户数</span>
          </td>
          <td>50</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconyiduijie-zise" /></svg
            >&nbsp;&nbsp;已对接数
          </td>
          <td>320</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconyiduijie-zisebeifen" /></svg
            >&nbsp;&nbsp;大数据推荐
          </td>
          <td>500</td>
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
      options: bankList,
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    },
    onBankChange(value, label) { // 四个组件都用
      let bankCircleShow2 = value === "hubin" ? true : false;
      Bus.$emit("circleShow2", bankCircleShow2, this.curKey);
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
