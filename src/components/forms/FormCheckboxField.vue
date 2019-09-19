<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input
          type="checkbox"
          :disabled="disabled"
          :checked="checked"
          @input="toggleChecked">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormCheckboxField',
    props: {
      label: {type: String, required: true},
      disabled: {type: Boolean, required: false},
      checked: {type: Boolean, required: true},
    },
    methods: {
      toggleChecked(event) {
        this.$emit('update:checked', event.target.checked)
      }
    }
  }
</script>
