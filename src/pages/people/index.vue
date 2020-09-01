<template>
  <view>
    <view class="cu-timeline" v-for="types in peopleList" :key="types.label">
      <view class="cu-time">{{types.label}}</view>
      <view class="cu-timeline" v-for="item in types.list" :key="item.id">
        {{item.name}}
      </view>
    </view>
    <button @click="getPeople">123</button>
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
    this.getPeople();
  },
  methods: {
    getPeople() {
      wx.cloud
        .callFunction({
          name: "people",
          data: {
            action: 'getPeopleListAll',
          }
        }).then(res=>{
          if(res.result){
            const unShowList=[],showUpLis=[]  
            res.result.data.map(item=>{
              item.isShowup==1?showUpLis.push(item):unShowList.push(item)
            })
            this.peopleList[0].list = showUpLis
            this.peopleList[1].list = unShowList
          }
        })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>