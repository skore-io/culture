const productRoles = {
  lead: "Product Lead",
  pm: "Product Manager",
  project_manager: "Project Manager",
  designer: "Product Designer",
}

const productTeam = [
  {
    name: "Taís Hamamoto",
    role: productRoles.pm,
    description: `Oi, sou a Tais. getTotalYears('27/06/1989') anos. Corintiana fajuta (só sei o nome do Cássio), adoradora de cervejas amargas mas não recuso aquela Glacial e Polar que estiverem na mesa.
      A louca dos gatos, rockeira que curte Anitta, investidora com carteira de performance negativa, formada em Engenharia Ambiental, Mestre em Eng de Produção, já fui consultora do Sebrae de inovação, CS em duas startups e agora sou Aprendiz de produteira.
      O próprio caos!
      Joguei volei durante minha gradução e mestrado (sim, com meu 1,58m de altura), mas agora sou do time arquibancada. Mas aceito convites para um bate bola.
      Adoro uma fofoca e fazer N cursos, a depender da fase de vida que estou. Mas curto mesmo é a mesa do bar!`,
    social: "https://www.linkedin.com/in/ta%C3%ADs-hamamoto",
    avatar: "https://i.imgur.com/LZ7QfhJ.png"
  },
  {
    name: "Thiago Cassimiro",
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
    social: "https://www.linkedin.com/in/thiago-cassimiro-vieira",
    avatar: "https://media.licdn.com/dms/image/C4D03AQGa1K0zYRh-bg/profile-displayphoto-shrink_800_800/0/1530189808723?e=1717632000&v=beta&t=pXQxXOgNDRmYuHkAjRbUcJM43Dm4piduAHy9-HiS_qo"
  },
  {
    name: "Luíza Sernizon",
    role: productRoles.project_manager,
    description: "Oiee, meu nome é Luíza, mas quase todo mundo me chama de Lu. Sou mineira e amo bastante meu estado, mas também sou fascinada por viagens. Qualquer brecha que tenho estou na estrada! Sou bem curiosa e bem desinquieta, me formei em engenharia de controle e automação, fiz mestrado em engenharia elétrica, fui professora, desenvolvedora e pesquisadora, e depois disso vi que o que realmente gosto é de resolver problemas. Migrei para a gestão de projetos e agora estou me aventurando no mundo de produto :)",
    social: "https://www.linkedin.com/in/luizasernizonguimaraes",
    avatar: "https://media.licdn.com/dms/image/C4E03AQHwX2VR-7wAWQ/profile-displayphoto-shrink_800_800/0/1637876000507?e=1717632000&v=beta&t=kTYw6LcsfgcVY2o2ofbJj4wrgGcIZqJMplkFocg6Suk"
  },
  {
    name: "Guilherme Farina",
    role: productRoles.designer,
    description: `Meu nome é Guilherme Farina, daí você escolhe me chamar de Farina, Guifa, Gif, ja me perdi no personagem tem anos! KKK.
      Sou o designer de produto do time e amo design em geral.
      Como um bom geminiano, falo demais, faço piada demais, mas sou também muito prático e acho que isso me torna um bom revolvedor de problemas.
      Então se deseja resolver algum problema daqui do trampo ou conselho sobre a vida, posso te ajudar (em conselhos amorosos não indico muito, pois sou muito drástico).
      Sou apaixonado por música e artistas que não são hypados, meus amigos falam que escuto musicas da décima camada da deepweb, mas é bom, juro!
      Além de música, sou a criança do tablet, faço tudo assistindo programas inúteis, que vai de patrulha do consumidor até coreanos solteiros em uma ilha deserta.
      Tenho dois gatinhos, o Ponyo e o Kiki e todos os protótipos e telas que vocês veem e verão, são para pagar os sachê dos mesmos.`,
    social: "https://www.linkedin.com/in/guilherme-farina-2734329a",
    avatar: "https://i.imgur.com/hir4dcA.png"
  },
  {
    name: "Rodrigo Fros",
    role: productRoles.designer,
    description: `Oi, meu nome é Rodrigo, mas se me chamarem pelo meu nome posso ter um delay pra atender porque acabei me acostumando a ouvir me chamarem de Fros ou Rô.
      Sou de Manaus e atualmente moro em São Paulo.
      Depois de alguns anos trabalhando como arquiteto, voltei pra área de design e tecnologia porque é minha paixão desde muito novo.
      Assim como meus colegas aqui, também gosto resolver problemas, e como isso gera dopamina, acaba sendo um pouco viciante, mas tento equilibrar minha vida com atividades físicas diárias e rolês com amigos.
      Gosto de conversar sobre tudo um pouco e ultimamente estou obcecado por livros e assuntos sobre psicologia, como comportamento humano e transtornos mentais.`,
    social: "https://www.linkedin.com/in/rodrigofros",
    avatar: "https://i.imgur.com/gOo62hB.jpg"
  }
]
