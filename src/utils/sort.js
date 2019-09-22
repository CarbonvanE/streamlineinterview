export function sortAscending(a, b) {
  if (typeof a === 'string' && typeof b === 'string') return sortStrings(a, b, 1)
  if (typeof a === 'number' && typeof b === 'number') return sortNumbers(a, b, 1)
  return 0
}

export function sortDescending(a, b) {
  if (typeof a === 'string' && typeof b === 'string') return sortStrings(a, b, -1)
  if (typeof a === 'number' && typeof b === 'number') return sortNumbers(a, b, -1)
  return 0
}

function sortStrings(a, b, direction) {
  a = a.toLowerCase()
  b = b.toLowerCase()
  if (a > b) return direction
  if (a < b) return -direction
  return 0
}

function sortNumbers(a, b, direction) {
  if (a > b) return direction
  if (a < b) return -direction
  return 0
}
