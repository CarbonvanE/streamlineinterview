<template>
  <td class="table-data" :class="{ centered }">
    <slot />
  </td>
</template>


<script>
  export default {
    name: 'TableData',
    props: {
      centered: {type: Boolean, required: false},
    },
  }
</script>


<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/derived-variables";

  .table-data {
    vertical-align: middle;

    svg, img {
      vertical-align: middle;
    }

    img {
      border-radius: $radius-large;
      width: 32px;
      height: 32px;
    }
  }

  .table-data.centered {
    text-align: center;
  }
</style>
