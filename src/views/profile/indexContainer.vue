<template>
  <div>
    <Header title="个人信息" />
    <ProfileForm
      :profile.sync="profile"
      @changeImage="changeImage"
      @changeName="changeName"
      @changeGender="changeGender"
      @changeDescription="changeDescription"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Watch } from "vue-property-decorator";
  import { HTMLInputEvent } from "@/interfaces/file";
  import ProfileForm from "@/components/Profile/index.vue";
  import Header from "@/components/Commons/Header/index.vue";

  const accepts = ['image/gif', 'image/jpeg', 'image/png'];

  @Component({
    components: { ProfileForm, Header }
  })

  export default class ProfileContainer extends Vue {
    get profile() {
      return this.$store.state.profile.profile;
    }

    created() {
      this.$store.commit('profile/fetchProfile');
    }

    changeImage(e: HTMLInputEvent) {
      const files: any = e.target;

      if(!files) { return  }

      const file = files.files[0];

      if(!file) { return }
      if(!accepts.includes(file.type)) { return }

      const reader: FileReader = new FileReader();

      reader.onload = () => {
        this.profile.avatar = reader.result;
      };

      reader.readAsDataURL(file);
    }

    changeName(name: string) {
      if(name.length < 0) { return }
      this.profile.displayName = name;
    }

    changeGender(gender: string) {
      this.profile.gender = gender;
    }

    changeDescription(description: string) {
      this.profile.description =  description;
    }

    @Watch('profile', { deep: true }) onProfileChanged() {
      this.$store.commit('profile/saveProfile', this.profile);
    }
  }
</script>

