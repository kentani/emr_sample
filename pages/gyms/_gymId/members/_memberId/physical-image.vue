<template>
  <v-row>
    <v-col cols="12" sm="4" class="d-block d-sm-none">
      <v-card rounded="lg" flat style="width: 100%;">
        <v-card-title class="justify-center text-h6 font-weight-bold">
          期間
        </v-card-title>

        <v-card-text>
          <v-select
            v-model="beforeDate"
            :items="beforeDateSelectOption"
            color="main"
            item-color="main"
            solo
            hide-details
            class=""
            @change="onChangeDate"
          ></v-select>

          <div class="my-3 text-center text-body-2">
            <v-icon class="">mdi-compare-vertical</v-icon>
          </div>

          <v-select
            v-model="afterDate"
            :items="afterDateSelectOption"
            color="main"
            item-color="main"
            solo
            hide-details
            class=""
            @change="onChangeDate"
          ></v-select>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="8">
      <v-row>
        <v-col
          v-for="(image, index) in weightImages[0]"
          :key="image.id"
          cols="4"
        >
          <v-card
            rounded="lg"
            @click="onClickWeightDataCard(label.key)"
          >
            <v-card-title class="justify-center">
              <div class="test text-body-2 font-weight-bold">{{ image.title }}</div>
            </v-card-title>

            <v-img
              :src="image.url"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="text-center text-h6">
            <v-icon class="">mdi-compare-vertical</v-icon>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(image, index) in weightImages[1]"
          :key="image.id"
          cols="4"
        >
          <v-card
            rounded="lg"
            @click="onClickWeightDataCard(label.key)"
          >
            <v-card-title class="justify-center">
              <div class="test text-body-2 font-weight-bold">{{ image.title }}</div>
            </v-card-title>

            <v-img
              :src="image.url"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" sm="4" class="d-none d-sm-block">
      <v-card rounded="lg" flat style="width: 100%;">
        <v-card-title class="justify-center text-h6 font-weight-bold">
          期間
        </v-card-title>

        <v-card-text>
          <v-select
            v-model="beforeDate"
            :items="beforeDateSelectOption"
            color="main"
            item-color="main"
            solo
            hide-details
            class=""
            @change="onChangeDate"
          ></v-select>

          <div class="my-3 text-center text-body-2">
            <v-icon class="">mdi-compare-vertical</v-icon>
          </div>

          <v-select
            v-model="afterDate"
            :items="afterDateSelectOption"
            color="main"
            item-color="main"
            solo
            hide-details
            class=""
            @change="onChangeDate"
          ></v-select>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import LineChart from "@/components/chart/LineChart.vue";

export default {
  name: 'PatonaIndexPage',
  layout: 'default',
  components: { LineChart },
  data: () => ({
    weightData: [
      { 'id': 1, 'date': '2022-05-01', 'weight': '100', 'fat': '30', 'age': '50', 'bmi': '30', 'metabolism': '2000', 'visceral': '20' },
      { 'id': 2, 'date': '2022-06-01', 'weight': '95', 'fat': '28', 'age': '49', 'bmi': '28', 'metabolism': '1900', 'visceral': '19' },
      { 'id': 3, 'date': '2022-07-01', 'weight': '90', 'fat': '26', 'age': '48', 'bmi': '26', 'metabolism': '1900', 'visceral': '19' },
      { 'id': 4, 'date': '2022-08-01', 'weight': '85', 'fat': '24', 'age': '47', 'bmi': '24', 'metabolism': '1900', 'visceral': '17' },
      { 'id': 5, 'date': '2022-09-01', 'weight': '80', 'fat': '22', 'age': '46', 'bmi': '22', 'metabolism': '1900', 'visceral': '16' },
      { 'id': 6, 'date': '2022-10-01', 'weight': '80', 'fat': '22', 'age': '45', 'bmi': '22', 'metabolism': '1900', 'visceral': '16' },
      { 'id': 7, 'date': '2022-11-01', 'weight': '85', 'fat': '25', 'age': '47', 'bmi': '24', 'metabolism': '2000', 'visceral': '17' },
      { 'id': 8, 'date': '2022-12-01', 'weight': '80', 'fat': '20', 'age': '44', 'bmi': '21', 'metabolism': '1900', 'visceral': '16' },
      { 'id': 9, 'date': '2023-01-01', 'weight': '78', 'fat': '18', 'age': '42', 'bmi': '20', 'metabolism': '1800', 'visceral': '14' },
      { 'id': 10, 'date': '2023-02-01', 'weight': '76', 'fat': '17', 'age': '40', 'bmi': '19', 'metabolism': '1800', 'visceral': '12' },
      { 'id': 11, 'date': '2023-03-01', 'weight': '74', 'fat': '16', 'age': '35', 'bmi': '18', 'metabolism': '1800', 'visceral': '11' },
      { 'id': 12, 'date': '2023-04-01', 'weight': '74', 'fat': '15', 'age': '32', 'bmi': '17', 'metabolism': '1700', 'visceral': '8' },
      { 'id': 13, 'date': '2023-05-01', 'weight': '70', 'fat': '15', 'age': '30', 'bmi': '16', 'metabolism': '1700', 'visceral': '6' },
    ],
    beforeDate: '',
    afterDate: '',
    weightImages: [
      [
        { id: 1, title: '前', url: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light' },
        { id: 2, title: '横', url: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light' },
        { id: 3, title: '後', url: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light' },
      ],
      [
        { id: 4, title: '前', url: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light' },
        { id: 5, title: '横', url: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light' },
        { id: 6, title: '後', url: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light' },
      ],
    ],
  }),
  mounted() {
    this.beforeDate = this.weightData[0]['date'];
    this.afterDate = this.weightData.slice(-1)[0]['date'];
  },
  computed: {
    beforeDateSelectOption() {
      const selectOption = [];
      this.weightData.forEach(data => {
        selectOption.push({
          text: data['date'],
          value: data['date'],
          disabled: data['date'] >= this.afterDate
        });
      });

      return selectOption;
    },
    afterDateSelectOption() {
      const selectOption = [];
      this.weightData.forEach(data => {
        selectOption.push({
          text: data['date'],
          value: data['date'],
          disabled: data['date'] <= this.beforeDate
        });
      });

      return selectOption;
    },
  },
  methods: {
    onChangeDate() {
      this.currentWeightData = [];

      this.weightData.forEach(d => {
        if (this.beforeDate <= d['date'] && d['date'] <= this.afterDate) {
          this.currentWeightData.push(d);
        }
      })
    },
  }
}
</script>

<style scoped>
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
