<template>
  <div class="search-bar-wrapper">
    <div
      v-if="query"
      class="counter">
        {{ count }} customer{{ count === 1 ? "" : "s" }} found
    </div>
    <div class="control has-icons-left">
      <span class="icon is-small is-left">
        <icon name="search"></icon>
      </span>
      <input
        class="input is-rounded"
        type="text"
        placeholder="Find customer"
        v-bind:value="query"
        v-on:input="updateQuery($event.target.value)"
      >
    </div>
  </div>
</template>


<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'SearchBar',
    components: { Icon },
    props: {
      query: {type: String, required: true},
      count: {type: Number, required: true}
    },
    methods: {
      updateQuery: function (value) {
        this.$emit('updateQuery', value);
      }
    }
  }
</script>


<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/derived-variables";

  .search-bar-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    .counter {
      margin-right: 15px;
      font-size: 0.9em;
      font-weight: 600;
      color: $grey-light;
    }

    .control {
      width: 220px;
      max-width: 100%;
    }

    @media only screen and (max-width: $tablet) {
      flex-flow: column-reverse;
      padding: 0 20px;

      .counter {
        margin-right: 0;
        margin-top: 10px;
      }

      .control {
        width: 100%;
      }
    }
  }
</style>
