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
          @click="infoWindowOpen"
          :title="bankName"
        >
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <MapInfo :title="bankName"></MapInfo>
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
            :offset="{ width: 0, height: -12 }"
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
          :title="bankName"
          @click="infoWindowOpen"
        >
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <MapInfo :title="bankName"></MapInfo>
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
          :position="circleCenter3"
          :title="bankName"
          @click="infoWindowOpen"
        >
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <MapInfo :title="bankName"></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle
          v-if="bankCircleShow3 && disRadioShow3"
          :center="circleCenter3"
          :radius="radius3"
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
          :position="circleCenter4"
          :title="bankName"
          @click="infoWindowOpen"
        >
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <MapInfo :title="bankName"></MapInfo>
          </bm-info-window>
        </bm-marker>
        <bm-circle
          v-if="bankCircleShow4"
          :center="circleCenter4"
          :radius="radius4"
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
            :icon="{ url: cyyIcon, size: { width: 24, height: 24 } }"
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
      bankName: '',
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
      cyyList: null,
      
      circlePath1: { // 延安路支行
        lng: 120.169724,
        lat: 30.273274
      },
      circlePath2: { // 杭州延庆支行
        lng: 120.173198,
        lat: 30.257352,
      },
      
      businessCenter1: [// 延安路支行营业中心
        { lng: 120.173198, lat: 30.257352 },
        { lng: 120.180754, lat: 30.270381 },
        { lng: 120.176371, lat: 30.263984 },
        { lng: 120.175234, lat: 30.271329 },
        { lng: 120.184451, lat: 30.275374 },
        { lng: 120.169823, lat: 30.273219 },
        { lng: 120.171426, lat: 30.269384 },
        { lng: 120.177573, lat: 30.266986 },
        { lng: 120.175199, lat: 30.255354 },
      ],
      businessCenter2: [ // 杭州延庆支行营业中心
        { lng: 120.173198,lat: 30.257352 },
      ],
      houseCenter1: [// 延安路支行房产中介
        { lng: 120.169602, lat: 30.273619 },
        { lng: 120.169278, lat: 30.274632 },
        { lng: 120.170806, lat: 30.273322 },
        { lng: 120.170662, lat: 30.272543 },
        { lng: 120.169656, lat: 30.272465 },
        { lng: 120.167446, lat: 30.27209 },
        { lng: 120.169404, lat: 30.271529 },
        { lng: 120.168865, lat: 30.273073 },
      ],
      houseCenter2: [// 杭州延庆支行房产中介
        { lng: 120.174995, lat: 30.260004 },
        { lng: 120.177079, lat: 30.254139 },
        { lng: 120.175821, lat: 30.257212 },
        { lng: 120.173557, lat: 30.257212 },
        { lng: 120.174204, lat: 30.259676 },
        { lng: 120.174815, lat: 30.257313 },
      ],
      bankList1: [// 延安路支行银行网点
        { lng: 120.170626, lat: 30.272246 },
        { lng: 120.168704, lat: 30.272621 },
        { lng: 120.16971, lat: 30.273915 },
        { lng: 120.168236, lat: 30.273525 },
      ],
      bankList2: [// 杭州延庆支行银行网点
        { lng: 120.174815, lat: 30.25736 },
        { lng: 120.171665, lat: 30.258436 },
      ],
      cyyList1: [// 延安路支行创意园
        { lng: 120.168236, lat: 30.273525 },
        { lng: 120.169404, lat: 30.271529 },
        { lng: 120.170806, lat: 30.273322 },
        { lng: 120.169978, lat: 30.274632 },
      ],
      cyyList2: [// 杭州延庆支行创意园
        { lng: 120.174187, lat: 30.259574 },
        { lng: 120.171187, lat: 30.260502 },
      ],
      bankWDIcon: markerZHIcon,
      stIcon: markerSTIcon,
      yyIcon: markerYYIcon,
      cyyIcon: require("../assets/icon/wd_xwyq_big.png"),
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
        this.bankName = '杭州延庆支行'
      } else if(value == "yananlu") {
        this.circleCenter1 = this.circlePath1;
        this.businessCenter = this.businessCenter1;
        this.houseCenter = this.houseCenter1;
        this.bankList = this.bankList1;
        this.bankName = '延安路支行'
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
      this.bankName = '杭州延庆支行'
      if(value == "hubin") {
        this.circleCenter2 = this.circlePath2;
      } else if(value == "yananlu") {
        this.circleCenter2 = this.circlePath1;
        this.bankName = '延安路支行'
      }
    });
    Bus.$on("radiusRange2", (radius) => {
      this.radius2 = radius;
    });

    Bus.$on("circleShow3", (show, value) => {
      this.bankCircleShow3 = show;
      if(value == "hubin") {
        this.circleCenter3 = this.circlePath2;
        this.bankName = '杭州延庆支行'
      } else if(value == "yananlu") {
        this.circleCenter3 = this.circlePath1;
        this.bankName = '延安路支行'
      }
    });
    Bus.$on("disRadio", (value) => {
      this.disRadioShow3 = value;
    });
    Bus.$on("radiusRange3", (radius) => {
      this.radius3 = radius;
    });

    Bus.$on("circleShow4", (show, value) => {
      this.bankCircleShow4 = show;
      if(value == "hubin") {
        this.circleCenter4 = this.circlePath2;
        this.cyyList = this.cyyList2;
        this.bankName = '杭州延庆支行'
      } else if(value == "yananlu") {
        this.circleCenter4 = this.circlePath1;
        this.cyyList = this.cyyList1;
        this.bankName = '延安路支行'
      }
    });
    Bus.$on("checkSQFL", (value) => {
      this.sqCYYShow = value.includes("A") ? true : false;
    });
    Bus.$on("radiusRange4", (radius) => {
      this.radius4 = radius;
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
