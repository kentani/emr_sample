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
                        <th class="text-left">
                          メモ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="menu in currentMenus"
                        :key="menu.id"
                        @click="onClickMenuRow(menu)"
                      >
                        <td style="width: 30%">{{ menu.name }}</td>
                        <td style="width: 10%">{{ menu.kg }}</td>
                        <td style="width: 60%">{{ omittedText(menu.memo) }}</td>
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

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="600"
        persistent
      >
        <v-card v-if="step === 1">
          <v-card-title class="text-h6">
            {{ `時間を入力してください。` }}
          </v-card-title>

          <div>
            <v-card-text class="py-0">
              <v-row>
                <v-col cols="12">
                  <v-time-picker
                    v-model="time"
                    ampm-in-title
                    flat
                    full-width
                    color="#262626"
                    header-color="#262626"
                  ></v-time-picker>
                </v-col>
              </v-row>
            </v-card-text>
          </div>

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
              @click="onClickNext"
            >
              次へ
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card v-if="step === 2">
          <v-card-title class="text-h6">
            メニューを入力してください。
          </v-card-title>

          <div>
            <v-card-text class="py-0">
              <v-card
                v-for="(form, index) in menuForms"
                :key="`menu-form-${index}`"
                flat
                outlined
                class="py-2 px-4 mb-2"
              >
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="form.name"
                      :items="selectOptionForMenu"
                      label="メニュー"
                      color="#262626"
                    ></v-select>
                  </v-col>

                  <v-col cols="12">
                    <v-slider
                      v-model="form.kg"
                      class="align-center"
                      color="#262626"
                      track-color="gray"
                      :max="100"
                      :min="0"
                      label="重量"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="form.kg"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                        ></v-text-field>
                      </template>
                    </v-slider>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      v-model="form.memo"
                      label="メモ"
                      color="#262626"
                      hide-details
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-card>
            </v-card-text>

            <v-card-actions class="py-0">
              <v-spacer></v-spacer>

              <v-btn
                text
                @click="onClickAddMenu"
              >
                メニューを追加
              </v-btn>
            </v-card-actions>
          </div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="onClickBack"
            >
              戻る
            </v-btn>
            <v-btn
              text
              @click="onClickSave"
            >
              保存
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2"
        max-width="600"
      >
        <v-card flat outlined class="pa-6">
          <v-card-text class="pa-0">
            {{ currentMenu.memo }}
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'TrainingHistoryPage',
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
        { "id": 1, "trainingID": 1, "name": "メニュー1", "kg": 10, "memo": 'abc' },
        { "id": 2, "trainingID": 1, "name": "メニュー2", "kg": 20, "memo": 'abc' },
      ],
      "2": [
        { "id": 3, "trainingID": 2, "name": "メニュー1", "kg": 10, "memo": '' },
        { "id": 4, "trainingID": 2, "name": "メニュー2", "kg": 20, "memo": 'abc' },
        { "id": 5, "trainingID": 2, "name": "メニュー3", "kg": 30, "memo": '' },
      ],
      "3": [
        { "id": 6, "trainingID": 3, "name": "メニュー1", "kg": 10, "memo": '' },
        { "id": 7, "trainingID": 3, "name": "メニュー2", "kg": 20, "memo": 'abc' },
      ],
      "4": [
        { "id": 8, "trainingID": 4, "name": "メニュー1", "kg": 10, "memo": 'abc' },
        { "id": 9, "trainingID": 4, "name": "メニュー2", "kg": 20, "memo": 'abc' },
        { "id": 10, "trainingID": 4, "name": "メニュー3", "kg": 30, "memo": 'abc' },
      ],
      "5": [
        { "id": 11, "trainingID": 5, "name": "メニュー1", "kg": 10, "memo": 'abc' },
        { "id": 12, "trainingID": 5, "name": "メニュー2", "kg": 20, "memo": '' },
      ],
      "6": [
        { "id": 13, "trainingID": 6, "name": "メニュー1", "kg": 10, "memo": '' },
        { "id": 14, "trainingID": 6, "name": "メニュー2", "kg": 20, "memo": '' },
        { "id": 15, "trainingID": 6, "name": "メニュー3", "kg": 30, "memo": '' },
      ],
      "7": [
        { "id": 16, "trainingID": 7, "name": "メニュー1", "kg": 10, "memo": 'abc' },
        { "id": 17, "trainingID": 7, "name": "メニュー2", "kg": 20, "memo": '' },
        { "id": 18, "trainingID": 7, "name": "メニュー3", "kg": 30, "memo": 'abc' },
        { "id": 19, "trainingID": 7, "name": "メニュー4", "kg": 40, "memo": '' },
      ],
      "8": [
        { "id": 20, "trainingID": 8, "name": "メニュー1", "kg": 10, "memo": '' },
        { "id": 21, "trainingID": 8, "name": "メニュー2", "kg": 20, "memo": 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' },
      ],
    },
    currentDay: '',
    currentEvent: {},
    defaultMenus: [{ "id": 0, "trainingID": 0, "name": "-", "kg": "-", 'memo': '' }],
    dialog: false,
    dialog2: false,
    step: 1,
    selectOptionForMenu: [
      'メニュー1',
      'メニュー2',
      'メニュー3',
      'メニュー4',
      'メニュー5',
    ],
    menuForms: [{ 'name': '', 'kg': 0, 'memo': '' }],
    defaultMenuForm: [{ 'name': '', 'kg': 0, 'memo': '' }],
    time: '00:00',
    currentDate: '',
    currentDateKey: '',
    currentMenuID: 0,
    currentMenu: 0,
    isEdit: false,
  }),
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
      this.value = moment(date.date).format();
      this.currentDate = moment(date.date).format('MM/DD');

      if(this.currentEvent) {
        this.currentEvent.color = "#262626";
      }

      this.currentEvent = this.eventList[date.date]?.slice(-1)[0];

      if(date.date === this.currentDateKey) {
        this.dialog = true;
      }

      this.currentDateKey = date.date;
    },
    onClickEvent({ event }) {
      this.value = moment(event.start).format();

      if(this.currentEvent) {
        this.currentEvent.color = "#262626";
      }

      event.color = "#9E9E9E";

      if(event.id === this.currentEvent?.id) {
        this.time = moment(event.start).format('HH:mm');
        this.menuForms = this.menuList[event.id];
        this.isEdit = true;
        this.dialog = true;
      }

      this.currentEvent = event;
      this.currentDateKey = moment(event.start).format('YYYY-MM-DD');
    },
    onClickCancel() {
      this.closeDialog();
    },
    onClickNext() {
      this.step = 2;
    },
    onClickBack() {
      this.step = 1;
    },
    onClickSave() {
      if(this.isEdit) {
        this.updateTraining();
      } else {
        this.createTraining();
      }

      this.closeDialog();
    },
    createTraining() {
      const trainingID = this.events.length + 1;
      const training = {
        "id": trainingID,
        "name": "",
        "start": `${this.currentDateKey} ${this.time}`,
        "end": `${this.currentDateKey} ${this.time}`,
        "color": "#262626",
        "timed": true
      }

      const newEventList = {...this.eventList};

      if(newEventList[this.currentDateKey]) {
        newEventList[this.currentDateKey].push(training);
      } else {
        newEventList[this.currentDateKey] = [training];
      };

      this.eventList = Object.assign({}, this.eventList, newEventList);

      let menuID = Object.values(this.eventList).flat().length + 1;
      this.menuList[trainingID] = [];

      this.menuForms.forEach(form => {
        this.menuList[trainingID].push({
          ...form,
          "id": menuID,
          "trainingID": trainingID,
        });

        menuID ++;
      });

      this.currentEvent = training;
    },
    updateTraining() {
      let training = {};

      this.eventList[this.currentDateKey].forEach(t => {
        if(t.id === this.currentEvent.id) {
          training = t;
        }
      });

      const newEventList = {...this.eventList};

      newEventList[this.currentDateKey] = {
        ...training,
        start: `${this.currentDateKey} ${this.time}`,
        end: `${this.currentDateKey} ${this.time}`,
      }

      this.eventList = Object.assign({}, this.eventList, newEventList);

      this.menuList[training.id] = this.deepCopy(this.menuForms);

      this.currentEvent = training;
    },

    onClickAddMenu() {
      this.menuForms.push(this.deepCopy(this.defaultMenuForm))[0];
    },
    closeDialog() {
      this.time = '00:00';
      this.menuForms = this.deepCopy(this.defaultMenuForm);
      this.step = 1;
      this.isEdit = false;
      this.dialog = false;
    },
    deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj))
    },
    omittedText(text) {
      return text?.length > 20 ? text.slice(0, 20) + "…" : text;
    },
    onClickMenuRow(menu) {
      if(menu.memo.length > 0) {
        this.dialog2 = true;
      }

      this.currentMenuID = menu.id;
      this.currentMenu = menu;
    }
  }
}
</script>

<style scoped>
</style>
