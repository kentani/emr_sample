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
          <p class="mb-0">{{ `計測数 ${weightData.length} 回` }}</p>
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
            @change="onChangeDate"
          ></v-select>

          <div> 〜 </div>

          <v-select
            v-model="afterDate"
            :items="afterDateSelectOption"
            color="#262626"
            class="mx-4"
            @change="onChangeDate"
          ></v-select>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <span>
          <v-icon>mdi-compare-horizontal</v-icon>
        </span>
        比較
      </v-col>
    </v-row>

    <v-card flat outlined class="mt-2 mb-6">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                日付
              </th>
              <th class="text-left">
                体重
              </th>
              <th class="text-left">
                体脂肪率
              </th>
              <th class="text-left">
                身体年齢
              </th>
              <th class="text-left">
                BMI
              </th>
              <th class="text-left">
                基礎代謝量
              </th>
              <th class="text-left">
                内臓脂肪レベル
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="data in compareData"
              :key="data.id"
            >
              <td>{{ data.date }}</td>
              <td>{{ data.weight }}</td>
              <td>{{ data.fat }}</td>
              <td>{{ data.age }}</td>
              <td>{{ data.bmi }}</td>
              <td>{{ data.metabolism }}</td>
              <td>{{ data.visceral }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-row class="pb-0">
      <v-col cols="12" class="pb-0">
        <span>
          <v-icon>mdi-chart-line</v-icon>
        </span>
        グラフ
      </v-col>
    </v-row>

    <v-row class="flex-nowrap" style="overflow-x: scroll;">
      <v-col cols="12" md="7">
        <v-card flat outlined class="px-3">
          <line-chart
            :chart-data="chartData1"
            :options="options"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card flat outlined class="px-3">
          <line-chart
            :chart-data="chartData2"
            :options="options"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card flat outlined class="px-3">
          <line-chart
            :chart-data="chartData3"
            :options="options"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card flat outlined class="px-3">
          <line-chart
            :chart-data="chartData4"
            :options="options"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card flat outlined class="px-3">
          <line-chart
            :chart-data="chartData5"
            :options="options"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card flat outlined class="px-3">
          <line-chart
            :chart-data="chartData6"
            :options="options"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LineChart from "@/components/chart/LineChart.vue";

export default {
  name: 'WeightHistoryPage',
  components: { LineChart },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: true,
          ticks: {
            color: "#E8EAF6",
          },
          grid: {
            color: "rgb(232, 234, 246, 0.1)"
          },
        },
        x: {
          ticks: {
            color: "#E8EAF6",
          },
          grid: {
            color: "rgb(232, 234, 246, 0.1)"
          }
        }
      }
    },
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
    currentWeightData: [],
  }),
  mounted() {
    this.currentWeightData = this.weightData;
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
    }
  },
  methods: {
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
            borderColor: "#262626",
            data: data,
            fill: true
          }
        ]
      };

      return chartData;
    },
    onChangeDate() {
      this.currentWeightData = [];

      this.weightData.forEach(d => {
        if (this.beforeDate <= d['date'] && d['date'] <= this.afterDate) {
          this.currentWeightData.push(d);
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
