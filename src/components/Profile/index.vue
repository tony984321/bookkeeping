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

      <div class="avatarWrapper"  @click="upLoad">
        <div>头像</div>
        <div class="d-flex align-items-center">
          <div class="avatar mr-2">
            <img :src="profile.avatar || defaultAvatar" alt="avatar" />
          </div>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>

      <div class="displayName">
        <div>昵称</div>
        <div class="d-flex align-items-center w-75 justify-content-end">
          <b-form-input
            v-model="displayName"
            placeholder="请输入昵称"
            @change="changeName()"
          ></b-form-input>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>

      <div class="description">
        <div>描述</div>
        <div class="d-flex align-items-center w-75 justify-content-end">
          <b-form-input
            type="text"
            v-model="description"
            placeholder="请用一句话描述你自己"
            @change="changeDescription()"
          ></b-form-input>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>

      <div class="gender">
        <div>性别</div>
        <div class="d-flex align-items-center w-75 justify-content-end">
          <b-form-group>
            <b-form-radio-group
              v-model="gender"
              :options="['男', '女']"
              @change="changeGender($event)"
            ></b-form-radio-group>
          </b-form-group>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>

    <div class="save" @click="onSave()">
      保存
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

    displayName: string | null = this.profile.displayName || null;
    description: string | null = this.profile.description || null;
    gender: string | undefined = this.profile.gender;
    defaultAvatar = require('../../assets/images/default-avatar.png');

    changeImage(e: HTMLInputEvent) {
      this.$emit('changeImage', e);
    }

    changeName() {
      this.$emit('changeName', this.displayName);
    }

    changeGender(e: HTMLInputEvent) {
      this.$emit('changeGender', e);
    }

    changeDescription() {
      this.$emit('changeDescription', this.description);
    }

    upLoad() {
      (<any>this.$refs.avatarInput).dispatchEvent(new MouseEvent("click"));
    }

    onSave() {
      this.$emit('saveProfile')
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
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      margin: 5px 0;
      position: relative;

      .form-group {
        margin-bottom: 0;
      }

      svg {
        color: #b5b5b5;
      }

      input {
        width: 80%;
        border: none;
        text-align: right;

        &:focus {
          border-color: #fff;
          webkit-box-shadow: none;
          box-shadow: none;
        }
      }
    }

    .avatarWrapper {
      @extend %inputWrapper;

      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .displayName {
      @extend %inputWrapper;
    }

    .description {
      @extend %inputWrapper;
    }

    .gender {
      @extend %inputWrapper;
    }

    .save {
      width: 90%;
      background: $main_color;
      color: #fff;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      margin: 50px auto 0;
    }
  }
</style>
