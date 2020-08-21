<template>
  <div class="app-box">
    <baidu-map
      class="map"
      :center="{ lng: 120.2, lat: 30.26667 }"
      :zoom="15"
      :min-zoom="13"
      :scroll-wheel-zoom="true"
      @ready="handler"
    >
      <bm-navigation
        anchor="BMAP_ANCHOR_TOP_LEFT"
        :offset="{ width: 0, height: 70 }"
      ></bm-navigation>

      <bm-marker
        v-if="bankCircleShow"
        :position="circlePath.center"
        title="湖滨支行"
        @click="infoWindowOpen"
      >
        <bm-info-window
          :show="show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
        >
          <MapInfo></MapInfo>
        </bm-info-window>
      </bm-marker>
      <bm-circle
        v-if="bankCircleShow"
        :center="circlePath.center"
        :radius="circlePath.radius"
        stroke-color="blue"
        strokeStyle="dashed"
        :stroke-opacity="0.7"
        :stroke-weight="2"
        :fillOpacity="0.5"
        @lineupdate="updateCirclePath"
        :editing="false"
      ></bm-circle>

      <div v-if="bankCircleShow && bussinessCenterShow">
        <bm-marker
          v-for="item in businessCenter"
          :key="item.lng"
          :position="item"
          title="营业中心"
          @click="markerClick"
        >
        </bm-marker>
      </div>
      <div v-if="bankCircleShow && stShow">
        <bm-marker
          v-for="(item, index) in houseCenter"
          :key="index"
          :position="item"
          :icon="{ url: stIcon, size: { width: 36, height: 34 } }"
          title="房产中介"
          @click="markerClick"
        >
        </bm-marker>
      </div>
      <div v-if="bankCircleShow && bankWDShow">
        <bm-marker
          v-for="(item, index) in bankList"
          :key="index"
          :position="item"
          :icon="{ url: bankWDIcon, size: { width: 36, height: 34 } }"
          :offset="{ width: 19, height: 17 }"
          title="农业银行"
          @click="markerClick"
        >
        </bm-marker>
      </div>
    </baidu-map>
  </div>
</template>

<script>
import markerNYIcon from '../assets/mark/abc_mid.png'
import markerSTIcon from '../assets/mark/cmb_mid.png'
import MapInfo from "@/components/mapInfoWindow.vue";
export default {
  name: "Map",
  props: {
    bankCircleShow: Boolean,
    bussinessCenterShow: Boolean,
    stShow: Boolean,
    bankWDShow: Boolean
  },
  data() {
    return {
      show: false,
      circlePath: {
        center: {
          lng: 120.175319,
          lat: 30.261258
        },
        radius: 500
      },
      businessCenter: [
        { lng: 120.175319, lat: 30.269958 },
        { lng: 120.173219, lat: 30.269268 },
        { lng: 120.176314, lat: 30.281235 },
        { lng: 120.174409, lat: 30.271558 },
        { lng: 120.173558, lat: 30.259199 },
        { lng: 120.179683, lat: 30.259683 },
        { lng: 120.179299, lat: 30.258466 },
        { lng: 120.175885, lat: 30.26327 },
        { lng: 120.183377, lat: 30.26313 }
      ],
      houseCenter: [
        { lng: 120.171196, lat: 30.26051 },
        { lng: 120.172418, lat: 30.261633 },
        { lng: 120.178993, lat: 30.259621 },
        { lng: 120.178993, lat: 30.262241 },
        { lng: 120.172391, lat: 30.260143 },
        { lng: 120.177502, lat: 30.264362 }
      ],
      bankList: [
        {lng: 120.170612, lat: 30.260833},
        {lng: 120.172175, lat: 30.263769},
      ],
      bankWDIcon: markerNYIcon,
      stIcon: markerSTIcon,
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log("------map-----------");
      console.log(BMap);
    },
    markerClick() {
      console.log("marker");
    },
    updateCirclePath(e) {
      this.circlePath.center = e.target.getCenter();
      this.circlePath.radius = e.target.getRadius();
    },
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    }
  },
  components: {
    MapInfo
  }
};
</script>

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
