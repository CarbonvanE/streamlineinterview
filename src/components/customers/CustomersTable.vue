<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Active</th>
        <th><abbr title="Customer image">Img.</abbr></th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in customers" v-bind:key="customer.id">
        <th>{{ customer.id }}</th>
        <td class="active"><icon :name="customer.isActive ? 'check' : 'times'"></icon></td>
        <td class="customer-picture">
          <img :src="customer.picture" :alt="`Picture of ${customer.picture}`">
        </td>
        <td>{{ customer.name }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.phone }}</td>
        <td>{{ customer.address }}</td>
      </tr>
    </tbody>
  </table>
</template>


<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'CustomersTable',
    components: { Icon },
    props: {
      customers: {type: Array, required: true},
    }
  }
</script>


<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/derived-variables";

  table {
    margin: 30px 0;

    th, td {
      vertical-align: middle;

      svg, img {
        vertical-align: middle;
      }
    }

    .active, .customer-picture {
      text-align: center;
    }

    .customer-picture > img {
      border-radius: $radius-large;
      width: 32px;
      height: 32px;
    }
  }
</style>
