const devRoles = {
  head: "Head of Engineering",
  ttl: "Tribe Tech Lead",
  em: "Engineering Manager",
  tl: "Tech Lead",
  front: "Frontend Developer",
  back: "Backend Developer",
  full_stack: "Full stack Developer",
  mobile: "Mobile Developer",
  qa: "QA",
}

const devTeam = [
  {
    name: "Renato Augusto",
    role: devRoles.head,
    description: "Oi, eu sou Goku. Sul-Mato-Grossense. getTotalYears('26/04/1995') anos. Artesão de software. Formado em engenharia da computação. Colorado 🇦🇹. Workaholic/Go-getter e viciado em platinar games.",
    social: "https://github.com/renatoaug",
    avatar: "https://i.imgur.com/sLaJWla.png"
  },
  {
    name: "Lucas Arbex",
    role: devRoles.ttl,
    description: `Fala galera, meu nome é Lucas, mas todos me chamam de Arbex (meu sobrenome).
      Sou de São Paulo e corinthiano (obviamente).
      Sou formado em Psicologia, mas atuo com desenvolvimento há 6
      anos. Meu maior hobby, sem dúvida, é viajar e conhecer novos lugares, culturas e pessoas.
      Além disso, curto muito assistir séries, ler livros, ouvir música, comer, jogar tênis, futebol e outros esportes.`,
    social: "https://github.com/arbexmb",
    avatar: "https://i.imgur.com/MlM7k6V.jpeg"
  },
  {
    name: "Guilherme Barbosa",
    role: devRoles.em,
    description: "Salve, meu nome é Guilherme, mas podem me chamar de gui, guiado pra tornar as calls mais demoradas. Gosto muito de hablar, tenho getTotalYears('28/06/1997') anos, meu principal hobby é natação (além de levantamento de caneco 🍻), enfim, bora marcar um papinho?!",
    social: "https://github.com/guiwb",
    avatar: "https://i.imgur.com/n74wRyF.png"
  },
  {
    name: "Oscar Silva",
    role: devRoles.tl,
    description: "Aoba, bom?! Meu nome é Oscar e eu sou do interior do Pará, trabalho com desenvolvimento a mais de 6 anos e sou um entusiasta de tecnologia desde que nasci! Curto bastante praticar futebol, assistir Fórmula 1, tenho interesse em artes marciais e pretendo começar a praticar o quanto antes. Estou cursando faculdade de engenharia da computação. E infelizmente, sou torcedor do São Paulo Futebol Clube.",
    social: "https://github.com/oscar-silva",
    avatar: "https://imgur.com/umgtGN2.png"
  },
  {
    name: "Felipe Rossato",
    role: devRoles.full_stack,
    description: "Paulistano. getTotalYears('28/09/1991') anos. Palmeirense. Bastante caseiro, gosta de ficar em casa vendo filmes, séries, lendo ou ouvindo música, mas não nega um rolê regado a cerveja com os amigos. Acompanha bastante futebol internacional e Fórmula 1.",
    social: "https://github.com/FelipeRossato",
    avatar: "https://i.imgur.com/eiGqVb8.jpeg"
  },
  {
    name: "Alexandre Menin",
    role: devRoles.front,
    description: "Olá, sou o Alexandre, as pessoas me chamam de Menin. Gosto muito de praticar atividades físicas e meu maior hobby é ficar em casa assistindo filmes e séries... Mas aceito me chamarem pra um barzinho pra descontrair e rir ou se for pra comer 🍕 então, to dentro!",
    social: "https://github.com/alexmeninf",
    avatar: "https://i.imgur.com/gxLuReW.jpg"
  },
  {
    name: "Paulo Marchi",
    role: devRoles.qa,
    description: "Aoba galera, sou o Paulo, tenho getTotalYears('31/05/1998') anos e natural do interiorr de SP. Menino do T.I desde os 15 anos. Tenho formação em Técnico de Informática e graduação em Ciência da Computação. Sou apaixonado por tecnologia e inovação. Meus principais hobbies são acompanhar o cenário de CS, ouvir músicas e podcasts, adoro cozinhar, fazer uns drinks e reunir uma galera para fazer tudo isso junto :D",
    social: "https://br.linkedin.com/in/paulohmarchi",
    avatar: "https://avatars.githubusercontent.com/u/16930654"
  },
  {
    name: "Leticia Alves",
    role: devRoles.qa,
    description: `Hey pessoal, meu nome é Letícia, tenho xx anos, nasci e cresci em São Paulo.
      Nas horas vagas, gosto de assistir filmes/séries, também sou uma grande fã de viagens e bebidas (principalmente cerveja).
      Como uma boa taurina, meu gasto excessivo é definitivamente com comida!
      Sou formada em Ciência da Computação e atualmente cursando MBA em Gestão de Tecnologia. Já estudei teatro, dança e atletismo, mas hoje não tenho energia nem para caminhar 10 minutos. Mudei para QA pouco depois de descobrir que não era a pessoa certa para a área de suporte e, desde então, trabalho com qualidade há mais de 3 anos e acho que é a melhor experiência profissional que tive até agora.`,
    social: "https://www.linkedin.com/in/let%C3%ADcia-alves-paulino-57b204136",
    avatar: "https://i.imgur.com/FiNeOy1.jpg"
  },
  {
    name: "Vanderlei Andrade",
    role: devRoles.qa,
    description: `Oi, me chamo Vanderlei, mas pode me chamar de Vand! Sou de SP - Zona Oeste.
      Sou graduado em ciencia da computação. São Paulino… em alguns momentos vou para o estádio sofrer um pouco.
      Gosto de praticar qualquer tipo de esporte, mas não significa que sou bom. Gosto de montar quebra cabeça, tenho alguns que ainda preciso emoldurar. E sempre que surge a oportunidade, estou saindo com alguns amigos.`,
    social: "https://www.linkedin.com/in/vanderleijandrade",
    avatar: "https://i.imgur.com/I5cPcXB.jpg"
  },
  {
    name: "André Martins",
    role: devRoles.front,
    description: "E ai pessoal, meu nome é André, tenho getTotalYears('10/09/1997') anos e natural de viçosa-MG. Comecei na area da técnologia aos 20 anos, trabalhei 2 anos como suporte e já tenho 3 anos na programação, meu hobby é jogar futebol (o pai da aula sqn) e curto aeromodelismo.",
    social: "https://www.linkedin.com/in/andr%C3%A9-martins-aa1884216",
    avatar: "https://avatars.githubusercontent.com/u/26258891?s=400&u=e3183c153235a1fd84bd7074800e4aadd31a9c39&v=4"
  },
  {
    name: "Mauricio Henrique",
    role: devRoles.back,
    description: "Fala aee gurizada, meu nome é Mauricio, tenho getTotalYears('09/11/1996') anos e sou do Rio Grande do Sul. Curto bastante programar, comecei com uns 13 anos por hobby e hoje virou meu trampo, estou desde 2016 na área de desenvolvimento. Curto também um game, jogar um LoL, comer um sushizinho, etc. Qualquer coisa só chamar, tamo junto!!",
    social: "https://github.com/xXMauricioHXx",
    avatar: "https://i.imgur.com/3dTd1Q6.jpg"
  },
  {
    name: "Ismael Felipe Hepp",
    role: devRoles.tl,
    description: "Opa! Meu nome é Ismael, nasci em Lajeado - RS, mas morei minha vida toda em Passo Fundo - RS, menos um breve período em que fiz um intercâmbio no Canadá (não cheguei a conhecer a Luiza). Trabalho há getTotalYears('01/09/2017') anos na área. Gosto de ouvir podcasts (muito bom para lavar louça), assistir séries, filmes, ler (mais ficção), jogar jogos de estratégia ou rpg (tanto eletrônico, como de mesa), só não sobra tempo pra tanta coisa.",
    social: "https://github.com/compasso-ismaelhepp",
    avatar: "https://avatars.githubusercontent.com/u/93400303"
  },
  {
    name: "Rodrigo Miyashiro",
    role: devRoles.em,
    description: `E aí, beleza!? Sou o Rodrigo! Gosto de apreciar um bom café, e também, técnicas/métodos de preparo.
      Curto bastante filmes e series principalmente olhando pontos como atuação, história, fotografia, enquadramento da cena, etc.
      Eventualmente vejo algumas coisas para automatizar residências e fico testando, logo tenho Arduinos, Raspberry Pi, vários tipos sensores, relé wireless, fechadura eletrônica etc.`,
    social: "https://www.linkedin.com/in/rodrigomiyashiro",
    avatar: "https://i.imgur.com/WbfktOG.jpg"
  },
  {
    name: "Tiago Elias",
    role: devRoles.tl,
    description: `Aoopa, sou o Tiago! Tenho getTotalYears('01/01/1996') anos e sou natural do triângulo mineiro.
      Recentemente me mudei pra Ribeirão Preto, mas não abro mão do pão de queijo de minas.
      Curto muito assistir a todo tipo de série pra relaxar um pouco e também ver um futebolzinho, nada como sofrer bastante com o Corinthians.`,
    social: "https://www.linkedin.com/in/tiago-elias",
    avatar: "https://i.imgur.com/X6kakdT.jpg"
  },
  {
    name: "Ruan Carlos",
    role: devRoles.mobile,
    description: `Salvee! Suavera? Me chamo Ruan, mas pode me chamar de Ruan, tenho getTotalYears('01/01/1998') anos e sou de Blumenau - SC.
      Sou curioso desde sempre, talvez seja por isso que sou um pouco hiperativo.
      Meus hobbies são: cozinhar, programar, viajar e curto degustar whisky.`,
    social: "https://www.linkedin.com/in/ruancarloss",
    avatar: "https://i.imgur.com/2Nae5nh.jpg"
  },
  {
    name: "Luccas Bikelis",
    role: devRoles.mobile,
    description: `E aí, galera, tudo certo? Meu nome é Luccas Bikelis, mas geralmente me chamam pelo sobrenome, então fiquem à vontade. Tenho getTotalYears('01/01/2001') anos e sou graduado em Análise e Desenvolvimento de Sistemas. Trabalho há cerca de três anos com desenvolvimento mobile, principalmente com Flutter.
      Sou um torcedor fanático do Maior Time do Brasil, o tricolor paulista. Além disso, tenho grande interesse em futebol, tanto em jogar quanto assistir. Também sou adepto da academia e, nos tempos livres, gosto de jogar video game.`,
    social: "https://github.com/luccasbikelis",
    avatar: "https://imgur.com/A7aLUp0.png"
  },
  {
    name: "Leonardo Batini",
    role: devRoles.full_stack,
    description: `Fala time!! Sou Leonardo, mas todo mundo acaba me chamando de Batinera, que vem do meu sobrenome Batini.
      A primeira coisa e mais importante é que eu torço para o maior clube do Brasil, que é o Corinthians, claro. Sou formado em ADS e estou ingressando na minha primeira oportunidade agora.
      Gosto muito de futebol, jogos eletrônicos, principalmente de FPS, cheguei a competir, alguns dizem que profissionalmente (já eu tenho dúvidas conceitualmente falando hahah).
      Além disso, curto muito música, filmes, sair pra jantar, que é a minha vibe atual hahaha, conhecer restaurantes novos com a patroa e tentar sempre comer bem.. um dos melhores jeitos de gastar dinheiro é com uma comida bem feita.`,
    social: "https://github.com/batinera",
    avatar: "https://avatars.githubusercontent.com/u/67073834"
  },
  {
    name: "Rodrigo Batini",
    role: devRoles.full_stack,
    description: `Fala galera! Sou Rodrigo, mas todo mundo me chama de Batini - apesar que dado que já existe outro que pela primeira vez chegou antes de mim, talvez aqui seja diferente hahaha Sou apaixonado por música, jogos digitais e analógicos, filmes, séries e tudo que envolve Tolkien. Trabalho com tecnologia desde 2011, mas já passei por produto, comercial, financeiro, empreendi, um pouco de tudo e muito de nada hahaha E antes que eu me esqueça, VAI CORINTHIANS`,
    social: "https://www.linkedin.com/in/rodrigo-batini-ba543061/",
    avatar: "https://avatars.githubusercontent.com/u/4341744"
  },
]
