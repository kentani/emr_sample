<template>
  <v-row>
    <v-col cols="12" sm="4" class="d-block d-sm-none">
      <v-card rounded="lg" flat>
        <v-card-title>
          <v-row
            no-gutters
            justify="center"
            align="center"
          >
            <v-col
              cols="2"
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
              cols="2"
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
              rounded="lg"
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
                v-for="(d, i) in date"
                :key="`d-${i}-${i}`"
                flat
                rounded="lg"
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
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="8">
      <v-card flat rounded="lg">
        <v-card-title class="py-6">
          {{ currentDate }}
        </v-card-title>

        <v-card-text>
          <v-expansion-panels
            v-model="panel"
            multiple
          >
            <v-expansion-panel
              v-for="menu in menus"
              :key="`menu-${menu.id}`"
              :readonly="menu.memo.length === 0"
            >
              <v-expansion-panel-header class="pl-0 pr-4">
                <v-card flat>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-card-title class="pt-0">
                        {{ menu.name }}
                      </v-card-title>

                      <v-card-subtitle class="pb-0 mx-1">
                        {{ menu.category }}
                      </v-card-subtitle>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-card-text class="py-0">
                        <v-row>
                          <v-col cols="6">
                            <div class="text-center text-caption main--text">重量</div>
                            <div class="text-center text-h6 main--text font-weight-bold">{{ menu.kg }}</div>
                          </v-col>

                          <v-col cols="6">
                            <div class="text-center text-caption main--text">セット</div>
                            <div class="text-center text-h6 main--text font-weight-bold">{{ menu.set }}</div>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>

                <template v-slot:actions>
                  <v-icon color="main">
                    {{ menu.memo.length > 0 ? '$expand' : 'mdi-border-none-variant' }}
                  </v-icon>
                </template>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                {{ menu.memo }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" class="d-none d-sm-block">
      <v-card rounded="lg" flat>
        <v-card-title>
          <v-row
            no-gutters
            justify="center"
            align="center"
          >
            <v-col
              cols="2"
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
              cols="2"
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
                v-for="(d, i) in date"
                :key="`d-${i}-${i}`"
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
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PatonaIndexPage',
  layout: 'PatonaDefaultLayout',
  data: () => ({
    week: ['月', '火', '水', '木', '金', '土', '日'],
    dates: [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]],
    menus: [
      {
        id: 1,
        name: 'メニュー1',
        category: 'カテゴリ',
        kg: '10kg',
        set: 3,
        memo: 'テキストテキストテキストテキストテキストテキスト',
      },
      {
        id: 2,
        name: 'メニュー2',
        category: 'カテゴリ',
        kg: '20kg',
        set: 2,
        memo: '',
      },
      {
        id: 3,
        name: 'メニュー3',
        category: 'カテゴリ',
        kg: '30kg',
        set: 2,
        memo: '',
      },
    ],
    date: 0,
    currentMonth: 'YYYY年 M月',
    currentDate: 'YYYY年 M月 D日',
    panel: [],
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
</style>
