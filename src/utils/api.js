function fetchData(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error))
  })
}

export async function fetchStatistics() {
  const data = await fetchData('https://jsonbox.io/streamlineinterview32sfou10s0cls16ykm?sort=id&limit=500')
  return({
    total: data.length,
    active: data.filter(item => item.isActive === true).length,
    inactive: data.filter(item => item.isActive === false).length
  })
}
