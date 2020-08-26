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
      <a-radio-group v-model="styleSelect" button-style="solid">
        <a-radio-button v-for="item in styleList" :key="item.value" :value="item.value" style="width:145px">{{item.label}}</a-radio-button>
      </a-radio-group>
    </div>
    <div v-if="valueWDBank =='hubin'" class="digital lndependent">网点1个，自助银行1个。</div>
    <div v-if="valueWDBank =='yananlu'" class="digital lndependent">网点30个，自助银行36个。</div>
    <div class="radioGroups">
      <a-checkbox-group @change="onWDChange">
        <div class="radioGroup-lint">
          <a-checkbox class="checkbox" v-for="item in wdList" :key="item.id" :value="item.id">
            {{item.label}}
            <span v-if="valueWDBank =='yananlu'">
              <span class="digital" v-if="styleSelect==1">{{item.count1}}</span>
              <span class="digital" v-else>{{item.count2}}</span>
            </span>
            <span v-if="valueWDBank =='hubin'">
              <span class="digital" v-if="styleSelect==1">{{item.count3}}</span>
              <span class="digital" v-else>{{item.count4}}</span>
            </span>
          </a-checkbox>
        </div>
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
                <a-checkbox v-for="item in stList" :key="item.id" :value="item.id">{{item.label}}</a-checkbox>
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
          <a-col :span="12" v-for="item in stList" :key="item.id">
            <a-checkbox :value="item.id">
              <span>
                <img :src="item.icon" alt="" />
              </span>
              {{item.label}}
              <span class="digital" v-if="valueWDBank =='yananlu'">{{item.count2}}</span>
              <span class="digital" v-if="valueWDBank =='hubin'">{{item.count1}}</span>
            </a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
    </div>
    <div class="classification">银行网点：</div>
    <div>
      <a-checkbox-group @change="onBankCheckChange">
        <a-row>
          <a-col :span="8" v-for="item in bankList" :key="item.id">
            <a-checkbox :value="item.id">
              <span>
                <img :src="item.icon" alt="" />
              </span>
              {{item.label}}
              <span class="digital" v-if="valueWDBank =='yananlu'">{{item.count2}}</span>
              <span class="digital" v-if="valueWDBank =='hubin'">{{item.count1}}</span>
            </a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
    </div>
    <div class="classification">名称：</div>
    <div class="agriculture-box" v-for="item in bankNameList" :key="item.id">
      <div>
        <span>
          <img :src="item.icon" alt="" />
        </span>
        <span>{{item.title}}</span>
      </div>
      <div>{{item.distance}}m</div>
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
      bankCircleShow1: false,
      circleRange: 1,
      styleSelect: 1,
      styleList:[{value:1,label:'网点'},{value:2,label:'自主银行'}],
      // wdAllTotal: 30,
      // zzyhTotal:38,
      wdList:[
        {id:1, label:'营业中心', count1: 6, count2: 6, count3: 1, count4: 1},
        {id:2, label:'商圈型', count1: 7, count2: 5, count3: 0, count4: 0},
        {id:3, label:'社区型', count1: 4, count2: 4, count3: 0, count4: 0},
        {id:4, label:'乡政型', count1: 2, count2: 5, count3: 0, count4: 0},
        {id:5, label:'市场型', count1: 5, count2: 7, count3: 0, count4: 0},
        {id:6, label:'园区型', count1: 6, count2: 9, count3: 0, count4: 0},
      ],
      stList:[
        {id:"A", label:'房产中介', icon: require("../assets/icon/wd_fczj_mid.png"), count1: 4, count2: 6},
        {id:"B", label:'综合体', icon: require("../assets/icon/wd_zht_mid.png"), count1: 4, count2: 8},
        {id:"C", label:'专业市场', icon: require("../assets/icon/wd_zysc_mid.png"), count1: 2, count2: 9},
        {id:"D", label:'创意园', icon: require("../assets/icon/wd_cyy_mid.png"), count1: 0, count2: 15},
        {id:"E", label:'高档小区', icon: require("../assets/icon/wd_gdxq_mid.png"), count1: 5, count2: 15},
        {id:"F", label:'写字楼', icon: require("../assets/icon/wd_xzl_mid.png"), count1: 3, count2: 10},
        {id:"G", label:'汽车租凭', icon: require("../assets/icon/wd_qczl_mid.png"), count1: 3, count2: 4},
        {id:"H", label:'4 S 店', icon: require("../assets/icon/wd_4s_mid.png"), count1: 4, count2: 6},
        {id:"I", label:'在杭商会', icon: require("../assets/icon/wd_zhsh_mid.png"), count1: 5, count2: 5},
        {id:"J", label:'风景区', icon: require("../assets/icon/wd_fjq_mid.png"), count1: 4, count2: 8},
        {id:"K", label:'医院', icon: require("../assets/icon/wd_yy_mid.png"), count1: 4, count2: 6},
        {id:"L", label:'学校', icon: require("../assets/icon/wd_xx_mid.png"), count1: 3, count2: 6},
      ],
      bankList:[
        {id:"A", label:'招行', icon: require("../assets/icon/wd_cmb_mid.png"), count1: 2, count2: 4},
        {id:"B", label:'工行', icon: require("../assets/icon/wd_icbc_mid.png"), count1: 3, count2: 8},
        {id:"C", label:'建行', icon: require("../assets/icon/wd_ccb_mid.png"), count1: 2, count2: 9},
        {id:"D", label:'中行', icon: require("../assets/icon/wd_boc_mid.png"), count1: 1, count2: 15},
        {id:"E", label:'杭银', icon: require("../assets/icon/wd_hzyh_mid.png"), count1: 1, count2: 15},
        {id:"F", label:'其他', icon: require("../assets/icon/wd_qt_mid.png"), count1: 5, count2: 10},
      ],
      bankNameList:[
        {id:"A", title:'农业银行城东支行', icon: require("../assets/icon/wd_abc_mid.png"), distance: 251},
        {id:"B", title:'农业银行西湖支行', icon: require("../assets/icon/wd_abc_mid.png"), distance: 452},
        {id:"C", title:'农业银行拱墅支行', icon: require("../assets/icon/wd_abc_mid.png"), distance: 871},
        {id:"D", title:'招商银行延安路支行', icon: require("../assets/mark/cmb_mid.png"), distance: 678},
      ]
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
      console.log(this.valueWDBank)
      this.bankCircleShow1 = (this.valueWDBank === "hubin" ||this.valueWDBank ===  "yananlu") ? true : false;
      console.log(this.bankCircleShow1, this.valueWDBank)
      Bus.$emit("circleShow1", this.bankCircleShow1, this.valueWDBank);
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
    rangeChange() {
      let radius = null;
      if(this.circleRange == 1) {
        radius = 500;
         Bus.$emit("radiusRange1", radius);
      } else if (this.circleRange == 2) {
        radius = 1500;
         Bus.$emit("radiusRange1", radius);
      }
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
