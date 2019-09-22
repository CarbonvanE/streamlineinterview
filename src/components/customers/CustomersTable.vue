<template>
  <Table>
    <thead >
      <tr>
        <SortableTableHeader name="ID" :sortBy="sortBy" :changeSortBy="changeSortBy" />
        <TableHeader>Active</TableHeader>
        <TableHeader>Img.</TableHeader>
        <SortableTableHeader name="Name" :sortBy="sortBy" :changeSortBy="changeSortBy" />
        <SortableTableHeader name="Email" :sortBy="sortBy" :changeSortBy="changeSortBy" />
        <SortableTableHeader name="Phone" :sortBy="sortBy" :changeSortBy="changeSortBy" />
        <SortableTableHeader name="Address" :sortBy="sortBy" :changeSortBy="changeSortBy" />
        <TableHeader></TableHeader>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in customers" :key="customer._id" :class="{ 'is-inactive': !customer.isActive }">
        <TableData>{{ customer.id }}</TableData>
        <TableData centered>
          <icon :name="customer.isActive ? 'check' : 'times'" />
        </TableData>
        <TableData>
          <img :src="customer.picture" :alt="`Picture of ${customer.picture}`">
        </TableData>
        <TableData>{{ customer.name }}</TableData>
        <TableData>{{ customer.email }}</TableData>
        <TableData>{{ customer.phone }}</TableData>
        <TableData>{{ customer.address }}</TableData>
        <TableData>
          <router-link :to="`/customers/${customer.id}`"><icon scale="1.25" name="edit" /></router-link>
        </TableData>
      </tr>
    </tbody>
  </Table>
</template>


<script>
  import Table from '@/components/table/Table'
  import TableHeader from '@/components/table/TableHeader'
  import SortableTableHeader from '@/components/table/SortableTableHeader'
  import TableData from '@/components/table/TableData'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'CustomersTable',
    components: { Table, TableHeader, SortableTableHeader, TableData, Icon },
    props: {
      customers: {type: Array, required: true},
      sortBy: {type: String, required: true},
    },
    methods: {
      changeSortBy(event) {
        const target = event.target.innerText.replace(' ', '').toLowerCase()
        this.$emit('update:sortBy', this.sortBy === target ? `-${this.sortBy}` : target)
      }
    }
  }
</script>


<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/derived-variables";

  tr.is-inactive,
  tr.is-inactive .fa-icon {
    color: $grey-light;
  }

  .fa-icon {
    color: $grey-light;
  }

  .fa-icon:hover {
    color: $grey-dark;
  }
</style>
