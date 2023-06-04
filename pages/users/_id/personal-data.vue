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
          <v-img :src="userImage"></v-img>
        </v-col>

        <v-col
          cols="12"
          md="9"
        >
          <v-row no-gutters>
            <v-col cols="12" md="9">
              <v-card-title>
                <p class="text-h3 font-weight-bold">{{ `${userInfo.name}（${userAge}）` }}</p>
              </v-card-title>
            </v-col>

            <v-col cols="12" md="3">
              <v-card-actions>
                <v-btn icon @click="onClickEdit">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn icon @click="onClickDeleteConfirm">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <p class="mb-0">生年月日</p>
                <p class="text-h6 mb-0">{{ userInfo.birthday }}</p>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <p class="mb-0">性別</p>
                <p class="text-h6 mb-0">{{ userInfo.sex }}</p>
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
                <p class="mb-0">運動経験</p>
                <p class="text-h6 mb-0">{{ userInfo.experience }}</p>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <p class="mb-0">けが・病気</p>
                <p class="text-h6 mb-0">{{ userInfo.injury }}</p>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <p class="mb-0">目的</p>
                <p class="text-h6 mb-0">{{ userInfo.purpose }}</p>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <p class="mb-0">目標</p>
                <p class="text-h6 mb-0">{{ userInfo.goal }}</p>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <p class="mb-0">メモ</p>
                <p class="text-h6 mb-0">{{ userInfo.memo }}</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="400"
        persistent
      >
        <v-card>
          <v-card-title class="text-h6">
            このユーザーを削除しますか?
          </v-card-title>

          <v-card-text>
            一度削除したユーザーは元に戻せません。
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="onClickCancel"
            >
              キャンセル
            </v-btn>
            <v-btn
              text
              @click="onClickDelete"
            >
              削除
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PersonalDataPage',
  layout: 'users',
  data: () => ({
    userImage: require('@/assets/images/user.png'),
    userAge: 30,
    userInfo: {
      name: 'ユーザー1',
      image: true,
      birthday: '0000/00/00',
      sex: '男性',
      experience: 'サッカー',
      injury: '膝が弱い',
      purpose: 'ダイエット',
      goal: '服のサイズをXLからMにする',
      memo: '土日休み',
    },
    dialog: false,
  }),
  methods: {
    onClickEdit() {
      this.$router.push({ path: '/users/add1', query: this.userInfo });
    },
    onClickDeleteConfirm() {
      this.dialog = true;
    },
    onClickDelete() {
      this.$router.push('/users');
    },
    onClickCancel() {
      this.dialog = false;
    },
  }
}
</script>

<style scoped>
</style>
