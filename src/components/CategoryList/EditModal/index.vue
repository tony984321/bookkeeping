<template>
  <Modal
    title="更新类别"
    @handleOk="handleOk"
    :id="`modal-updateCategory-${category.id}`"
  >
    <CategoryForm
      @onIconChange="onIconChange"
      @onTitleChange="onTitleChange"
      :icon.sync="category.icon"
      :title.sync="category.title"
    />
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import { Category, CategoryType } from "@/interfaces/me";
  import CategoryForm from "../Form/index.vue";
  import Modal from '@/components/Commons/Modal/index.vue';

  @Component({
    components: { CategoryForm, Modal }
  })

  export default class EditModal extends Vue {
    @Prop() readonly categoryType!: CategoryType;
    @Prop() readonly category!: Category;

    icon?: string = undefined;
    title?: string = undefined;

    onIconChange(icon:  string) {
      this.icon = icon;
    }

    onTitleChange(title: string) {
      if(title.length < 0) { return }

      this.title = title;
    }

    handleOk(bvModalEvt: any) {
      bvModalEvt.preventDefault();

      return this.updateCategory();
    }

    updateCategory() {
      const category: Category = {
        id: this.category.id,
        icon: this.icon || this.category.icon,
        title: this.title || this.category.title,
        type: this.categoryType
      };

      this.$store.dispatch('categories/updateCategory', category);
      this.$nextTick(() => {
        this.$bvModal.hide(`modal-updateCategory-${category.id}`)
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

</style>
