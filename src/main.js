import Vue from 'vue'
import App from './App'
import router from './router'
import {post,fetch,patch,put} from './axios/axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from '@/vuex/store';
// import store from './store/'
Vue.use(MintUI);
Vue.config.productionTip = false;
// axios配置
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

new Vue({
  el: '#app',
    store,
    router,
  template: '<App/>',
  components: { App }
})
