<template>
  <div class="notification is-link" :class="`is-${type}`">
    <div v-if="type" class="icon-wrapper">
      <icon v-if="type === 'success'" name="check" />
      <icon v-if="type === 'warning'" name="info-circle" />
      <icon v-if="type === 'danger'" name="exclamation-triangle" />
    </div>
    <div>{{ message }}</div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'Message',
    components: { Icon },
    props: {
      type: {type: String, required: false},
      message: {type: String, required: true},
    }
  }
</script>

<style scoped lang="scss">
  .notification {
    display: flex;

    .icon-wrapper {
      margin-right: 20px;

      .fa-icon {
        height: 100%;
      }
    }
  }
</style>
