<template>
  <Modal
    title="创建新类别"
    @handleOk="handleOk"
    id="modal-createCategory"
  >
    <CategoryForm
      @onIconChange="onIconChange"
      @onTitleChange="onTitleChange"
    />
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import { Category, CategoryType } from "@/interfaces/me";
  import CategoryForm from "../Form/index.vue";
  import Modal from '@/components/Common/Modal/index.vue';

  @Component({
    components: { CategoryForm, Modal }
  })

  export default class NewModal extends Vue {
    @Prop() readonly categoryType!: CategoryType;

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

      return this.createCategory();
    }

    createCategory() {
      if(!this.icon || !this.title) {
        return  window.alert('请选择icon并填写名称');
      }

      const category: Category = {
        icon: this.icon,
        title: this.title,
        type: this.categoryType
      };

      this.$store.dispatch('categories/createCategory', category);
      this.$nextTick(() => {
        this.$bvModal.hide('modal-createCategory')
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

</style>
