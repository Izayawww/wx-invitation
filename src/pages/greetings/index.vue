<template>
  <view>
    <view class="cu-timeline" v-for="types in peopleList" :key="types.label">
      <view class="cu-time">{{types.label}}</view>
      <view class="cu-timeline" v-for="item in types.list" :key="item.id">
        {{item.name}}
      </view>
    </view>
    <button @click="getGreetings">123</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      peopleList: [
        {label: '到场人员',
        list:[]},
        {
          label: '不到场人员',
          list:[]
        }
        ]
    };
  },
  onLoad() {
    this.getGreetings();
  },
  methods: {
    getGreetings() {
      wx.cloud
        .callFunction({
          name: "greetings",
          data: {
            action: 'getGreetings',
          }
        }).then(res=>{
          if(res.result){
              console.log(res.result)
          }
        })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>