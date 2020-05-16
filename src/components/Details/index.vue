<template>
  <div class="detailsContainer">
    <MonthlyBill
      :details.sync="details"
      :disableMonthSelector="false"
      :defaultDate.sync="date"
      @setDate="setDate"
    />
    <Collection
      :categories.sync="categories"
      :monthlyDetails.sync="monthlyDetails"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import { Category } from "@/interfaces/me";
  import { Detail } from "@/interfaces/details";
  import MonthlyBill from "../Commons/MonthlyBill/index.vue";
  import Collection from "./Collection/index.vue";
  import { getMonth, getYear } from "date-fns";
  import { getMonthlyDetails, getFormattedDetails } from "@/utils/details";

  @Component({
    components: { MonthlyBill, Collection }
  })

  export default class Details extends Vue {
    @Prop() readonly categories!: Category[];
    @Prop() readonly details!: Detail[];

    date = new Date();

    get month() {
      return getMonth(new Date(this.date)) + 1;
    }

    get year() {
      return getYear(new Date(this.date));
    }

    get monthlyDetails() {
      const monthlyDetails = getMonthlyDetails(this.details, this.month, this.year);

      return getFormattedDetails(monthlyDetails);
    }

    setDate (date: Date) { this.date = date; }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/color.scss";

  .detailsContainer {
    margin-top: 50px;
  }
</style>
