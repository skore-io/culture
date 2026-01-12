const devRoles = {
  head: 'Head of Engineering',
  ttl: 'Tribe Tech Lead',
  pe: 'Principal Engineer',
  em: 'Engineering Manager',
  tl: 'Tech Lead',
  front: 'Frontend Developer',
  back: 'Backend Developer',
  full_stack: 'Full Stack Developer',
  qa: 'QA',
}

const devTeam = [
  {
    name: 'Renato Augusto',
    role: devRoles.head,
    description:
      "Oi, eu sou Goku. Sul-Mato-Grossense. getTotalYears('26/04/1995') anos. Artesão de software. Formado em engenharia da computação. Colorado 🇦🇹. Workaholic/Go-getter e viciado em platinar games.",
    github: 'https://github.com/renatoaug',
    linkedin: 'https://www.linkedin.com/in/renatoames',
    avatar: 'https://i.imgur.com/sLaJWla.png',
  },
  {
    name: 'Guilherme Barbosa',
    role: devRoles.em,
    description:
      "Salve, meu nome é Guilherme, mas podem me chamar de gui, guiado pra tornar as calls mais demoradas. Gosto muito de hablar, tenho getTotalYears('28/06/1997') anos, meu principal hobby é natação (além de levantamento de caneco 🍻), enfim, bora marcar um papinho?!",
    github: 'https://github.com/guiwb',
    linkedin: 'https://www.linkedin.com/in/guiwb',
    avatar: 'https://i.imgur.com/n74wRyF.png',
  },
  {
    name: 'Oscar Silva',
    role: devRoles.tl,
    description:
      'Aoba, bom?! Meu nome é Oscar e eu sou do interior do Pará, trabalho com desenvolvimento a mais de 6 anos e sou um entusiasta de tecnologia desde que nasci! Curto bastante praticar futebol, assistir Fórmula 1, tenho interesse em artes marciais e pretendo começar a praticar o quanto antes. Estou cursando faculdade de engenharia da computação. E infelizmente, sou torcedor do São Paulo Futebol Clube.',
    github: 'https://github.com/oscar-silva',
    linkedin: 'https://www.linkedin.com/in/oscarrsilva',
    avatar: 'https://imgur.com/umgtGN2.png',
  },
  {
    name: 'Felipe Rossato',
    role: devRoles.pe,
    description:
      "Paulistano. getTotalYears('28/09/1991') anos. Palmeirense. Bastante caseiro, gosta de ficar em casa vendo filmes, séries, lendo ou ouvindo música, mas não nega um rolê regado a cerveja com os amigos. Acompanha bastante futebol internacional e Fórmula 1.",
    github: 'https://github.com/FelipeRossato',
    linkedin: 'https://www.linkedin.com/in/feliperossato91',
    avatar: 'https://i.imgur.com/eiGqVb8.jpeg',
  },
  {
    name: 'Alexandre Menin',
    role: devRoles.front,
    description:
      'Olá, sou o Alexandre, as pessoas me chamam de Menin. Gosto muito de praticar atividades físicas e meu maior hobby é ficar em casa assistindo filmes e séries... Mas aceito me chamarem pra um barzinho pra descontrair e rir ou se for pra comer 🍕 então, to dentro!',
    github: 'https://github.com/alexmeninf',
    linkedin: 'https://www.linkedin.com/in/alexmeninf',
    avatar: 'https://i.imgur.com/gxLuReW.jpg',
  },
  {
    name: 'Paulo Marchi',
    role: devRoles.qa,
    description:
      "Aoba galera, sou o Paulo, tenho getTotalYears('31/05/1998') anos e natural do interiorr de SP. Menino do T.I desde os 15 anos. Tenho formação em Técnico de Informática e graduação em Ciência da Computação. Sou apaixonado por tecnologia e inovação. Meus principais hobbies são acompanhar o cenário de CS, ouvir músicas e podcasts, adoro cozinhar, fazer uns drinks e reunir uma galera para fazer tudo isso junto :D",
    github: 'https://github.com/marchipauloh',
    linkedin: 'https://br.linkedin.com/in/paulohmarchi',
    avatar: 'https://avatars.githubusercontent.com/u/16930654',
  },
  {
    name: 'Leticia Alves',
    role: devRoles.qa,
    description: `Hey pessoal, meu nome é Letícia, nasci e cresci em São Paulo.
      Nas horas vagas, gosto de assistir filmes/séries, também sou uma grande fã de viagens e bebidas (principalmente cerveja).
      Como uma boa taurina, meu gasto excessivo é definitivamente com comida!
      Sou formada em Ciência da Computação e atualmente cursando MBA em Gestão de Tecnologia. Já estudei teatro, dança e atletismo, mas hoje não tenho energia nem para caminhar 10 minutos. Mudei para QA pouco depois de descobrir que não era a pessoa certa para a área de suporte e, desde então, trabalho com qualidade há mais de 3 anos e acho que é a melhor experiência profissional que tive até agora.`,
    github: 'https://github.com/Leticia-paulino',
    linkedin: 'https://www.linkedin.com/in/let%C3%ADcia-alves-paulino-57b204136',
    avatar: 'https://i.imgur.com/FiNeOy1.jpg',
  },
  {
    name: 'André Martins',
    role: devRoles.full_stack,
    description:
      "E ai pessoal, meu nome é André, tenho getTotalYears('10/09/1997') anos e natural de viçosa-MG. Comecei na area da tecnologia aos 20 anos, trabalhei 2 anos como suporte e já tenho 3 anos na programação, meu hobby é jogar futebol (o pai da aula sqn) e curto aeromodelismo.",
    github: 'https://github.com/andremartinsdev',
    linkedin: 'https://www.linkedin.com/in/andr%C3%A9-martins-aa1884216',
    avatar:
      'https://avatars.githubusercontent.com/u/26258891?s=400&u=e3183c153235a1fd84bd7074800e4aadd31a9c39&v=4',
  },
  {
    name: 'Ismael Felipe Hepp',
    role: devRoles.tl,
    description:
      "Opa! Meu nome é Ismael, nasci em Lajeado - RS, mas morei minha vida toda em Passo Fundo - RS, menos um breve período em que fiz um intercâmbio no Canadá (não cheguei a conhecer a Luiza). Trabalho há getTotalYears('01/09/2017') anos na área. Gosto de ouvir podcasts (muito bom para lavar louça), assistir séries, filmes, ler (mais ficção), jogar jogos de estratégia ou rpg (tanto eletrônico, como de mesa), só não sobra tempo pra tanta coisa.",
    github: 'https://github.com/ihepp',
    linkedin: 'https://www.linkedin.com/in/ismael-hepp',
    avatar: 'https://avatars.githubusercontent.com/u/93400303',
  },
  {
    name: 'Tiago Elias',
    role: devRoles.full_stack,
    description: `Aoopa, sou o Tiago! Tenho getTotalYears('01/01/1996') anos e sou natural do triângulo mineiro.
      Recentemente me mudei pra Ribeirão Preto, mas não abro mão do pão de queijo de minas.
      Curto muito assistir a todo tipo de série pra relaxar um pouco e também ver um futebolzinho, nada como sofrer bastante com o Corinthians.`,
    github: 'https://github.com/tiagoelias18',
    linkedin: 'https://www.linkedin.com/in/tiago-elias',
    avatar: 'https://i.imgur.com/X6kakdT.jpg',
  },
  {
    name: 'Ruan Carlos',
    role: devRoles.full_stack,
    description: `Salvee! Suavera? Me chamo Ruan, mas pode me chamar de Ruan, tenho getTotalYears('01/01/1998') anos e sou de Blumenau - SC.
      Sou curioso desde sempre, talvez seja por isso que sou um pouco hiperativo.
      Meus hobbies são: cozinhar, programar, viajar e curto degustar whisky.`,
    github: 'https://github.com/RuanCarlosSantos',
    linkedin: 'https://www.linkedin.com/in/ruancarloss',
    avatar: 'https://i.imgur.com/2Nae5nh.jpg',
  },
  {
    name: 'Leonardo Batini',
    role: devRoles.full_stack,
    description: `Fala time!! Sou Leonardo, mas todo mundo acaba me chamando de Batinera, que vem do meu sobrenome Batini.
      A primeira coisa e mais importante é que eu torço para o maior clube do Brasil, que é o Corinthians, claro. Sou formado em ADS e estou ingressando na minha primeira oportunidade agora.
      Gosto muito de futebol, jogos eletrônicos, principalmente de FPS, cheguei a competir, alguns dizem que profissionalmente (já eu tenho dúvidas conceitualmente falando hahah).
      Além disso, curto muito música, filmes, sair pra jantar, que é a minha vibe atual hahaha, conhecer restaurantes novos com a patroa e tentar sempre comer bem.. um dos melhores jeitos de gastar dinheiro é com uma comida bem feita.`,
    github: 'https://github.com/batinera',
    linkedin: 'https://www.linkedin.com/in/leonardo-batini',
    avatar: 'https://avatars.githubusercontent.com/u/67073834',
  },
  {
    name: 'Matheus Borges',
    role: devRoles.full_stack,
    description:
      "Opa, cês tão bem? Me chamo Matheus, tenho getTotalYears('07/05/2004') anos e sou de São Paulo. Sou envolvido com programação desde os 14 anos e amo muito isso. Levo a sério aquele papo de mudar o mundo através da tecnologia e deixar minha marca nele. Já trabalhei com várias coisas: desenvolvimento web, mobile e até para TVs. Gosto muito de jogar basquete (mesmo sem ter altura pra isso), passar um tempo de qualidade com a família e qualquer programa de fim de semana que envolva água. Tô sempre na água que nem peixe!",
    github: 'https://github.com/Borgeta-code',
    linkedin: 'https://www.linkedin.com/in/matheus-borges-guedes/',
    avatar: 'https://avatars.githubusercontent.com/u/107590628',
  },
  {
    name: 'Thiago Freitas Carneiro',
    role: devRoles.full_stack,
    description: `Faaaaala pessoal, me chamo Thiago, possuo duas formações,
    Ciências contábeis e Analise e Desenvolvimento de Sistemas, sou um cara tranquilo, gosto de ler,
    assistir filme, viajar e jogar video game. Gosto de futebol e torço pro maior time do Brasil, A
    quele que tem dois mundiais :D `,
    github: 'https://github.com/thiagofreitascarneiro',
    linkedin: 'https://www.linkedin.com/in/thiago-freitas-carneiro-39359270/',
    avatar: 'https://github.com/thiagofreitascarneiro.png',
  },
  {
    name: 'Caio Ximenes',
    role: devRoles.full_stack,
    description: `Opa, pessoal! Tranquilidade?
    Me chamo Caio e comecei a estudar programação e fazer freelas por conta própria em 2018. Já em 2019/2020, passei a atuar de forma mais profissional na área.
    Sou apaixonado por tecnologia e cultura pop — fã de Fullmetal Alchemist e completamente vidrado na franquia Kingdom Hearts.
    Nas horas vagas, curto jogar videogame/PC, assistir animes e séries, e até mesmo aproveitar o tempo livre pra estudar um pouco mais (sim, eu gosto mesmo!).
    Sou do Rio de Janeiro - RJ, mais precisamente da Ilha do Governador, no Morro do Dendê, onde vivi a maior parte da minha vida. Atualmente, moro em São Paulo - SP, em busca de novos desafios e oportunidades.`,
    github: 'https://github.com/caioalvesdev',
    linkedin: 'https://br.linkedin.com/in/caioximenes',
    avatar: 'https://github.com/caioalvesdev.png',
  },
]
