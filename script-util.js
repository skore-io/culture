// função para retornar idade a partir da data de nascimento
function getAge(dateString) {
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--

  return document.write(age)
}
