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
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{ width: 0, height: 70 }"></bm-navigation>

      <div v-if="curTabKey== 1">
        <bm-marker v-if="bankCircleShow1"  :position="circlePath.center"  title="湖滨支行"  @click="infoWindowOpen">
          <bm-info-window  :show="show"  @close="infoWindowClose"  @open="infoWindowOpen">
            <MapInfo></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle  v-if="bankCircleShow1"  :center="circlePath.center"  :radius="circlePath.radius"  stroke-color="blue" strokeStyle="dashed" :stroke-opacity="0.7"
          :stroke-weight="2" :fillOpacity="0.5" @lineupdate="updateCirclePath" :editing="false"
        ></bm-circle>

        <div v-if="bankCircleShow1 && bussinessCenterShow">
          <bm-marker  v-for="item in businessCenter" :key="item.lng" :position="item" :icon="{ url: yyIcon, size: { width: 30, height: 30 } }" title="营业中心" @click="markerClick">
          </bm-marker>
        </div>
        <div v-if="bankCircleShow1 && stShow">
          <bm-marker v-for="(item, index) in houseCenter" :key="index" :position="item" :icon="{ url: stIcon, size: { width: 30, height: 30 } }"
            title="房产中介"
            @click="markerClick">
          </bm-marker>
        </div>
        <div v-if="bankCircleShow1 && bankWDShow">
          <bm-marker  v-for="(item, index) in bankList" :key="index" :position="item"  :icon="{ url: bankWDIcon, size: { width: 18, height: 17 } }"
            :offset="{ width: 19, height: 17 }" title="农业银行"  @click="markerClick">
          </bm-marker>
        </div>
      </div>
      <div v-if="curTabKey== 2">
        <bm-marker v-if="bankCircleShow2"  :position="circlePath.center"  title="湖滨支行"  @click="infoWindowOpen">
          <bm-info-window  :show="show"  @close="infoWindowClose"  @open="infoWindowOpen">
            <MapInfo></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle  v-if="bankCircleShow2"  :center="circlePath.center"  :radius="circlePath.radius"  stroke-color="blue" strokeStyle="dashed" :stroke-opacity="0.7"
          :stroke-weight="2" :fillOpacity="0.5" @lineupdate="updateCirclePath" :editing="false"
        ></bm-circle>
      </div>
      <div v-if="curTabKey== 3">
        <bm-marker v-if="bankCircleShow3"  :position="circlePath.center"  title="湖滨支行"  @click="infoWindowOpen">
          <bm-info-window  :show="show"  @close="infoWindowClose"  @open="infoWindowOpen">
            <MapInfo></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle  v-if="bankCircleShow3 && disRadioShow3"  :center="circlePath.center"  :radius="circlePath.radius"  stroke-color="blue" strokeStyle="dashed" :stroke-opacity="0.7"
          :stroke-weight="2" :fillOpacity="0.5" @lineupdate="updateCirclePath" :editing="false"
        ></bm-circle>
      </div>
      <div v-if="curTabKey== 4">
        <bm-marker v-if="bankCircleShow4"  :position="circlePath.center"  title="湖滨支行"  @click="infoWindowOpen">
          <bm-info-window  :show="show"  @close="infoWindowClose"  @open="infoWindowOpen">
            <MapInfo></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle  v-if="bankCircleShow4"  :center="circlePath.center"  :radius="circlePath.radius"  stroke-color="blue" strokeStyle="dashed" :stroke-opacity="0.7"
          :stroke-weight="2" :fillOpacity="0.5" @lineupdate="updateCirclePath" :editing="false"
        ></bm-circle>
        <div v-if="bankCircleShow4 && sqCYYShow">
          <bm-marker  v-for="(item, index) in cyyList" :key="index" :position="item"  :icon="{ url: bankWDIcon, size: { width: 18, height: 17 } }"
            :offset="{ width: 19, height: 17 }" title="创意园"  @click="markerClick">
          </bm-marker>
        </div>
      </div>
    </baidu-map>
  </div>
</template>

<script>
import markerNYIcon from "../assets/mark/abc_mid.png";
import markerSTIcon from "../assets/mark/st_fczj.png";
import markerYYIcon from "../assets/mark/wd_yyzx.png";
import MapInfo from "@/components/mapInfoWindow.vue";
export default {
  name: "Map",
  props: {
    bankCircleShow1: Boolean,
    bankCircleShow2: Boolean,
    bankCircleShow3: Boolean,
    bankCircleShow4: Boolean,
    disRadioShow3: Boolean,
    bussinessCenterShow: Boolean,
    stShow: Boolean,
    bankWDShow: Boolean,
    curTabKey: Number,
    sqCYYShow: Boolean,
  },
  data() {
    return {
      show: false,
      zIndex: 99000000,
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
        { lng: 120.170612, lat: 30.260833 },
        { lng: 120.172175, lat: 30.263769 }
      ],
      cyyList: [
        { lng: 120.174187, lat: 30.259574 },
        { lng: 120.171187, lat: 30.260502 }
      ],
      bankWDIcon: markerNYIcon,
      stIcon: markerSTIcon,
      yyIcon: markerYYIcon
    };
  },
  methods: {
    handler({ BMap, map }) {
      // console.log("------map-----------");
      // console.log(BMap);
    },
    markerClick() {
      // console.log("marker");
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
