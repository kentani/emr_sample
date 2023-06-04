<template>
  <v-stepper-content step="1">
    <v-card
      flat
      class="mt-6"
    >
      <v-row
        no-gutters
        justify="space-between"
      >
        <v-col
          cols="12"
          md="2"
          align-self="center"
        >
          <v-card flat elevation="0">
            <v-img :src="userImage"></v-img>

            <v-overlay
              absolute
              :value="true"
            >
              <v-btn
                icon
                x-large
              >
                <v-icon>mdi-camera</v-icon>
              </v-btn>
            </v-overlay>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="9"
        >
          <v-row no-gutters>
            <v-col cols="12">
              <v-card-title>
                <v-text-field
                  label="名前"
                  color="#262626"
                ></v-text-field>
              </v-card-title>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  label="生年月日"
                  color="#262626"
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  label="性別"
                  color="#262626"
                ></v-text-field>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row
        no-gutters
        justify="space-between"
      >
        <v-col
          cols="12"
          md="2"
          align-self="center"
        >
        </v-col>

        <v-col
          cols="12"
          md="9"
        >
          <v-row no-gutters>
            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  label="運動経験"
                  color="#262626"
                  dense
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  label="けが・病気"
                  color="#262626"
                  dense
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  label="目的"
                  color="#262626"
                  dense
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-text>
                <v-text-field
                  label="目標"
                  color="#262626"
                  dense
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col cols="12">
              <v-card-text>
                <v-textarea
                  label="メモ"
                  color="#262626"
                  dense
                ></v-textarea>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="text-center">
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
export default {
  name: 'AddPersonalDataPage',
  data: () => ({
    userImage: require('@/assets/images/user.png'),
  }),
  mounted() {
    this.$emit('setStep', 'personal-data');
  },
  methods: {
    onClickNextBtn() {
      this.$emit('clickNextBtn', 'personal-data');
    }
  }
}
</script>

<style scoped>
</style>
