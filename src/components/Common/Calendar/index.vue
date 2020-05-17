<template>
  <div v-if="calendarShow" class="calendar" >
    <b-calendar
      v-model="date"
      locale="zh"
      @selected="onClose()"
      @context="onContext"
    ></b-calendar>
    <div class="close" @click="onClose()">
      <i class="far fa-times-circle"></i>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";

  @Component

  export default class Calendar extends Vue {
    @Prop() readonly defaultDate!: Date;
    @Prop() readonly calendarShow!: boolean;

    date: Date = this.defaultDate;

    onClose() {
      this.$emit('calendarClose')
    }

    onContext(ctx: any) {
      this.$emit('onContext', ctx)
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color";

  .calendar {
    position: fixed;
    padding: 15px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -215px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);

    .close {
      text-align: center;
      margin-top: 15px;
      color: $main_color;
      font-size: 24px;
    }
  }
</style>
