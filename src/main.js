import Vue from 'vue'
import App from './App'
import request from './utils/request.js'
import MusicIcon from './components/music-icon.vue'
Vue.config.productionTip = false

Vue.prototype.request = request
Vue.component('music-icon', MusicIcon)
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
