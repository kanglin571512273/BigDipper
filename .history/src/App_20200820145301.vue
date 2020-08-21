<template>
  <div id="app">
    <Head></Head>
    <Sidebar @circleShow="circleShow" @checkWd="handleCheckWd" @checkST="handlecheckST"></Sidebar>
     <!-- <router-view/> -->
    <Map :bankCircleShow="bankCircleShow" :bussinessCenterShow="bussinessCenterShow"></Map>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Sidebar from "@/components/Sidebar.vue";
import Map from "@/components/map.vue"
export default {
   components: {
    Head,Sidebar,Map
  },
  data () {
    return {
      bankCircleShow: false,
      bussinessCenterShow: false,
    }
  },
  methods: {
    circleShow(value) {
      this.bankCircleShow = value;
      // console.log(this.bankCircleShow)
    },
    handleCheckWd(value) {
      let checkList = value;
      this.bussinessCenterShow = value.includes(1) ? true : false;
      // console.log('----------checkWD-----------')
      // console.log(this.bussinessCenterShow);
    },
    handlecheckST(value) {
      let checkList = value;
      this.bussinessCenterShow = value.includes(1) ? true : false;
      // console.log('----------checkWD-----------')
      // console.log(this.bussinessCenterShow);
    },
  }
}
</script>

<style lang="stylus">
#app {
  width: 100%;
  height: 100%;
  position relative
  .head-box{
   position fixed;
   left 0;
   top 0;
   z-index 99
  }
}
</style>
