<template>
  <view class="wy-invitaion animate__animated fadeIn">
    <swiper class="swiper photo-swiper" vertical @change="changeSwiper">
      <swiper-item>
        <view class="swiper-item weeding-pah weeding-pah-first">
          <view
            :style="{ 'background-image': `url(${baseImgUrl}huakuang.png)` }"
            :class="[
              'wy-bgview animate__animated ',
              currentSwipte === 0 ? 'animate__flipInY' : '',
            ]"
          ></view>
          <view
            :class="[
              'animate__animated padding-top-xxxl padding-bottom-xl animate__delay-1s',
              currentSwipte === 0 ? 'animate__flipInX' : '',
            ]"
          >
            <text class="text-black">汪志强 & 杨丽娜</text>
          </view>

          <view class="wy-flowerview wy-flexCol padding-top-xxl">
            <image
              :src="`${baseImgUrl}flower3.png`"
              :class="[
                'bg-flower animate__animated ',
                currentSwipte === 0 ? 'animate__rotateIn' : '',
              ]"></image>
            <view
              :class="[
                'animate__animated animate__slow',
                currentSwipte === 0 ? 'animate__flipInX' : '',
              ]"
              >婚礼</view>
            <view
              :class="[
                'animate__animated animate__slow',
                currentSwipte === 0 ? 'animate__flipInX' : '',
              ]"
              >邀请</view>
          </view>
          <view>
            <!-- <view
              :class="[
                'animate__animated animate__delay-1_6s',
                currentSwipte === 0 ? 'animate__zoomIn' : '',
              ]"
              >谨定于</view> -->
            <view
              :class="[
                'animate__animated  padding-top-xxl padding-bottom-sm animate__delay-2s',
                currentSwipte === 0 ? 'animate__lightSpeedInLeft' : '',
              ]"
              >2021年5月20日 13时14分</view>
            <view
              :class="[
                'animate__animated animate__delay-2_6s',
                currentSwipte === 0 ? 'animate__lightSpeedInRight' : '',
              ]"
              >景德镇市伊隆大酒店举行婚礼</view>
          </view>
          <!-- <view
            :class="[
              'animate__animated animate__delay-3s padding-top-xl',
              currentSwipte === 0 ? 'animate__fadeInUp' : '',
            ]"
          >
            <button class="cu-btn round wy-yzred-border" @click="openLocation">
              地图导航
            </button>
          </view> -->
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <view class="flex justify-between padding-xl">
            <view class="text-left text-lg">
              <view
                :class="[
                  'animate__animated',
                  currentSwipte === 1 ? 'animate__fadeInLeft' : '',
                ]"
                >汪志强 ❤️ 杨丽娜</view
              >
              <view
                :class="[
                  'animate__animated',
                  currentSwipte === 1 ? 'animate__fadeInRight' : '',
                ]"
                >我们结婚啦</view
              >
            </view>
            <image class="wy-smicon" :src="`${baseImgUrl}heart1.png`"></image>
          </view>
          <view class="wy-imgcontent">
            <image
              :class="[
                'wy-smicon wy-abs_topleft animate__animated',
                currentSwipte === 1 ? 'animate__fadeInDown' : '',
              ]"
              :src="`${baseImgUrl}heart3.png`"
              mode="aspectFill"></image>
            <image
              :class="[
                'wy-hunsha animate__animated',
                currentSwipte === 1 ? 'animate__zoomIn' : '',
              ]"
              :src="`${baseImgUrl}hunsha3.jpeg`"
              mode="aspectFill"></image>
            <image
              :class="[
                'wy-smicon wy-abs_btmright animate__animated',
                currentSwipte === 1 ? 'animate__fadeInUp' : '',
              ]"
              :src="`${baseImgUrl}heart3.png`"
              mode="aspectFill"></image>
          </view>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <view class="cu-chat height-100">
            <view class="flex height-50">
              <view
                :class="['flex-sub animate__animated wy-imgview margin-sm',
                  currentSwipte === 2 ? 'animate__rotateInDownLeft' : '',
                ]"
                :style="{ 'background-image': `url(${baseImgUrl}wy1.jpeg)` }"></view>
              <view
                :class="['flex-sub animate__animated wy-imgview margin-sm animate__delay-1s',
                  currentSwipte === 2 ? 'animate__rotateInDownRight' : '',
                ]"
                :style="{ 'background-image': `url(${baseImgUrl}wy2.jpeg)` }"></view>
            </view>
            <view
              :class="['animate__animated wy-imgview margin-sm animate__delay-1_6s',
                currentSwipte === 2 ? 'animate__zoomInUp' : '',
              ]"
              :style="{ 'background-image': `url(${baseImgUrl}wy3.jpeg)` }"></view>
          </view>
        </view>
      </swiper-item>
      <!-- <swiper-item>
        <view class="swiper-item">
          <view
            :style="{ 'background-image': `url(${baseImgUrl}huakuang5-removebg.png)` }"
            :class="[
              'wy-bgview animate__animated ',
              currentSwipte === 3 ? 'animate__zoomInRight' : '',
            ]"
          ></view>
          <image
            :class="[
              'wy-abs_btmright animate__animated',
              currentSwipte === 3 ? 'animate__rotateInUpLeft' : '',
            ]"
            :src="`${baseImgUrl}hunsha1-removebg.png`"
          ></image>
        </view>
      </swiper-item> -->
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
      baseImgUrl:
        "https://izaya-1256042946.cos.ap-chengdu.myqcloud.com/wedding/",
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
        latitude: 29.266922,
        longitude: 117.190598,
        scale: 16,
        name: "爱的小屋",
        address: "汪志强和杨丽娜的家",
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
.wy-invitaion {
  font-size: 42rpx;
  background-color: #fff;
}
.wy-flowerview {
  position: relative;
  height: 200rpx;
  color: #333333;
}
.wy-imgcontent {
  position: relative;
}
.wy-abs_topleft {
  position: absolute;
  top: 10rpx;
  left: 8rpx;
}
.wy-abs_btmright {
  position: absolute;
  bottom: 10rpx;
  right: 8rpx;
  transform: rotate(20deg);
}
.swiper-item{
  height: 100%;
}
.swiper-item .wy-smicon {
  height: 100rpx;
  width: 100rpx;
  transform: rotate(-20deg);
}
.swiper-item .wy-hunsha {
  height: 800rpx;
  border-radius: 50% / 50% 0;
}
.wy-flowerview .bg-flower {
  position: absolute;
  width: 200rpx;
  height: 200rpx;
}
.photo-swiper {
  height: 100vh;
}
.weeding-pah {
  text-align: center;
}

/* .weeding-pah-first {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
} */
</style>
