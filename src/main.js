import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.abccd = 2
Vue.prototype.$http = axios.create({//把axios添加在vue的原型上，这样每个组件都能通过this.$http来发送http请求
  baseURL:'http://localhost:3000/api'
})
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
