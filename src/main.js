// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// 引入css
import "./assets/css/reset.css";
// 引入iocnfont
import './assets/css/iconfont/iconfont.css'
import './assets/css/iconfont/iconfont.js'
// 引入ant样式
import "ant-design-vue/dist/antd.css";

import BaiduMap from "vue-baidu-map";

import echarts from "echarts";

Vue.component("chart", ECharts);
import ECharts from "vue-echarts";

Vue.prototype.$echarts = echarts;

Vue.use(BaiduMap, {
  ak: "YOUR_APP_KEY"
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
