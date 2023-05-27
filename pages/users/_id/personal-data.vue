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
            <v-col cols="12">
              <v-card-title>
                <p class="text-h3 font-weight-bold">{{ `${userName}（${userAge}）` }}</p>
              </v-card-title>
            </v-col>

            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">生年月日</p>
                <p class="text-h6 mb-0">{{ userBirth }}</p>
              </v-card-text>
            </v-col>

            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">性別</p>
                <p class="text-h6 mb-0">{{ userSex }}</p>
              </v-card-text>
            </v-col>

            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">住所</p>
                <p class="text-h6 mb-0">{{ userAddress }}</p>
              </v-card-text>
            </v-col>

            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">電話番号</p>
                <p class="text-h6 mb-0">{{ userTel }}</p>
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
            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">運動経験</p>
                <p class="text-h6 mb-0">サッカー</p>
              </v-card-text>
            </v-col>

            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">けが・病気</p>
                <p class="text-h6 mb-0">膝が弱い</p>
              </v-card-text>
            </v-col>

            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">目的</p>
                <p class="text-h6 mb-0">ダイエット</p>
              </v-card-text>
            </v-col>

            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">目標</p>
                <p class="text-h6 mb-0">服のサイズをXLからMにする</p>
              </v-card-text>
            </v-col>

            <v-col cols="6">
              <v-card-text>
                <p class="mb-0">メモ</p>
                <p class="text-h6 mb-0">土日休み</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PersonalDataPage',
  data () {
    return {
      userImage: require('@/assets/images/user.png'),
      userName: 'ユーザー1',
      userBirth: '0000/00/00',
      userAge: '30',
      userSex: '男性',
      userAddress: '長崎県長崎市〇〇123-45',
      userTel: '000-0000-0000'
    }
  }
}
</script>

<style scoped>
</style>
