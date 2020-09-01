<template>
  <view class="data-contain">
    <view class="data-table">
      <text>地区</text>
      <text class="data-confirmed">确诊</text>
      <text class="data-cured">治愈</text>
      <text class="data-dead">死亡</text>
    </view>
    <view v-for="(item,index) in countryList" :key="item.id">
      <view class="data-table data-parent" @click="getChild(item.provinceShortName,index)">
        <view class="data-area">
          <view :class="['lg text-gray cuIcon-playfill',item.showChild?'icon-rotate':'']"></view>
          <text>{{ item.provinceShortName}}</text>
        </view>
        <text class="data-confirmed">{{ item.confirmedCount }}</text>
        <text class="data-cured">{{ item.curedCount }}</text>
        <text class="data-dead">{{ item.deadCount }}</text>
      </view>
      <view v-if="item.showChild">
        <view v-for="child in item.children" :key="child.id" class="data-table">
          <text class="data-city">{{ child.cityName}}</text>
          <text class="data-confirmed">{{ child.confirmedCount }}</text>
          <text class="data-cured">{{ child.curedCount }}</text>
          <text class="data-dead">{{ child.deadCount }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      countryList: [],
      lastIndex: 0
    };
  },
  onLoad() {
    this.request("getListByCountryTypeService1").then(res => {
      this.countryList = res
        .sort((a, b) => b.confirmedCount - a.confirmedCount)
        .map(item => {
          item.children = [];
          item.showChild = false;
          return item;
        });
    });
  },
  methods: {
    getChild(city, index) {
      if (this.countryList[index].children.length > 0) {
        this.countryList[index].showChild = !this.countryList[index].showChild;
        return;
      }
      this.request("getAreaStat/" + city).then(res => {
        this.countryList[this.lastIndex].showChild = false;
        this.countryList[index].showChild = true;
        this.lastIndex = index;
        this.countryList[index].children = res[0].cities;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.data-contain {
  padding: 0 40rpx;
  view {
    line-height: 2;
  }
}
.data-table {
  display: flex;
  justify-content: space-between;
  text,
  .data-area {
    min-width: 180rpx;
  }
  .data-city {
    padding-left: 40rpx;
    box-sizing: border-box;
  }
  .cuIcon-playfill {
    padding-right: 16rpx;
    transition: all 0.5s;
    display: inline-block;
  }
  .icon-rotate {
    transform: rotate(90deg);
  }
  .data-confirmed {
    color: #e54d42;
  }
  .data-cured {
    color: #f37b1d;
  }
  .data-dead {
    color: #8799a3;
  }
  &:not(:last-child) {
    border-bottom: 1px solid;
  }
}
.data-parent{
  // background-color: gainsboro;
}
</style>