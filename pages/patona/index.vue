<template>
  <div>
    TOP
  </div>
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
</style>
