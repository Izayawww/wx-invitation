<template>
  <view class="wy-grettings">
    <view class="flex justify-between wy-input-btn align-center">
				<input class="text-sm sm" placeholder="输入祝福语" name="input" v-model="grettingValue" />
				<button class='cu-btn line-red round sm' open-type="getUserInfo" @click="saveGreet">发送</button>
    </view>
    <view class="cu-list menu-avatar comment">
      <view class="cu-item margin-top-sm" v-for="item in greetingList" :key="item._id">
        <view
          class="cu-avatar round lg"
          :style="{ 'background-image': `url(${item.avatarUrl})` }"
        ></view>
        <view class="content">
          <view class="text-grey">{{ item.nickName }}</view>
          <view class="text-gray text-content text-df">
            {{ item.gretting }}
          </view>
          <view class="text-gray text-sm text-right">{{ item.time }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { parseTime } from "@/utils/time.js";
export default {
  data() {
    return {
      greetingList: [],
      grettingValue: "",
    };
  },
  onLoad() {
    this.getGreetings();
  },
  methods: {
    saveGreet() {
      if (!this.grettingValue) {
        return;
      }
      uni.getUserInfo({
        success: (res) => {
          const postData = {
            gretting: this.grettingValue,
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
            time: parseTime(new Date()),
            slot: this.greetingList.length
          };
          wx.cloud
            .callFunction({
              name: "greetings",
              data: {
                action: "insertGreeting",
                ...postData,
              },
            })
            .then((res) => {
              if (res.result) {
                this.grettingValue = ''
                this.getGreetings()
              }
            });
        },
      });
    },
    getGreetings() {
      wx.cloud
        .callFunction({
          name: "greetings",
          data: {
            action: "getGreetings",
          },
        })
        .then((res) => {
          if (res.result) {
            this.greetingList = res.result.data;
          }
        });
    },
  },
};
</script>

<style scoped>
.wy-grettings{
  padding: 20rpx;
  background: linear-gradient(to bottom, #ffdde1, #ee9ca7);
  height: 100vh;
}
.wy-grettings .cu-item{
  border-radius: 8px;
  background-color: rgba(255,255,255,.8);
}
.wy-input-btn{
  border-radius: 55px;
  background-color: rgba(255,255,255,.9);
  padding: 8rpx 50rpx;
}
</style>