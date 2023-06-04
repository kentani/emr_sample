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

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-row
          no-gutters
          justify="center"
          class="mt-12"
          style="height: 100%; width: 100%;"
        >
          <v-col
            v-for="func in functionList"
            :key="func.icon"
            cols="9"
            md="3"
            lg="2"
            class="mx-2"
          >
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  color="main"
                  dark
                  rounded="xl"
                  :elevation="hover ? 24 : 8"
                  @click="onClickMenu(func.to)"
                >
                  <v-card-text class="text-body-1 font-weight-bold text-center">
                    <v-icon size="150">{{ func.icon }}</v-icon>
                    <p class="mb-0">{{ func.name }}</p>
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'PatonaDefaultLayout',
  data: () => ({
    items: [
      {
        icon: 'mdi-account-group',
        title: '顧客一覧',
        to: '/users'
      },
    ],
    title: 'PATONA',
    functionList: [
      { 'name': '顧客一覧', 'to': '/patona/gyms/1/members', 'icon': 'mdi-account-group' }
    ]
  }),
  methods: {
    onClickMenu(to) {
      this.$router.push(to);
    }
  }
}
</script>

<style>
</style>
