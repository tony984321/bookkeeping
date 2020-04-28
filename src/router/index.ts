import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import DetailsContainer from '@/views/details/indexContainer.vue';
import BookDownContainer from '@/views/bookDown/indexContainer.vue';
import MeContainer from '@/views/me/indexContainer.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/details'
  },
  {
    path: '/details',
    component: DetailsContainer
  },
  {
    path: '/book_down',
    component: BookDownContainer
  },
  {
    path: '/me',
    component: MeContainer
  }
];

const router = new VueRouter({
  routes
});

export default router;
