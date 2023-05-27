<template>
  <div>
    <v-row
      no-gutters
      class="mt-6"
    >
      <v-col cols="12">
        <p class="mb-0 text-h6 ">{{ `顧客数 ${Object.values(userList).length} 人` }}</p>
      </v-col>

      <v-row
        no-gutters
        class="mt-4"
      >
        <v-col
          cols="11"
        >
          <v-text-field
            label="顧客名で検索"
            outlined
            dense
            hide-details
            color="#262626"
          ></v-text-field>
        </v-col>

        <v-col cols="1" class="px-2 text-center">
          <v-btn
            elevation="2"
          >
            検索
          </v-btn>
        </v-col>
      </v-row>
    </v-row>

    <v-card outlined flat elevation="0" class="mt-4">
      <v-simple-table fixed-header height="500" class="mt-4">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                名前
              </th>
              <th class="text-left">
                性別
              </th>
              <th class="text-left">
                年齢
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, _) in userList"
              :key="user.id"
              @click="onClickUserRow(user.id)"
            >
              <td>{{ user.name }}</td>
              <td>{{ user.sex }}</td>
              <td>{{ user.age }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'UsersPage',
  data () {
    return {
      userList: {
        '1': { 'id': 1, 'name': 'ユーザー1', 'sex': '男性', 'age': 20 },
        '2': { 'id': 2, 'name': 'ユーザー2', 'sex': '男性', 'age': 30 },
        '3': { 'id': 3, 'name': 'ユーザー3', 'sex': '女性', 'age': 20 },
        '4': { 'id': 4, 'name': 'ユーザー4', 'sex': '女性', 'age': 30 },
        '5': { 'id': 5, 'name': 'ユーザー5', 'sex': 'その他', 'age': 20 },
        '6': { 'id': 6, 'name': 'ユーザー6', 'sex': 'その他', 'age': 30 },
        '7': { 'id': 7, 'name': 'ユーザー7', 'sex': '男性', 'age': 30 },
        '8': { 'id': 8, 'name': 'ユーザー8', 'sex': '女性', 'age': 30 },
        '9': { 'id': 9, 'name': 'ユーザー9', 'sex': '女性', 'age': 30 },
        '10': { 'id': 10, 'name': 'ユーザー10', 'sex': '女性', 'age': 30 },
        '11': { 'id': 11, 'name': 'ユーザー11', 'sex': '男性', 'age': 30 },
        '12': { 'id': 12, 'name': 'ユーザー12', 'sex': '男性', 'age': 30 },
        '13': { 'id': 13, 'name': 'ユーザー13', 'sex': '男性', 'age': 30 },
        '14': { 'id': 14, 'name': 'ユーザー14', 'sex': '男性', 'age': 30 },
        '15': { 'id': 15, 'name': 'ユーザー15', 'sex': '男性', 'age': 30 },
        '16': { 'id': 16, 'name': 'ユーザー16', 'sex': '女性', 'age': 30 },
        '17': { 'id': 17, 'name': 'ユーザー17', 'sex': '女性', 'age': 30 },
        '18': { 'id': 18, 'name': 'ユーザー18', 'sex': '女性', 'age': 30 },
        '19': { 'id': 19, 'name': 'ユーザー19', 'sex': '女性', 'age': 30 },
        '20': { 'id': 20, 'name': 'ユーザー20', 'sex': 'その他', 'age': 30 },
      }
    }
  },
  methods: {
    onClickUserRow(userID) {
      const user = this.userList[userID];
      this.$router.push(`/users/${user.id}/personal-data`);
    }
  }
}
</script>

<style scoped>
</style>
