<template>
  <div class="categoryForm">
    <b-row>
      <b-col cols="3">
        <IconSelector @onSubmit="onIconChange" :icon.sync="newIcon" />
      </b-col>
      <b-col cols="9">
        <div class="inputWrapper">
          <b-form-input
            v-model="newTitle"
            placeholder="请输入类别名称"
            @change="onTitleChange()"
            :value="newTitle"
          ></b-form-input>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import IconSelector from "@/components/Common/IconSelector/index.vue";

  @Component({
    components: { IconSelector }
  })

  export default class CategoryForm extends Vue {
    @Prop() readonly icon!: string;
    @Prop() readonly title!: string;

    newIcon: string | null = this.icon || null;
    newTitle: string | null = this.title || null;

    onTitleChange() {
      return this.$emit('onTitleChange', this.newTitle);
    }

    onIconChange(iconKey: string) {
      this.newIcon = iconKey;

      return this.$emit('onIconChange', this.newIcon);
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/css/color.scss";

  .categoryForm {
    .inputWrapper {
      width: 100%;
      height: 60px;
      padding: 10px;
      background: #fff;
      display: flex;
      align-items: center;
    }

    .row {
      margin-left: -5px;
      margin-right: -5px;
    }

    .col-3, .col-9 {
      padding-left: 5px;
      padding-right: 5px;
    }
  }

</style>
