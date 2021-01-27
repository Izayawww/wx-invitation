<template>
  <view class="wy-invitaion animate__animated fadeIn">
    <swiper class="swiper photo-swiper" vertical @change="changeSwiper">
      <swiper-item>
        <view class="swiper-item weeding-pah weeding-pah-first padding-tb-xl">
          <view
            class="wy-flowerview wy-flexCol"
            :class="[
              'bg-flower animate__animated',
              currentSwipte === 0 ? 'animate__slideInDown' : '',
            ]"
          >
            <image
              :src="`${baseImgUrl}flower3.png`"
              :class="[
                'bg-flower animate__animated',
                currentSwipte === 0 ? 'animate__zoomIn' : '',
              ]"
            ></image>
            <view
              :class="[
                'bg-img bd-radius animate__animated animate__delay-0_3s',
                currentSwipte === 0 ? 'animate__zoomIn' : '',
              ]"
              :style="{ 'background-image': `url(${baseImgUrl}wy2.jpeg)` }"
            ></view>
          </view>
          <!-- 左上角植物 -->
          <view
            :class="[
              'view-grass animate__animated animate__slow',
              currentSwipte === 0 ? 'animate__slideInLeft' : '',
            ]"
          >
            <view
              class="img-grass-1"
              :style="{ 'background-image': `url(${baseImgUrl}grass1.png)` }"
            ></view>
            <view
              class="img-grass-5"
              :style="{ 'background-image': `url(${baseImgUrl}grass5.png)` }"
            ></view>
            <view
              class="img-grass-6"
              :style="{ 'background-image': `url(${baseImgUrl}grass6.png)` }"
            ></view>
          </view>
          <!-- 左上角植物end -->
          <!-- 右上角植物 -->
          <view
            :class="[
              'view-grass animate__animated animate__slow',
              currentSwipte === 0 ? 'animate__slideInRight' : '',
            ]"
          >
            <view
              class="img-grass-1_right"
              :style="{ 'background-image': `url(${baseImgUrl}grass1.png)` }"
            ></view>
            <view
              class="img-grass-6_right"
              :style="{ 'background-image': `url(${baseImgUrl}grass6.png)` }"
            ></view>
          </view>
          <!-- 右上角植物end -->
          <!-- 右中间植物 -->
          <view
            :class="[
              'view-grass animate__animated',
              currentSwipte === 0 ? 'animate__slideInRight' : '',
            ]"
          >
            <view
              class="img-grass-4"
              :style="{ 'background-image': `url(${baseImgUrl}grass4.png)` }"
            ></view>
          </view>
          <!-- 右中间植物end -->

          <!-- 左下角植物 -->
          <view
            :class="[
              'view-grass animate__animated animate__slow',
              currentSwipte === 0 ? 'animate__slideInLeft' : '',
            ]"
          >
            <view
              class="img-grass-2_bottom"
              :style="{ 'background-image': `url(${baseImgUrl}grass2.png)` }"
            ></view>
            <view
              class="img-grass-6_bottom"
              :style="{ 'background-image': `url(${baseImgUrl}grass6.png)` }"
            ></view>
          </view>
          <!-- 左下角植物end -->

          <view>
            <view
              :class="[
                'animate__animated padding-top animate__delay-1s',
                currentSwipte === 0 ? 'animate__flipInX' : '',
              ]"
            >
              <text class="text-black">汪** ♥ 杨**</text>
            </view>
            <view
              :class="[
                'animate__animated padding-top animate__delay-1_6s',
                currentSwipte === 0 ? 'animate__zoomIn' : '',
              ]"
              >特邀您</view
            >
            <view
              :class="[
                'animate__animated padding-top animate__delay-2s',
                currentSwipte === 0 ? 'animate__lightSpeedInLeft' : '',
              ]"
              >2021年5月20日 13时14分</view
            >
            <view
              :class="[
                'animate__animated padding-top animate__delay-2_6s',
                currentSwipte === 0 ? 'animate__lightSpeedInRight' : '',
              ]"
              >景德镇市伊隆大酒店举行婚礼</view
            >
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
                >汪** ❤️ 杨**</view
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
              mode="aspectFill"
            ></image>
            <image
              :class="[
                'wy-hunsha animate__animated',
                currentSwipte === 1 ? 'animate__zoomIn' : '',
              ]"
              :src="`${baseImgUrl}hunsha3.jpeg`"
              mode="aspectFill"
            ></image>
            <image
              :class="[
                'wy-smicon wy-abs_btmright animate__animated',
                currentSwipte === 1 ? 'animate__fadeInUp' : '',
              ]"
              :src="`${baseImgUrl}heart3.png`"
              mode="aspectFill"
            ></image>
          </view>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <view class="cu-chat height-100">
            <view class="flex height-50">
              <view
                :class="[
                  'flex-sub animate__animated wy-imgview margin-sm',
                  currentSwipte === 2 ? 'animate__rotateInDownLeft' : '',
                ]"
                :style="{ 'background-image': `url(${baseImgUrl}wy1.jpeg)` }"
              ></view>
              <view
                :class="[
                  'flex-sub animate__animated wy-imgview margin-sm animate__delay-1s',
                  currentSwipte === 2 ? 'animate__rotateInDownRight' : '',
                ]"
                :style="{ 'background-image': `url(${baseImgUrl}wy2.jpeg)` }"
              ></view>
            </view>
            <view
              :class="[
                'animate__animated wy-imgview margin-sm animate__delay-1_6s',
                currentSwipte === 2 ? 'animate__zoomInUp' : '',
              ]"
              :style="{ 'background-image': `url(${baseImgUrl}wy3.jpeg)` }"
            ></view>
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
    <music-icon />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      currentIdx: 0,
      currentSwipte: 0,
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
  },
};
</script>

<style>
@import "./grass.css";
.wy-invitaion {
  font-size: 42rpx;
  /* background-color: #fff; */
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
.weeding-pah-first {
  display: flex;
  flex-direction: column;
}
.wy-flowerview {
  position: relative;
  color: #333333;
  min-height: 460rpx;
  z-index: 1;
}
.wy-flowerview .bg-flower {
  position: absolute;
  width: 360rpx;
  height: 360rpx;
}
.wy-flowerview .bg-img {
  position: absolute;
  width: 260rpx;
  height: 260rpx;
}
.photo-swiper {
  height: 100vh;
}
.weeding-pah {
  text-align: center;
}
.bd-radius {
  border-radius: 50%;
}
.swiper-item {
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
</style>
