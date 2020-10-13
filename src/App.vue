<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
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
