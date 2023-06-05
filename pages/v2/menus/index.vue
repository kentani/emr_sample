<template>
  <v-container>
    <transition-group
      tag="div"
      name="list"
      class="row justify-center"
    >
      <v-col
        v-for="menu in menus"
        :key="menu.icon"
        v-show="menu.show"
        cols="8"
        sm="4"
        md="3"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              color="main"
              dark
              rounded="xl"
              :elevation="hover ? 24 : 8"
              @click="onClickMenu(menu.to)"
            >
              <v-card-text class="text-body-1 font-weight-bold text-center">
                <v-icon size="150">{{ menu.icon }}</v-icon>
                <p class="mb-0">{{ menu.name }}</p>
              </v-card-text>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </transition-group>
  </v-container>
</template>

<script>
export default {
  name: 'PatonaMenuPage',
  layout: 'default',
  data: () => ({
    menus: [
      { 'name': '顧客一覧', 'to': '/v2/members', 'icon': 'mdi-account-group', show: false },
      { 'name': '設定', 'to': '/v2/settings/training', 'icon': 'mdi-cog', show: false },
    ]
  }),
  mounted() {
    this.menus = this.menus.map(menu => {
      return {
        ...menu,
        show: true,
      }
    });
  },
  methods: {
    onClickMenu(to) {
      this.$router.push(to);
    }
  }
}
</script>

<style scoped>
.list-leave-active,
.list-enter-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(0) scaleY(0);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(0) scaleY(0);
}
</style>
