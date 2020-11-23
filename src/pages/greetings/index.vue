<template>
  <view class="wy-grettings">
    <view class="flex justify-between wy-input-btn align-center">
      <input
        class="text-sm sm"
        placeholder="输入祝福语,需审核"
        name="input"
        v-model="grettingValue"
      />
      <view>
        <button
          class="cu-btn line-red round sm"
          open-type="getUserInfo"
          @click="saveGreet"
        >
          发送
        </button>
        <button
          class="cu-btn line-red round sm"
          open-type="getUserInfo"
          @click="checkGreet"
        >
          审核
        </button>
      </view>
    </view>
    <view class="cu-list menu-avatar comment">
      <view
        class="cu-item margin-top-sm"
        v-for="item in greetingList"
        :key="item._id"
      >
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

    <view class="cu-modal" :class="isShowModal ? 'show' : ''">
      <view class="cu-dialog" @click.stop="">
        <view class="cu-list menu text-left">
          <view
            class="cu-item"
            v-for="(item, index) in checkGreetingList"
            :key="index"
            :class="item.isChecked ? 'bg-orange' : ''"
            @click="doCheck(item, index)"
          >
            <view class="content">
              <view class="text-grey"
                >{{ index + 1 }}. {{ item.nickName }}</view
              >
              <view class="text-gray text-content text-df">
                {{ item.gretting }}
              </view>
              <view class="text-gray text-sm text-right">{{ item.time }}</view>
            </view>
          </view>
        </view>
        <view class="cu-bar bg-white">
          <view
            class="action margin-0 flex-sub solid-left"
            @tap="handleCheckGreet(false)"
            >取消</view
          >
          <view
            class="action margin-0 flex-sub solid-left"
            @tap="handleCheckGreet(true)"
            >确定</view
          >
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
      checkGreetingList: [],
      isShowModal: false,
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
            slot: this.greetingList[0].slot + 1,
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
                this.grettingValue = "";
                this.getGreetings();
              }
            });
        },
      });
    },
    checkGreet() {
      uni.getUserInfo({
        success: (res) => {
          console.log(res);
          if (res.userInfo.nickName.indexOf("Younglina") !== -1) {
            this.getGreetings(false);
          } else {
            uni.showToast({
              title: "您还有没有权限审核",
              duration: 2000,
            });
          }
        },
      });
    },
    doCheck(item, idx) {
      this.checkGreetingList[idx].isChecked = !this.checkGreetingList[idx]
        .isChecked;
    },
    handleCheckGreet(flag) {
      if (!flag) {
        this.isShowModal = false;
        return;
      }
      const isCheckeds = [];
      this.checkGreetingList.map((item) =>
        item.isChecked ? isCheckeds.push(item._id) : null
      );
      wx.cloud
        .callFunction({
          name: "greetings",
          data: {
            action: "checkGreeting",
            checkIds: isCheckeds,
          },
        })
        .then((res) => {
          if (res.result.stats && res.result.stats.updated > 0) {
            this.getGreetings();
          }
          this.isShowModal = false;
        });
    },
    getGreetings(isChecked = true) {
      wx.cloud
        .callFunction({
          name: "greetings",
          data: {
            action: "getGreetings",
            isChecked: isChecked,
          },
        })
        .then((res) => {
          if (res.result) {
            if (isChecked) {
              this.greetingList = res.result.data;
            } else {
              this.checkGreetingList = res.result.data;
              this.isShowModal = true;
            }
          }
        });
    },
    hideModal(e) {
      this.isShowModal = false;
    },
  },
};
</script>

<style scoped>
.wy-grettings {
  padding: 20rpx;
  background: linear-gradient(to bottom, #ffdde1, #ee9ca7);
  height: 100vh;
}
.wy-grettings .cu-item {
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
}
.wy-input-btn {
  border-radius: 55px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 8rpx 50rpx;
}
</style>