<template>
  <div>
    <v-tabs
      v-model="tab"
      color="#262626"
    >
      <v-tab
        v-for="tab in tabList"
        :key="tab.id"
        :class="{ active: true }"
        @click="onclickTab(tab.id)"
      >
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  layout: 'users',
  data: () => ({
    tab: 0,
    tabList: {
      '1': { 'id': 1, 'name': 'パーソナルデータ', 'to': 'personal-data' },
      '3': { 'id': 3, 'name': 'トレーニング履歴', 'to': 'training-history' },
      '4': { 'id': 4, 'name': '身体数値', 'to': 'weight-history' },
      '5': { 'id': 5, 'name': '身体画像', 'to': 'image-history' },
    }
  }),
  mounted() {
    const currentTab = this.$route.path.split('/').slice(-1)[0];
    this.tab = this.toList.indexOf(currentTab);
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
      const tab = this.tabList[tabID];
      this.$router.push(`/users/${this.$route.params.id}/${tab.to}`);
    },
  }
}
</script>

<style scoped>
</style>
