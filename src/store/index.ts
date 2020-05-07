import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from "@/interfaces/rootState";
import { Profile } from "@/interfaces/me";

Vue.use(Vuex);

 const store = new Vuex.Store({
  state: {
    details: [],
    profile: undefined
  } as unknown as RootState,

  mutations: {
    fetchProfile(state) {
      const storedProfile = window.localStorage.getItem('profile');
      const defaultProfile: Profile = {
        displayName: undefined,
        avatar: undefined,
        gender: "男",
        description: undefined
      };

      state.profile = typeof storedProfile === 'string' ? JSON.parse(storedProfile) : defaultProfile;
    },

    saveProfile(state, profile: Profile) {
      state.profile = profile;

      window.localStorage.setItem('profile', JSON.stringify(state.profile));
    },

    fetchDetails(state) {
      state.details = JSON.parse(window.localStorage.getItem('details') || '[]');
    }
  },
});

export default store;
