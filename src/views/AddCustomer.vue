<template>
  <div class="new-customer">
    <div class="box">
      <Message v-if="message" :type="messageType" :message="message" />
      <FormTextField label="Prospective ID" :value.sync="prospectiveId" disabled />
      <FormTextField label="Name" :value.sync="name" placeholder="Full name" />
      <FormTextField label="Email" :value.sync="email" placeholder="Email" />
      <FormTextField label="Address" :value.sync="address" placeholder="Address" />
      <FormTextField label="Phone" :value.sync="phone" placeholder="Phone number" />
      <FormTextField label="Picture" :value.sync="picture" placeholder="URl of picture" />
      <FormCheckboxField label="Active user" :checked.sync="isActive" />

      <Button fullWidth text="Submit" :loading="submitting" :onClick="submit" />
    </div>
  </div>
</template>

<script>
  import Message from '@/components/layout/Message.vue'
  import FormTextField from '@/components/forms/FormTextField.vue'
  import FormCheckboxField from '@/components/forms/FormCheckboxField.vue'
  import Button from '@/components/layout/Button.vue'
  import { fetchLastId, createCustomer } from '@/utils/api'

  export default {
    name: 'newCustomer',
    components: { Message, FormTextField, FormCheckboxField, Button },

    data () {
      return {
        submitting: false,
        message: '',
        messageType: '',

        // Form fields
        prospectiveId: '',
        name: '',
        email: '',
        address: '',
        phone: '',
        picture: 'http://placehold.it/32x32',
        isActive: true,
      }
    },

    methods: {
      async submit() {
        // Require a name and email address
        if (this.name === '' || this.email === '') {
          this.submitting = false
          this.message = 'Please enter (at least) a name and email address'
          this.messageType = 'warning'
          return
        }

        const data = {
          id: await fetchLastId() + 1,
          name: this.name,
          email: this.email,
          address: this.address,
          phone: this.phone,
          picture: this.picture,
          isActive: this.isActive
        }

        this.submitting = true
        const status = await createCustomer(data)
        if (status === 200) {
          this.submitting = false
          this.message = `Succesfully added ${this.name} to the database!`
          this.messageType = 'success'
        } else {
          this.submitting = false
          this.message = 'Sorry, something went wrong while adding the new user to the database'
          this.messageType = 'danger'
        }
      }
    },

    async mounted() {
      this.prospectiveId = await fetchLastId() + 1
    }
  }
</script>

<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/derived-variables";

  .new-customer {
    display: flex;
    justify-content: center;

    .box {
      width: 420px;
      max-width: 100%;
    }
  }
</style>
