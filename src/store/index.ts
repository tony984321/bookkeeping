import Vue from 'vue';
import Vuex from 'vuex';
import profile from './modules/profile';
import categories from './modules/categories';
import details from './modules/details';
import {RootState} from "@/interfaces/rootState";
import {Category, Profile} from "@/interfaces/me";
import createId from '@/utils/createId';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    profile,
    categories,
    details
  },
});

//  const store = new Vuex.Store({
//   state: {
//     details: [],
//     profile: undefined,
//     categories: []
//   } as unknown as RootState,
//
//   mutations: {
//     fetchProfile(state) {
//       const storedProfile = window.localStorage.getItem('profile');
//       const defaultProfile: Profile = {
//         displayName: undefined,
//         avatar: undefined,
//         gender: "男",
//         description: undefined
//       };
//
//       state.profile = typeof storedProfile === 'string' ? JSON.parse(storedProfile) : defaultProfile;
//     },
//
//     saveProfile(state, profile: Profile) {
//       state.profile = profile;
//
//       window.localStorage.setItem('profile', JSON.stringify(state.profile));
//     },
//
//     fetchDetails(state) {
//       state.details = JSON.parse(window.localStorage.getItem('details') || '[]');
//     },
//
//     fetchCategories(state) {
//       state.categories = JSON.parse(window.localStorage.getItem('categories') || '[]');
//     },
//
//     createCategory(state, category: Category ) {
//       const titles = state.categories.map(c => c.title);
//       const icons = state.categories.map(c => c.icon);
//
//       if (icons.includes(category.icon)) {
//         return window.alert('icon重复了');
//       }
//       if (titles.includes(category.title)) {
//         return window.alert('标签名重复了');
//       }
//       const id = createId('categoryIdMax').toString();
//       const newCategory: Category = { id, ...category };
//       state.categories  = [newCategory, ...state.categories];
//
//       store.commit('saveCategories');
//       window.alert('添加成功');
//     },
//
//     updateCategory(state, category: Category) {
//       const index = state.categories.findIndex(c => c.id === category.id);
//       let newCategories = [...state.categories];
//       const rest = newCategories.filter(c => c.id !== category.id);
//       const titles = rest.map(c => c.title);
//       const icons = rest.map(c => c.icon);
//
//       if (icons.includes(category.icon)) {
//         return window.alert('icon重复了');
//       }
//
//       if (titles.includes(category.title)) {
//         return window.alert('标签名重复了');
//       }
//
//       newCategories.splice(index, 1, category);
//       state.categories = newCategories;
//
//       store.commit('saveCategories');
//       window.alert('更新成功');
//     },
//
//     deleteCategory(state, id: string) {
//       state.categories = state.categories.filter(c => c.id !== id);
//       store.commit('saveCategories');
//       window.alert('删除成功');
//     },
//
//     saveCategories(state) {
//       window.localStorage.setItem('categories', JSON.stringify(state.categories));
//     },
//   },
// });

export default store;
