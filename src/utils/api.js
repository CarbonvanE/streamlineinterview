import store from '../store'

// Return the JSON data from the server given certain parameters
function customerAPI(params, method = "GET", body = null) {
  return new Promise(async function(resolve, reject) {
    try {
      const url = 'https://jsonbox.io/vqyzQKG36ZFyi3bvxPJqrepGV27gMCTU' + params
      const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      const response = await fetch(url, { method , headers, body })
      resolve({
        status: response.status,
        data: await response.json()
      })
    }
    catch {
      reject()
    }
  })
}

// Return all customers
export async function fetchCustomers() {
  const { data } = await customerAPI('?sort=id&limit=500')
  store.commit('setCustomers', data)
  return data
}

// Update a single customer
export async function updateCustomer(_id, data) {
  const { status } = await customerAPI(`/${_id}`, "PUT", JSON.stringify(data))
  if (status !== 200) return false
  store.commit('updateCustomer', { _id, data })
  return true
}

// Delete a single customer
export async function deleteCustomer(_id) {
  const { status } = await customerAPI(`/${_id}`, "DELETE")
  if (status !== 200) return false
  store.commit('deleteCustomer', _id)
  return true
}

// Return the current highest ID
export async function fetchLastId() {
  const { data } = await customerAPI('?sort=-id&limit=1')
  if (Array.isArray(data)) return data[0].id
  return null
}

// Save a new customer
export async function createCustomer(newCustomer) {
  const { status, data } = await customerAPI('', 'POST', JSON.stringify(newCustomer))
  if (status !== 200) return false
  store.commit('createCustomer', data)
  return true
}
