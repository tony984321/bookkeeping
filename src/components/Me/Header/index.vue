<template>
  <div class="meHeader">
    <div class="wrapper">
      <router-link :to="profilePath()">
        <img :src="avatar" alt="avatar" />
        <div v-if="profile.displayName">
          <div class="name">{{profile.displayName}}</div>
        </div>
        <div v-if="profile.description">
          <div class="description">{{profile.description}}</div>
        </div>
        <div v-if="!profile.avatar || !profile.displayName">
          <div class="description">请完善您的个人信息</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Profile } from "@/interfaces/me";
  import { Prop, Component } from "vue-property-decorator";
  import { indexPath as profileIndexPath } from "@/router/profile/profileRoutes";

  @Component

  export default class Me extends Vue {
    @Prop() readonly profile!: Profile;

    avatar: string = this.profile.avatar ? this.profile.avatar : require('../../../assets/images/default-avatar.png');
    profilePath: () => void = profileIndexPath;
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

  .meHeader {
    width: 100%;
    padding: 30px 0;
    background: $main_color;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper {
      width: 100%;
      text-align: center;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid #fff;
      }

      .name {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        margin-top: 5px;
        color: $light_font_color;
      }

      .description {
        text-align: center;
        margin-top: 5px;
        color: $light_font_color;
      }
    }
  }
</style>
