<template>
  <div>
    <div class="font">营销前</div>
    <div class="before-box">
      <div class="before">
        <div class="longname margintop30">
          <span>生态地址：</span>
          <a-input placeholder="请输入营销产品" />
        </div>
        <div class="longname margintop30">
          <span>备注：</span>
          <a-textarea placeholder="请输入备注" :rows="4" />
        </div>
      </div>
      <div class="before">
        <div>产品名称：理财产品</div>
        <div>备注：准备向客户推荐理财产品</div>
      </div>
    </div>
    <div class="font">营销日志</div>
    <div class="before-box">
      <div class="before">
        <div class="longname margintop30">
          <span>营销产品：</span>
          <a-input placeholder="请输入营销产品" />
        </div>
        <div class="longname margintop30">
          <span>备注：</span>
          <a-textarea placeholder="请输入备注" :rows="4" />
        </div>
      </div>
      <div class="before">
        <div>产品名称：理财产品</div>
        <div>备注：准备向客户推荐理财产品</div>
        <div>产品名称：贵金属</div>
        <div>备注：客户希望了解更多我们的产品，进行比较后再选择购买。</div>
        <div>产品名称：基金</div>
        <div>已向客户介绍理财产品，基金，贵金属等。</div>
      </div>
    </div>
    <div class="font">营销结果</div>
    <div class="before-box">
      <div class="before">
        <div class="longname margintop30">
          <span>营销产品：</span>
          <a-input placeholder="请输入营销产品" />
        </div>
        <div class="longname margintop30">
          <span>备注：</span>
          <a-textarea placeholder="请输入备注" :rows="4" />
        </div>
      </div>
      <div class="before">
        <div>产品名称：理财产品</div>
        <div>备注：客户已购买理财产品</div>
      </div>
    </div>
  </div>
</template>
<script>
const columns1 = [
  { title: "付款方", dataIndex: "payer", key: "payer", width: 240 },
  { title: "收款方", dataIndex: "payee", key: "payee", width: 240 },
  { title: "付款账户", dataIndex: "payment", key: "payment" },
  { title: "收款账户", dataIndex: "collection", key: "collection" },
  { title: "金额", dataIndex: "amount", key: "amount" },
  { title: "时间", dataIndex: "time", key: "time" },
  { title: "用途", dataIndex: "purpose", key: "purpose" },
];

const data1 = [
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
import Vue from "vue";
import { Input } from "ant-design-vue";
Vue.use(Input);
export default {};
</script>

<style lang="stylus" scoped>
.font {
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  line-height: 24px;
  text-align: left;
}

.before-box {
  display: flex;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 22px 0px rgba(23, 125, 220, 0.07);
  border-radius: 10px;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 10px;
}

.before {
  width: 42%;
  padding-left: 10px;

  div {
    margin-top: 5px;
    text-align: left;
  }
}
</style>