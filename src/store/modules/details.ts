import {RootModules, RootState} from "@/interfaces/rootState";
import createId from "@/utils/createId";
import { Detail } from "@/interfaces/details";

const state = () => ({
  details: []
});

const actions = {
  createDetail({ state, commit }: RootModules, detail: Detail ) {
    const id = createId('detailIdMax').toString();
    const newDetail: Detail = { id, ...detail };
    state.details  = [newDetail, ...state.details];

    commit('saveDetails');
    window.alert('添加成功');
  },
};

const mutations = {
  fetchDetails(state: RootState) {
    state.details = JSON.parse(window.localStorage.getItem('details') || '[]');
  },

  saveDetails(state: RootState) {
    window.localStorage.setItem('details', JSON.stringify(state.details));
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
