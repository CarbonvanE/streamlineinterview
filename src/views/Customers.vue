<template>
  <div class="customers">
    <SearchBar v-if="customers" :query="query" @updateQuery="updateQuery" :count="this.filteredCustomers.length" />
    <Loader v-if="!customers" text="Loading customers..." />
    <CustomersTable v-if="customers" :customers="filteredCustomers" />
  </div>
</template>

<script>
  import CustomersTable from '@/components/customers/CustomersTable.vue'
  import SearchBar from '@/components/customers/SearchBar.vue'
  import Loader from '@/components/layout/Loader.vue'
  import { fetchCustomers } from '@/utils/api'

  export default {
    name: 'customers',
    components: { CustomersTable, SearchBar, Loader },

    data () {
      return {
        customers: null,
        query: ''
      }
    },

    methods: {
      updateQuery(variable) {
        this.query = variable
      }
    },

    computed: {
      filteredCustomers: function() {
        if (!this.query) return this.customers

        const text = this.query.toLowerCase()
        return this.customers.filter(customer => {
          if (customer.name.toLowerCase().includes(text)) return true
          if (customer.email.toLowerCase().includes(text)) return true
          if (customer.address.toLowerCase().includes(text)) return true
          else return false
        })
      }
    },

    async mounted () {
      const customers = await fetchCustomers()
      this.customers = customers
    }
  }
</script>
