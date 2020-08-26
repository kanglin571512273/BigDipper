<template>
  <div class="app-box">
    <baidu-map
      class="map"
      :center="{ lng: 120.2, lat: 30.26667 }"
      :zoom="15"
      :min-zoom="13"
      :scroll-wheel-zoom="true"
      :mapStyle="mapStyle"
      @ready="handler"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{ width: 0, height: 70 }"></bm-navigation>

      <div v-if="curTabKey== 1">
        <bm-marker
          v-if="bankCircleShow1"
          :position="circleCenter1"
          title="湖滨支行"
          @click="infoWindowOpen"
        >
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <MapInfo></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle
          v-if="bankCircleShow1"
          :center="circleCenter1"
          :radius="radius1"
          fillColor="#1890FF"
          stroke-color="#FFF"
          strokeStyle="dashed"
          :stroke-opacity="0.7"
          :stroke-weight="2"
          :fillOpacity="0.3"
          :editing="false"
        ></bm-circle>

        <div v-if="bankCircleShow1 && bussinessCenterShow">
          <bm-marker
            v-for="item in businessCenter"
            :key="item.lng"
            :position="item"
            :icon="{ url: yyIcon, size: { width: 24, height: 24 } }"
            title="营业中心"
            @click="markerClick"
          ></bm-marker>
        </div>
        <div v-if="bankCircleShow1 && stShow">
          <bm-marker
            v-for="(item, index) in houseCenter"
            :key="index"
            :position="item"
            :icon="{ url: stIcon, size: { width: 24, height: 24 } }"
            title="房产中介"
            @click="markerClick"
          ></bm-marker>
        </div>
        <div v-if="bankCircleShow1 && bankWDShow">
          <bm-marker
            v-for="(item, index) in bankList"
            :key="index"
            :position="item"
            :icon="{ url: bankWDIcon, size: { width: 24, height: 24 } }"
            title="招商银行"
            @click="markerClick"
          ></bm-marker>
        </div>
      </div>
      <div v-if="curTabKey== 2">
        <bm-marker
          v-if="bankCircleShow2"
          :position="circleCenter2"
          title="湖滨支行"
          @click="infoWindowOpen"
        >
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <MapInfo></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle
          v-if="bankCircleShow2"
          :center="circleCenter2"
          :radius="radius2"
          fillColor="#1890FF"
          stroke-color="#FFF"
          strokeStyle="dashed"
          :stroke-opacity="0.7"
          :stroke-weight="2"
          :fillOpacity="0.3"
          :editing="false"
        ></bm-circle>
      </div>
      <div v-if="curTabKey== 3">
        <bm-marker
          v-if="bankCircleShow3"
          :position="circlePath.center"
          title="湖滨支行"
          @click="infoWindowOpen"
        >
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <MapInfo></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle
          v-if="bankCircleShow3 && disRadioShow3"
          :center="circlePath.center"
          :radius="circlePath.radius"
          fillColor="#1890FF"
          stroke-color="#FFF"
          strokeStyle="dashed"
          :stroke-opacity="0.7"
          :stroke-weight="2"
          :fillOpacity="0.3"
          :editing="false"
        ></bm-circle>
      </div>
      <div v-if="curTabKey== 4">
        <bm-marker
          v-if="bankCircleShow4"
          :position="circlePath.center"
          title="湖滨支行"
          @click="infoWindowOpen"
        >
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <MapInfo></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle
          v-if="bankCircleShow4"
          :center="circlePath.center"
          :radius="circlePath.radius"
          fillColor="#1890FF"
          stroke-color="#FFF"
          strokeStyle="dashed"
          :stroke-opacity="0.7"
          :stroke-weight="2"
          :fillOpacity="0.3"
          :editing="false"
        ></bm-circle>
        <div v-if="bankCircleShow4 && sqCYYShow">
          <bm-marker
            v-for="(item, index) in cyyList"
            :key="index"
            :position="item"
            :icon="{ url: bankWDIcon, size: { width: 24, height: 24 } }"
            :offset="{ width: 19, height: 17 }"
            title="创意园"
            @click="markerClick"
          ></bm-marker>
        </div>
      </div>
    </baidu-map>
  </div>
</template>

<script>
import Bus from "../api/bus";
import markerZHIcon from "../assets/icon/wd_cmb_big.png";
import markerSTIcon from "../assets/icon/wd_fczj_big.png";
import markerYYIcon from "../assets/icon/wd_abc_big.png";
import MapInfo from "@/components/mapInfoWindow.vue";
export default {
  name: "Map",
  data() {
    return {
      curTabKey: 1,
      bankCircleShow1: false,
      bussinessCenterShow: false,
      stShow: false,
      bankWDShow: false,
      bankCircleShow2: false,
      bankCircleShow3: false,
      bankCircleShow4: false,
      disRadioShow3: false,
      sqCYYShow: false,
      show: false,
      zIndex: 99000000,
      
      circleCenter1:null, // 四个组件的中心点坐标
      circleCenter2:null,
      circleCenter3:null,
      circleCenter4:null,
      radius1: 500,
      radius2: 500,
      radius3: 500,
      radius4: 500,
      businessCenter: null,
      houseCenter: null,
      bankList: null,

      
      circlePath1: { // 延安路支行
        lng: 120.169689,
        lat: 30.273203
      },
      circlePath2: { // 杭州延庆支行
        lng: 120.173251,
        lat: 30.257303,
      },
      
      businessCenter1: [// 延安路支行营业中心
        { lng: 120.175319, lat: 30.269958 },
        { lng: 120.173219, lat: 30.269268 },
        { lng: 120.176314, lat: 30.281235 },
        { lng: 120.174409, lat: 30.271558 },
        { lng: 120.173558, lat: 30.259199 },
        { lng: 120.179683, lat: 30.259683 },
        // { lng: 120.179299, lat: 30.258466 },
        // { lng: 120.175885, lat: 30.26327 },
        // { lng: 120.183377, lat: 30.26313 },
      ],
      businessCenter2: [ // 杭州延庆支行营业中心
        { lng: 120.175319, lat: 30.269958 },
      ],
      houseCenter1: [// 延安路支行房产中介
        { lng: 120.171196, lat: 30.26051 },
        { lng: 120.172418, lat: 30.261633 },
        { lng: 120.178993, lat: 30.259621 },
        { lng: 120.178993, lat: 30.262241 },
        { lng: 120.172391, lat: 30.260143 },
        { lng: 120.177502, lat: 30.264362 },
      ],
      houseCenter2: [// 杭州延庆支行房产中介
        { lng: 120.171196, lat: 30.26051 },
        { lng: 120.172418, lat: 30.261633 },
        { lng: 120.178993, lat: 30.259621 },
        { lng: 120.178993, lat: 30.262241 },
      ],
      bankList1: [// 延安路支行银行网点
        { lng: 120.170612, lat: 30.260833 },
        { lng: 120.172175, lat: 30.263769 },
      ],
      bankList2: [// 杭州延庆支行银行网点
        { lng: 120.170612, lat: 30.260833 },
        { lng: 120.172175, lat: 30.263769 },
      ],
      cyyList: [
        { lng: 120.174187, lat: 30.259574 },
        { lng: 120.171187, lat: 30.260502 },
      ],
      bankWDIcon: markerZHIcon,
      stIcon: markerSTIcon,
      yyIcon: markerYYIcon,
      mapStyle: {
        styleJson: [
          {
            featureType: "road",
            elementType: "all",
            stylers: {
              lightness: 20,
            },
          },
          {
            featureType: "highway",
            elementType: "geometry",
            stylers: {
              color: "#f49935",
            },
          },
          {
            featureType: "railway",
            elementType: "all",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "local",
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: {
              color: "#d1e5ff",
            },
          },
          {
            featureType: "airportlabel",
            elementType: "all",
            stylers: {
              visibility: "on",
            },
          },
        ],
      },
    };
  },
  mounted() {
    Bus.$on("tabKey", (key) => {
      this.curTabKey = parseInt(key, 10);
    });
    Bus.$on("circleShow1", (show, value) => {
      this.bankCircleShow1 = show;
      if(value == "hubin") {
        this.circleCenter1 = this.circlePath2;
        this.businessCenter = this.businessCenter2;
        this.houseCenter = this.houseCenter2;
        this.bankList = this.bankList2;
      } else if(value == "yananlu") {
        this.circleCenter1 = this.circlePath1;
        this.businessCenter = this.businessCenter1;
        this.houseCenter = this.houseCenter1;
        this.bankList = this.bankList1;
      }
    });
    Bus.$on("radiusRange1", (radius) => {
      this.radius1 = radius;
    });
    Bus.$on("checkWd", (value) => {
      this.bussinessCenterShow = value.includes(1) ? true : false;
    });
    Bus.$on("checkST", (value) => {
      let checkList = value;
      this.stShow = value.includes("A") ? true : false;
    });
    Bus.$on("checkBankWD", (value) => {
      let checkList = value;
      this.bankWDShow = value.includes("A") ? true : false;
    });
    Bus.$on("circleShow2", (show, value) => {
      this.bankCircleShow2 = show;
      if(value == "hubin") {
        this.circleCenter2 = this.circlePath2;
      } else if(value == "yananlu") {
        this.circleCenter2 = this.circlePath1;
      }
    });
    Bus.$on("radiusRange2", (radius) => {
      this.radius2 = radius;
    });
    Bus.$on("circleShow3", (value) => {
      this.bankCircleShow3 = value;
    });
    Bus.$on("circleShow4", (value) => {
      this.bankCircleShow4 = value;
    });
    Bus.$on("disRadio", (value) => {
      this.disRadioShow3 = value;
    });
    Bus.$on("checkSQFL", (value) => {
      let checkList = value;
      this.sqCYYShow = value.includes("E") ? true : false;
    });
  },
  methods: {
    handler({ BMap, map }) {
      // console.log("------map-----------");
      // console.log(BMap);
    },
    markerClick() {
      // console.log("marker");
    },
    // updateCirclePath(e) {
      // this.circlePath.center = e.target.getCenter();
      // this.circlePath.radius = e.target.getRadius();
    // },
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
  },
  components: {
    MapInfo,
  },
};
</script>

<style lang="stylus" scoped>
.app-box {
  width: 100%;
  height: 100%;
}

.map {
  width: 100%;
  height: 100%;
}
</style>
