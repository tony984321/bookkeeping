import { Profile } from "@/interfaces/me";
import { RootState } from "@/interfaces/rootState";

const state = () => ({
  profile: undefined,
});

const mutations = {
  fetchProfile(state: RootState) {
    const storedProfile = window.localStorage.getItem('profile');
    const defaultProfile: Profile = {
      displayName: undefined,
      avatar: undefined,
      gender: "男",
      description: undefined
    };

    state.profile = typeof storedProfile === 'string' ? JSON.parse(storedProfile) : defaultProfile;
  },

  saveProfile(state: RootState, profile: Profile) {
    state.profile = profile;

    window.localStorage.setItem('profile', JSON.stringify(state.profile));
  },
};

export default {
  namespaced: true,
  state,
  mutations
}
