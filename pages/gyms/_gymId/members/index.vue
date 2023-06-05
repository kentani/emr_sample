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
      <v-col cols="12" sm="4" md="3">
        <v-card flat rounded="lg">
          <v-card-text>
            <div>
              <span class="text-body-1">会員数</span>
              <span class="mx-2 text-h4 font-weight-bold main--text">{{ members.filter(m => m.show2).length }}</span>
            </div>

            <v-switch
              v-model="switch1"
              inset
              dense
              label="担当会員のみ"
              color="main"
              @change="onSearch"
            ></v-switch>

            <v-text-field
              v-model="searchName"
              dense
              hide-details
              placeholder="顧客名を入力"
              color="main"
              @input="onSearch"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="8" md="9">
        <v-container class="pa-0">
          <transition-group
            tag="div"
            name="list"
            class="row"
          >
            <v-col
              v-for="member in members"
              :key="member.id"
              v-show="member.show2"
              cols="6"
              sm="4"
              md="3"
            >

              <v-card
                hover
                rounded="lg"
                @click="onClickMemberCard(member)"
              >
                <v-img
                  height="140"
                  position="top center"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>

                <v-card-title class="py-2">
                  <span class="text-body-1 font-weight-bold">{{ member.name }}</span>
                </v-card-title>

                <v-card-text class="pb-2">
                  <span class="text-body-2">担当:</span>
                  <span class="text-body-2">{{ member.instructor }}</span>
                </v-card-text>
              </v-card>
            </v-col>
          </transition-group>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PatonaMembersPage',
  layout: 'default',
  data: () => ({
    userImage: require('@/assets/images/user.png'),
    members: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => ({ id: num, name: '顧客 太郎', instructor: 'トレーナー', show: false, show2: false, selected: false })),
    membersSnap: [],
    management: [2,5,7,10,11,14,15],
    switch1: false,
    searchName: '',
    height: '100%',
    breadcrumbs: [
      {
        text: 'メニュー',
        disabled: false,
        href: '/gyms/1/menu',
      },
      {
        text: '顧客一覧',
        disabled: true,
        href: '/gyms/1/members',
      },
    ]
  }),
  mounted() {
    this.members = this.members.map(member => {
      return {
        ...member,
        show: true,
        show2: true,
      }
    });

    this.membersSnap = this.members.map(member => ({...member}));
  },
  methods: {
    async onSearch() {
      if (this.searchName.length === 0 && !this.switch1) {
        this.members = this.membersSnap.map(member => ({...member}));
        return;
      }

      let members = this.membersSnap.map(member => ({...member}));

      if (this.searchName.length > 0) {
        members = members.map(member => {
          return {
            ...member,
            show: member.name.includes(this.searchName),
          }
        });
      }

      if (this.switch1) {
        members = members.map(member => {
          return {
            ...member,
            show: this.management.includes(member.id),
          }
        });
      }

      members.sort((a, b) => {
        return a.show > b.show ? -1 : 1
      });

      this.members = members;

      await this.sleep(500);

      this.members = this.members.map(member => {
        return {
          ...member,
          show2: member.show,
        }
      });
    },
    async onClickMemberCard(m) {
      let members = this.members.map(member => {
        return {
          ...member,
          selected: m.id === member.id,
        }
      });

      members.sort((a, b) => {
        return a.selected > b.selected ? -1 : 1
      });

      this.members = members;
      await this.sleep(500);
      this.members = this.members.splice(0, 1);
      await this.sleep(500);
      // this.members = [];
      this.$router.push(`/gyms/1/members/1/personal-data`);
    },
    setHeight() {
      const element = this.$refs.memberList;
      const height = window.innerHeight - 100;

      if (element.offsetHeight >= height) {
        element.style.height = `${height}px`;
      }
    },
    sleep(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    },
  }
}
</script>

<style scoped>
.member-list::-webkit-scrollbar {
  display: none;
}

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
