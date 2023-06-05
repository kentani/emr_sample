<template>
  <v-card flat rounded="lg">
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-card flat rounded="lg">
            <v-card-title class="px-1">
              <v-row no-gutters>
                <v-col
                  cols="10"
                  sm="11"
                >
                  <div class="text-h6 font-weight-bold test">カテゴリー</div>
                </v-col>

                <v-col
                  cols="2"
                  sm="1"
                  class="text-right"
                >
                  <v-btn
                    icon
                    outlined
                    color="main"
                    @click="onClickAddCategory"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-text class="px-1">
              <v-row>
                <v-col
                  v-for="category in categories"
                  :key="`category-${category.id}`"
                  cols="6"
                  sm="4"
                  md="3"
                  lg="2"
                >
                  <v-btn
                    outlined
                    block
                    color="main"
                    @click="onClickCategory(category)"
                  >
                    {{ category.text }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12"><v-divider /></v-col>

        <v-col cols="12">
          <v-card flat rounded="lg">
            <v-card-title class="px-1">
              <v-row no-gutters>
                <v-col
                  cols="5"
                  sm="7"
                >
                  <div class="text-h6 font-weight-bold test">メニュー</div>
                </v-col>

                <v-col
                  cols="5"
                  sm="4"
                >
                  <v-select
                    v-model="selectedCategory"
                    :items="categories"
                    label="カテゴリー"
                    outlined
                    dense
                    hide-details
                    return-object
                    color="main"
                    item-color="main"
                  ></v-select>
                </v-col>

                <v-col
                  cols="2"
                  sm="1"
                  class="text-right"
                >
                  <v-btn
                    icon
                    outlined
                    color="main"
                    @click="onClickAddMenu"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-text class="px-1">
              <v-row>
                <v-col
                  v-for="menu in currentMenus"
                  :key="`menu-${menu.id}`"
                  cols="6"
                  sm="4"
                  md="3"
                  lg="2"
                >
                  <v-btn
                    outlined
                    block
                    color="main"
                    @click="onClickMenu(menu)"
                  >
                    {{ menu.name }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>

    <v-dialog
      v-model="categoryFormDialog"
      scrollable
      max-width="500"
    >
      <v-card
        flat
      >
        <v-card-title>
          カテゴリー追加
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="categoryForm.name"
            label="カテゴリー名"
            dense
            hide-details
            color="main"
            class="mt-4"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            text
            @click="onClickCategoryFormCancel"
          >
            キャンセル
          </v-btn>

          <v-btn
            text
            color="main"
            @click="onClickCategoryFormSave"
          >
            保存
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="menuFormDialog"
      scrollable
      max-width="500"
    >
      <v-card
        flat
      >
        <v-card-title>
          メニュー追加
        </v-card-title>

        <v-card-text>
          <v-select
            v-model="menuForm.category"
            :items="categories"
            label="カテゴリー"
            outlined
            dense
            hide-details
            color="main"
            item-color="main"
            class="mt-4"
          ></v-select>

          <v-text-field
            v-model="menuForm.name"
            label="メニュー名"
            dense
            hide-details
            color="main"
            class="mt-6"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            text
            @click="onClickMenuFormCancel"
          >
            キャンセル
          </v-btn>

          <v-btn
            text
            color="main"
            @click="onClickMenuFormSave"
          >
            保存
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'PatonaTrainingSettingPage',
  layout: 'settings',
  data: () => ({
    // カテゴリー
    categories: [
      { id: 1, text: '肩', name: '肩' },
      { id: 2, text: '腕', name: '腕' },
      { id: 3, text: '腹', name: '腹' },
      { id: 4, text: '太もも', name: '太もも' },
      { id: 5, text: '背中', name: '背中' },
    ],
    clickedCategory: {},
    categoryFormDialog: false,
    categoryForm: {
      name: '',
    },
    categoryEdit:false,

    // メニュー
    menus: {
      1: [
        { id: 1, name: '肩メニュー1', categoryID: 1 },
        { id: 2, name: '肩メニュー2', categoryID: 1 },
        { id: 3, name: '肩メニュー3', categoryID: 1 },
        { id: 4, name: '肩メニュー4', categoryID: 1 },
        { id: 5, name: '肩メニュー5', categoryID: 1 },
        { id: 6, name: '肩メニュー6', categoryID: 1 },
        { id: 7, name: '肩メニュー7', categoryID: 1 },
        { id: 8, name: '肩メニュー8', categoryID: 1 },
      ],
      2: [
        { id: 21, name: '腕メニュー1', categoryID: 2 },
      ],
      3: [
        { id: 31, name: '腹メニュー1', categoryID: 3 },
      ],
      4: [
        { id: 41, name: '太ももメニュー1', categoryID: 4 }  ,
      ],
      5: [
        { id: 51, name: '背中メニュー1', categoryID: 5 },
      ],
    },
    selectedCategory: {},
    clickedMenu: {},
    menuFormDialog: false,
    menuForm: {
      name: '',
      category: {},
    },
    menuEdit: false
  }),
  mounted() {
    this.$nuxt.setLayout('settings');
    this.selectedCategory = this.categories[0];
  },
  computed: {
    currentMenus() {
      return this.menus[this.selectedCategory.id] || [];
    },
  },
  methods: {
    log() {
      console.log(this.selectedCategory);
    },

    // イベントハンドラ
    onClickCategory(category) {
      this.clickedCategory = category;
      this.categoryForm = {...this.clickedCategory}
      this.categoryFormDialog = true;
    },
    onClickAddCategory() {
      this.categoryFormDialog = true;
    },
    onClickCategoryFormCancel() {
      this.resetCategoryForm();
      this.categoryFormDialog = false;
    },
    onClickCategoryFormSave() {
      this.resetCategoryForm();
      this.categoryFormDialog = false;
    },
    onClickMenu(menu) {
      this.clickedMenu = menu;
      this.menuForm = {
        ...this.clickedMenu,
        category: this.categories.find(c => c.id === this.clickedMenu.categoryID),
      }
      this.menuFormDialog = true;
    },
    onClickAddMenu() {
      this.menuForm.categoryID = this.selectedCategory;
      this.menuFormDialog = true;
    },
    onClickMenuFormCancel() {
      this.resetMenuForm();
      this.menuFormDialog = false;
    },
    onClickMenuFormSave() {
      this.resetMenuForm();
      this.menuFormDialog = false;
    },

    // Form系
    setCategoryForm() {
      this.categoryForm = {...this.clickedCategory}
    },
    resetCategoryForm() {
      this.categoryForm = {
        name: '',
      }
    },
    setMenuForm() {
      this.menuForm = {...this.clickedMenu}
    },
    resetMenuForm() {
      this.menuForm = {
        name: '',
        category: '',
      }
    }
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
