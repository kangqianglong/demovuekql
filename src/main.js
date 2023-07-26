import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'; //npm i axios vue-axios

axios.defaults.baseURL = '/api'


Vue.use(VueAxios, axios) // 全局

import ElementUI from 'element-ui'; // npm i element-ui -S
import 'element-ui/lib/theme-chalk/index.css'; // 在node_moudules 文件加里
Vue.use(ElementUI);

// 组件路由
import router from '@/router/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

