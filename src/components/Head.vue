<template>
  <div class="head-box">
    <div class="Dipper">
      <h1 class="title">北斗星</h1>
    </div>
    <div class="Dipper-box">
      <ul class="list-box">
        <a href="#">
          <li>
            <span>操作指南</span>
          </li>
        </a>
        <a href="#">
          <li>
            <span>常用链接</span>
          </li>
        </a>
        <a href="https://max.datahunter.cn/screen-share/share/5f339a0ea5adc80868f434cd">
          <li>
            <span>首页大屏</span>
          </li>
        </a>
        <a-modal
          v-model="visible1"
          width="92%"
          title="杭州爱迷尚服装公司-企业画像"
          :footer="null"
          @ok="handleOk"
        >
          <Customerportrait></Customerportrait>
        </a-modal>
        <a-modal
          v-model="visible2"
          width="92%"
          title="营销计划-备注"
          :footer="null"
          @ok="handleOk1"
        >
          <Remarks></Remarks>
        </a-modal>
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            张小明
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;" @click="showModal">营销计划</a>
            </a-menu-item>
            <a-modal v-model="visible" width="90%" title="营销计划" :footer="null" @ok="hideModal">
              <!-- <Panorama></Panorama> -->
              <div>
                <div class="totalpeople">本周计划</div>
                <a-table
                  :columns="columns"
                  :data-source="data"
                  :pagination="false"
                  :scroll="{ y: 200 }"
                >
                  <a slot="action" href="javascript:;" @click="showModal1">详情</a>
                  <a slot="action" href="javascript:;"  @click="showModal2">&ensp;&ensp;备注</a>
                  <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
                </a-table>
                <div style="height:10px"></div>
                <div class="totalpeople">下周计划</div>
                <a-table
                  :columns="columns"
                  :data-source="data"
                  :pagination="false"
                  :scroll="{ y: 200 }"
                >
                  <a slot="action" href="javascript:;">详情</a>
                  <a slot="action" href="javascript:;">&ensp;&ensp;备注</a>
                  <p slot-scope="record" style="margin: 0">{{ record.description }}</p>
                </a-table>
              </div>
            </a-modal>
            <a-menu-item>
              <a href="javascript:;">我的客户</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">我的分享</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">我的咨询</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">我的消息</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">待办事项</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <a href="#">
          <li>
            <span></span>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Customerportrait from "@/components/Customerportrait.vue";
import Remarks from "@/components/Remarks.vue";
import { Dropdown, Icon, Menu, Modal, Table } from "ant-design-vue";
Vue.use(Dropdown);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Table);
const columns = [
  { title: "客户名称", dataIndex: "name", key: "name" },
  { title: "归属机构", dataIndex: "code", key: "code" },
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
    code: "杭州金沙湖支行",
  },
  {
    key: 2,
    name: "杭州迈瑞科技有限公司",
    code: "城西支行",
  },

  {
    key: 3,
    name: "杭州迈利服装公司",
    code: "杭州德胜东路支行",
  },
  {
    key: 4,
    name: "浙江亿扬科技有限公司",
    code: "城西支行",
  },
  {
    key: 5,
    name: "浙江易天科技有限公司",
    code: "杭州科技园支行",
  },
];
export default {
  components: {
    Customerportrait,
    Remarks,
  },
  data() {
    return {
      time: null,
      nowtime: null,
      visible: false,
      visible1: false,
      visible2: false,
      columns,
      data,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    showModal1() {
      this.visible1 = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible1 = false;
    },
    showModal2() {
      this.visible2 = true;
    },
    handleOk1(e) {
      console.log(e);
      this.visible2 = false;
    },
  },
  mounted() {},
  destroyed() {},
};
</script>

<style scoped lang="stylus">
.head-box {
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg, rgba(65, 164, 255, 1) 0%, rgba(54, 158, 255, 1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0;
}

.Dipper {
  margin-left: 30px;
}

.Dipper-box {
  margin-right: 34px;
}

.list-box {
  display: flex;
  font-size: 20px;
}

.list-box a {
  margin-right: 60px;
  color: #FFF;
}

.totalpeople {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 24px;
  text-align: left;
  font-weight: 600;
}
</style>
