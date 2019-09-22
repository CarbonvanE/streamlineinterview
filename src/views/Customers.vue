<template>
  <div class="customers">
    <SearchBar v-if="customers" :query.sync="query" :count="filteredCustomers.length" />
    <Loader v-if="!customers" text="Loading customers..." />
    <CustomersTable v-if="customers" :customers="sortedCustomers" :sortBy.sync="sortBy" />
  </div>
</template>

<script>
  import CustomersTable from '@/components/customers/CustomersTable.vue'
  import SearchBar from '@/components/customers/SearchBar.vue'
  import Loader from '@/components/layout/Loader.vue'
  import { fetchCustomers } from '@/utils/api'
  import { sortAscending, sortDescending } from '@/utils/sort'

  export default {
    name: 'customers',
    components: { CustomersTable, SearchBar, Loader },

    data () {
      return {
        customers: null,
        query: '',
        sortBy: 'id'
      }
    },
    computed: {
      filteredCustomers: function() {
        const { customers, query } = this
        const normalizeField = value => value.toString().toLowerCase()

        // If there is no search query, return the full list of customers
        if (!query) return customers

        // Check if the query string can be found in the name, email, or address field
        const text = normalizeField(query)
        return customers.filter(customer => {
          if (normalizeField(customer.name).includes(text)) return true
          if (normalizeField(customer.email).includes(text)) return true
          if (normalizeField(customer.address).includes(text)) return true
        })
      },
      sortedCustomers: function() {
        const { filteredCustomers: customers, sortBy } = this

        if (!sortBy.startsWith('-')) return customers.sort((a, b) => sortAscending(a[sortBy], b[sortBy]))
        return customers.sort((a, b) => sortDescending(a[sortBy.substring(1)], b[sortBy.substring(1)]))
      }
    },

    async mounted () {
      const customers = await fetchCustomers()
      this.customers = customers
    }
  }
</script>
