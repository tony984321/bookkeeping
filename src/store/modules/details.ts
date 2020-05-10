import { RootState } from "@/interfaces/rootState";

const state = () => ({
  details: []
});

const mutations = {
  fetchDetails(state: RootState) {
    state.details = JSON.parse(window.localStorage.getItem('details') || '[]');
  },
};

export default {
  namespaced: true,
  state,
  mutations
}
