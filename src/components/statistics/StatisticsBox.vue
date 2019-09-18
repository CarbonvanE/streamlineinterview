<template>
  <div class="box">
    <p class="title is-2">{{ title }}</p>
    <p class="subtitle is-3">{{ number === null ? "..." : number }}</p>  </div>
</template>


<script>
export default {
  name: 'StatisticsBox',
  props: {
    title: {type: String, required: true},
    number: {value: [Number, null], required: true}
  }
}
</script>


<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/derived-variables";

  .box {
    flex: 1;
    height: 100%;
    margin: 10px;
  }

  @media only screen and (max-width: $tablet) {
    .box {
      flex: none;
      width: 100%;
    }
  }
</style>
