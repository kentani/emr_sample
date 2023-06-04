<template>
  <v-app>
    <v-app-bar
      fixed
      dark
      dense
      app
      elevation="0"
      :color="$vuetify.theme.themes.light.black"
      class="pa-0"
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

      <v-btn
        icon
        @click="onClickMenu"
      >
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: 'PATONA',
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
