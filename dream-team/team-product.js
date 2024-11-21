const productRoles = {
  gpm: 'Group Product Manager',
  pm: 'Product Manager',
  ux: 'UX',
  ux_lead: 'UX Lead',
}

const productTeam = [
  {
    name: 'Fabrizio Akkari',
    role: productRoles.gpm,
    description: `
      E aee galera, eu sou o Fabrizio, getTotalYears('08/02/1984') anos e, apesar de nascer e viver quase a vida toda em São Paulo, hoje moro em Arujá com minha esposa e minha enteada.
      Sou formado em Sistemas de Informação e MBA em Gestão de Projetos e Negócios.
      Trabalhei em Produtos nos últimos 10 anos de vida.
      Tenho muito mais hobbies do que tempo, e por isso cada hora estou priorizando um diferente, mas curto muito assistir futebol americano, tocar violão, games, muita série e principalmente viajar com a família.`,
    linkedin: 'https://www.linkedin.com/in/fabriziotassitano',
    avatar: 'https://i.imgur.com/OeaF3Tq.png',
  },
  {
    name: 'Hendrik Funari',
    role: productRoles.ux_lead,
    description: `
      Fala, pessoal! Sou o Hendrik, mas podem me chamar como preferirem — já ouvi de tudo, desde ‘Endrique’ até ‘Rendrick’, então fiquem à vontade!
      Sou mineiro de nascença e sempre vivi em Minas Gerais; hoje moro em Uberlândia, cidade pela qual tenho um grande carinho.
      Me formei em Sistemas de Informação pela UFU, mas foi no design que encontrei minha verdadeira paixão, onde já atuo há mais de getTotalYears('01/01/2018') anos.
      Além disso, sou fã de viagens e corrida, e um dos meus maiores sonhos é participar das grandes maratonas pelo mundo!`,
    linkedin: 'https://www.linkedin.com/in/rendrike',
    avatar: 'https://i.imgur.com/5JeOq3X.png',
  },
  {
    name: 'Thiago Cassimiro',
    role: productRoles.pm,
    description: `Olá! Meu nome é Thiago mas conhecido como Cassi devido ao meu sobrenome, sou mineiro, torcedor do Cruzeirão cabuloso.
      Sou casado e tenho uma filha linda de getTotalYears('13/04/2023') ano, que considero um verdadeiro presente de Deus em minha vida.
      Sempre fui apaixonado por tecnologia e inovação.
      Com uma formação em Sistemas da Informação e uma ampla experiência em diversas áreas, desde suporte técnico até gerenciamento de produtos, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
      Nas horas vagas, adoro me aventurar em trilhas de moto e explorar novos lugares com minha família, gosto de viajar e conhecer pessoas.
      Além disso, sou um entusiasta da boa comida e da boa música, e aprecio desde os clássicos do jazz até os ritmos animados do funk.
      Sou uma pessoa feliz e realizada, sempre grato pelas bênçãos que recebo em minha vida.
      <br/>
      Este sou eu, e estou ansioso para conectar e aprender mais sobre vocês! Me chame para um bate-papo!`,
    linkedin: 'https://www.linkedin.com/in/thiago-cassimiro-vieira',
    avatar: 'https://i.imgur.com/hwOGo9z.png',
  },
  {
    name: 'Giovanni Attina',
    role: productRoles.pm,
    description: `
      Opa! Sou Giovanni, normalmente me chamam de Gio ou Gi, não tenho uma preferência.
      Tenho getTotalYears('19/06/1996') anos. Sou de São Paulo, já morei em 6 cidades diferentes e hoje moro em Cerquilho, no interior.
      Sou formado em Ciência da Computação, fui desenvolvedor por alguns anos até migrar para área de Produto.
      Gosto bastante de cozinhar principalmente tudo que vai farinha, tipo massa e pão, também gosto de ler e assistir filmes e séries, quando tenho tempo.
      Uma curiosidade é que gosto de meios de transportes e cidades, tipo trem e metro, e meu sonho é poder viajar pelo Estado de SP pelas linhas férreas desativadas.`,
    linkedin: 'https://www.linkedin.com/in/giovanni-attina-do-nascimento-600b02109',
    avatar: 'https://i.imgur.com/otJkCY2.png',
  },
  {
    name: 'Luíza Sernizon',
    role: productRoles.pm,
    description:
      'Oiee, meu nome é Luíza, mas quase todo mundo me chama de Lu. Sou mineira e amo bastante meu estado, mas também sou fascinada por viagens. Qualquer brecha que tenho estou na estrada! Sou bem curiosa e bem desinquieta, me formei em engenharia de controle e automação, fiz mestrado em engenharia elétrica, fui professora, desenvolvedora e pesquisadora, e depois disso vi que o que realmente gosto é de resolver problemas. Migrei para a gestão de projetos e agora estou me aventurando no mundo de produto :)',
    linkedin: 'https://www.linkedin.com/in/luizasernizonguimaraes',
    avatar: 'https://i.imgur.com/5EfpNty.png',
  },
  {
    name: 'Rodrigo Fros',
    role: productRoles.ux,
    description: `Oi, meu nome é Rodrigo, mas se me chamarem pelo meu nome posso ter um delay pra atender porque acabei me acostumando a ouvir me chamarem de Fros ou Rô.
      Sou de Manaus e atualmente moro em São Paulo.
      Depois de alguns anos trabalhando como arquiteto, voltei pra área de design e tecnologia porque é minha paixão desde muito novo.
      Assim como meus colegas aqui, também gosto resolver problemas, e como isso gera dopamina, acaba sendo um pouco viciante, mas tento equilibrar minha vida com atividades físicas diárias e rolês com amigos.
      Gosto de conversar sobre tudo um pouco e ultimamente estou obcecado por livros e assuntos sobre psicologia, como comportamento humano e transtornos mentais.`,
    linkedin: 'https://www.linkedin.com/in/rodrigofros',
    avatar: 'https://i.imgur.com/gOo62hB.jpg',
  },
  {
    name: 'Gustavo Dinelli',
    role: productRoles.ux,
    description: `Olá, meu nome é Gustavo, mas muitos me conhecem pelo sobrenome Dinelli. Formado em design gráfico e pós-graduado em UX. Com os avanços da tecnologia, fiz a transição do impresso e produtos físicos para o mundo digital.
      Ao longo da minha carreira, tive a oportunidade de trabalhar com marcas renomadas como Disney, Marvel, Turma da Mônica, Globo, FIFA e diversos times de futebol. Atualmente, na Uol EdTech, já passei por todas as plataformas da empresa e participei de várias iniciativas, incluindo layout para PowerBI, criação de materiais de conteúdo, estudo de cores e desenvolvimento de logotipos para o marketing.
      No meu tempo livre, sou um colecionador de moedas, cédulas, action figures e vinis (os famosos LPs). Meus hobbies incluem ouvir música (Rock, Blues, Jazz, Reggae, Indie Rock, Música Clássica e Eletrônica), assistir corridas como MotoGP, F1 e Turismo, além de jogar gêneros como gerenciamento de cidades, fps, corrida ou RPGs.`,
    linkedin: 'https://www.linkedin.com/in/gustavodinelli',
    avatar: 'https://i.imgur.com/OEru0kL.png',
  },
]
