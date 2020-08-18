<template>
<div class="app-box">
  <baidu-map class="map" :center="{lng: 120.20000, lat: 30.26667}" :zoom="14" :scroll-wheel-zoom="true">
<bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT" ></bm-navigation>
  </baidu-map>
</div>
  
</template>
<style lang="stylus" scoped>
.app-box{
  width 100%
  height 100%
}
.map {
  width: 100%;
  height: 100%;
}
</style>