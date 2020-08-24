<template>
  <div>
    <a-tree-select
      style="width: 300px;margin-bottom:10px"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :tree-data="options"
      v-model="valueWDBank"
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
        <a-button type="primary" size="small" @click="showModals"
          >新增</a-button
        >
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
      <a-checkbox-group @change="onSTChange">
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
      <a-checkbox-group @change="onBankCheckChange">
        <a-row>
          <a-col :span="8">
            <a-checkbox value="A">
              农行
              <span class="digital">2</span>
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="B">
              工行
              <span class="digital">3</span>
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
        <span>
          <img src="../assets/mark/abc_mid.png" alt="icon" />
        </span>
        <span>农业银行城东支行</span>
      </div>
      <div>251m</div>
    </div>
    <div class="agriculture-box">
      <div>
        <span>
          <img src="../assets/mark/abc_mid.png" alt="icon" />
        </span>
        <span>农业银行西湖支行</span>
      </div>
      <div>451m</div>
    </div>
    <div class="agriculture-box">
      <div>
        <span>
          <img src="../assets/mark/abc_mid.png" alt="icon" />
        </span>
        <span>农业银行拱墅支行</span>
      </div>
      <div>871m</div>
    </div>
    <div class="agriculture-box">
      <div>
        <span>
          <img src="../assets/mark/cmb_mid.png" alt="icon" />
        </span>
        <span>招商银行延安路支行</span>
      </div>
      <div>678m</div>
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
  name: 'internetPoint',
  data(){
    return {
      visibles: false,
      options: bankList,
      valueWDBank: null,
      bankCircleShow1: false
    }
  },
  methods: {
    showModals() {
      this.visibles = true;
    },
    handleOks(e) {
      console.log(e);
      this.visibles = false;
    },
    onBankChange(value, label) {
      this.bankCircleShow1 = value === "hubin" ? true : false;
      Bus.$emit("circleShow1", this.bankCircleShow1, this.curKey);
    },
    onWDChange(checkValues) {
      // console.log(checkValues)
      Bus.$emit("checkWd", checkValues);
    },
    onSTChange(checkValues) {
      Bus.$emit("checkST", checkValues);
    },
    onBankCheckChange(checkValues) {
      Bus.$emit("checkBankWD", checkValues);
    },
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    },
  }
};
</script>

<style lang="stylus">
@import '../assets/css/common.styl'
</style>
