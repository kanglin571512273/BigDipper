<template>
  <div class="infoWrapper">
    <div class="head">
      <p class="title">湖滨支行</p>
      <div>
        <a-button-group size="small">
          <a-button type="primary">首页</a-button>
          <a-button disabled>详情</a-button>
          <a-button disabled>通知</a-button>
        </a-button-group>
      </div>
    </div>
    <div class="divide"></div>
    <div class="imgshow"></div>
    <div class="desc">
      <p>地址：浙江省杭州市西湖区文二西路</p>
      <div class="row">
        <p>类型：龙头型</p>
        <p>排名：12</p>
      </div>
      <p>负责人：赵桦桦 178-2739-0160</p>
    </div>
    <div class="divide"></div>
    <div class="linkBox">
      <p class="title">常用链接</p>
      <div class="linkAll">
        <a  v-for="item in linkList" :key="item">{{item}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoMapWindow",
  data() {
    return {
      linkList: [
        '存贷监测','主要指标表','中间业务','人均存款数量','分期交易','掌银营销','聚合码商户','个贷存款比'
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.infoWrapper {
  width 310px
  height 316px
}
.head {
  display flex;
  margin-top 12px;
  justify-content space-between
  align-items flex-end
  .title {
    font-size 16px
    font-weight:500;
    color: #000;
    line-height:22px;
    margin: 8px 0 0px 0;
  }
}
.divide {
  width 100%
  height 1px
  margin 6px 0
  background rgba(0,0,0,0.06);
}
.imgshow {
  width 100%
  height 117px
  margin-bottom 5px
  background-image url('../assets/bank.png')
  background-size 100% 100%;
}
.desc {
  p {
    font-size 12px
    color:rgba(0,0,0,0.65);
    margin-bottom 5px;
  }
  .row {
    display: flex;
    width 100%
    p {
      width 49%
    }
  }
}
.linkBox {
  font-size 12px
  .title {
    color:rgba(0,0,0,0.65);
    margin-bottom 8px;
  }
  .linkAll {
    display flex
    flex-wrap: wrap;
    justify-content space-between
    color: #1890FF;
    a {
      text-decoration none
    }
  }
}
</style>
