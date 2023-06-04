<template>
  <v-row no-gutters>
    <v-col cols="3">
      <v-card outlined tile style="width: 100%; height: 100%;">
        <v-card-title>
          <v-row
            no-gutters
            justify="center"
            align="center"
          >
            <v-col
              cols="1"
              class="d-flex justify-center"
              align-self="center"
              @click="onClickPrevWeek"
            >
              <v-btn x-large icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </v-col>

            <v-col
              cols="8"
              class="d-flex justify-center"
              align-self="center"
            >
              {{ currentMonth }}
            </v-col>

            <v-col
              cols="1"
              class="d-flex justify-center"
              align-self="center"
              @click="onClickNextWeek"
            >
              <v-btn x-large icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <div class="d-flex">
            <v-card
              v-for="(day, index) in week"
              :key="`day-${index}-${index}`"
              flat
              tile
              style="width: 14%; height: 40px;"
            >
              <v-card-title class="justify-center pa-0 text-body-2">
                {{ day }}
              </v-card-title>
            </v-card>
          </div>

          <div
            v-for="(date, index) in dates"
            :key="`date-${index}-${index}`"
          >
            <div class="d-flex">
              <v-card
                v-for="(d, index) in date"
                :key="`d-${index}-${index}`"
                flat
                tile
                style="width: 14%; height: 40px;"
              >
                <v-card-title class="justify-center pa-0">
                  <v-btn
                    fab
                    dark
                    elevation="0"
                    x-small
                    :ripple="false"
                    :text="index !== 0 || d !== 2"
                    color="main"
                    class="pa-0"
                  >{{ d }}</v-btn>
                </v-card-title>
              </v-card>
            </div>
          </div>

          <div>
            <ul style="width: 100%;">
              <li
                v-for="(menu, index) in menus"
                :key="`menu-${index}`"
                class="pb-1"
              >
                {{ menu.name }}
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="9">
      <div class="d-flex">
        <v-card
          v-for="(day, index) in week"
          :key="`day-${index}`"
          tile
          dark
          color="main"
          style="width: 14%;"
        >
          <v-card-title class="justify-center py-2 text-body-2">
            {{ day }}
          </v-card-title>
        </v-card>
      </div>

      <div
        v-for="(date, index) in dates"
        :key="`date-${index}`"
        style="width: 100%;"
      >
        <div class="d-flex">
          <v-card
            v-for="(d, index) in date"
            :key="`d-${index}`"
            outlined
            tile
            style="width: 14%; height: 140px;"
          >
            <v-card-title class="justify-center pa-0 pt-2 text-body-2">
              {{ d }}
            </v-card-title>
          </v-card>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PatonaIndexPage',
  layout: 'patona-default',
  data: () => ({
    week: ['月', '火', '水', '木', '金', '土', '日'],
    dates: [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]],
    menus: [
      { id: 1, name: 'メニュー1', kg: '20' },
      { id: 2, name: 'メニュー2', kg: '20' },
      { id: 3, name: 'メニュー3', kg: '20' },
    ],
    date: 0,
    currentMonth: 'YYYY年 M月',
  }),
  methods: {
    incrementDate() {
      this.date = this.date + 1;
      return this.date;
    },
    onClickPrevWeek() {

    },
    onClickNextWeek() {

    }
  }
}
</script>

<style scoped>
ul, ol {
  padding: 0;
}

ul li {
  position: relative;
  list-style-type: none!important;/*ポチ消す*/
  padding: 0.5em 0.5em 0.5em 0.5em;
  margin-bottom: 5px;
  line-height: 1.5;
  background: #004D40;
  vertical-align: middle;
  color: #fff;
  border-radius: 15px 0px 0px 15px;/*左側の角丸く*/
}

ul li:before{
  display: inline-block;
  vertical-align: middle;
  /*以下白丸つくる*/
  content:'';
  width:1em;
  height: 1em;
  background: #fff;
  border-radius: 50%;
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
