import Vue from 'vue'
import Vuex from 'vuex'
import { fetchCustomers } from '@/utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: []
  },
  getters: {
    allCustomers: async state => {
      return state.customers.length === 0 ? await fetchCustomers() : state.customers
    },
    customer: (state, getters) => async id => {
      const customers = await getters.allCustomers
      const customer = customers.filter(customer => customer.id.toString() === id)
      return customer.length === 0 ? null : customer[0]
    },
    customerStatistics: async (state, getters) => {
      const customers = await getters.allCustomers
      return({
        total: customers.length,
        active: customers.filter(item => item.isActive === true).length,
        inactive: customers.filter(item => item.isActive === false).length
      })
    }
  },
  mutations: {
    setCustomers (state, customers) {
      state.customers = customers
    },
    createCustomer (state, customer) {
      state.customers = state.customers.concat(customer)
    },
    updateCustomer (state, { _id, data }) {
      state.customers = state.customers.map(customer => customer._id === _id ? data : customer)
    },
    deleteCustomer (state, _id) {
      state.customers = state.customers.filter(customer => customer._id !== _id)
    }
  }
})
