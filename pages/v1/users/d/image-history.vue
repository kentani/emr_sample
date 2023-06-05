<template>
  <div>
    <v-row class="mt-4 pb-0">
      <v-col cols="12" md="6" class="pb-0">
        <v-card-title class="text-h6 py-0">
          <p class="mb-0">ユーザー1</p>
        </v-card-title>
      </v-col>

      <v-col cols="12" md="6" class="pb-0">
        <v-card-text class="text-h6 py-0">
          <p class="mb-0">{{ `撮影数 5 回` }}</p>
        </v-card-text>
      </v-col>
    </v-row>

    <v-row class="pt-0">
      <v-col cols="12">
        <v-sheet tile height="6vh" color="grey lighten-3" class="d-flex align-center">
          <div class="ml-4">
            期間
          </div>

          <v-select
            v-model="beforeDate"
            :items="beforeDateSelectOption"
            color="#262626"
            class="mx-4"
          ></v-select>

          <div> 〜 </div>

          <v-select
            v-model="afterDate"
            :items="afterDateSelectOption"
            color="#262626"
            class="mx-4"
          ></v-select>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="pb-0">
      <v-col cols="12" class="pb-0">
        <span>
          <v-icon>mdi-compare-horizontal</v-icon>
        </span>
        比較
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card flat outlined class="pa-2">
          <v-card-text>
            {{ beforeDate }}
          </v-card-text>

          <v-carousel>
            <v-carousel-item
              v-for="(image, i) in beforeImages"
              :key="`before-${i}`"
              :src="image"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card flat outlined class="pa-2">
          <v-card-text>
            {{ afterDate }}
          </v-card-text>

          <v-carousel>
            <v-carousel-item
              v-for="(image, i) in afterImages"
              :key="`after-${i}`"
              :src="image"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ImageHistoryPage',
  layout: 'users',
  data: () => ({
    userImage: require('@/assets/images/user.png'),
    imageList: {
      '2022-05-01': { 'id': 1, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2022-06-01': { 'id': 2, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2022-07-01': { 'id': 3, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2022-08-01': { 'id': 4, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2022-09-01': { 'id': 5, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2022-10-01': { 'id': 6, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2022-11-01': { 'id': 7, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2022-12-01': { 'id': 8, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2023-01-01': { 'id': 9, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2023-02-01': { 'id': 10, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2023-03-01': { 'id': 11, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2023-04-01': { 'id': 12, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
      '2023-05-01': { 'id': 13, 'images': [require('@/assets/images/user.png'), require('@/assets/images/user.png'), require('@/assets/images/user.png')] },
    },
    beforeDate: '',
    afterDate: '',
  }),
  mounted() {
    this.beforeDate = this.imageDateList[0];
    this.afterDate = this.imageDateList.slice(-1)[0];
  },
  computed: {
    imageDateList() {
      return Object.keys(this.imageList);
    },
    beforeDateSelectOption() {
      const selectOption = [];
      this.imageDateList.forEach(date => {
        selectOption.push({
          text: date,
          value: date,
          disabled: date >= this.afterDate
        });
      });

      return selectOption;
    },
    afterDateSelectOption() {
      const selectOption = [];
      this.imageDateList.forEach(date => {
        selectOption.push({
          text: date,
          value: date,
          disabled: date <= this.beforeDate
        });
      });

      return selectOption;
    },
    beforeImages() {
      const image = this.imageList[this.beforeDate];

      if (image) {
        return image['images'];
      } else {
        return [];
      }
    },
    afterImages() {
      const image = this.imageList[this.afterDate];

      if (image) {
        return image['images'];
      } else {
        return [];
      }
    },
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
