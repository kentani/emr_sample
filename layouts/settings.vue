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
      <v-container>
        <v-breadcrumbs
          color="main"
          :items="breadcrumbs"
          class="px-0"
        >
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>

        <v-row>
          <v-col cols="12" lg="3">
            <v-card flat rounded="lg">
              <v-card-text class="pa-2">
                <v-row no-gutters>
                  <v-col
                    v-for="tab in tabList"
                    :key="tab.id"
                    cols="6"
                    md="3"
                    lg="12"
                  >
                    <v-btn
                      :dark="tab.active"
                      :text="!tab.active"
                      block
                      large
                      color="main"
                      :disabled="tab.disabled"
                      @click="onclickTab(tab.id)"
                    >
                      {{ tab.name }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" lg="9">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'settings',
  data: () => ({
    title: 'PATONA',
    gymName: 'マッスルジム',
    trainerName: 'トレーナー',
    tabList: {
      1: { id: 1, name: '会社情報', to: 'gym', active: false, disabled: true },
      2: { id: 2, name: 'トレーナー権限', to: 'role', active: false, disabled: true  },
      3: { id: 3, name: '顧客プロフィール情報', to: 'member', active: false, disabled: true  },
      4: { id: 4, name: 'トレーニングメニュー', to: 'training', active: false, disabled: false  },
    },
    breadcrumbs: [
    {
        text: 'メニュー',
        disabled: false,
        href: '/gyms/1/menu',
      },
      {
        text: '設定',
        disabled: true,
        href: '/gyms/1/settings/gym',
      },
    ],
  }),
  mounted() {
    const currentTab = this.$route.path.split('/').slice(-1)[0];
    const index = this.toList.indexOf(currentTab) + 1;
    this.tabList[index].active = true;
    this.tabList = Object.assign({}, this.tabList);
  },
  computed: {
    toList() {
      const toList = [];
      Object.values(this.tabList).forEach(tab => {
        toList.push(tab['to']);
      });

      return toList;
    }
  },
  methods: {
    onClickMenu() {
      this.$router.push('/');
    },
    onclickTab(tabID) {
      let tab;

      this.toList.forEach((_, index) => {
        let tab = this.tabList[index + 1];
        tab.active = tab.id === tabID;
        this.tabList[tab.id] = tab;
      });

      this.tabList = Object.assign({}, this.tabList);

      this.$router.push(`/gyms/1/settings/${this.tabList[tabID].to}`);
    },
  }
}
</script>

<style>
body::-webkit-scrollbar {
  display: none;
}
</style>
