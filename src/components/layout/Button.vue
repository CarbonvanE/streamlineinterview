<template>
  <button
    class="button"
    :class="{
      [`is-${type}`]: true,
      'is-loading': loading,
      'is-fullwidth': fullWidth,
    }"
    v-on:click.prevent="onClick">
      {{ text }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: {type: String, required: true},
      onClick: {type: Function, required: true},
      type: {type: String, required: false, default: 'link'},
      loading: {type: Boolean, required: false},
      fullWidth: {type: Boolean, required: false},
    }
  }
</script>
