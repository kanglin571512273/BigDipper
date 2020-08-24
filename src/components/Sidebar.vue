<template>
  <div class="Sidebar">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="网点">
        <InternetPoint></InternetPoint>
      </a-tab-pane>
      <a-tab-pane key="2" tab="客户" force-render>
        <SideCustom></SideCustom>
      </a-tab-pane>
      <a-tab-pane key="3" tab="发现">
        <SideDiscover></SideDiscover>
      </a-tab-pane>
      <a-tab-pane key="4" tab="商圈">
        <SideBussiness></SideBussiness>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import Bus from "../api/bus"
import InternetPoint from "@/components/SideIP.vue"
import SideCustom from "@/components/SideCustom"
import SideDiscover from '@/components/SideDiscover'
import SideBussiness from '@/components/SideBussiness'
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
    InternetPoint,
    SideCustom,
    SideDiscover,
    SideBussiness
  },
  data() {
    return {

    };
  },
  methods: {
    callback(key) {
      // console.log(key);
      this.curKey = key;
      Bus.$emit("tabKey", key);
    },
    displayRender({ labels }) {
      return labels[labels.length - 1];
    },
  },
};
</script>
<style lang="stylus">
@import '../assets/css/common.styl'
</style>
