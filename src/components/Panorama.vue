<template>
  <div id="app">
    <div class="pie-chart">
      <div class="piecharts">
        <v-chart class="my-chart" :options="pie" />
      </div>
      <div class="piecharts">
        <v-chart class="my-chart" :options="pie1" />
      </div>
      <div class="piecharts">
        <v-chart class="my-chart" :options="pie2" />
      </div>
      <div class="piecharts">
        <v-chart class="my-chart" :options="pie3" />
      </div>
    </div>
    <div>
      <a-modal v-model="visible" width="92%" title="杭州爱迷尚服装公司-企业画像" :footer="null" @ok="handleOk">
              <Detailpage></Detailpage>
      </a-modal>
    </div>
    <div class="tab-box">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="已开户">
          <div>
            <a-table
              :columns="columns"
              :data-source="data"
              :pagination="false"
              :scroll="{ y: 235 }"
            >
              <a slot="action" @click="showModal">查看</a>
              <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="未开户">
          <div>
            <a-table
              :columns="columns"
              :data-source="data"
              :pagination="false"
              :scroll="{ y: 235 }"
            >
              <a slot="action" href="javascript:;">查看</a>
              <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="本行开户">
          <div>
            <a-table
              :columns="columns"
              :data-source="data"
              :pagination="false"
              :scroll="{ y: 235 }"
            >
              <a slot="action" href="javascript:;">查看</a>
              <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="4" tab="非本行开户">
          <div>
            <a-table
              :columns="columns"
              :data-source="data"
              :pagination="false"
              :scroll="{ y: 235 }"
            >
              <a slot="action" href="javascript:;">查看</a>
              <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="5" tab="已对接">
          <div>
            <a-table
              :columns="columns"
              :data-source="data"
              :pagination="false"
              :scroll="{ y: 235 }"
            >
              <a slot="action" href="javascript:;">查看</a>
              <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="6" tab="未对接">
          <div>
            <a-table
              :columns="columns"
              :data-source="data"
              :pagination="false"
              :scroll="{ y: 235 }"
            >
              <a slot="action" href="javascript:;">查看</a>
              <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="7" tab="推荐">
          <div>
            <a-table
              :columns="columns"
              :data-source="data"
              :pagination="false"
              :scroll="{ y: 235 }"
            >
              <a slot="action" href="javascript:;">查看</a>
              <a slot="action" href="javascript:;">&ensp;&ensp;添加</a>
              <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="8" tab="比较推荐">
          <div>
            <a-table
              :columns="columns"
              :data-source="data"
              :pagination="false"
              :scroll="{ y: 235 }"
            >
              <a slot="action" href="javascript:;">查看</a>
              <a slot="action" href="javascript:;">&ensp;&ensp;添加</a>
              <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
            </a-table>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
const columns = [
  { title: "客户名称", dataIndex: "name", key: "name", width: 240 },
  { title: "统一信用代码", dataIndex: "code", key: "code", width: 240 },
  { title: "成立日期", dataIndex: "time", key: "time" },
  { title: "注册资本", dataIndex: "registered", key: "registered" },
  { title: "纳税等级", dataIndex: "taxes", key: "taxes" },
  { title: "距离", dataIndex: "distance", key: "distance" },
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
    code: "92370112MA3D66LK09",
    time: "2012/11/02",
    registered: "2005208",
    taxes: "A",
    distance: "2000.64m",
  },
  {
    key: 2,
    name: "杭州迈瑞科技有限公司",
    code: "92370112MA3D66LK09",
    time: "2007/07/11",
    registered: "2003421",
    taxes: "B",
    distance: "2000.38m",
  },

  {
    key: 3,
    name: "杭州迈利服装公司",
    code: "92370181MA3DDKQH4C",
    time: "1990/03/11",
    registered: "2005025",
    taxes: "B",
    distance: "3600.89m",
  },
  {
    key: 4,
    name: "浙江亿扬科技有限公司",
    code: "91370102MA3F8L9C27",
    time: "2012/11/02",
    registered: "2005208",
    taxes: "C",
    distance: "2000.64m",
  },
  {
    key: 5,
    name: "浙江易天科技有限公司",
    code: "92370112MA3D66LK09",
    time: "2012/11/02",
    registered: "2005208",
    taxes: "C",
    distance: "1800.59m",
  },
];
import ECharts from "vue-echarts/components/ECharts";
import Detailpage from "@/components/Detailpage.vue";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import Vue from "vue";
import { Table, Modal } from "ant-design-vue";
Vue.use(Table);
Vue.use(Modal);
export default {
  name: "App",
  components: {
    "v-chart": ECharts,
    Detailpage,
  },
  data() {
    return {
      data,
      columns,
      visible: false,
      pie: {
        color: ["#FF9C3D", "#6056FF"],
        title: {
          text: "总客户",
          left: 20,
          top: 20,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 20,
          top: 50,
          data: ["已开户", "未开户"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            center: ["60%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "left",
              formatter: "{d}%",
              padding: [0, -25],
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1920, name: "已开户" },
              { value: 120, name: "未开户" },
            ],
          },
        ],
      },
      pie1: {
        color: ["#56A7FF", "#FF6851"],
        title: {
          text: "已开户",
          left: 20,
          top: 20,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 20,
          top: 50,
          data: ["本行开户", "非本行开户"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            center: ["60%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "left",
              formatter: "{d}%",
              padding: [0, -25],
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 108, name: "本行开户" },
              { value: 1019, name: "非本行开户" },
            ],
          },
        ],
      },
      pie2: {
        color: ["#FF6C12", "#5651FF"],
        title: {
          text: "未开户",
          left: 20,
          top: 20,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 20,
          top: 50,
          data: ["已对接", "未对接"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            center: ["60%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "left",
              formatter: "{d}%",
              padding: [0, -25],
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 165, name: "已对接" },
              { value: 310, name: "未对接" },
            ],
          },
        ],
      },
      pie3: {
        color: ["#0099F7", "#FC5C7D"],
        title: {
          text: "大数据推荐",
          left: 20,
          top: 20,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 20,
          top: 50,
          data: ["推荐", "比较推荐"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            center: ["60%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "left",
              formatter: "{d}%",
              padding: [0, -25],
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 108, name: "推荐" },
              { value: 976, name: "比较推荐" },
            ],
          },
        ],
      },
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>
<style lang="stylus">
.my-chart {
  width: 320px !important;
  height: 231px !important;
}

.piecharts {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 22px 0px rgba(23, 125, 220, 0.07);
  border-radius: 10px;
}

.pie-chart {
  display: flex;
  justify-content: center;
}

.ant-tabs-nav-scroll {
  display: flex;
}

.ant-tabs-bar {
  margin: 0;
}
</style>

