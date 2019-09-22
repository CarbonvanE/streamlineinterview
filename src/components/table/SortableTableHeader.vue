<template>
  <TableHeader>
    <div :class="className" @click="changeSortBy">
      <div class="column-value">{{ name }}</div>
      <div class="sorting-icon">
        <icon v-if="isSortedDown" name="sort-amount-down-alt" />
        <icon v-if="isSortedUp" name="sort-amount-down" />
      </div>
    </div>
  </TableHeader>
</template>


<script>
  import TableHeader from './TableHeader.vue'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'SortableTableHeader',
    components: { TableHeader, Icon },
    props: {
      name: {type: String, required: true},
      sortBy: {type: String, required: true},
      changeSortBy: {type: Function, required: true}
    },
    computed: {
      isSortedDown: function() {
        return this.sortBy === this.name.toLowerCase() ? true : false
      },
      isSortedUp: function() {
        return this.sortBy === `-${this.name.toLowerCase()}` ? true : false
      },
      className: function() {
        let base = 'sortable'
        if (this.isSortedDown) return `${base} is-sorted-by up`
        else if (this.isSortedUp) return `${base} is-sorted-by down`
        return base
      }
    }
  }
</script>


<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/derived-variables";

  .sortable {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px transparent;
    cursor: pointer;
  }

  .sortable:hover {
    border-bottom: solid 2px $white-ter
  }

  .sortable.is-sorted-by {
    border-bottom: solid 2px $grey-lighter;
    transition: border-bottom 0.3s;
  }

  .sorting-icon {
    width: 20px;
  }
</style>
