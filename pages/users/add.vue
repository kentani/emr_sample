<template>
  <div>
    <v-stepper
      v-model="step"
      flat
      elevation="0"
      color="#262626"
    >
      <v-stepper-header>
        <v-stepper-step
          :complete="step > 1"
          step="1"
          color="#262626"
        >
          パーソナルデータ
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="step > 2"
          step="2"
          color="#262626"
        >
          トレーニング履歴
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="step > 3"
          step="3"
          color="#262626"
        >
          身体数値
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="4"
          color="#262626"
        >
          身体画像
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <nuxt-child
          @setStep="onSetStep"
          @clickBackBtn="onClickBackBtn"
          @clickNextBtn="onClickNextBtn"
        />
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'UserAddPage',
  data: () => ({
    step: 1,
    tabList: {
      '1': { 'id': 1, 'name': 'パーソナルデータ', 'to': 'personal-data' },
      '3': { 'id': 3, 'name': 'トレーニング履歴', 'to': 'training-history' },
      '4': { 'id': 4, 'name': '身体数値', 'to': 'weight-history' },
      '5': { 'id': 5, 'name': '身体画像', 'to': 'image-history' },
    }
  }),
  mounted() {
    // const currentTab = this.$route.path.split('/').slice(-1)[0];
    // this.tab = this.toList.indexOf(currentTab);
  },
  computed: {
    // toList() {
    //   const toList = [];
    //   Object.values(this.tabList).forEach(tab => {
    //     toList.push(tab['to']);
    //   });

    //   return toList;
    // }
  },
  methods: {
    onSetStep(page) {
      if(page === 'personal-data') {
        this.step = 1;
      } else if(page === 'training-history') {
        this.step = 2;
      } else if(page === 'weight-history') {
        this.step = 3;
      } else if(page === 'image-history') {
        this.step = 4;
      };
    },
    onClickBackBtn(page) {
      if(page === 'training-history') {
        this.$router.push('/users/add/personal-data');
      } else if(page === 'weight-history') {
        this.$router.push('/users/add/training-history');
      } else if(page === 'image-history') {
        this.$router.push('/users/add/weight-history');
      };
    },
    onClickNextBtn(page) {
      if(page === 'personal-data') {
        this.$router.push('/users/add/training-history');
      } else if(page === 'training-history') {
        this.$router.push('/users/add/weight-history');
      } else if(page === 'weight-history') {
        this.$router.push('/users/add/image-history');
      } else if(page === 'image-history') {
        ;
      };
    }
  }
}
</script>

<style scoped>
</style>
