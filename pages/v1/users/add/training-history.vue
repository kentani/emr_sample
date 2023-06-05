<template>
  <v-stepper-content step="2">
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card-title class="text-h6 py-0">
          <p class="mb-0">新規ユーザー</p>
        </v-card-title>
      </v-col>

      <v-col cols="12" md="6">
        <v-card-text class="text-h6 py-0">
          <p class="mb-0">{{ `トレーニング数 ${Object.values(eventList).length} 回` }}</p>
        </v-card-text>
      </v-col>
    </v-row>

    <v-card flat>
      <v-row>
        <v-col cols="12">
          <v-sheet tile height="6vh" color="grey lighten-3" class="d-flex align-center">
            <v-btn outlined small class="ma-4" @click="setToday">
              今日
            </v-btn>

            <v-btn icon @click="$refs.calendar.prev()">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-toolbar-title>{{ calenderDate }}</v-toolbar-title>

            <v-btn icon @click="$refs.calendar.next()">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-sheet height="500">
            <v-calendar
              ref="calendar"
              v-model="value"
              :locale="locale"
              :weekdays="weekdays"
              :events="events"
              @click:date="onClickDate"
              @click:event="onClickEvent"
            ></v-calendar>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-row>
            <v-col cols="12">
              <v-card outlined flat elevation="0">
                <v-card-text>
                  <p class="mb-0">{{ menuDate }}</p>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card outlined flat elevation="0">
                <v-simple-table
                  fixed-header
                  height="418"
                >
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          メニュー
                        </th>
                        <th class="text-left">
                          重量
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="menu in currentMenus"
                        :key="menu.id"
                      >
                        <td>{{ menu.name }}</td>
                        <td>{{ menu.kg }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn
            dark
            x-large
            @click="onClickBackBtn"
          >
            戻る
          </v-btn>

          <v-btn
            dark
            x-large
            @click="onClickNextBtn"
          >
            次へ
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-stepper-content>
</template>

<script>
import moment from "moment";

export default {
  name: 'AddTrainingHistoryPage',
  layout: 'users',
  data: () => ({
    value: moment().format(),
    locale: 'ja-jp',
    weekdays: [1, 2, 3, 4, 5, 6, 0],
    eventList: {
      "2023-05-01": [
        {
          "id": 1,
          "name": "",
          "start": "2023-05-01 10:00:00",
          "end": "2023-05-01 11:30:00",
          "color": "#262626",
          "timed": true
        },
      ],
    },
    menuList: {
      "1": [
        { "id": 1, "trainingID": 1, "name": "メニュー1", "kg": "10kg" },
        { "id": 2, "trainingID": 1, "name": "メニュー2", "kg": "20kg" },
      ],
    },
    currentDay: '',
    currentEvent: {},
    defaultMenus: [{ "id": 0, "trainingID": 0, "name": "-", "kg": "-" }],
  }),
  mounted() {
    this.$emit('setStep', 'training-history');
    this.setLastTrainingDay();
    this.currentEvent = this.lastTraining;
  },
  computed: {
    events() {
      return Object.values(this.eventList).flat();
    },
    lastTraining() {
      return this.events.slice(-1)[0];
    },
    currentMenus() {
      return this.currentEvent ? this.menuList[this.currentEvent.id] : this.defaultMenus;
    },
    calenderDate() {
      return moment(this.value).format("YYYY年 M月");
    },
    menuDate() {
      return moment(this.value).format("YYYY/MM/DD HH:mm");
    },
  },
  methods: {
    onClickBackBtn() {
      this.$emit('clickBackBtn', 'training-history');
    },
    onClickNextBtn() {
      this.$emit('clickNextBtn', 'training-history');
    },
    setToday() {
      this.value = moment().format();
    },
    setLastTrainingDay() {
      this.value = moment(this.lastTraining.start).format();
    },
    onClickDate(date) {
      this.currentEvent = this.eventList[date.date]?.slice(-1)[0];
    },
    onClickEvent({ event }) {
      this.value = moment(event.start).format();
      this.currentEvent = event;
    }
  }
}
</script>

<style scoped>
</style>
