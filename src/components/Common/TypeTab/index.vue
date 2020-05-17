<template>
  <div class="typeTab">
    <div
      v-for="(t, index) in types"
      :key="index"
      :class="{box: true,active: type === t[0]}"
      @click="t[0] === 'income' ? onClickIncome() : onClickExpenditure()"
    >
      {{t[1]}}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";

  @Component

  export default class TypeTab extends Vue {
    @Prop() readonly types!: any[];
    @Prop() readonly type!: string;

    onClickIncome() {
      this.$emit('onClickIncome');
    }

    onClickExpenditure() {
      this.$emit('onClickExpenditure');
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/css/color.scss";

  .typeTab {
    width: 100%;
    padding: 10px 40px;
    display: flex;
    justify-content: center;
    background: $main_color;

    .box {
      width: 50%;
      border: 1px solid #fff;
      padding: 5px 0;
      text-align: center;
      color: #fff;
      margin-top: 50px;
    }

    .active {
      background: #fff;
      color: $main_color;
    }
  }
</style>
