// Function to return the number of years from a date
function getTotalYears(dateString) {
  const today = new Date()
  const birthDate = new Date(dateString.split('/').reverse().join('-'))
  let year = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    year--
  }

  return year || 1
}
