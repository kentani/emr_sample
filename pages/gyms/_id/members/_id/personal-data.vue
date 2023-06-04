<template>
  <transition-group
    tag="v-row"
    name="list0"
    class="member-list"
  >
    <v-col
      :key="member.id"
      :ref="`memberCard${member.id}`"
      v-show="member.show2"
      cols="12"
    >
      <v-card rounded="lg">
        <v-card-actions class="pb-0">
          <v-spacer />

          <v-btn icon color="main" large @click="">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn icon color="main3" large @click="">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-text class="pt-0">
          <v-row
            justify="center"
            align="center"
          >
            <v-col cols="12" sm="3">
              <v-card flat>
                <v-img
                  position="top center"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>

                <v-card-title class="justify-center pb-0 text-h6 font-weight-bold">
                  {{ member.name }}
                </v-card-title>

                <v-card-title class="justify-center pt-0 text-body-1 font-weight-bold">
                  {{ member.age }}才
                </v-card-title>
              </v-card>
            </v-col>

            <v-divider vertical class="my-2 d-none d-sm-block"></v-divider>

            <v-col cols="12" sm="9">
              <v-row>
                <v-col
                  v-for="(profile, index) in profiles"
                  :key="`profile-${index}`"
                  :cols="profile.cols"
                  :sm="profile.sm"
                >
                  <v-card flat>
                    <v-card-title class="text-h6 font-weight-bold main--text">
                      <div class="test">{{ profile.title }}</div>
                    </v-card-title>

                    <v-card-text class="pb-0 text-body-1">
                      {{ profile.data }}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </transition-group>
</template>

<script>
export default {
  name: 'PatonaMembersPage',
  layout: 'default',
  data: () => ({
    userImage: require('@/assets/images/user.png'),
    member: { id: 1, name: '顧客 太郎', age: 30, instructor: 'トレーナー', show: false, show2: false, selected: false },
    memberSnap: {},
    profiles: [
      { title: '生年月日', data: '0000/00/00', cols: 12, sm: 6 },
      { title: '性別', data: '男', cols: 12, sm: 6 },
      { title: '運動経験', data: 'サッカー', cols: 12, sm: 6 },
      { title: 'けが・病気', data: '膝が弱い', cols: 12, sm: 6 },
      { title: '目的', data: 'ダイエット', cols: 12, sm: 6 },
      { title: '目標', data: '服のサイズをXLからMにする', cols: 12, sm: 6 },
      { title: 'メモ', data: '土日休み', cols: 12, sm: 12 },
    ],
  }),
  mounted() {
    this.member.show = true;
    this.member.show2 = true;

    this.memberSnap = this.deepCopy(this.member);
  },
  methods: {
    sleep(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    },
    deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj))
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
  opacity: 1;
  transform: translateX(1) scaleY(1);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(1) scaleY(1);
}

/* .list-leave-active {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
} */

.list-leave-to {
  opacity: 0;
  transform: translateX(0) scaleY(0);
}

.test {
  position: relative;
  display: inline-block;
}
.test:before {
  content: '';
  position: absolute;
  bottom: -5px;
  display: inline-block;
  width: 100%;
  height: 2px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #006666;
  border-radius: 2px;
}
</style>

