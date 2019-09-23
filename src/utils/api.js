import store from '../store'

// Return the JSON data from the server given certain parameters
function fetchData(params) {
  const url = 'https://jsonbox.io/vqyzQKG36ZFyi3bvxPJqrepGV27gMCTU' + params
  return new Promise(async function(resolve, reject) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      resolve(data)
    }
    catch {
      reject()
    }
  })
}

// Return all customers
export async function fetchCustomers() {
  const customers = await fetchData('?sort=id&limit=500')
  store.commit('setCustomers', customers)
  return customers
}

// Update a single customer
export async function updateCustomer(_id, data) {
  const response = await fetch(`https://jsonbox.io/vqyzQKG36ZFyi3bvxPJqrepGV27gMCTU/${_id}`, {
    method: "PUT",
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (response.status !== 200) return false
  store.commit('updateCustomer', { _id, data })
  return true
}

// Delete a single customer
export async function deleteCustomer(_id) {
  const response = await fetch(`https://jsonbox.io/vqyzQKG36ZFyi3bvxPJqrepGV27gMCTU/${_id}`, {
    method: "DELETE",
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  })
  if (response.status !== 200) return false
  store.commit('deleteCustomer', _id)
  return true
}

// Return the current highest ID
export async function fetchLastId() {
  const data = await fetchData('?sort=-id&limit=1')
  if (Array.isArray(data)) return data[0].id
  return null
}

// Save a new customer
export async function createCustomer(data) {
  const response = await fetch('https://jsonbox.io/vqyzQKG36ZFyi3bvxPJqrepGV27gMCTU', {
    method: "POST",
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (response.status !== 200) return false
  store.commit('createCustomer', await response.json())
  return true
}
