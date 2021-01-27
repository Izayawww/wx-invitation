<template>
  <view
    @click="handleClick"
    :class="[
      'music-icon rota-ani',
      isPlay ? 'rota-ani' : 'animation-play-state:paused',
    ]"
    :style="{ 'animation-play-state': isPlay ? 'play' : 'paused' }"
  >
    <image src="../static/music.png" class="music-img" mode="aspectFit"></image>
  </view>
</template>

<script>
export default {
  data() {
    return {
      innerAudioContext: "",
      isPlay: true,
    };
  },
  mounted() {
    this.innerAudioContext = getApp().globalData.innerAudioContext;
  },
  methods: {
    handleClick() {
      if (this.innerAudioContext.paused) {
        this.innerAudioContext.play();
        this.isPlay = true;
      } else {
        this.innerAudioContext.pause();
        this.isPlay = false;
      }
    },
  },
};
</script>

<style scoped>
.music-icon {
  position: absolute;
  z-index: 1000;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}
.music-img {
  width: 15px;
  height: 15px;
}
.rota-ani {
  animation: rotate 6s infinite linear;
}
@keyframes rotate {
  form {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>