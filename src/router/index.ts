import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import DetailsContainer from '@/views/details/indexContainer.vue';
import BookDownContainer from '@/views/bookDown/indexContainer.vue';
import MeContainer from '@/views/me/indexContainer.vue';
import ProfileContainer from '@/views/profile/indexContainer.vue';
import CategorySettingContainer from '@/views/categorySetting/indexContainer.vue';
import DashboardContainer from '@/views/dashboard/indexConatiner.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/details'
  },
  {
    path: '/details',
    name: 'details',
    component: DetailsContainer
  },
  {
    path: '/book_down',
    name: 'book_down',
    component: BookDownContainer
  },
  {
    path: '/me',
    name: 'me',
    component: MeContainer
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileContainer
  },
  {
    path: '/category_setting',
    name: 'category_setting',
    component: CategorySettingContainer
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardContainer
  }
];

const router = new VueRouter({
  routes
});

export default router;
