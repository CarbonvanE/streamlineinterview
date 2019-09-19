<template>
  <div class="new-customer">
    <div class="box">
      <div class="field">
        <label class="label">Prospective ID</label>
        <div class="control">
          <input class="input" disabled type="text" v-model="prospectiveId">
        </div>
      </div>

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Full name" v-model="name">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="text" placeholder="Email" v-model="email">
        </div>
      </div>

      <div class="field">
        <label class="label">Address</label>
        <div class="control">
          <input class="input" type="text" placeholder="Address" v-model="address">
        </div>
      </div>

      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input class="input" type="text" placeholder="Phone number" v-model="phone">
        </div>
      </div>

      <div class="field">
        <label class="label">Picture</label>
        <div class="control">
          <input class="input" type="text" value="" v-model="picture">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input checked type="checkbox" v-model="isActive">
            Active user
          </label>
        </div>
      </div>

      <div class="control">
        <button
          v-if="!success && !warning && !error"
          class="button is-fullwidth is-link"
          v-on:click.prevent="submit"
          v-bind:class="{ 'is-loading': submitting}">
            Submit
        </button>
        <button
          v-if="!submitting && success"
          class="button is-fullwidth is-success"
          disabled>
            Succesfully added the new customer! 🎉
        </button>
        <button
          v-if="!submitting && warning"
          class="button is-fullwidth is-warning"
          v-on:click.prevent="submit">
            Please enter (at least) a name and email address
        </button>
        <button
          v-if="!submitting && error"
          class="button is-fullwidth is-danger"
          disabled>
            Something went wrong 😔
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchLastId, createCustomer } from '@/utils/api'

  export default {
    name: 'newCustomer',

    data () {
      return {
        prospectiveId: null,
        name: '',
        email: '',
        address: '',
        phone: '',
        picture: 'http://placehold.it/32x32',
        isActive: true,

        // Form state
        submitting: false,
        warning: false,
        success: false,
        error: false
      }
    },

    methods: {
      async submit() {
        // Require a name and email address
        if (this.name === '' || this.email === '') {
          this.submitting = false
          this.success = false
          this.warning = true
          this.error = false
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
          this.success = true
          this.warning = false
          this.error = false
        } else {
          this.submitting = false
          this.success = false
          this.warning = false
          this.error = true
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
