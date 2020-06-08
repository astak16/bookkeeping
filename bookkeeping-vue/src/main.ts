import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Icon from "@/components/Icon.vue"
import AV from 'leancloud-storage';
import info from "../leancloud";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component("Icon", Icon)

AV.init({
  appId: info.appId,
  appKey: info.appKey,
  serverURL: info.serverURL
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Vue.prototype.eventBus = new Vue()
