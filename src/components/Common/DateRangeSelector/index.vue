<template>
  <div class="dateRangeWrapper">
    <div class="dateSelector">
      <label>from</label>
      <b-form-datepicker
        v-model="dateFrom"
        :max="dateTo"
        placeholder="Choose a date"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        @context="onChooseFrom"
      ></b-form-datepicker>
    </div>
    <div class="dateSelector">
      <label>to</label>
      <b-form-datepicker
        v-model="dateTo"
        placeholder="Choose a date"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        @context="onChooseTo"
      ></b-form-datepicker>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";

  @Component

  export default class DateRangeSelector extends Vue {
    @Prop() readonly start!: Date;
    @Prop() readonly end!: Date;

    dateFrom: Date = this.start;
    dateTo: Date = this.end;

    onChooseFrom(ctx: any) {
      this.$emit('setStart', new Date(ctx.selectedYMD));
    }

    onChooseTo(ctx: any) {
      this.$emit('setEnd', new Date(ctx.selectedYMD));
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/css/color";

  .dateRangeWrapper {
    width: 100%;
    background: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    .dateSelector {
      width: 49%;

      .form-control {
        padding-left: 10px;
        padding-right: 10px;

        .dropdown-menu {
          position: fixed !important;
          left: 50% !important;
          top: 50% !important;
          margin-left: -150px !important;
          margin-top: -198px !important;
        }
      }
    }
  }
</style>
