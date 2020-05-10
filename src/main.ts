import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import store from './store';
import './fontAwesome';
import '@/assets/css/icons.scss'
import '@/assets/icons/iconfont.css';
import '@/utils/date';
import AwesomeMenu from '@/components/AwesomeMenu/index.vue';
import Layout from '@/components/Layout/index.vue';
import '@/assets/css/overrides.css';

Vue.config.productionTip = false;

Vue.component('AwesomeMenu', AwesomeMenu);
Vue.component('Layout', Layout);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
