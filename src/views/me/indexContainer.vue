<template>
  <Me
    :profile.sync="profile"
    :details.sync="details"
  />
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import Me from "@/components/Me/index.vue";

  @Component({
    components: { Me }
  })

  export default class MeContainer extends Vue {
    get profile() {
      return this.$store.state.profile.profile;
    }
    get details() {
      return this.$store.state.details.details;
    }

    created() {
      this.$store.commit('profile/fetchProfile');
      this.$store.commit('details/fetchDetails');
    }
  }
</script>

