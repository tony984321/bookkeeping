<template>
  <b-modal :id="id" :title="title" @ok="handleOk" centered modal-class="modalContainer">
    <slot />
  </b-modal>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";

  @Component

  export default class NewModal extends Vue {
    @Prop() readonly title!: string;
    @Prop() readonly id!: string;

    handleOk(bvModalEvt: any) {
      this.$emit('handleOk', bvModalEvt);
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/css/color.scss";

  .modalContainer {
    .modal-content {
      border-radius: 0;
      background: #f5f5f5;
    }

    .btn {
      min-width: 60px;
      padding: 5px;
    }
  }
</style>
