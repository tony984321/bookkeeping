<template>
  <div>
    <Header :profile.sync="profile" />
    <router-link :to="detailsIndexPath()">
      <MonthlyBill
        :details.sync="details"
        :disableMonthSelector="true"
        :defaultDate.sync="date"
      />
    </router-link>
    <router-link :to="categorySettingPath()">
      <SettingItem icon="leibie" title="类别设置" />
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Profile } from "@/interfaces/me";
  import { Detail } from "@/interfaces/details";
  import { Component, Prop } from "vue-property-decorator";
  import Header from "./Header/index.vue";
  import MonthlyBill from "../Commons/MonthlyBill/index.vue";
  import SettingItem from "../Commons/SettingItem/index.vue";
  import {
    indexPath as categorySettingIndexPath
  } from "../../router/categorySetting/categorySettingRoutes";
  import {
    indexPath as detailsIndexPath
  } from "../../router/details/detailsRoutes";

  @Component({
    components: { Header, MonthlyBill, SettingItem }
  })

  export default class Me extends Vue {
    @Prop() readonly profile!: Profile;
    @Prop() readonly details!: Detail[];

    date = new Date();

    categorySettingPath: () => void = categorySettingIndexPath;
    detailsIndexPath: () => void = detailsIndexPath;

  }
</script>
