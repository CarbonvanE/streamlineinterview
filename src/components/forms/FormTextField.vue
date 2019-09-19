<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        type="text"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        @input="updateValue">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormTextField',
    props: {
      label: {type: String, required: true},
      disabled: {type: Boolean, required: false},
      value: {type: [String, Number], required: true},
      placeholder: {type: String, required: false},
    },
    methods: {
      updateValue(event) {
        this.$emit('update:value', event.target.value)
      }
    }
  }
</script>
