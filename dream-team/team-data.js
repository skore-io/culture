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
  },
  {
    name: 'Gyovana Prado',
    role: dataRoles.de,
    tribes: [tribes.plataforma.key],
    squads: [squads.dados.key],
    description:
      "Olá, 안녕하세요! Sou Gyovana Prado, nasci no interior de SP e tenho getTotalYears('28/06/2000') anos. Gosto muito de assistir esportes de todos os tipos (mas pratico só o e-sports). Sou formada em ADS, e atuo na área de dados e tecnologia há 5 anos. Amo o Twice e escuto muito kpop no geral. Gosto muito de ser desafiada e aprender sobre coisas novas. Também amo sair com as pessoas, seja num barzinho ou num campeonato de UNO. Acredito que o SPFC é minha maior fonte de alegria e depressão.",
    github: 'https://github.com/gyprado',
    linkedin: 'https://www.linkedin.com/in/gyovana-prado',
    avatar: 'https://avatars.githubusercontent.com/u/117781230',
  },
  {
    name: 'Keven Oliveira',
    role: dataRoles.da,
    tribes: [tribes.plataforma.key],
    squads: [squads.dados.key],
    description:
      "Opaa galera! Sou o Keven, tenho getTotalYears('04/05/1999') anos, formado em ADS e com pós em CX. Sou paulista da capital, curto fazer churrasco e, agora, estou me arriscando em fazer pizza! Além disso, curto sempre estar em família, curtindo uma bom som, filme, praia, seja lá o que for, o importante no final é estar rodeado de pessoas boas!!",
    github: 'https://github.com/KevenPOliveira',
    linkedin: 'https://www.linkedin.com/in/keven-oliveira',
    avatar: 'https://avatars.githubusercontent.com/u/206888670?v=4',
  },
  {
    name: 'Luiz Felipe',
    role: dataRoles.de,
    tribes: [tribes.plataforma.key],
    squads: [squads.dados.key],
    description:
      "Muito prazer, sou o Luiz, nasci em Belo Horizonte, mas de mineiro só tenho o documento. Tenho hoje getTotalYears('27/04/1997') anos. Sou muito fã de sair para comer, conhecer restaurantes e culinárias novas, e me amarro em um churrasco! Sou um geek nato, adoro animes e jogos — principalmente jogos competitivos de FPS e RPGs. Por isso, muitos dos meus círculos sociais acabam sendo voltados para essa área! Sou engenheiro de dados há getTotalYears('19/02/2019') anos. Atuei com diversas stacks diferentes, então gosto de coisas novas e curto acompanhar tendências e novas tecnologias! ",
    github: 'https://github.com/LuizIavarone',
    linkedin: 'https://www.linkedin.com/in/luiz-iavarone',
    avatar: 'https://avatars.githubusercontent.com/u/50239255?v=4',
  },
]

export { dataTeam }
