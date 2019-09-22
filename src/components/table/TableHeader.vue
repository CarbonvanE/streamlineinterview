<template>
  <th class="table-header-field">
    <div class="column-name" :class="className">
      <slot />
    </div>
  </th>
</template>


<script>
  export default {
    name: 'TableHeader',
    props: {
      className: {type: String, required: false},
    }
  }
</script>


<style scoped lang="scss">
  .table-header-field {
    vertical-align: middle;
  }
</style>
