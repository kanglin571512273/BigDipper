<template>
  <div>
    <div class="endetails padding20">
      <div class="companys">
        杭州爱迷尚服装公司
        <div class="company">纳税大户</div>
      </div>
      <div class="table-box">
        <table class="gridtablse">
          <tr>
            <th>统一信用代码</th>
            <td>92370112MA3D66LK09</td>
          </tr>
          <tr>
            <th>负责人姓名</th>
            <td>李小男</td>
          </tr>
          <tr>
            <th>行业门类</th>
            <td>服装设计门类</td>
          </tr>
          <tr>
            <th>营业收入</th>
            <td>100000万</td>
          </tr>
          <tr>
            <th>上级机构</th>
            <td>中山支行</td>
          </tr>
          <tr>
            <th>参保人员</th>
            <td>599</td>
          </tr>
          <tr>
            <th>注册地址</th>
            <td>浙江省杭州市西湖区万二西路西湖国际15栋</td>
          </tr>
          <tr>
            <th>经营范围</th>
            <td>服装设计开发，服装类</td>
          </tr>
          <tr>
            <th>营业场所</th>
            <td>浙江省杭州市西湖区万二西路西湖国际15栋3单元</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>注册资金</th>
            <td>1800000万元人名币</td>
          </tr>
          <tr>
            <th>控股股东名称</th>
            <td>杭州爱迷尚服装</td>
          </tr>
          <tr>
            <th>登记机关</th>
            <td>杭州市西湖区市场</td>
          </tr>
          <tr>
            <th>从业人数</th>
            <td>500～1000</td>
          </tr>
          <tr>
            <th>营销机构</th>
            <td>中山支行江城路支行</td>
          </tr>
          <tr>
            <th>行业地位</th>
            <td>杭州地区龙头企业</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>资产总额</th>
            <td>200000万</td>
          </tr>
          <tr>
            <th>成立日期</th>
            <td>2017年1月5日</td>
          </tr>
          <tr>
            <th>企业电话</th>
            <td>400-800-8888</td>
          </tr>
          <tr>
            <th>企业类型</th>
            <td>私企</td>
          </tr>
          <tr>
            <th>营销人</th>
            <td>城雷</td>
          </tr>
          <tr>
            <th>竞争优势</th>
            <td>质量、口碑</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="endetails padding20">
      <div class="table-box">
        <table class="gridtablse">
          <tr>
            <th>法人</th>
            <td>李小男</td>
          </tr>
          <tr>
            <th>高管</th>
            <td>
              彭鲁峰、沛宇、张倩、
              <a href="#" @click="endetails1">
                <a-tooltip placement="right" :autoAdjustOverflow="true">
                  <template slot="title">已开户</template>
                  孙群
                </a-tooltip>
              </a>
            </td>
          </tr>
          <tr>
            <th>股东</th>
            <td>
              <a href="#" @click="endetails3">杭州顶辉投资管理有限公司、</a>
              <a href="#" @click="endetails2">融创投资管理有限公司</a>
            </td>
          </tr>
          <tr>
            <th>重大事项</th>
            <td>
              <a href="#" @click="showModal">司法案件、</a>
              <a href="#">新闻舆情、</a>
              <a href="#">相关公告、</a>
              <a href="#">裁判文书、</a>
              <a href="#">经营风险</a>
            </td>
            <a-modal
              v-model="visible"
              width="90%"
              title="杭州爱迷尚服装公司-司法案件"
              :footer="null"
              @ok="hideModal"
            >
              <div class="Summary-table">
                <a-table :columns="columns" :data-source="data" :pagination="false"></a-table>
              </div>
            </a-modal>
          </tr>
        </table>
      </div>
    </div>
    <div
      v-bind:class="{ endetails1: prises ,businessperson:prise }"
      class="endetails businessperson padding20"
    >
      <div class="companys">杭州顶辉投资管理有限公司</div>
      <div class="table-box">
        <table class="gridtablse">
          <tr>
            <th>统一信用代码</th>
            <td>92370112MA3D66LK09</td>
          </tr>
          <tr>
            <th>负责人姓名</th>
            <td>李小男</td>
          </tr>
          <tr>
            <th>行业门类</th>
            <td>服装设计门类</td>
          </tr>
          <tr>
            <th>营业收入</th>
            <td>100000万</td>
          </tr>
          <tr>
            <th>上级机构</th>
            <td>中山支行</td>
          </tr>
          <tr>
            <th>注册地址</th>
            <td>浙江省杭州市西湖区万二西路西湖国际15栋</td>
          </tr>
          <tr>
            <th>经营范围</th>
            <td>服装设计开发，服装类</td>
          </tr>
          <tr>
            <th>营业场所</th>
            <td>浙江省杭州市西湖区万二西路西湖国际15栋3单元</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>注册资金</th>
            <td>1800000万元人名币</td>
          </tr>
          <tr>
            <th>控股股东名称</th>
            <td>杭州爱迷尚服装</td>
          </tr>
          <tr>
            <th>登记机关</th>
            <td>杭州市西湖区市场</td>
          </tr>
          <tr>
            <th>从业人数</th>
            <td>500～1000</td>
          </tr>
          <tr>
            <th>营销机构</th>
            <td>中山支行江城路支行</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>资产总额</th>
            <td>200000万</td>
          </tr>
          <tr>
            <th>企业电话</th>
            <td>400-800-8888</td>
          </tr>
          <tr>
            <th>企业类型</th>
            <td>私企</td>
          </tr>
          <tr>
            <th>营销人</th>
            <td>城雷</td>
          </tr>
        </table>
      </div>
    </div>
    <div
      v-bind:class="{ endetails1: investments ,businessperson: investment}"
      class="endetails businessperson padding20"
    >
      <div class="companys">融创投资管理有限公司</div>
      <div class="table-box">
        <table class="gridtablse">
          <tr>
            <th>统一信用代码</th>
            <td>92370112MA3D66LK09</td>
          </tr>
          <tr>
            <th>负责人姓名</th>
            <td>李小男</td>
          </tr>
          <tr>
            <th>行业门类</th>
            <td>服装设计门类</td>
          </tr>
          <tr>
            <th>营业收入</th>
            <td>100000万</td>
          </tr>
          <tr>
            <th>上级机构</th>
            <td>中山支行</td>
          </tr>
          <tr>
            <th>注册地址</th>
            <td>浙江省杭州市西湖区万二西路西湖国际15栋</td>
          </tr>
          <tr>
            <th>经营范围</th>
            <td>服装设计开发，服装类</td>
          </tr>
          <tr>
            <th>营业场所</th>
            <td>浙江省杭州市西湖区万二西路西湖国际15栋3单元</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>注册资金</th>
            <td>1800000万元人名币</td>
          </tr>
          <tr>
            <th>控股股东名称</th>
            <td>杭州爱迷尚服装</td>
          </tr>
          <tr>
            <th>登记机关</th>
            <td>杭州市西湖区市场</td>
          </tr>
          <tr>
            <th>从业人数</th>
            <td>500～1000</td>
          </tr>
          <tr>
            <th>营销机构</th>
            <td>中山支行江城路支行</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>资产总额</th>
            <td>200000万</td>
          </tr>
          <tr>
            <th>企业电话</th>
            <td>400-800-8888</td>
          </tr>
          <tr>
            <th>企业类型</th>
            <td>私企</td>
          </tr>
          <tr>
            <th>营销人</th>
            <td>城雷</td>
          </tr>
        </table>
      </div>
    </div>
    <div
      v-bind:class="{endetails1 : ys2 ,businessperson: ys1}"
      class="endetails businessperson padding20"
    >
      <div class="companys">孙群</div>
      <div class="table-box">
        <table class="gridtablse">
          <tr>
            <th>客户号</th>
            <td>4628043456789087654</td>
          </tr>
          <tr>
            <th>证件号</th>
            <td>26392748932069087X</td>
          </tr>
          <tr>
            <th>手机号码</th>
            <td>15967578566</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>客户等级</th>
            <td>A</td>
          </tr>
          <tr>
            <th>客户国籍</th>
            <td>中国</td>
          </tr>
          <tr>
            <th>开户机构</th>
            <td>萧山支行</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>客户性别</th>
            <td>男</td>
          </tr>
          <tr>
            <th>客户名族</th>
            <td>汉</td>
          </tr>
          <tr>
            <th>管户经理</th>
            <td>张晓明</td>
          </tr>
        </table>
      </div>
      <div class="business-box">
        <div class="business-ti">业务标签</div>
        <div class="business">信用贷款</div>
        <div class="business">存金通</div>
        <div class="business">资金归集</div>
        <div class="business">贷记卡</div>
        <div class="business">三方存管</div>
        <div class="business">保险</div>
        <div class="business">理财</div>
        <div class="business">财付通</div>
        <div class="business">基金</div>
        <div class="business">基金定投</div>
        <div class="business">定期转账</div>
        <div class="business">手机银行</div>
        <div class="business">网上银行</div>
        <div class="business">市场通</div>
        <div class="business">代发工资</div>
        <div class="business">定期服务</div>
      </div>
    </div>
    <!-- <div class="endetails">
      <div class="companys">企业情况</div>
      <div class="table-box">
        <table class="gridtablse">
          <tr>
            <th>企业性质</th>
            <td>私企</td>
          </tr>
          <tr>
            <th>核心高管</th>
            <td>张三、李四</td>
          </tr>
          <tr>
            <th>生命周期</th>
            <td>成熟</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>主营业务</th>
            <td>房产建造销售</td>
          </tr>
          <tr>
            <th>行业地位</th>
            <td>杭州地区龙头企业</td>
          </tr>
          <tr>
            <th>国内市场份额</th>
            <td>5%</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>所属行业</th>
            <td>房地产</td>
          </tr>
          <tr>
            <th>注册资本</th>
            <td>10000万</td>
          </tr>
        </table>
        <table class="gridtablse">
          <tr>
            <th>参保人员</th>
            <td>599</td>
          </tr>
          <tr>
            <th>竞争优势</th>
            <td>质量、口碑</td>
          </tr>
        </table>
      </div>
      <div class="business-box">
        <div class="business-font">重大事项</div>
        <div>高管人员被拘、涉讼、行政处罚、授信逾期、逃废债、资产/企业重组、重大投资/收购、违法违规行为、财产冻结、媒体负面报道以及其他重要公告</div>
      </div>
    </div>-->
    <div class="endetails">
      <a-collapse v-model="activeKey">
        <a-collapse-panel key="1" header="融资情况">
          <div class="Summary-table">
            <a-table :columns="columns1" :data-source="data1" :pagination="false"></a-table>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="荣誉资质">
          <div class="Summary-table">
            <a-table :columns="columns2" :data-source="data2" :pagination="false"></a-table>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="企业信⽤">
          <div class="Summary-table">
            <a-table :columns="columns3" :data-source="data3" :pagination="false"></a-table>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="taxes">
      <div class="endetails">
        <div id="myChart" :style="{width: '610px', height: '360px',marginRight:'10px'}"></div>
      </div>
      <div class="endetails">
        <div id="myChart1" :style="{width: '610px', height: '360px',}"></div>
      </div>
    </div>
    <div class="endetails">
      <div id="myChart3" :style="{width: '1200px', height: '460px'}"></div>
    </div>
    <div class="endetails">
      <div id="myChart2" :style="{width: '1200px', height: '560px'}"></div>
    </div>
  </div>
</template>
<script>
var echarts = require("echarts");
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/bar";
import Vue from "vue";
import { Collapse } from "ant-design-vue";
Vue.use(Collapse);
const columns1 = [
  { title: "轮次", dataIndex: "name", key: "name", },
  { title: "时间", dataIndex: "time", key: "time" },
  { title: "项目", dataIndex: "project", key: "project" },
  { title: "融资金额", dataIndex: "money", key: "money" },
  { title: " 融资方式", dataIndex: "mode", key: "mode" },
  { title: " 投资方", dataIndex: "investor", key: "investor" },
  { title: " 新闻来源", dataIndex: "sources", key: "sources" },
];
const data1 = [
  {
    key: 1,
    name: "Pre-A轮",
    time: "2017-11-28",
    project: "新能源",
    money: "500万",
    mode: "股权融资",
    investor: "乐融资本",
    sources: "IT桔子",
  },
  {
    key: 2,
    name: "天使轮",
    time: "2016-12-09",
    project: "新能源",
    money: "未披露",
    mode: "股权融资",
    investor: "高特电子",
    sources: "IT桔子",
  },
  {
    key: 3,
    name: "种子轮",
    time: "2017-09-08",
    project: "新能源",
    money: "未披露",
    mode: "股权融资",
    investor: "传动电喷",
    sources: "IT桔子",
  },
];
const columns2 = [
  { title: "时间", dataIndex: "time", key: "time" },
  { title: "荣誉", dataIndex: "name", key: "name", },
  { title: "荣誉级别", dataIndex: "project", key: "project" },
  { title: "颁布单位 ", dataIndex: "money", key: "money" },
  { title: " 新闻来源", dataIndex: "sources", key: "sources" },
];
const data2 = [
  {
    key: 1,
    time: "2015-08-20",
    name: "杭州市领军型创新创业团队",
    project: " 地方政府",
    money: "杭州市科学技术委员会",
    sources: "浙江政务服务网",
  },
  {
    key: 2,
    time: "2015-05-06",
    name: "杭州市“雏鹰计划”企业 ",
    project: " 地方政府",
    money: "杭州市科学技术委员会",
    sources: "浙江政务服务网",
  },
];
const columns3 = [
  { title: "年度", dataIndex: "time", key: "time" },
  { title: "企业评级", dataIndex: "name", key: "name", },
  { title: "信用评分", dataIndex: "project", key: "project" },
  { title: "评分来源", dataIndex: "money", key: "money" },
  { title: " 净利润", dataIndex: "mode", key: "mode" },
  { title: " 资产负债率", dataIndex: "investor", key: "investor" },
  { title: " 贷款逾期 ", dataIndex: "sources", key: "sources" },
  { title: " 行政处罚 ", dataIndex: "sanction", key: "sanction" },
];
const data3 = [
  {
    key: 1,
    time: "2019年",
    name: "四星",
    project: 880,
    money: "银行内部",
    mode: "2000万",
    investor: "56%",
    sources: " 2次",
    sanction:"0次 "
  },
  {
    key: 2,
    time: "2018年",
    name: "四星",
    project: 800,
    money: "银行内部",
    mode: "1200万",
    investor: "70%",
    sources: " 0次",
    sanction:"0次 "
  },
 
];
const columns = [
  { title: "文书标题", dataIndex: "name", key: "name", width: 300 },
  { title: "案由", dataIndex: "code", key: "code", width: 240 },
  { title: "案号", dataIndex: "time", key: "time" },
  { title: "裁判结果", dataIndex: "registered", key: "registered" },
  { title: "发布日期", dataIndex: "marketing", key: "marketing" },
  { title: "裁判日期", dataIndex: "remarks", key: "remarks" },
];
const data = [
  {
    key: 1,
    name:
      "深圳市麦士福科技有限公司与深圳市联合利隆金属制品有限公司、买卖合同纠纷一审民事裁定书",
    code: "买卖合同纠纷",
    time: "（2020）粤0307民初18613号",
    registered: "准许原告深圳市麦士福科技有限公司撤回起诉",
    marketing: "2020/01/12",
    remarks: "2020/03/28",
  },
  {
    key: 2,
    name:
      "戴轶众与阿里巴巴（中国）网络技术有限公司网络服务合同纠纷一审民事判决书",
    code: "服务合同纠纷",
    time: "（2019）浙0192民初2205号",
    registered: "驳回戴轶众的诉讼请求",
    marketing: "2019/06/15",
    remarks: "2019/11/02",
  },
  {
    key: 3,
    name:
      "广州蓝丝带体育用品有限公司与神舟太空产品高科技成果推广中心集团有限公司、西安圆昌科技投资有限公司侵害商标权纠纷一审民事裁定书",
    code: "著作权权属、侵权纠纷",
    time: "（2019）粤0191民初434号之一",
    registered: "本案按深圳市知图科技有限公司撤回起诉处理",
    marketing: "2019/06/15",
    remarks: "2019/11/02",
  },
  {
    key: 4,
    name:
      "北京全景视觉网络科技股份有限公司有限公司、广州蓝丝带体育用品有限公司与神舟太空产品高科技、北京全景视觉网络科技股份有限公司侵…",
    code: "著作权权属、侵权纠纷",
    time: "（2020）浙0192民初836号",
    registered: "驳回上诉，维持原判",
    marketing: "2020/06/15",
    remarks: "2019/11/02",
  },
];
export default {
  components: {
    "v-chart": ECharts,
  },
  data() {
    return {
      activeKey: ["1"],
      data,
      columns,
      data1,
      columns1,
      data2,
      columns2,
      data3,
      columns3,
      ys1: true,
      ys2: false,
      investment: true,
      investments: false,
      prise: true,
      prises: false,
      visible: false,
    };
  },
  mounted() {
    this.drawLine();
    this.drawlink();
  },
  methods: {
    endetails1() {
      this.ys1 = !this.ys1;
      this.ys2 = !this.ys2;
    },
    endetails2() {
      this.investment = !this.investment;
      this.investments = !this.investments;
    },
    endetails3() {
      this.prise = !this.prise;
      this.prises = !this.prises;
    },
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    drawLine() {
      let bgColor = "#fff",
        fontColor = "#666";
      let chartData = [
        { name: "2015", value: 17 },
        { name: "2016", value: 13 },
        { name: "2017", value: 9 },
        { name: "2018", value: 10 },
        { name: "2019", value: 8 },
      ];

      let xData = chartData.map((v) => v.name);
      let sData = chartData.map((v) => v.value);

      let lineOption = {
        lineStyle: {
          color: "rgba(151,151,151,0.5)",
          type: "dashed",
        },
      };
      //   销售趋势折线图
      let pointStyle = {
        borderColor: "#0572FF",
        color: "#fff",
        borderWidth: 2,
      };
      let labelStyle = {
        show: true,
        position: "top",
        lineHeight: 20,
        borderRadius: 5,
        backgroundColor: "rgba(255,255,255,.9)",
        borderColor: "#ccc",
        borderWidth: "1",
        padding: [5, 15, 4],
        color: "#000000",
        fontSize: 14,
        fontWeight: "normal",
      };
      let total = [55, 65, 68, 43, 88];
      let seriesData = [];
      total = total.sort(function (a, b) {
        return a - b;
      });
      total.forEach((item, index) => {
        let ob = {
          value: item,
          itemStyle: pointStyle,
          label: labelStyle,
        };
        if (index === total.length - 1) {
          ob.itemStyle = {
            borderColor: "#0572FF",
            color: "#0572FF",
            borderWidth: 3,
          };
          ob.label = {
            show: true,
            position: "top",
            lineHeight: 20,
            backgroundColor: "#0572FF",
            borderRadius: 5,
            borderColor: "#0572FF",
            borderWidth: "1",
            padding: [5, 15, 4],
            color: "#fff",
            fontSize: 14,
            fontWeight: "normal",
          };
        }
        seriesData.push(ob);
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
        title: { text: "纳税信息", top: 20, left: 20 },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "20%",
          right: "7%",
          left: "10%",
          bottom: "17%",
        },
        xAxis: [
          {
            name: "年份",
            type: "category",
            data: xData,
            axisLine: lineOption,
            axisTick: {
              show: false,
            },
            axisLabel: {
              margin: 10,

              textStyle: {
                color: "#000",
                fontSize: 14,
              },
            },
          },
        ],
        yAxis: [
          {
            name: "百万",
            // color:'#000',
            axisLabel: {
              type: "value",
              // formatter: "{value}百万",
              // color: fontColor,
              textStyle: {
                color: "#000",
                fontSize: 14,
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: lineOption,
            splitLine: lineOption,
          },
          {
            axisLine: lineOption,
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            data: sData,
            barWidth: "20px",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#1890FF", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#35C3FF", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
      });
      //   销售趋势折线图
      myChart1.setOption({
        title: {
          text: "销售趋势图",
          top: 20,
          left: 20,
        },
        grid: {
          top: "20%",
          left: "8%",
          right: "8%",
          bottom: "15%",
        },
        xAxis: [
          {
            name: "年份",
            type: "category",
            axisTick: {
              show: false,
            },

            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
              },
            },
            data: ["2015", "2016", "2017", "2018", "2019"],
          },
        ],

        yAxis: [
          {
            name: "百万",
            type: "value",
            min: 0,
            max: 100,
            splitNumber: 3,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: "#0572FF",
                width: 5,
              },
            },
            tooltip: {
              show: false,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#35C3FF",
                    },
                    {
                      offset: 1,
                      color: "#3797FE",
                    },
                  ],
                  false
                ),
              },
            },
            data: seriesData,
            markLine: {
              symbol: ["none", "none"], //去掉箭头
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: "dashed",
                    color: "#ccc",
                    width: 2,
                  },
                },
              },
            },
          },
        ],
      });
    },
    drawlink() {
      // 关系图谱
      let data = {
        nodes: [
          {
            name: "杭州米高仕科技有限公司",
            category: 0,
          },
          {
            name: "杭州爱迷尚服装公司",
            category: 0,
          },
          {
            name: "杭州万邦网络公司",
            category: 0,
          },
          {
            name: "浙江迈磊凯家具公司",
            category: 0,
          },
          {
            name: "浙江创峰科技有限公司",
            category: 1,
          },
          {
            name: "浙江亿扬科技有限公司",
            category: 1,
          },
          {
            name: "浙江速达科技有限公司",
            category: 1,
          },
          {
            name: "浙江锋千亚网络公司",
            category: 1,
          },
        ],

        links: [
          {
            source: "杭州爱迷尚服装公司",
            target: "杭州米高仕科技有限公司",
            name: "参股",
          },
          {
            source: "杭州万邦网络公司",
            target: "杭州爱迷尚服装公司",
            name: "参股",
          },

          {
            source: "浙江迈磊凯家具公司",
            target: "杭州爱迷尚服装公司",
            name: "参股",
          },
          {
            source: "浙江创峰科技有限公司",
            target: "杭州爱迷尚服装公司",
            name: "投资",
          },
          {
            source: "浙江亿扬科技有限公司",
            target: "杭州爱迷尚服装公司",
            name: "投资",
          },
          {
            source: "浙江速达科技有限公司",
            target: "杭州爱迷尚服装公司",
            name: "投资",
          },
          {
            source: "浙江锋千亚网络公司",
            target: "杭州爱迷尚服装公司",
            name: "投资",
          },
        ],
      };

      const color1 = "#1890FF";
      const color2 = "#FF6851";
      const color3 = "#10a050";

      data.nodes.forEach((node) => {
        if (node.category === 0) {
          node.symbolSize = 100;
          node.itemStyle = {
            color: color1,
          };
        } else if (node.category === 1) {
          node.itemStyle = {
            color: color2,
          };
        }
      });

      data.links.forEach((link) => {
        link.label = {
          align: "center",
          fontSize: 12,
        };

        if (link.name === "参股") {
          link.lineStyle = {
            color: color2,
          };
        } else if (link.name === "投资") {
          link.lineStyle = {
            color: color1,
          };
        } else if (link.name === "法人") {
          link.lineStyle = {
            color: color3,
          };
        }
      });

      let categories = [
        {
          name: "公司",
          itemStyle: {
            color: color1,
          },
        },
        {
          name: "投资",
          itemStyle: {
            color: color2,
          },
        },
      ];
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        title: {
          text: "关系图谱",
          top: 20,
          left: 20,
        },
        legend: [
          {
            show: false,
            // selectedMode: 'single',
            data: categories.map((x) => x.name),
            // icon: 'circle'
          },
        ],
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 58,
            draggable: true,
            roam: true,
            focusNodeAdjacency: true,
            categories: categories,
            edgeSymbol: ["", "arrow"],
            // edgeSymbolSize: [80, 10],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20,
                },
                formatter(x) {
                  return x.data.name;
                },
              },
            },
            label: {
              show: true,
            },
            force: {
              repulsion: 2000,
              edgeLength: 120,
            },
            data: data.nodes,
            links: data.links,
          },
        ],
      });
      //   股东持股比
      let bgColor = "#fff";
      let title = "总量";
      let color = ["#0077FF", "#FE7235", "#00C3FF", "#FEA735"];
      let echartData = [
        {
          name: "杭州上上网络公司（有限控股）",
          value: "70",
        },
        {
          name: "杭州万邦网络公司（有限控股）",
          value: "10",
        },
        {
          name: "杭州网络公司（有限控股）",
          value: "10",
        },
        {
          name: "杭州朗珮科技有限公司（有限控股）",
          value: "10",
        },
      ];

      let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ",");
      };
      let total = echartData.reduce((a, b) => {
        return a + b.value * 1;
      }, 0);
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      myChart3.setOption({
        backgroundColor: bgColor,
        color: color,
        // tooltip: {
        //     trigger: 'item'
        // },
        title: [
          {
            // text: "{name|" + 1 + "}\n{val|" + formatNumber(total) + "}",
            // top: "center",
            // left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 14,
                  fontWeight: "normal",
                  color: "#666666",
                  padding: [10, 0],
                },
                val: {
                  fontSize: 32,
                  fontWeight: "bold",
                  color: "#333333",
                },
              },
            },
          },
          {
            text: "股东持股比",
            top: 20,
            left: 20,
          },
        ],
        series: [
          {
            type: "pie",
            radius: ["45%", "60%"],
            center: ["50%", "50%"],
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: bgColor,
                borderWidth: 2,
              },
            },
            labelLine: {
              normal: {
                length: 10,
                length2: 60,
                lineStyle: {
                  color: "#e6e6e6",
                },
              },
            },
            label: {
              show: true,
              formatter: "{b}  {c}%",
            },
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

.Summary {
  display: flex;
  align-items: center;
  margin: 26px 0 10px 18px;
}

.endetails {
  box-shadow: 0px 2px 22px 0px rgba(23, 125, 220, 0.07);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  margin-bottom: 30px;
  text-align: left;
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
  line-height: 22px;
  margin-left: 10px;
  background: rgba(255, 251, 230, 1);
  border-radius: 2px;
  border: 1px solid rgba(255, 229, 143, 1);
  font-size: 12px;
  color: #FAAD14;
  text-align: center;
}

.setup-boxs {
  margin-left: 20px;
}

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
  width: 310px;
}

.table-box {
  display: flex;
  justify-content: space-between;
}

.business-box {
  display: flex;
  font-size: 12px;
}

.business-ti {
  margin-right: 34px;
}

.business-font {
  margin-right: 30px;
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
  text-align: center;
}

.businessperson {
  display: none;
}

.endetails1 {
  display: block;
}

.taxes {
  display: flex;
}

.padding20 {
  padding: 20px;
}
</style>