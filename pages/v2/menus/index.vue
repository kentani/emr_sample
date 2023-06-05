<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'PatonaMenuPage',
  layout: 'default',
  data: () => ({
    functionList: [
      { 'name': '顧客一覧', 'to': '/v2/members', 'icon': 'mdi-account-group' },
      { 'name': '設定', 'to': '/v2/settings/training', 'icon': 'mdi-cog' },
    ]
  }),
  methods: {
    onClickMenu(to) {
      this.$router.push(to);
    }
  }
}
</script>
