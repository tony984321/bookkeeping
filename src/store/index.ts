import Vue from 'vue';
import Vuex from 'vuex';
import profile from './modules/profile';
import categories from './modules/categories';
import details from './modules/details';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    profile,
    categories,
    details
  },
});

export default store;
