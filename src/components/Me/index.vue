<template>
  <div>
    <Header :profile.sync="profile" />
    <MonthlyBill :details.sync="details" />
    <SettingItem icon="leibie" title="类别设置" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Profile } from "@/interfaces/me";
  import { Details } from "@/interfaces/details";
  import { Component, Prop } from "vue-property-decorator";
  import Header from "./Header/index.vue";
  import MonthlyBill from "./MonthlyBill/index.vue";
  import SettingItem from "../Commons/SettingItem/index.vue";

  @Component({
    components: { Header, MonthlyBill, SettingItem }
  })

  export default class Me extends Vue {
    @Prop() readonly profile!: Profile;
    @Prop() readonly details!: Details[];
  }
</script>
