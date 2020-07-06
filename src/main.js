import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.http.options.root = 'https://vue-stocktrader-e4e56.firebaseio.com/';

Vue.filter('currency', (value) => `${value.toLocaleString()} $`);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
