<template>
  <v-app :style="{ background: this.$vuetify.theme.themes.light.main2 }">
    <v-app-bar
      fixed
      dark
      dense
      app
      elevation="0"
      :color="$vuetify.theme.themes.light.main"
      class="pa-0"
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

      <div>{{ gymName }}</div>

      <div class="mx-2">|</div>

      <div class="mr-3">{{ trainerName }}</div>

      <!-- <v-avatar size="40">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar> -->

      <v-btn
        icon
        @click="onClickMenu"
      >
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: 'PATONA',
    gymName: 'マッスルジム',
    trainerName: 'トレーナー',
  }),
  methods: {
    onClickMenu() {
      this.$router.push('/');
    },
  }
}
</script>

<style>
body::-webkit-scrollbar {
  display: none;
}
</style>
