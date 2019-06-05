import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
import '@/assets/css/base.css';
import App from './App.vue';
import router from './router'
import store from './store/index'

require('vue2-animate/dist/vue2-animate.min.css');

Vue.config.productionTip = false;

Vue.use(VueTypedJs);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
