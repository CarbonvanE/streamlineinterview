// Return the JSON data from the server given certain parameters
function fetchData(params) {
  const url = 'https://jsonbox.io/streamlineinterview32sfou10s0cls16ykm' + params
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

// Return the total number of users as well as the number of active an inactive users
export async function fetchStatistics() {
  const data = await fetchData('?sort=id&limit=500')
  return({
    total: data.length,
    active: data.filter(item => item.isActive === true).length,
    inactive: data.filter(item => item.isActive === false).length
  })
}

// Return all customers
export async function fetchCustomers() {
  return await fetchData('?sort=id&limit=500')
}

// Return the current highest ID
export async function fetchLastId() {
  const data = await fetchData('?sort=-id&limit=1')
  if (Array.isArray(data)) return data[0].id
  return null
}

// Save a new customer
export async function createCustomer(data) {
  const response = await fetch('https://jsonbox.io/streamlineinterview32sfou10s0cls16ykm', {
    method: "post",
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return response.status
}
