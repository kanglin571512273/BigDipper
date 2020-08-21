<template>
  <div id="app">
    <Head></Head>
    <Sidebar @circleShow="circleShow" @checkWd="handleCheckWd"></Sidebar>
     <!-- <router-view/> -->
    <Map :bankCircleShow="bankCircleShow"></Map>
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
      console.log(this.bankCircleShow)
    },
    handleCheckWd(value) {
      console.log('----------app-----------')
      console.log(value);
      let checkList = value;
      if(value.includes(1)) {
        console.lof(ok)
      }
    }
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
