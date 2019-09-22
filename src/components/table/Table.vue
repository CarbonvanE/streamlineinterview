<template>
  <div class="table-container">
    <table class="table is-hoverable">
      <slot />
    </table>
  </div>
</template>


<script>
  export default {
    name: 'Table',
  }
</script>


<style scoped lang="scss">
  table {
    width: 100%;
    margin: 10px 0;
  }
</style>
