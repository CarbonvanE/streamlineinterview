<template>
  <div class="basic-form">
    <div class="box">
      <Message v-if="message" :type="messageType" :message="message" />
      <slot />
      <Button fullWidth :text="buttonText" :loading="loading" :onClick="onSubmit" />
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
  import Message from '@/components/layout/Message.vue'
  import Button from '@/components/layout/Button.vue'

  export default {
    name: 'BasicForm',
    components: { Message, Button },
    props: {
      message: {type: String, required: true},
      messageType: {type: String, required: true},
      buttonText: {type: String, required: false, default:"Submit"},
      loading: {type: Boolean, required: true},
      onSubmit: {type: Function, required: true},
    }
  }
</script>

<style scoped lang="scss">
  .basic-form {
    display: flex;
    justify-content: center;

    .box {
      width: 420px;
      max-width: 100%;

      .button {
        margin-top: 12px;
      }
    }
  }
</style>
