import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/css/overrides.css';
import './fontAwesome';
import '@/assets/css/icons.scss'
import '@/assets/icons/iconfont.css';
import '@/utils/date';
import AwesomeMenu from '@/components/AwesomeMenu/index.vue';
import Layout from '@/components/Layout/index.vue';

Vue.config.productionTip = false;

Vue.component('AwesomeMenu', AwesomeMenu);
Vue.component('Layout', Layout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
