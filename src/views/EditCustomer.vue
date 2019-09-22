<template>
  <div>
    <BasicForm
      v-if="customerExists && id"
      :message="message"
      :messageType="messageType"
      buttonText="Update customer"
      :loading="updatingCustomer"
      :onSubmit="updateCustomer">
        <FormTextField label="Customer ID" :value.sync="id" disabled />
        <FormTextField label="Name" :value.sync="name" placeholder="Full name" />
        <FormTextField label="Email" :value.sync="email" placeholder="Email" />
        <FormTextField label="Address" :value.sync="address" placeholder="Address" />
        <FormTextField label="Phone" :value.sync="phone" placeholder="Phone number" />
        <FormTextField label="Picture" :value.sync="picture" placeholder="URl of picture" />
        <FormCheckboxField label="Active customer" :checked.sync="isActive" />

        <template v-slot:footer>
          <Button
            fullWidth
            outlined
            text="Delete customer"
            icon="trash-alt"
            type="danger"
            :loading="updatingCustomer"
            :onClick="deleteCustomer"
          />
        </template>
    </BasicForm>
    <NotFound404 v-if="!customerExists" :message="`Customer '${this.$route.params.id}' doesn't exist`" />
  </div>
</template>

<script>
  import BasicForm from '@/components/forms/BasicForm.vue'
  import FormTextField from '@/components/forms/FormTextField.vue'
  import FormCheckboxField from '@/components/forms/FormCheckboxField.vue'
  import Button from '@/components/layout/Button.vue'
  import NotFound404 from '@/components/error/NotFound404.vue'
  import { fetchCustomer, updateCustomer, deleteCustomer } from '@/utils/api'

  export default {
    name: 'EditCustomer',
    components: { BasicForm, FormTextField, FormCheckboxField, Button, NotFound404 },

    data () {
      return {
        customerExists: true,
        updatingCustomer: false,
        message: '',
        messageType: '',
        databaseID: '',

        // Form fields
        id: '',
        name: '',
        email: '',
        address: '',
        phone: '',
        picture: '',
        isActive: false,
      }
    },

    methods: {
      async updateCustomer() {
        const { databaseID, id, name, email, address, phone, picture, isActive } = this

        this.updatingCustomer = true
        const data = {id, name, email, address, phone, picture, isActive}
        const status = await updateCustomer(databaseID, data)
        if (status === 200) {
          this.updatingCustomer = false
          this.message = `Succesfully updated ${name}'s information`
          this.messageType = 'success'
        } else {
          this.updatingCustomer = false
          this.message = 'Sorry, something went wrong while updating the customer'
          this.messageType = 'danger'
        }
      },
      async deleteCustomer() {
        this.updatingCustomer = true
        const status = await deleteCustomer(this.databaseID)
        if (status === 200) {
          this.updatingCustomer = false
          this.message = `The customer has been deleted`
          this.messageType = 'success'
        } else {
          this.updatingCustomer = false
          this.message = 'Sorry, something went wrong while deleting the customer'
          this.messageType = 'danger'
        }
      }
    },

    async mounted() {
      const result = await fetchCustomer(this.$route.params.id)
      if (result === null) {
        this.customerExists = false
      } else {
        const { _id, id, name, email, address, phone, picture, isActive} = result
        this.databaseID = _id
        this.id = id
        this.name = name
        this.email = email
        this.address = address
        this.phone = phone
        this.picture = picture
        this.isActive = isActive
      }
    }
  }
</script>
