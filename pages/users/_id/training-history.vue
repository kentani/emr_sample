<template>
  <div>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card-title class="text-h6 py-0">
          <p class="mb-0">ユーザー1</p>
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
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'TrainingHistoryPage',
  data () {
    return {
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
        "2023-05-03": [
          {
            "id": 2,
            "name": "",
            "start": "2023-05-03 10:00:00",
            "end": "2023-05-03 11:30:00",
            "color": "#262626",
            "timed": true
          },
        ],
        "2023-05-05": [
          {
            "id": 3,
            "name": "",
            "start": "2023-05-05 09:00:00",
            "end": "2023-05-05 10:30:00",
            "color": "#262626",
            "timed": true
          },
        ],
        "2023-05-08": [
          {
            "id": 4,
            "name": "",
            "start": "2023-05-08 09:30:00",
            "end": "2023-05-08 11:00:00",
            "color": "#262626",
            "timed": true
          },
        ],
        "2023-05-13": [
          {
            "id": 5,
            "name": "",
            "start": "2023-05-13 09:00:00",
            "end": "2023-05-13 10:30:00",
            "color": "#262626",
            "timed": true
          },
        ],
        "2023-05-16": [
          {
            "id": 6,
            "name": "",
            "start": "2023-05-16 09:30:00",
            "end": "2023-05-16 11:00:00",
            "color": "#262626",
            "timed": true
          },
        ],
        "2023-05-19": [
          {
            "id": 7,
            "name": "",
            "start": "2023-05-19 09:00:00",
            "end": "2023-05-19 10:30:00",
            "color": "#262626",
            "timed": true
          },
          {
            "id": 8,
            "name": "",
            "start": "2023-05-19 18:00:00",
            "end": "2023-05-19 19:30:00",
            "color": "#262626",
            "timed": true
          },
        ]
      },
      menuList: {
        "1": [
          { "id": 1, "trainingID": 1, "name": "メニュー1", "kg": "10kg" },
          { "id": 2, "trainingID": 1, "name": "メニュー2", "kg": "20kg" },
        ],
        "2": [
          { "id": 3, "trainingID": 2, "name": "メニュー1", "kg": "10kg" },
          { "id": 4, "trainingID": 2, "name": "メニュー2", "kg": "20kg" },
          { "id": 5, "trainingID": 2, "name": "メニュー3", "kg": "30kg" },
        ],
        "3": [
          { "id": 6, "trainingID": 3, "name": "メニュー1", "kg": "10kg" },
          { "id": 7, "trainingID": 3, "name": "メニュー2", "kg": "20kg" },
        ],
        "4": [
          { "id": 8, "trainingID": 4, "name": "メニュー1", "kg": "10kg" },
          { "id": 9, "trainingID": 4, "name": "メニュー2", "kg": "20kg" },
          { "id": 10, "trainingID": 4, "name": "メニュー3", "kg": "30kg" },
        ],
        "5": [
          { "id": 11, "trainingID": 5, "name": "メニュー1", "kg": "10kg" },
          { "id": 12, "trainingID": 5, "name": "メニュー2", "kg": "20kg" },
        ],
        "6": [
          { "id": 13, "trainingID": 6, "name": "メニュー1", "kg": "10kg" },
          { "id": 14, "trainingID": 6, "name": "メニュー2", "kg": "20kg" },
          { "id": 15, "trainingID": 6, "name": "メニュー3", "kg": "30kg" },
        ],
        "7": [
          { "id": 16, "trainingID": 7, "name": "メニュー1", "kg": "10kg" },
          { "id": 17, "trainingID": 7, "name": "メニュー2", "kg": "20kg" },
          { "id": 18, "trainingID": 7, "name": "メニュー3", "kg": "30kg" },
          { "id": 19, "trainingID": 7, "name": "メニュー4", "kg": "40kg" },
        ],
        "8": [
          { "id": 20, "trainingID": 8, "name": "メニュー1", "kg": "10kg" },
          { "id": 21, "trainingID": 8, "name": "メニュー2", "kg": "20kg" },
        ],
      },
      currentDay: '',
      currentEvent: {},
      defaultMenus: [{ "id": 0, "trainingID": 0, "name": "-", "kg": "-" }],
    }
  },
  mounted () {
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
