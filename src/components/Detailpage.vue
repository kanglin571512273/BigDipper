<template>
  <div class="contents">
    <div class="layouts">
      <div class="switchs">
        <ul>
          <li @click="num=0" :class="{actives:num==0}">客户画像</li>
          <li @click="num=1" :class="{actives:num==1}">链式营销</li>
          <li @click="num=2" :class="{actives:num==2}">营销日志</li>
          <li @click="num=4" :class="{actives:num==4}">营销结果</li>
          <li @click="num=5" :class="{actives:num==5}">推荐详情</li>
          <li @click="num=6" :class="{actives:num==6}">员工信息</li>
          <li @click="num=7" :class="{actives:num==7}">企业图谱</li>
        </ul>
      </div>
      <div class="setup-boxs">
        <div class="setup-box" v-show="num==0">
          <Customerportrait></Customerportrait>
        </div>
        <div class="gosetup-box" v-show="num==1">
          <div class="Summary-box">
            <a-modal
              v-model="visible"
              width="92%"
              title="杭州爱迷尚服装公司-详情"
              :footer="null"
              @ok="handleOk"
            >
             <div class="Summary-table">
            <a-table :columns="columns5" :data-source="data5" :pagination="false"></a-table>
          </div>
            </a-modal>
            <div class="Summary">
              <div>汇总类型：</div>
              <a-select
                label-in-value
                :default-value="{ key: 'jack' }"
                style="width: 300px"
                @change="handleChange"
              >
                <a-select-option value="jack">本行已开户</a-select-option>
                <a-select-option value="lucy">本行未开户</a-select-option>
              </a-select>
            </div>
            <div class="Summary-table" v-show="key==11">
              <a-table :columns="columns" :data-source="data" :pagination="false">
                <a slot="action" @click="showModal">查看</a>
                <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
              </a-table>
            </div>
            <div class="Summary-table" v-show="key==12">
              <a-table :columns="columns12" :data-source="data" :pagination="false">
                <a slot="action">查看</a>
                <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
              </a-table>
            </div>
          </div>
        </div>
        <div class="setup-box" v-show="num==2">
          <div class="Summary-table">
            <a-table :columns="columns1" :data-source="data1" :pagination="false"></a-table>
          </div>
        </div>
        <div class="setup-box" v-show="num==4">
          <div class="Summary-table">
            <a-table :columns="columns2" :data-source="data2" :pagination="false"></a-table>
          </div>
        </div>
        <div class="setup-box" v-show="num==5">
          <div class="taxes">
            <div class="endetails">
              <div id="radarchart" :style="{width: '550px', height: '360px'}"></div>
            </div>
            <div class="endetails">
              <div id="ladder" :style="{width: '550px', height: '360px'}"></div>
            </div>
          </div>
          <div style="text-align: left;">
            <div>说明：</div>
            <div>1、大数据根据企业的5大维度包括但不仅仅限于：企业基本情况、企业经营情况、企业财务情况、企业行业情况、企业融资情况来分析企业未来的发展趋势，每个维度的得分越高表明企业该维度越有优势。</div>
            <div>2、通过"AI"算法模型给出企业所在的类别、以及该类的相关企业开户率。</div>
          </div>
        </div>
        <div class="setup-box" v-show="num==6">
          <div class="totalpeople">总人数 6 户</div>
          <div class="Summary-table">
            <a-table :columns="columns3" :data-source="data3" :pagination="false"></a-table>
          </div>
        </div>
        <div class="setup-box" v-show="num==7">
          <div class="endetails">
            <div id="atlas" :style="{width: '1200px', height: '460px',margin: '0 auto'}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var echarts = require("echarts");
import ECharts from "vue-echarts/components/ECharts";
import Customerportrait from "@/components/Customerportrait.vue";
import Vue from "vue";
import { Tooltip } from "ant-design-vue";
Vue.use(Tooltip);
const columns = [
  { title: "交易方", dataIndex: "name", key: "name", width: 240 },
  { title: "本行客户", dataIndex: "code", key: "code", width: 240 },
  { title: "总笔数", dataIndex: "time", key: "time" },
  { title: "总金额（万元）", dataIndex: "registered", key: "registered" },
  {
    title: "操作",
    dataIndex: "",
    key: "x",
    scopedSlots: { customRender: "action" },
  },
];
const columns12 = [
  { title: "交易方", dataIndex: "name", key: "name", width: 240 },
  { title: "非本行客户", dataIndex: "code", key: "code", width: 240 },
  { title: "总笔数", dataIndex: "time", key: "time" },
  { title: "总金额（万元）", dataIndex: "registered", key: "registered" },
  {
    title: "操作",
    dataIndex: "",
    key: "x",
    scopedSlots: { customRender: "action" },
  },
];
const data = [
  {
    key: 1,
    name: "杭州爱迷尚服装公司",
    code: "杭州迈瑞科技有限公司",
    time: "3",
    registered: "6281.46",
  },
  {
    key: 2,
    name: "杭州爱迷尚服装公司",
    code: "浙江速达科技有限公司",
    time: "1",
    registered: "700",
  },

  {
    key: 3,
    name: "杭州爱迷尚服装公司",
    code: "杭州迈瑞科技有限公司",
    time: "7",
    registered: "897.23",
  },
  {
    key: 4,
    name: "杭州爱迷尚服装公司",
    code: "杭州图宇科技有限公司",
    time: "5",
    registered: "130.5",
  },
  {
    key: 5,
    name: "杭州爱迷尚服装公司",
    code: "浙江创峰科技有限公司",
    time: "7",
    registered: "880",
  },
];
const columns1 = [
  { title: "营销产品", dataIndex: "marketing", key: "marketing", width: 240 },
  { title: "归属机构", dataIndex: "code", key: "code", width: 240 },
  { title: "营销时间", dataIndex: "time", key: "time" },
  { title: "营销人员", dataIndex: "registered", key: "registered" },
  { title: "备注", dataIndex: "remarks", key: "remarks" },
];

const data1 = [
  {
    key: 1,
    code: "延安路支行",
    time: "1988/02/26",
    registered: "李佳佳",
    marketing: "企业代发工资",
    remarks: "初步接触客户，客户很有意向",
  },
  {
    key: 2,
    code: "杭州迈瑞科技有限公司",
    registered: "李佳佳",
    time: "1988/02/26",
    marketing: "开户",
    remarks: "客户已同意本行代发工资",
  },
  {
    key: 3,
    code: "延安路支行",
    time: "1988/02/26",
    registered: "李佳佳",
    marketing: "企业经营贷款",
    remarks: "初步接触客户，客户很有意向",
  },
  {
    key: 4,
    code: "延安路支行",
    time: "1988/02/26",
    registered: "李佳佳",
    marketing: "企业经营贷款",
    remarks: "初步接触客户，客户很有意向",
  },
  {
    key: 5,
    code: "延安路支行",
    time: "1988/02/26",
    registered: "李佳佳",
    marketing: "开户",
    remarks: "初步接触客户，客户很有意向",
  },
  {
    key: 6,
    code: "延安路支行",
    time: "1988/02/26",
    registered: "李佳佳",
    marketing: "开户",
    remarks: "初步接触客户，客户很有意向",
  },
];
const columns2 = [
  { title: "类型", dataIndex: "name", key: "name" },
  { title: "销售存款（百万）", dataIndex: "code", key: "code" },
  { title: "营销贷款（百万）", dataIndex: "time", key: "time" },
  { title: "中收（万）", dataIndex: "registered", key: "registered" },
  { title: "产品", dataIndex: "marketing", key: "marketing" },
  { title: "备注", dataIndex: "remarks", key: "remarks" },
  { title: "录入时间", dataIndex: "entrytime", key: "entrytime" },
  { title: "录入人", dataIndex: "person", key: "person" },
];
const data2 = [
  {
    key: 1,
    name: "负债业务",
    code: "5",
    time: "0",
    registered: "0",
    marketing: "“本利丰”理财产品",
    remarks: "初步接触客户，客户很有意向",
    entrytime: "2008/06/25",
    person: "茆和辉",
  },
  {
    key: 2,
    name: "中间业务",
    code: "0",
    time: "0",
    registered: "10",
    marketing: "““进取增利”理财产品",
    remarks: "客户已同意本行代发工资",
    entrytime: "2008/06/7",
    person: "延国",
  },
  {
    key: 3,
    name: "资产业务",
    code: "0",
    time: "3",
    registered: "0",
    marketing: "“本利丰”理财产品",
    remarks: "客户很有意向",
    entrytime: "2008/06/25",
    person: "管元娣",
  },
  {
    key: 4,
    name: "负债业务",
    code: "5",
    time: "0",
    registered: "0",
    marketing: "“本利丰”理财产品",
    remarks: "初步接触客户，客户很有意向",
    entrytime: "2008/06/25",
    person: "茆和辉",
  },
  {
    key: 5,
    name: "资产业务",
    code: "0",
    time: "4",
    registered: "0",
    marketing: "““进取增利”理财产品",
    remarks: "客户不太有意向",
    entrytime: "2008/07/5",
    person: "耿宜若",
  },
  {
    key: 6,
    name: "负债业务",
    code: "8",
    time: "0",
    registered: "0",
    marketing: "“本利丰”理财产品",
    remarks: "客户来网点办理",
    entrytime: "2008/07/25",
    person: "茆和辉",
  },
];
const columns3 = [
  { title: "员工姓名", dataIndex: "name", key: "name" },
  { title: "客户号", dataIndex: "code", key: "code" },
  { title: "身份证号", dataIndex: "time", key: "time" },
];
const data3 = [
  {
    key: 1,
    name: "程江筠",
    code: "2020196992914",
    time: "110101199003071196",
  },
  {
    key: 2,
    name: "崔岚菊",
    code: "2020196999224",
    time: "311010119900307721",
  },
  {
    key: 3,
    name: "袁才昭",
    code: "2020196998170",
    time: "220102199003078437",
  },
  {
    key: 4,
    name: "焦竹",
    code: "2020196991283",
    time: "220102199003074970",
  },
  {
    key: 5,
    name: "司峰岩",
    code: "2020196992295",
    time: "220102199003076933",
  },
  {
    key: 6,
    name: "肖莲菁",
    code: "2020196999279",
    time: "220102199003079376",
  },
];
const columns5 = [
  { title: "付款方", dataIndex: "payer", key: "payer", width: 240 },
  { title: "收款方", dataIndex: "payee", key: "payee", width: 240 },
  { title: "付款账户", dataIndex: "payment", key: "payment" },
  { title: "收款账户", dataIndex: "collection", key: "collection" },
  { title: "金额", dataIndex: "amount", key: "amount" },
  { title: "时间", dataIndex: "time", key: "time" },
  { title: "用途", dataIndex: "purpose", key: "purpose" },
];
const data5 = [
  {
    key: 1,
    payer: "杭州爱迷尚服装公司",
    payee: "杭州迈利服装公司",
    payment: "67187867954328901782",
    collection: "829036278907536816209",
    amount: "500，000",
    time: "2020/8/21",
    purpose: "慈善捐助",
  },
  {
    key: 2,
    payer: "杭州迈瑞科技有限公司",
    payee: "杭州爱迷尚服装公司",
    payment: "67187867954328901782",
    collection: "6786490321026392871",
    amount: "45，000",
    time: "2020/8/1",
    purpose: "结算业务尾款",
  },
  {
    key: 3,
    payer: "杭州爱迷尚服装公司",
    payee: "杭州迈利服装公司",
    payment: "67187867954328901782",
    collection: "829036278907536816209",
    amount: "70，000",
    time: "2020/8/21",
    purpose: "慈善捐助",
  },
  {
    key: 4,
    payer: "杭州朗珮科技有限公司",
    payee: "杭州爱迷尚服装公司",
    payment: "37187802681328901782",
    collection: "6786490321026392871",
    amount: "40，000",
    time: "2020/8/1",
    purpose: "结算业务尾款",
  },
  {
    key: 5,
    payer: "杭州爱迷尚服装公司",
    payee: "杭州迈利服装公司",
    payment: "67187867954328901782",
    collection: "829036278907536816209",
    amount: "392，000",
    time: "2020/8/21",
    purpose: "慈善捐助",
  },
  {
    key: 6,
    payer: "杭州爱迷尚服装公司",
    payee: "杭州爱温纳科技有限公司",
    payment: "67187867954328901782",
    collection: "6786490321026392871",
    amount: "432，000",
    time: "2020/8/1",
    purpose: "结算业务尾款",
  },
];

export default {
  components: {
    Customerportrait,
  },
  data() {
    return {
      num: 0,
      key: 11,
      data,
      columns,
      data1,
      columns1,
      columns12,
      data2,
      columns2,
      data3,
      columns3,
      data5,
      columns5,
      visible: false,
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleChange(value) {
      switch (value.key) {
        case "jack":
          this.key = 11;
          break;
        case "lucy":
          this.key = 12;
          break;
        default:
      }
    },
    drawLine() {
      //   对公未开户客户

      // 基于准备好的dom，初始化echarts实例
      let radarchart = this.$echarts.init(
        document.getElementById("radarchart")
      );
      let ladder = this.$echarts.init(document.getElementById("ladder"));
      let atlas = this.$echarts.init(document.getElementById("atlas"));
      let halfWidth = 150;
      let halfHeight = 50;

      let halfItemwidth = 85;
      let halfItemHeight = 20;

      let curveness0 = {
        normal: {
          curveness: 0,
        },
      };
      let curveness1 = {
        normal: {
          curveness: 0.2,
        },
      };
      let curveness2 = {
        normal: {
          curveness: -0.2,
        },
      };

      // 绘制图表
      radarchart.setOption({
        title: {
          text: "对公未开户客户",
        },
        backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
          confine: true,
          position: function ([x, y]) {
            var newX = x + 200;
            //console.log(newX)
            return [newX, y];
          },
          formatter: function (params) {
            console.log(params);
          },
          padding: [
            11, // 上
            19, // 右
            13, // 下
            13, // 左
          ],
          extraCssText:
            "box-shadow:0px 1px 2px 0px rgba(134,134,134,0.45),0px -1px 2px 0px rgba(0,0,0,0.03);",
        },
        radar: {
          center: ["45%", "50%"],
          radius: "65%",
          name: {
            textStyle: {
              color: "#3D4D65",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#DEDEDE",
              width: 1,
              type: "dotted",
            },
          },
          splitLine: {
            lineStyle: {
              color: ["#DEDEDE"],
              width: 1,
            },
          },
          splitArea: {
            areaStyle: {
              color: [
                "rgba(255, 255, 255, 0)",
                "rgba(255, 255, 255, 0)",
                "rgba(255, 255, 255, 0)",
                "rgba(255, 255, 255, 0)",
              ],
              shadowColor: "#fff",
            },
          },
          indicator: [
            {
              name: "经营状况",
              max: 1000,
            },
            {
              name: "财务情况",
              max: 1000,
            },
            {
              name: "行业情况",
              max: 1000,
            },
            {
              name: "融资情况",
              max: 1000,
            },
            {
              name: "基本情况",
              max: 1000,
            },
          ],
        },
        series: [
          {
            type: "radar",

            data: [
              {
                value: [800, 700, 600, 900, 500],
                name: "数据",
                itemStyle: {
                  normal: {
                    borderWidth: 2,
                    color: "#26A0FF",
                  },
                },
                areaStyle: {
                  normal: {
                    color: "rgba(64,159,223,0.4)",
                  },
                },
              },
            ],
            label: {
              show: true,
            },
          },
        ],
      });
      //   企业所属分类及开户率
      ladder.setOption({
        title: {
          text: "企业所属分类及开户率",
          textStyle: {
            color: "#000000",
            fontSize: 12,
            fontWeight: 200,
          },
          top: "45%",
          left: "76%",
        },
        backgroundColor: "#ffffff",
        color: ["#FC5C7D", "#CBCBCB", "#CBCBCB", "#CBCBCB", "#CBCBCB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "red",
            },
            lineStyle: {
              color: "#9eb2cb",
            },
          },
        },

        legend: {
          top: "51.5%",
          left: "83%",
          orient: "vertical",
          data: ["非常推荐", "推荐", "比较推荐", "不推荐", "排除"],
        },
        grid: {
          top: 24,
          left: "2%",
          right: 25,
          bottom: 20,
          containLabel: true,
          borderWidth: 0.8,
        },

        series: [
          {
            top: "10%",
            type: "funnel",
            left: "10%",
            width: "80%",
            gap: 16,
            minSize: 150,
            maxSize: 410,
            label: {
              show: true,
              position: "inside",
              formatter: "{b} : {c}%",
            },
            data: [
              { value: 100, name: "非常推荐" },
              { value: 80, name: "推荐" },
              { value: 60, name: "比较推荐" },
              { value: 40, name: "不推荐" },
              { value: 20, name: "排除" },
            ],
          },

          {
            type: "funnel",

            //右侧的百分比显示的地方

            //主体是透明的
            itemStyle: {
              normal: {
                color: "transparent",
                borderWidth: 0,
                opacity: 1,
              },
            },
            data: [
              { value: 100, name: "非常推荐" },
              { value: 80, name: "推荐" },
              { value: 60, name: "比较推荐" },
              { value: 40, name: "不推荐" },
              { value: 20, name: "排除" },
            ],
          },
        ],
      });
      //   企业图谱
      atlas.setOption({
        color: ["#1890FF", "#FF9C3D", "#00C3FF", "#56A7FF"],
        series: [
          {
            type: "graph",
            // layout: 'force',
            force: {
              repulsion: 2000,
            },
            roam: true,
            label: {
              normal: {
                show: true,
              },
            },
            categories: [
              {
                name: "事件",
              },
              {
                name: "行业",
              },
              {
                name: "个股",
              },
              {
                name: "个股1",
              },
            ],
            data: [
              // root
              {
                name: "杭州爱迷尚服装公司",
                x: halfWidth,
                y: halfHeight,
                value: 67,
                category: 0,
                symbol: "rect",
                symbolSize: [234, 64],
              },
              // 行业

              {
                name: "实际控股人",
                x: halfWidth + halfItemwidth + 250,
                y: halfHeight + -50,
                value: 12,
                category: 1,
                symbol: "rect",
                symbolSize: [170, 40],
              },
              {
                name: "最终受益人",
                x: halfWidth + halfItemwidth + 250,
                y: halfHeight + 78,
                value: 12,
                category: 1,
                symbol: "rect",
                symbolSize: [170, 40],
              },
              {
                name: "法定代表人",
                x: halfWidth + halfItemwidth + 250,
                y: halfHeight - 155,
                value: 12,
                category: 1,
                symbol: "rect",
                symbolSize: [170, 40],
              },
              {
                name: "股东",
                x: halfWidth + halfItemwidth + 250,
                y: halfHeight + 183,
                value: 12,
                category: 1,
                symbol: "rect",
                symbolSize: [170, 40],
              },
              {
                name: "高管",
                x: halfWidth - halfItemwidth - 250,
                y: halfHeight - 72,
                value: 12,
                category: 1,
                symbol: "rect",
                symbolSize: [170, 40],
              },
              {
                name: "控股企业",
                x: halfWidth - halfItemwidth - 250,
                y: halfHeight + 98,
                value: 12,
                category: 1,
                symbol: "rect",
                symbolSize: [170, 40],
              },
              {
                name: "对外投资",
                x: halfWidth - halfItemwidth - 250,
                y: halfHeight + 14,
                value: 12,
                category: 1,
                symbol: "rect",
                symbolSize: [170, 40],
              },
              // 个股A

              // 个股B
              {
                name: "那菊菲",
                x: halfWidth + halfItemwidth + 396,
                y: halfHeight - 145,
                value: 12,
                category: 2,
                label: {
                  normal: {
                    position: "right",
                  },
                },
              },

              // 个股C
              {
                name: "年璐",
                x: halfWidth + halfItemwidth + 396,
                y: halfHeight + 143,
                value: 12,
                category: 2,
                label: {
                  normal: {
                    position: "right",
                  },
                },
              },
              {
                name: "候利霭",
                x: halfWidth + halfItemwidth + 396,
                y: halfHeight + 171,
                value: 12,
                category: 2,
                label: {
                  normal: {
                    position: "right",
                  },
                },
              },
              {
                name: "荆荣厚",
                x: halfWidth + halfItemwidth + 396,
                y: halfHeight + 199,
                value: 12,
                category: 2,
                label: {
                  normal: {
                    position: "right",
                  },
                },
              },

              // 个股D
              {
                name: "顾利岚",
                x: halfWidth - halfItemwidth - 400,
                y: halfHeight - 100,
                value: 12,
                category: 2,
                label: {
                  normal: {
                    position: "left",
                  },
                },
              },
              {
                name: "平荣兰",
                x: halfWidth - halfItemwidth - 400,
                y: halfHeight - 70,
                value: 12,
                category: 2,
                label: {
                  normal: {
                    position: "left",
                  },
                },
              },

              // 个股E

              {
                name: "杭州迈瑞科技有限公司",
                x: halfWidth - halfItemwidth - 390,
                y: halfHeight + 80,
                value: 12,
                category: 2,
                label: {
                  normal: {
                    position: "left",
                  },
                },
              },
              {
                name: "浙江锋千亚网络公司",
                x: halfWidth - halfItemwidth - 400,
                y: halfHeight + 115,
                value: 12,
                category: 2,
                label: {
                  normal: {
                    position: "left",
                  },
                },
              },
            ],
            lineStyle: curveness1,
            links: [
              {
                source: 0,
                target: 1,
                lineStyle: curveness2,
              },
              {
                source: 0,
                target: 2,
              },
              {
                source: 0,
                target: 3,
                lineStyle: curveness2,
              },
              {
                source: 0,
                target: 4,
                lineStyle: curveness2,
              },
              {
                source: 0,
                target: 5,
              },
              {
                source: 0,
                target: 6,
              },
              {
                source: 0,
                target: 7,
              },
              {
                source: 3,
                target: 8,
              },
              {
                source: 4,
                target: 9,
              },
              {
                source: 4,
                target: 10,
              },
              {
                source: 4,
                target: 11,
              },
              {
                source: 5,
                target: 12,
              },
              {
                source: 5,
                target: 13,
              },
              {
                source: 6,
                target: 14,
              },
              {
                source: 6,
                target: 15,
              },
              // {
              //   source: 2,
              //   target: 6,
              // },
              // {
              //   source: 3,
              //   target: 7,
              // },
              // {
              //   source: 3,
              //   target: 8,
              //   lineStyle: curveness0,
              // },
              // {
              //   source: 3,
              //   target: 9,
              //   lineStyle: curveness2,
              // },
              // {
              //   source: 4,
              //   target: 10,
              //   lineStyle: curveness2,
              // },
              // {
              //   source: 4,
              //   target: 11,
              // },
              // {
              //   source: 4,
              //   target: 12,
              // },
              // {
              //   source: 5,
              //   target: 13,
              //   lineStyle: curveness0,
              // },
              // {
              //   source: 5,
              //   target: 14,
              //   lineStyle: curveness2,
              // },
              // {
              //   source: 5,
              //   target: 15,
              //   lineStyle: curveness2,
              // },
            ],
          },
        ],
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.contents .layouts .switchs ul {
  display: flex;
  justify-content: space-evenly;
}

.contents .layouts .switchs ul li {
  width: 96px;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  border: 1px solid rgba(24, 144, 255, 1);
  font-size: 16px;
  color: #1890FF;
  cursor: pointer;
}

.switchs {
  margin-bottom: 30px;
}

.actives {
  background: #1890FF;
  color: #FFF !important;
}

.Summary-box {
}

.Summary {
  display: flex;
  align-items: center;
  margin: 26px 0 10px 18px;
}

.endetails {
}

.endetails .companys {
  display: flex;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  line-height: 24px;
  font-size: 16px;
}

.endetails .companys .company {
  width: 64px;
  height: 22px;
  margin-left: 10px;
  background: rgba(255, 251, 230, 1);
  border-radius: 2px;
  border: 1px solid rgba(255, 229, 143, 1);
  font-size: 12px;
  color: #FAAD14;
}

// .setup-boxs {
// margin-left: 20px;
// }
.gridtablse {
  margin-top: 10px;
  font-size: 12px;
}

.gridtablse tr th {
  line-height: 20px;
  text-align: left;
  width: 90px;
}

.gridtablse tr td {
  text-align: left;
  width: 300px;
}

.table-box {
  display: flex;
  justify-content: space-between;
}

.endetails {
  box-shadow: 0px 2px 22px 0px rgba(23, 125, 220, 0.07);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  margin-bottom: 30px;
  padding: 20px;
}

.business-box {
  display: flex;
  font-size: 12px;
  margin-top: 5px;
}

.business-ti {
  margin-right: 34px;
}

.business {
  width: 64px;
  height: 22px;
  background: rgba(230, 247, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(145, 213, 255, 1);
  color: rgba(24, 144, 255, 1);
  line-height: 20px;
  font-size: 12px;
  margin: 0 5px;
}

.businessperson {
  display: none;
}

.endetails1 {
  display: block;
}

.totalpeople {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 24px;
  text-align: left;
  font-weight: 600;
}

.taxes {
  display: flex;
}
</style>