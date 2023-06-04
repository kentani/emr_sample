<template>
  <div>
    <v-card
      flat
      class="mt-6"
    >
      <v-row
        no-gutters
        justify="space-between"
      >
        <v-col
          cols="12"
          md="2"
          align-self="center"
        >
          <v-card flat elevation="0">
            <v-img :src="userImage"></v-img>

            <v-overlay
              absolute
              :value="!isUploadedimage"
            >
              <v-btn
                icon
                x-large
              >
                <v-icon>mdi-camera</v-icon>
              </v-btn>
            </v-overlay>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="9"
        >
          <v-row no-gutters>
            <v-col cols="12">
              <v-card-title>
                <v-text-field
                  v-model="name"
                  label="名前"
                  color="#262626"
                  dense
                  :readonly="isComplete"
                ></v-text-field>
              </v-card-title>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  v-model="birthday"
                  label="生年月日"
                  color="#262626"
                  dense
                  :readonly="isComplete"
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  v-model="sex"
                  label="性別"
                  color="#262626"
                  dense
                  :readonly="isComplete"
                ></v-text-field>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row
        no-gutters
        justify="space-between"
      >
        <v-col
          cols="12"
          md="2"
          align-self="center"
        >
        </v-col>

        <v-col
          cols="12"
          md="9"
        >
          <v-row no-gutters>
            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  v-model="experience"
                  label="運動経験"
                  color="#262626"
                  dense
                  :readonly="isComplete"
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  v-model="injury"
                  label="けが・病気"
                  color="#262626"
                  dense
                  :readonly="isComplete"
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  v-model="purpose"
                  label="目的"
                  color="#262626"
                  dense
                  :readonly="isComplete"
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  v-model="goal"
                  label="目標"
                  color="#262626"
                  dense
                  :readonly="isComplete"
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12">
              <v-card-text>
                <v-textarea
                  v-model="memo"
                  label="メモ"
                  color="#262626"
                  dense
                  :readonly="isComplete"
                ></v-textarea>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-if="isComplete"
          cols="12"
          class="text-center"
        >
          <v-btn
            dark
            x-large
            @click="onClickUsersPage"
          >
            顧客一覧に戻る
          </v-btn>

          <v-btn
            dark
            x-large
            @click="onClickEditDetail"
          >
            詳細を登録する
          </v-btn>
        </v-col>

        <v-col
          v-else
          cols="12"
          class="text-center"
        >
          <v-btn
            dark
            x-large
            @click="onClickSave"
          >
            保存
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'UserAddPage',
  data: () => ({
    userImage: require('@/assets/images/user.png'),
    isComplete: false,
    isUploadedimage: false,
    name: '',
    birthday: '',
    sex: '',
    experience: '',
    injury: '',
    purpose: '',
    goal: '',
    memo: '',
  }),
  mounted() {
    this.setUserInfo();
    this.isUploadedimage = this.$route.query.image;
  },
  methods: {
    setUserInfo() {
      this.name = this.$route.query.name;
      this.birthday = this.$route.query.birthday;
      this.sex = this.$route.query.sex;
      this.experience = this.$route.query.experience;
      this.injury = this.$route.query.injury;
      this.purpose = this.$route.query.purpose;
      this.goal = this.$route.query.goal;
      this.memo = this.$route.query.memo;
    },
    onClickSave() {
      this.isComplete = true;
    },
    onClickUsersPage() {
      this.$router.push('/users');
    },
    onClickEditDetail() {
      this.$router.push('/users/21/training-history');
    },
  }
}
</script>

<style scoped>
</style>
