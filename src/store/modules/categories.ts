import { Category } from "@/interfaces/me";
import { RootState, RootModules } from "@/interfaces/rootState";
import createId from "@/utils/createId";

const state = () => ({
  categories: []
});

const actions = {
  createCategory({ state, commit }: RootModules, category: Category ) {
    const titles = state.categories.map((c: Category) => c.title);
    const icons = state.categories.map((c: Category)=> c.icon);

    if (icons.includes(category.icon)) {
      return window.alert('icon重复了');
    }
    if (titles.includes(category.title)) {
      return window.alert('标签名重复了');
    }
    const id = createId('categoryIdMax').toString();
    const newCategory: Category = { id, ...category };
    state.categories  = [newCategory, ...state.categories];

    commit('saveCategories');
    window.alert('添加成功');
  },

  updateCategory({ state, commit }: RootModules, category: Category) {
    const index = state.categories.findIndex((c: Category) => c.id === category.id);
    const newCategories = [...state.categories];
    const rest = newCategories.filter((c: Category) => c.id !== category.id);
    const titles = rest.map(c => c.title);
    const icons = rest.map(c => c.icon);

    if (icons.includes(category.icon)) {
      return window.alert('icon重复了');
    }

    if (titles.includes(category.title)) {
      return window.alert('标签名重复了');
    }

    newCategories.splice(index, 1, category);
    state.categories = newCategories;

    commit('saveCategories');
    window.alert('更新成功');
  },

  deleteCategory({ state, commit }: RootModules, id: string) {
    state.categories = state.categories.filter((c: Category) => c.id !== id);
    commit('saveCategories');
    window.alert('删除成功');
  },
};

const mutations = {
  fetchCategories(state: RootState) {
    state.categories = JSON.parse(window.localStorage.getItem('categories') || '[]');
  },

  saveCategories(state: RootState) {
    window.localStorage.setItem('categories', JSON.stringify(state.categories));
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
