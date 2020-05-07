<template>
  <div class="profileForm">
    <div class="formWrapper">
      <input
        type="file"
        @change="changeImage($event)"
        accept="image/*"
        name="avatar"
        style="display: none"
        ref="avatarInput"
      />

      <div class="avatar"  @click="upLoad">
        <div>头像</div>
        <img :src="profile.avatar || defaultAvatar" alt="avatar" />
      </div>

      <div class="displayName">
        <div>昵称</div>
        <input
          type="text"
          @change="changeName($event)"
          name="displayName"
          :value="profile.displayName"
          placeholder="请输入昵称"
        />
      </div>

      <div class="description">
        <div>描述</div>
        <input
          type="text"
          @change="changeDescription($event)"
          name="description"
          :value="profile.description"
          placeholder="请用一句话描述你自己"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Profile } from "@/interfaces/me";
  import { HTMLInputEvent } from "@/interfaces/file";
  import { Component, Prop } from "vue-property-decorator";

  @Component

  export default class ProfileForm extends Vue {
    @Prop() readonly profile!: Profile;

    defaultAvatar = require('../../assets/images/default-avatar.png');

    changeImage(e: HTMLInputEvent) {
      this.$emit('changeImage', e);
    }

    changeName(e: HTMLInputEvent) {
      this.$emit('changeName', e);
    }

    changeGender(e: HTMLInputEvent) {
      this.$emit('changeGender', e);
    }

    changeDescription(e: HTMLInputEvent) {
      this.$emit('changeDescription', e);
    }

    upLoad() {
      (<any>this.$refs.avatarInput).dispatchEvent(new MouseEvent("click"));
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/color.scss";

  .profileForm {
    width: 100%;

    .formWrapper {
      width: 100%;
      margin-top: 60px;
    }

    %inputWrapper {
      width: 100%;
      background: #fff;
      padding: 10px 30px 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      margin: 5px 0;
      position: relative;

      &::before {
        content: "\f054";
        font-family: FontAwesome;
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -10px;
        color: #b5b5b5;
      }

      input {
        text-align: right;
        outline: none;
      }
    }

    .avatar {
      @extend %inputWrapper;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .displayName {
      @extend %inputWrapper;
    }

    .description {
      @extend %inputWrapper;

      input {
        width: 80%;
        outline: none;
      }
    }
  }
</style>
