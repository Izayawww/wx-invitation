<template>
  <view class="info-content">
    <swiper class="swiper photo-swiper" vertical @change="changeSwiper">
      <swiper-item>
        <view class="swiper-item uni-bg-red animated fadeIn weeding-pah text-gray">
          <view class="animated fadeInUp">WEDDING INVITATION</view>
          <view class="animated fadeInUp">
            <view :class="['animated', currentSwipte===1?'zoomIn':'']">
              <text class="text-black">汪志强</text>&
              <text class="text-black">杨丽娜</text>
            </view>
            <view>谨定于</view>
            <view>2222年2月22日</view>
            <view>adfasdf</view>
          </view>
          <view class="animated fadeInUp delay-1s">
            <button class="cu-btn round line-pink">地图导航</button>
          </view>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">B</view>
        <view :class="['animated', currentSwipte===1?'zoomIn':'']">
          <map
            style="width: 100%; height: 300px;"
            :latitude="latitude"
            :longitude="longitude"
            :markers="covers"
            @markertap="openLocation"
          >
            <cover-view slot="callout">
              <cover-view marker-id="1"></cover-view>
            </cover-view>
          </map>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">C</view>
      </swiper-item>
    </swiper>
    <!-- <button @click="pause">暂停</button>
    <button @click="handleMusicPlay">下一首</button>-->
  </view>
</template>

<script>
const innerAudioContext = uni.createInnerAudioContext();
export default {
  data() {
    return {
      title: "Hello",
      currentIdx: 0,
      currentSwipte: 0,
      musics: [
        "http://m8.music.126.net/20200115150755/b524d22ee808d96cda6dae0f00d9fe8f/ymusic/bdb6/4eb6/aabd/26e833f3fe2e76237b2ef5f815077ffb.mp3",
        "http://m8.music.126.net/20200115154645/5b46c04dc1ffaf8a0fbd1b8abe823910/ymusic/0459/045c/520c/330c359473365e50a368ef0d43bc612f.mp3",
      ],
      latitude: 39.909,
      longitude: 116.39742,
      covers: [
        {
          id: 1,
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: "../../static/location.png",
        },
      ],
    };
  },
  onLoad() {
    uni.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
      },
    });
      wx.openLocation({
        latitude: 39.909,
        longitude: 116.39742,
        scale: 28,
        name: "西部电信中心",
        address: "益州大道1666号",
      });
    // wx.cloud
    //   .callFunction({
    //     name: "functions"
    //   })
    //   .then(res => {
    //     console.log(res);
    //      res.result.musics.data
    //   });
    // innerAudioContext.src = this.musics[0];
    // innerAudioContext.onEnded = this.handleMusicPlay;
    // innerAudioContext.autoplay = true;
    // innerAudioContext.loop = true;
  },
  methods: {
    openLocation() {
      wx.openLocation({
        latitude: 39.909,
        longitude: 116.39742,
        scale: 28,
        name: "西部电信中心",
        address: "益州大道1666号",
      });
    },
    changeSwiper({ detail }) {
      this.currentSwipte = detail.current;
    },
    radioChange(e, type) {
      this.peopleInfo[type] = e.detail.value;
    },
    pause() {
      innerAudioContext.pause();
    },
    handleMusicPlay() {
      if (this.currentIdx >= this.musics.length - 1) {
        this.currentIdx = 0;
      } else {
        ++this.currentIdx;
      }
      innerAudioContext.src = this.musics[this.currentIdx];
      console.log(this.musics[this.currentIdx]);
    },
  },
};
</script>

<style>
.photo-swiper {
  height: 100vh;
}
.weeding-pah {
  text-align: center;
}
</style>
