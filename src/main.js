import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
import '@/assets/css/base.css';
import '@/assets/css/tailwind.min.css';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueAnalytics from 'vue-analytics';

require('vue2-animate/dist/vue2-animate.min.css');

Vue.config.productionTip = false;

Vue.use(VueTypedJs);

Vue.use(VueAnalytics, {
  id: 'UA-142050268-2',
  router
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
