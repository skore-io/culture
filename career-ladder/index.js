const jobs = [
  {
    id: 'junior',
    name: 'Júnior',
    level: 'operational',
    description:
      'O Desenvolvedor Júnior é responsável por contribuir com tarefas básicas de desenvolvimento sob supervisão. Ele participa do aprendizado contínuo e ajuda em pequenas partes dos projetos.',
    responsibilities: [
      'Aprender e seguir padrões de código.',
      'Implementar funcionalidades simples.',
      'Colaborar com a equipe em tarefas menores.',
      'Participar de treinamentos e reuniões.',
    ],
    behaviors: [
      'Comunicar progresso e bloqueios de forma clara.',
      'Comprometer-se com prazos e priorizar tarefas.',
      'Buscar entender a raiz dos problemas apresentados.',
      'Pedir feedbacks frequentes e celebrar conquistas.',
      'Estudar as necessidades dos clientes e sugerir melhorias.',
    ],
  },
  {
    id: 'pleno',
    name: 'Pleno',
    level: 'operational',
    description:
      'O Desenvolvedor Pleno possui um nível intermediário de experiência e é capaz de trabalhar de forma independente em tarefas complexas. Ele começa a participar mais ativamente do planejamento e da tomada de decisões técnicas.',
    responsibilities: [
      'Desenvolver e implementar funcionalidades complexas.',
      'Colaborar no design e arquitetura do software.',
      'Revisar o código de colegas juniores.',
      'Mentorar desenvolvedores juniores.',
      'Testar código desenvolvido (manual e automatizado) em todos os ambientes.',
    ],
    behaviors: [
      'Facilitar a comunicação dentro do time e com outras equipes.',
      'Gerenciar e entregar tarefas complexas com qualidade.',
      'Solucionar problemas de média complexidade de forma independente.',
      'Fornecer feedbacks construtivos para desenvolvedores juniores.',
      'Propor melhorias com base no feedback dos clientes.',
    ],
  },
  {
    id: 'senior',
    name: 'Sênior',
    level: 'operational',
    description:
      'O Desenvolvedor Sênior tem um alto nível de experiência e é responsável por conduzir projetos sem necessidade de apoio. Ele participa de decisões críticas sobre a arquitetura e serve como mentor para os membros mais jovens da equipe.',
    responsibilities: [
      'Participar com sugestões técnicas, escrevendo ou revisando RFCs e ADRs.',
      'Contribuir para a arquitetura e os padrões do sistema.',
      'Revisar e aprovar códigos complexos.',
      'Mentorar desenvolvedores plenos e juniores.',
      'Testar código desenvolvido (manual e automatizado) em todos os ambientes.',
    ],
    behaviors: [
      'Ser um elo de comunicação entre a equipe e a gestão.',
      'Assumir tarefas críticas garantindo qualidade.',
      'Resolver problemas complexos e orientar a equipe em soluções eficazes.',
      'Promover o desenvolvimento contínuo da equipe.',
      'Participar de iniciativas que impactem positivamente a experiência do cliente.',
    ],
  },
  {
    id: 'coordinator',
    name: 'Coordenador',
    level: 'tactical',
    description:
      'O Coordenador de Desenvolvimento é responsável por supervisionar a execução de projetos específicos. Ele garante que as metas e os prazos sejam cumpridos e atua como um elo de comunicação entre a equipe e a gerência.',
    responsibilities: [
      'Supervisionar a execução de projetos.',
      'Garantir o cumprimento de prazos e metas.',
      'Comunicar-se com a equipe e a gerência.',
      'Resolver problemas operacionais.',
    ],
    behaviors: [
      'Garantir a comunicação eficaz entre diferentes squads e áreas.',
      'Supervisionar a execução dos projetos e garantir a entrega no prazo e com qualidade.',
      'Facilitar a resolução de problemas entre squads e promover soluções integradas.',
      'Desenvolver líderes dentro das squads e promover a troca de conhecimento.',
      'Implementar melhorias com base no feedback dos clientes.',
    ],
    pair: 'specialist1',
  },
  {
    id: 'specialist1',
    name: 'Especialista I',
    level: 'tactical',
    description:
      'O Especialista I é um profissional com conhecimentos profundos em uma área específica da tecnologia. Ele é responsável por resolver problemas complexos e inovar dentro de sua especialidade.',
    responsibilities: [
      'Resolver problemas complexos na sua área.',
      'Inovar e propor novas soluções técnicas.',
      'Servir como referência técnica.',
      'Compartilhar conhecimento com a equipe.',
    ],
    behaviors: [
      'Ser referência técnica e comunicar complexidades de forma clara.',
      'Desenvolver soluções técnicas inovadoras e de alta qualidade.',
      'Resolver problemas técnicos complexos.',
      'Compartilhar conhecimento técnico avançado com a equipe.',
      'Contribuir para o desenvolvimento de soluções que melhorem a experiência do cliente.',
    ],
    pair: 'coordinator',
  },
  {
    id: 'manager',
    name: 'Gerente',
    level: 'tactical',
    description:
      'O Gerente de Desenvolvimento é responsável por liderar uma ou mais equipes, garantindo a entrega de projetos dentro do prazo e com qualidade. Ele gerencia recursos, define prioridades e atua na resolução de conflitos.',
    responsibilities: [
      'Liderar equipes de desenvolvimento.',
      'Gerenciar recursos e definir prioridades.',
      'Garantir a entrega de projetos no prazo.',
      'Resolver conflitos e problemas da equipe.',
    ],
    behaviors: [
      'Gerenciar a comunicação entre a equipe e a gestão.',
      'Coordenar várias squads, garantindo a entrega de projetos no prazo e com qualidade.',
      'Facilitar a resolução de conflitos e problemas complexos.',
      'Promover o desenvolvimento contínuo dos membros da equipe.',
      'Liderar iniciativas que melhorem a experiência do cliente.',
    ],
    pair: 'specialist2',
  },
  {
    id: 'specialist2',
    name: 'Especialista II',
    level: 'tactical',
    description:
      'O Especialista II possui um nível avançado de conhecimento e experiência em sua área. Ele é responsável por liderar iniciativas técnicas complexas e colaborar com outros especialistas para resolver desafios técnicos.',
    responsibilities: [
      'Liderar iniciativas técnicas complexas.',
      'Colaborar com outros especialistas.',
      'Resolver desafios técnicos avançados.',
      'Mentorar desenvolvedores mais juniores.',
    ],
    behaviors: [
      'Comunicar avanços e desafios técnicos para a equipe.',
      'Entregar soluções técnicas avançadas dentro do prazo.',
      'Resolver problemas técnicos de alta complexidade.',
      'Mentorar desenvolvedores juniores e plenos.',
      'Desenvolver soluções técnicas focadas na melhoria da experiência do cliente.',
    ],
    pair: 'manager',
  },
  {
    id: 'general_manager',
    name: 'Gerente Geral',
    level: 'strategic',
    description:
      'O Gerente Geral de Desenvolvimento é responsável pela gestão estratégica de várias equipes ou tribos. Ele define a visão de longo prazo e garante que todos os projetos estejam alinhados com os objetivos da empresa.',
    responsibilities: [
      'Definir a visão e estratégia de longo prazo.',
      'Gerenciar múltiplas equipes ou tribos.',
      'Garantir o alinhamento dos projetos com os objetivos da empresa.',
      'Tomar decisões estratégicas críticas.',
    ],
    behaviors: [
      'Representar o tribo de desenvolvimento na alta gestão.',
      'Definir a visão e direção geral do tribo.',
      'Tomar decisões estratégicas críticas.',
      'Desenvolver líderes e promover a cultura de inovação.',
      'Garantir que a estratégia do tribo esteja alinhada com a melhoria da experiência do cliente.',
    ],
    pair: 'specialist3',
  },
  {
    id: 'specialist3',
    name: 'Especialista III',
    level: 'strategic',
    description:
      'O Especialista III é um dos profissionais mais experientes da empresa, com uma profunda compreensão de sua área de atuação. Ele lidera projetos de inovação e atua como consultor para a alta gestão.',
    responsibilities: [
      'Liderar projetos de inovação e desenvolver soluções de ponta.',
      'Atuar como consultor para a alta gestão.',
      'Desenvolver soluções de ponta.',
      'Compartilhar conhecimento com a organização.',
    ],
    behaviors: [
      'Comunicar com clareza e precisão as soluções inovadoras.',
      'Desenvolver soluções técnicas de ponta dentro dos prazos estabelecidos.',
      'Resolver problemas técnicos altamente complexos.',
      'Promover a troca de conhecimento e inovação dentro da organização.',
      'Desenvolver soluções técnicas que proporcionem valor significativo para os clientes.',
    ],
    pair: 'general_manager',
  },
  {
    id: 'director',
    name: 'Diretor',
    level: 'strategic',
    description:
      'O Diretor de Desenvolvimento é responsável pela visão e direção geral do tribo de desenvolvimento. Ele garante a execução da estratégia da empresa e promove a inovação contínua.',
    responsibilities: [
      'Definir a visão e direção geral do tribo.',
      'Promover a inovação contínua.',
      'Garantir a execução da estratégia da empresa.',
      'Representar o tribo na alta gestão.',
    ],
    behaviors: [
      'Representar o tribo de desenvolvimento na alta gestão.',
      'Definir a visão e direção geral do tribo.',
      'Tomar decisões estratégicas críticas.',
      'Desenvolver líderes e promover a cultura de inovação.',
      'Garantir que a estratégia do tribo esteja alinhada com a melhoria da experiência do cliente.',
    ],
    pair: null,
  },
]

const functionalRoles = [
  {
    id: 'head',
    name: 'Head',
    description: 'Responsável por definir a visão e estratégia da tribo de engenharia.',
    responsibilities: [
      'Definir a visão e estratégia da engenharia.',
      'Garantir a alocação eficaz de recursos.',
      'Promover a inovação e a melhoria contínua.',
      'Representar o tribo na alta gestão.',
    ],
    pair: null,
  },
  {
    id: 'ttl',
    name: 'Tribe Tech Lead (TTL)',
    description: 'Lidera atividades técnicas entre várias squads e define padrões de arquitetura.',
    responsibilities: [
      'Liderar atividades técnicas entre várias squads.',
      'Definir padrões de arquitetura e melhores práticas.',
      'Servir como ponto de referência técnica para a tribo.',
      'Tomar decisões técnicas de maior criticidade dentro das squads ou tribo.',
    ],
    pair: null,
  },
  {
    id: 'em',
    name: 'Engineering Manager (EM)',
    description:
      'Gestor que lidera squads, garante a entrega de projetos com qualidade e prazo, desenvolve a equipe e promove a colaboração e inovação.',
    responsibilities: [
      'Gerenciar uma ou mais squads, garantindo que as equipes estejam alinhadas com os objetivos da organização e operem de maneira eficiente.',
      'Assegurar a entrega de projetos no prazo e com qualidade, supervisionando o progresso e implementando estratégias para manter os padrões de excelência.',
      'Implementar um sistema de feedback contínuo, tanto formal quanto informal, para garantir que os membros da equipe estejam cientes de suas áreas de melhoria e conquistas.',
      'Identificar e desenvolver talentos internos para garantir que haja um plano de sucessão sólido para funções críticas na equipe.',
      'Gerir conflitos e promover a colaboração na equipe, resolvendo desacordos e incentivando um ambiente de trabalho saudavel.',
      'Garantir que todos os membros da equipe compreendam e estejam alinhados com a visão e a estratégia do produto, promovendo uma compreensão clara das prioridades do negócio.',
      'Facilitar a adaptação da equipe a mudanças organizacionais e tecnológicas, assegurando uma transição suave e minimizando impactos negativos.',
      'Desenvolver relatórios e métricas para acompanhar o desempenho da equipe e o progresso dos projetos, apresentando esses dados aos stakeholders garantindo transparência e alinhamento.',
      'Identificar, avaliar e mitigar riscos ao longo do ciclo de vida do projeto, garantindo que possíveis obstáculos sejam gerenciados proativamente.',
      'Implementar e manter processos de desenvolvimento ágil, assegurando a adoção de práticas ágeis para otimizar a eficiência e a entrega contínua de valor.',
      'Manter-se atualizado com as novas ferramentas e tecnologias que possam beneficiar a equipe e melhorar os processos de desenvolvimento.',
      'Facilitar a comunicação entre a equipe e outras partes interessadas, atuando como ponte entre a equipe técnica e outras áreas da empresa.',
      'Promover a adoção e aprendizado das melhores tecnologias e práticas para melhorar continuamente os processos e produtos.',
      'Liderar esforços de recrutamento e retenção, participando ativamente na seleção de novos talentos e implementando estratégias para manter a equipe engajada e satisfeita.',
      'Fomentar a diversidade e inclusão na equipe, promovendo um ambiente de trabalho inclusivo que valorize diferentes perspectivas e experiências.',
    ],
    pair: null,
  },
  {
    id: 'tl',
    name: 'Tech Lead (TL)',
    description:
      'Desenvolvedor que garante a qualidade técnica das entregas, soluciona problemas complexos, monitora métricas, atua em incidentes e assegura a conformidade com as políticas de segurança.',
    responsibilities: [
      'Garantir a qualidade e eficiência técnica das entregas, assegurando que atendam aos padrões definidos.',
      'Aplicar pensamento crítico para analisar problemas de diversos pontos de vista, identificando soluções eficazes.',
      'Acompanhar métricas de desempenho das aplicações (performance, erros, etc.), monitorando indicadores-chave e implementando melhorias.',
      'Acompanhar e atuar em incidentes, respondendo rapidamente, identificando causas raízes e aplicando soluções corretivas.',
      'Garantir a conformidade com as políticas e regulamentações de segurança, assegurando que todos os projetos e práticas da equipe estejam em conformidade com os padrões de segurança da empresa.',
      'Conduzir cerimônias de refinamento, facilitando sessões de planejamento para garantir um backlog bem definido.',
      'Representar a squad tecnicamente em cerimônias internas e externas, comunicando claramente as necessidades e progressos técnicos.',
      'Construir/desenvolver funcionalidades de grande complexidade quando necessário.',
      'Ajudar membros do time com tarefas em atraso ou dificuldades, oferecendo suporte técnico e orientação.',
      'Tomar decisões técnicas de menor criticidade dentro da squad, promovendo agilidade no desenvolvimento.',
      'Garantir que o código esteja bem estruturado, limpo e mantenha padrões elevados, promovendo práticas de desenvolvimento sólidas como revisões de código e testes automatizados.',
    ],
    pair: null,
  },
]

const raciData = [
  {
    task: 'Definir a visão e estratégia global',
    Head: 'A',
    TTL: 'C',
    EM: 'C',
    TL: 'I',
  },
  {
    task: 'Garantir a alocação eficaz de recursos',
    Head: 'A',
    TTL: 'C',
    EM: 'C',
    TL: 'I',
  },
  {
    task: 'Promover a inovação e a melhoria contínua',
    Head: 'A',
    TTL: 'R',
    EM: 'I',
    TL: 'R',
  },
  {
    task: 'Liderar atividades técnicas entre squads',
    Head: 'C',
    TTL: 'A',
    EM: 'I',
    TL: 'R',
  },
  {
    task: 'Gerenciar orçamentos e custos',
    Head: 'A',
    TTL: 'C',
    EM: 'C',
    TL: 'I',
  },
  {
    task: 'Desenvolver a estratégia de tecnologia',
    Head: 'R',
    TTL: 'A',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Liderar a implementação de projetos',
    Head: 'I',
    TTL: 'C',
    EM: 'R',
    TL: 'C',
  },
  {
    task: 'Garantir a conformidade com políticas de segurança',
    Head: 'A',
    TTL: 'R',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Gerenciar contratos e fornecedores',
    Head: 'A',
    TTL: 'I',
    EM: 'C',
    TL: 'I',
  },
  {
    task: 'Promover a cultura de inovação',
    Head: 'R',
    TTL: 'A',
    EM: 'C',
    TL: 'C',
  },
  {
    task: 'Desenvolver e manter a documentação técnica',
    Head: 'I',
    TTL: 'C',
    EM: 'R',
    TL: 'R',
  },
  {
    task: 'Gerenciar/acompanhar o desempenho da squad',
    Head: 'I',
    TTL: 'C',
    EM: 'R',
    TL: 'C',
  },
  {
    task: 'Conduzir reuniões de refinamento',
    Head: 'I',
    TTL: 'I',
    EM: 'C',
    TL: 'A',
  },
  {
    task: 'Realizar avaliações de desempenho',
    Head: 'I',
    TTL: 'C',
    EM: 'R',
    TL: 'C',
  },
  {
    task: 'Identificar e mitigar riscos',
    Head: 'A',
    TTL: 'R',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Promover treinamentos e desenvolvimento contínuo',
    Head: 'R',
    TTL: 'C',
    EM: 'A',
    TL: 'C',
  },
  {
    task: 'Monitorar os serviços (aplicações) de domínio da squad',
    Head: 'I',
    TTL: 'A',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Definir e implementar processos de qualidade',
    Head: 'A',
    TTL: 'R',
    EM: 'C',
    TL: 'C',
  },
  {
    task: 'Garantir a escalabilidade das soluções',
    Head: 'C',
    TTL: 'A',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Acompanhar tendências e inovações tecnológicas',
    Head: 'A',
    TTL: 'R',
    EM: 'I',
    TL: 'R',
  },
  {
    task: 'Gerenciar crises e incidentes',
    Head: 'A',
    TTL: 'C',
    EM: 'R',
    TL: 'R',
  },
]

document.addEventListener('DOMContentLoaded', function () {
  const roleFilter = document.getElementById('roleFilter')
  roleFilter.addEventListener('change', filterTable)

  window.onscroll = function () {
    scrollFunction()
  }

  document.getElementById('back-to-top').addEventListener('click', function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })

  document.querySelectorAll('a.smooth-scroll').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    })
  })

  function renderJobs() {
    const jobContainer = document.querySelector('.job-container')
    jobContainer.innerHTML = ''

    jobs.forEach((job) => {
      if (!job.pair) {
        const jobSingleContainer = document.createElement('div')
        jobSingleContainer.classList.add('job')
        const jobElement = createJobElement(job)
        jobSingleContainer.appendChild(jobElement)
        jobContainer.appendChild(jobSingleContainer)
      } else if (!document.getElementById(`description_${job.id}`)) {
        const pairJob = jobs.find((j) => j.id === job.pair)
        if (pairJob) {
          const jobPairContainer = document.createElement('div')
          jobPairContainer.classList.add('job-pairs')

          const jobElement1 = createJobElement(job)
          const jobElement2 = createJobElement(pairJob)

          jobElement1.id = `description_${job.id}`
          jobElement2.id = `description_${pairJob.id}`

          jobPairContainer.appendChild(jobElement1)
          jobPairContainer.appendChild(jobElement2)

          jobContainer.appendChild(jobPairContainer)
        }
      }
    })
  }

  function renderFunctionalRoles() {
    const rolesContainer = document.querySelector('.roles-container')
    rolesContainer.innerHTML = ''

    functionalRoles.forEach((role) => {
      if (!role.pair) {
        const roleElement = createRoleElement(role)
        rolesContainer.appendChild(roleElement)
      } else if (!document.getElementById(`pair-${role.id}`)) {
        const pairRole = functionalRoles.find((r) => r.id === role.pair)
        if (pairRole) {
          const rolePairContainer = document.createElement('div')
          rolePairContainer.classList.add('role-pairs')

          const roleElement1 = createRoleElement(role)
          const roleElement2 = createRoleElement(pairRole)

          roleElement1.id = `pair-${role.id}`
          roleElement2.id = `pair-${pairRole.id}`

          rolePairContainer.appendChild(roleElement1)
          rolePairContainer.appendChild(roleElement2)

          rolesContainer.appendChild(rolePairContainer)
        }
      }
    })
  }

  function renderRaciTable() {
    const table = document.querySelector('.raci-table tbody')
    table.innerHTML = ''

    raciData.forEach((item) => {
      const row = document.createElement('tr')
      row.innerHTML = `
        <td>${item.task}</td>
        <td><span class="raci-cell raci-${item.Head.toLowerCase()}" data-original-color="${getColor(item.Head)}">${item.Head}</span></td>
        <td><span class="raci-cell raci-${item.TTL.toLowerCase()}" data-original-color="${getColor(item.TTL)}">${item.TTL}</span></td>
        <td><span class="raci-cell raci-${item.EM.toLowerCase()}" data-original-color="${getColor(item.EM)}">${item.EM}</span></td>
        <td><span class="raci-cell raci-${item.TL.toLowerCase()}" data-original-color="${getColor(item.TL)}">${item.TL}</span></td>
      `
      table.appendChild(row)
    })
  }

  function getColor(role) {
    switch (role) {
      case 'R':
        return '#4caf50'
      case 'A':
        return '#f44336'
      case 'C':
        return '#2196f3'
      case 'I':
        return '#ff9800'
      default:
        return '#444'
    }
  }

  function createJobElement(job) {
    const jobElement = document.createElement('div')
    jobElement.classList.add('job-description', `job-${job.level}`)
    jobElement.id = `description_${job.id}`

    jobElement.innerHTML = `
      <h4>${job.name}</h4>
      <p>${job.description}</p>
      <button class="toggle-details"><span class="material-icons">expand_more</span></button>
      <div class="competencies">
        <h5>Responsabilidades:</h5>
        <ul>
          ${job.responsibilities.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <h5>Comportamentos:</h5>
        <ul>
          ${job.behaviors.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `

    return jobElement
  }

  function createRoleElement(role) {
    const roleElement = document.createElement('div')
    roleElement.classList.add('role-description')
    roleElement.innerHTML = `
      <h3>${role.name}</h3>
      <p>${role.description}</p>
      <ul>
        ${role.responsibilities.map((responsibility) => `<li>${responsibility}</li>`).join('')}
      </ul>
    `
    return roleElement
  }

  function expandJobDescription() {
    document.querySelectorAll('.toggle-details').forEach((button) => {
      button.addEventListener('click', () => {
        const card = button.closest('.job-description')
        const details = button.nextElementSibling
        const isExpanded = details.classList.contains('expanded')

        card.classList.toggle('expanded', !isExpanded)
        details.classList.toggle('expanded', !isExpanded)
        button.querySelector('.material-icons').textContent = isExpanded
          ? 'expand_more'
          : 'expand_less'
      })
    })
  }

  function filterTable() {
    const role = roleFilter.value
    const table = document.querySelector('.raci-table')
    const rows = table.querySelectorAll('tbody tr')
    const roleIndex = Array.from(table.querySelectorAll('th')).findIndex(
      (th) => th.textContent.trim() === role,
    )

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td')
      cells.forEach((cell, index) => {
        const spanElements = cell.querySelectorAll('.raci-cell')

        if (role === 'all' || index === roleIndex) {
          spanElements.forEach((span) => {
            span.style.backgroundColor = span.dataset.originalColor
            span.style.color = '#fff'
          })
          cell.style.backgroundColor = ''
        } else {
          spanElements.forEach((span) => {
            span.style.backgroundColor = '#444'
            span.style.color = '#ccc'
          })
          cell.style.backgroundColor = '#252526'
        }
      })
    })
  }

  function scrollFunction() {
    const backToTopButton = document.getElementById('back-to-top')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block'
    } else {
      backToTopButton.style.display = 'none'
    }
  }

  renderJobs()
  expandJobDescription()
  renderFunctionalRoles()
  renderRaciTable()
})
