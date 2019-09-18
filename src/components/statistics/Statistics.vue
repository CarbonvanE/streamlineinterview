<template>
  <div class="boxes">
    <StatisticsBox title="Total" :number="this.total" />
    <StatisticsBox title="Active" :number="this.active" />
    <StatisticsBox title="Inactive" :number="this.inactive"></StatisticsBox>
  </div>
</template>


<script>
import StatisticsBox from './StatisticsBox.vue'
import { fetchStatistics } from '@/utils/api'

export default {
  name: 'Statistics',
  components: {
    StatisticsBox
  },

  data () {
    return {
      total: null,
      active: null,
      inactive: null
    }
  },

  async mounted () {
    const { total, active, inactive } = await fetchStatistics()
    this.total = total
    this.active = active
    this.inactive = inactive
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
