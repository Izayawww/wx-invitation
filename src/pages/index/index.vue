<template>
  <view class="wy-invitaion wy-welcome">
    <image src="https://izaya-1256042946.cos.ap-chengdu.myqcloud.com/wedding/logo.png" mode="aspectFill" class="wy-logo">
    <view class="wy-welcome-font">
        <view class="animate__animated animate__tada">我们结婚啦</view>
        <view class="wy-welcome-bar"></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loadingNum: 0,
    };
  },
  onLoad() {
    setTimeout(() => {
      // uni.switchTab({
      //   url: "/pages/our/index",
      // });
      uni.reLaunch({
        url: "/pages/our/index",
      })
    }, 1498);
  },
  methods: {},
};
</script>

<style>
.wy-welcome {
  background-color: var(--bgPink);
  padding-top: 38%;
}
.wy-logo {
  display: block;
  width: 209rpx;
  height: 209rpx;
  margin: 0 auto;
}
.wy-welcome-font {
  font-size: 52rpx;
  color: #220409;
  text-align: center;
  padding-top: 30rpx;
}

.wy-welcome-bar {
  position: relative;
  display: block;
  width: 409rpx;
  height: 8px;
  margin: 30rpx auto 0;
  border-radius: 8px;
  border: 1px solid#fffef9;
}
.wy-welcome-bar::before {
  content: "";
  top: 0;
  left: 0;
  position: absolute;
  background: #ec0409;
  border-radius: 8px;
  width: 0%;
  height: 100%;
  animation: loading 1.5s linear;
}

@keyframes loading {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
