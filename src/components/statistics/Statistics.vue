<template>
  <div class="boxes">
    <StatisticsBox title="Total" :number="1294" />
    <StatisticsBox title="Active" :number="842" />
    <StatisticsBox title="Inactive" :number="452"></StatisticsBox>
  </div>
</template>


<script>
import StatisticsBox from './StatisticsBox.vue'

export default {
  name: 'Statistics',
  components: {
    StatisticsBox
  }
}
</script>


<style scoped>
.boxes {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  margin: 20px;
}
</style>
