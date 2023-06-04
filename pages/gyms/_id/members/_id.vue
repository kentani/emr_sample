<template>
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
                lg="12"
              >
                <v-btn
                  :dark="tab.active"
                  :text="!tab.active"
                  block
                  large
                  color="main"
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
        <nuxt-child />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MemberDetailPage',
  layout: 'default',
  data: () => ({
    tabList: {
      1: { id: 1, name: 'パーソナルデータ', to: 'personal-data', active: false },
      2: { id: 2, name: 'トレーニング履歴', to: 'training-data', active: false },
      3: { id: 3, name: '身体数値', to: 'physical-data', active: false },
      4: { id: 4, name: '身体画像', to: 'physical-image', active: false },
    },
    breadcrumbs: [
      {
        text: 'メニュー',
        disabled: false,
        href: '/gyms/1/menu',
      },
      {
        text: '顧客一覧',
        disabled: false,
        href: '/gyms/1/members',
      },
      {
        text: '顧客 太郎',
        disabled: true,
        href: '/gyms/1/members/1',
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
    onclickTab(tabID) {
      let tab;

      this.toList.forEach((_, index) => {
        let tab = this.tabList[index + 1];
        tab.active = tab.id === tabID;
        this.tabList[tab.id] = tab;
      });

      this.tabList = Object.assign({}, this.tabList);

      this.$router.push(`/gyms/1/members/1/${this.tabList[tabID].to}`);
    },
  }
}
</script>

<style scoped>
</style>
