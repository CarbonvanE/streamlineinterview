<template>
  <BasicForm
    :message="message"
    :messageType="messageType"
    :loading="submitting"
    :onSubmit="submit">
    <FormTextField label="Prospective ID" :value.sync="prospectiveId" disabled />
    <FormTextField label="Name" :value.sync="name" placeholder="Full name" />
    <FormTextField label="Email" :value.sync="email" placeholder="Email" />
    <FormTextField label="Address" :value.sync="address" placeholder="Address" />
    <FormTextField label="Phone" :value.sync="phone" placeholder="Phone number" />
    <FormTextField label="Picture" :value.sync="picture" placeholder="URl of picture" />
    <FormCheckboxField label="Active user" :checked.sync="isActive" />
  </BasicForm>
</template>

<script>
  import BasicForm from '@/components/forms/BasicForm.vue'
  import FormTextField from '@/components/forms/FormTextField.vue'
  import FormCheckboxField from '@/components/forms/FormCheckboxField.vue'
  import { fetchLastId, createCustomer } from '@/utils/api'

  export default {
    name: 'newCustomer',
    components: { BasicForm, FormTextField, FormCheckboxField },

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
        const { name, email, address, phone, picture, isActive } = this

        // Require a name and email address
        if (name === '' || email === '') {
          this.submitting = false
          this.message = 'Please enter (at least) a name and email address'
          this.messageType = 'warning'
          return
        }

        this.submitting = true
        const data = { id: await fetchLastId() + 1, name, email, address, phone, picture, isActive }
        const status = await createCustomer(data)
        if (status === 200) {
          this.submitting = false
          this.message = `Succesfully added ${name} to the database!`
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
