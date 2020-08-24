<template>
  <div id="app">
    <Head></Head>
    <Sidebar
      @circleShow1="circleShow1"
      @checkWd="handleCheckWd"
      @checkST="handlecheckST"
      @checkBankWD="handleCheckBankWD"
      @tabKey="tabKeyChange"
      @circleShow2="circleShow2"
      @circleShow3="circleShow3"
      @disRadio="disRadioChange"
      @circleShow4="circleShow4"
      @checkSQFL="handleCheckSQFL"
    ></Sidebar>
    <!-- <router-view/> -->
    <Map
      :bankCircleShow1="bankCircleShow1"
      :bussinessCenterShow="bussinessCenterShow"
      :stShow="stShow"
      :bankWDShow="bankWDShow"
      :curTabKey="curTabKey"
      :bankCircleShow2="bankCircleShow2"
      :bankCircleShow3="bankCircleShow3"
      :disRadioShow3="disRadioShow3"
      :bankCircleShow4="bankCircleShow4"
      :sqCYYShow="sqCYYShow"
    ></Map>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Sidebar from "@/components/Sidebar.vue";
import Map from "@/components/map.vue";
export default {
  components: {
    Head,
    Sidebar,
    Map,
  },
  data() {
    return {
      bankCircleShow1: false,
      bankCircleShow2: false,
      bankCircleShow3: false,
      bankCircleShow4: false,
      bussinessCenterShow: false,
      stShow: false,
      bankWDShow: false,
      curTabKey: 1,
      disRadioShow3: false,
      sqCYYShow: false,
    };
  },
  methods: {
    circleShow1(value, key) {
      this.bankCircleShow1 = value;
      // console.log(this.bankCircleShow1, key)
    },
    circleShow2(value, key) {
      this.bankCircleShow2 = value;
      // console.log(this.bankCircleShow2, key)
    },
    circleShow3(value, key) {
      this.bankCircleShow3 = value;
      // console.log(this.bankCircleShow3, key)
    },
    disRadioChange(value) {
      this.disRadioShow3 = value;
      // console.log('--------disRadioShow3-------')
      // console.log(this.disRadioShow3)
    },
    circleShow4(value, key) {
      this.bankCircleShow4 = value;
      // console.log(this.bankCircleShow4, key)
    },
    handleCheckWd(value) {
      let checkList = value;
      this.bussinessCenterShow = value.includes(1) ? true : false;
      // console.log('----------checkWD-----------')
      // console.log(this.bussinessCenterShow);
    },
    handlecheckST(value) {
      let checkList = value;
      this.stShow = value.includes("A") ? true : false;
      // console.log('----------checkST-----------')
      // console.log(this.stShow);
    },
    handleCheckBankWD(value) {
      let checkList = value;
      this.bankWDShow = value.includes("A") ? true : false;
      // console.log('----------bankWDShow-----------')
      // console.log(this.bankWDShow);
    },
    handleCheckSQFL(value) {
      let checkList = value;
      this.sqCYYShow = value.includes("E") ? true : false;
      // console.log('----------CheckSQFL-----------')
      // console.log(this.sqCYYShow);
    },
    tabKeyChange(key) {
      this.curTabKey = parseInt(key, 10);
      // console.log('----------key-----------')
      // console.log(JSON.stringify(key));
    },
  },
};
</script>

<style lang="stylus">
#app {
  width: 100%;
  height: 100%;
  position: relative;

  .head-box {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }
}
</style>
