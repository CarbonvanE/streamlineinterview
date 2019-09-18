<template>
  <div class="customers">
    <Loader v-if="!customers" text="Loading customers..." />
    <CustomersTable v-if="customers" :customers="customers" />
  </div>
</template>

<script>
  import CustomersTable from '@/components/customers/CustomersTable.vue'
  import Loader from '@/components/layout/Loader.vue'
  import { fetchCustomers } from '@/utils/api'

  export default {
    name: 'customers',
    components: { CustomersTable, Loader },

    data () {
      return {
        customers: null
      }
    },

    async mounted () {
      const customers = await fetchCustomers()
      this.customers = customers
    }
  }
</script>
