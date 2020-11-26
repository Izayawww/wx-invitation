<script>
const innerAudioContext = uni.createInnerAudioContext();
export default {
  globalData: {
    innerAudioContext: innerAudioContext
  },
  onLaunch: function () {
    console.log("App Launch");
    innerAudioContext.src = 'https://izaya-1256042946.cos.ap-chengdu.myqcloud.com/wedding/meetyou.mp3';
    innerAudioContext.autoplay = true;
    innerAudioContext.loop = true;
    wx.cloud.init({
      env: "my-cloud-56f476",
    });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
@import "colorui/main.css";
@import "colorui/icon.css";
@import "static/animate.min.css";
@import "static/wy.css";
.wy-invitaion {
  height: 100vh;
}
.background-img {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
