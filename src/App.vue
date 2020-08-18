<template>
  <div id="app">
    <Head></Head>
    <Sidebar></Sidebar>
     <router-view/>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
   components: {
    Head,Sidebar
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
