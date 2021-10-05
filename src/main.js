import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/Router'
import store from './store/Store'
import mixin from "./mixin/Mixins";
Vue.mixin(mixin)
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
Vue.prototype.$http = axios
import './plugins/vue-moment'
import './plugins/progressbar'
import './plugins/chart'
import './plugins/vuetify-dialog'
import i18n from "./plugins/i18n";
import './plugins/vuetify-date-time'
Vue.config.productionTip = false
import VueCodeHighlight from 'vue-code-highlight';
Vue.use(VueCodeHighlight)
const app = new Vue({
  i18n,
  router,
  store,
  vuetify,
  el: '#app',
  render: h => h(App)
});
