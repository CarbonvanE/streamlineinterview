<template>
  <div class="not-found-404">
    <icon name="exclamation-triangle" />
    <h3 class="title is-3">
      Customer '{{ this.$route.params.id }}' doesn't exist
    </h3>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'NotFound404',
    components: { Icon },
    props: {
      message: {type: String, required: false, default: '404 Page not Found'},
    }
  }
</script>

<style scoped lang="scss">
  .not-found-404 {
    margin: 50px;
    width: 100%;
    text-align: center;

    svg.fa-icon {
      // opacity: 0.67;
      height: 4em;
      width: 4em;
      margin-bottom: 2em;
    }
  }
</style>
