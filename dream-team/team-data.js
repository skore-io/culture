import { tribes, squads } from '/culture/dream-team/tribes.js'

const dataRoles = {
  lead: 'Data Lead',
  de: 'Data Engineer',
  da: 'Data Analytics',
}

const dataTeam = [
  {
    name: 'Lucas Bernardes',
    role: dataRoles.da,
    tribes: [tribes.desenvolvimento.key],
    squads: [],
    description:
      "Sou o Lucas, mineiro e tenho getTotalYears('29/09/1993') anos. Sou formado em Economia e venho trabalhando com dados a alguns anos. Nas horas vagas tô sempre fazendo uma corridinha por aí (no máximo 5km, mais que isso acho que beira a loucura). Gosto de ler sobre finanças e com um pouco de sorte, arriscar algo novo na cozinha. Gosto de bater papo sobre qualquer assunto, principalmente se eu aprender algo novo. Nunca dispenso um barzinho e um sushi.",
    github: 'https://github.com/bernardesls',
    linkedin: 'https://www.linkedin.com/in/lucasbernardess',
    avatar: 'https://avatars.githubusercontent.com/u/145584808',
  }
]

export { dataTeam }
