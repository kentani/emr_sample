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
          v-for="label in weightDataLabels"
          :key="label.key"
          cols="6"
          sm="4"
        >
          <v-card
            hover
            height="100%"
            rounded="lg"
            @click="onClickWeightDataCard(label.key)"
          >
            <v-card-title class="justify-center " style="height: 20%;">
              <div class="test text-body-2 font-weight-bold">{{ label.label }}</div>
            </v-card-title>

            <v-card-text style="height: 80%">
              <v-row no-gutters align="center" style="height: 100%">
                <v-col cols="12" class="text-center pt-3 pb-0">
                  <div class="text-center text-h4 main--text font-weight-bold">{{ compareData[2] && compareData[2][label.key] }}</div>
                  <!-- <div class="text-center text-body-2 main--text font-weight-bold">{{ label.suffix }}</div> -->
                </v-col>

                <v-col cols="5" class="text-center">
                  <div class="text-body-1 font-weight-bold" style="line-height: 1.25rem;">{{ compareData[0] && compareData[0][label.key] }}</div>
                  <!-- <div class="text-caption" style="line-height: 0.5rem;">{{ label.suffix }}</div> -->
                </v-col>

                <v-col cols="2" class="text-center text-body-2">
                  <v-icon small>mdi-arrow-right</v-icon>
                </v-col>

                <v-col cols="5" class="text-center text-body-2">
                  <div class="text-body-1 font-weight-bold" style="line-height: 1.25rem;">{{ compareData[1] && compareData[1][label.key] }}</div>
                  <!-- <div class="text-caption" style="line-height: 0.5rem;">{{ label.suffix }}</div> -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card rounded="lg" class="px-3">
            <line-chart
              :chart-data="chartData"
              :options="options"
            />
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
      { 'id': 13, 'date': '2023-05-01', 'weight': '70.5', 'fat': '15', 'age': '30', 'bmi': '16.3', 'metabolism': '1700', 'visceral': '6' },
    ],
    currentWeightData: [],
    beforeDate: '',
    afterDate: '',
    weightDataLabels: [
      { key: 'weight', label: '体重', suffix: 'kg' },
      { key: 'fat', label: '体脂肪率', suffix: '%' },
      { key: 'age', label: '身体年齢', suffix: '才' },
      { key: 'bmi', label: 'BMI', suffix: '' },
      { key: 'metabolism', label: '基礎代謝量', suffix: 'kcal' },
      { key: 'visceral', label: '内臓脂肪レベル', suffix: '' },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: true,
          ticks: {
            color: "#004D40",
          },
          grid: {
            color: "rgb(232, 234, 246, 0.1)"
          },
        },
        x: {
          ticks: {
            color: "#004D40",
          },
          grid: {
            color: "rgb(232, 234, 246, 0.1)"
          }
        }
      }
    },
    chartData: {},
  }),
  mounted() {
    this.currentWeightData = this.weightData;
    this.beforeDate = this.weightData[0]['date'];
    this.afterDate = this.weightData.slice(-1)[0]['date'];
    this.chartData = this.buildChartData('weight', '体重');
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
    compareData() {
      if (this.currentWeightData.length === 0) return [];

      const before = this.currentWeightData[0];
      const after = this.currentWeightData.slice(-1)[0];
      const compareData = [before, after];

      compareData.push({
        'id': 0,
        'date': '差分',
        'weight': after['weight'] - before['weight'],
        'fat': after['fat'] - before['fat'],
        'age': after['age'] - before['age'],
        'bmi': after['bmi'] - before['bmi'],
        'metabolism': after['metabolism'] - before['metabolism'],
        'visceral': after['visceral'] - before['visceral']
      });

      return compareData;
    },
    chartLabels() {
      if (this.currentWeightData.length === 0) return;

      const chartLabels = [];

      this.currentWeightData.forEach(data => {
        chartLabels.push(data['date']);
      });

      return chartLabels;
    },
    chartData1() {
      return this.buildChartData('weight', '体重');
    },
    chartData2() {
      return this.buildChartData('fat', '体脂肪率');
    },
    chartData3() {
      return this.buildChartData('age', '身体年齢');
    },
    chartData4() {
      return this.buildChartData('bmi', 'BMI');
    },
    chartData5() {
      return this.buildChartData('metabolism', '基礎代謝量');
    },
    chartData6() {
      return this.buildChartData('visceral', '内臓脂肪レベル');
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

      this.chartData = this.chartData1;
    },
    onClickWeightDataCard(key) {
      if(key === 'weight') {
        this.chartData = this.chartData1;
      } else if(key === 'fat') {
        this.chartData = this.chartData2;
      } else if(key === 'age') {
        this.chartData = this.chartData3;
      } else if(key === 'bmi') {
        this.chartData = this.chartData4;
      } else if(key === 'metabolism') {
        this.chartData = this.chartData5;
      } else if(key === 'visceral') {
        this.chartData = this.chartData6  ;
      }
    },
    buildChartData(typeKey, typeName) {
      if (this.currentWeightData.length === 0) return {};

      const data = [];

      this.currentWeightData.forEach(d => {
        data.push(d[typeKey]);
      });

      const chartData = {
        labels: this.chartLabels,
        datasets: [
          {
            label: typeName,
            backgroundColor: 'rgb(232, 234, 246, 0.1)',
            borderColor: "#006666",
            data: data,
            fill: true
          }
        ]
      };

      return chartData;
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
