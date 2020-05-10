<template>
  <div class="iconSelector">
    <b-button
      v-b-modal="'modal-iconSelector'"
      class="icon"
    >
      <i :class="`iconfont icon-${iconKey}`"></i>
    </b-button>
    <Modal
      title="选择Icon"
      @handleOk="handleOk"
      id="modal-iconSelector"
    >
      <div class="iconsModal">
        <b-row>
          <div v-for="(icon, index) in icons" :key="index">
            <b-col>
              <div
                class="iconCircle"
                :data-selected="icon === iconKey"
                @click="chooseIcon(icon)"
              >
                <i :class="`iconfont icon-${icon}`"></i>
              </div>
            </b-col>
          </div>
        </b-row>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import Modal from '@/components/Commons/Modal/index.vue';

  const json = require('../../../config/global.json');

  @Component({
    components: { Modal }
  })

  export default class IconSelector extends Vue {
    @Prop() readonly icon!: string | null;
    @Prop() readonly title!: string | null;

    iconKey = this.icon || 'gongzizhuanhuan';
    icons: string[] = json.icons;

    chooseIcon(iconKey: string) {
      this.iconKey = iconKey;
    }

    handleOk(bvModalEvt: any) {
      bvModalEvt.preventDefault();

      return this.onSubmit();
    }

    onSubmit() {
      this.$emit('onSubmit', this.iconKey);

      this.$nextTick(() => {
        this.$bvModal.hide('modal-iconSelector')
      })
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/css/color.scss";
  .iconSelector {
    .icon {
      width: 100%;
      height: 60px;
      background: #fff;
      color: #303031;

      .iconfont {
        font-size: 24px;
      }
    }
  }

  .iconsModal {
    .row {
      margin-right: -8px;
      margin-left: -8px;
    }

    .col {
      padding-right: 8px;
      padding-left: 8px;
    }

    .iconCircle {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 0;

      &[data-selected = true] {
        color: $main_color;
      }
    }
  }
</style>
