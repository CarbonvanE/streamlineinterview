<template>
  <button
    class="button"
    :class="{
      [`is-${type}`]: true,
      'is-loading': loading,
      'is-fullwidth': fullWidth,
      'is-outlined': outlined
    }"
    v-on:click.prevent="onClick">
      <icon v-if="icon" :name="icon" />
      <span>{{ text }}</span>
  </button>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'Button',
    components: { Icon },
    props: {
      text: {type: String, required: true},
      onClick: {type: Function, required: true},
      icon: {type: String, required: false},
      type: {type: String, required: false, default: 'link'},
      loading: {type: Boolean, required: false},
      fullWidth: {type: Boolean, required: false},
      outlined: {type: Boolean, required: false},
    }
  }
</script>
