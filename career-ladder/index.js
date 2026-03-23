const jobs = [
  {
    id: 'junior',
    name: 'Junior',
    level: 'operational',
    description:
      'The Junior Developer is responsible for contributing to basic development tasks under supervision. He participates in continuous learning and helps with small parts of projects.',
    responsibilities: [
      'Learn and follow code patterns.',
      'Implement simple features.',
      'Collaborate with the team on smaller tasks.',
      'Participate in trainings and meetings.',
    ],
    behaviors: [
      'Communicate progress and blockages clearly.',
      'Commit to deadlines and prioritize tasks.',
      'Seek to understand the root of the problems presented.',
      'Request frequent feedback and celebrate achievements.',
      'Study the needs of the clients and suggest improvements.',
    ],
  },
  {
    id: 'middle',
    name: 'Middle',
    level: 'operational',
    description:
      'The Middle Developer has an intermediate level of experience and is able to work independently on complex tasks. He starts to participate more actively in planning and technical decision-making.',
    responsibilities: [
      'Develop and implement complex features.',
      'Collaborate in the design and architecture of the software.',
      'Review the code of junior colleagues.',
      'Mentor junior developers.',
      'Test the developed code (manual and automated) in all environments.',
    ],
    behaviors: [
      'Facilitate communication within the team and with other teams.',
      'Manage and deliver complex tasks with quality.',
      'Solve medium complexity problems independently.',
      'Provide constructive feedback to junior developers.',
      'Suggest improvements based on client feedback.',
    ],
  },
  {
    id: 'senior',
    name: 'Senior',
    level: 'operational',
    description:
      'The Senior Developer has a high level of experience and is responsible for leading projects without the need for support. He participates in critical decisions about architecture and serves as a mentor for the youngest members of the team.',
    responsibilities: [
      'Participate with technical suggestions, writing or reviewing RFCs and ADRs.',
      'Contribute to the architecture and system standards.',
      'Review and approve complex codes.',
      'Mentor senior and junior developers.',
      'Test the developed code (manual and automated) in all environments.',
    ],
    behaviors: [
      'Be a communication link between the team and the management.',
      'Assume critical tasks ensuring quality.',
      'Solve complex problems and guide the team in effective solutions.',
      'Promote the continuous development of the team.',
      'Participate in initiatives that positively impact the client experience.',
    ],
  },
  {
    id: 'coordinator',
    name: 'Coordinator',
    level: 'tactical',
    description:
      'The Coordinator of Development is responsible for supervising the execution of specific projects. He ensures that the goals and deadlines are met and acts as a communication link between the team and the management.',
    responsibilities: [
      'Supervise the execution of projects.',
      'Ensure the fulfillment of deadlines and goals.',
      'Communicate with the team and the management.',
      'Solve operational problems.',
    ],
    behaviors: [
      'Ensure effective communication between different squads and areas.',
      'Supervise the execution of projects and ensure delivery on time and with quality.',
      'Facilitate the resolution of problems between squads and promote integrated solutions.',
      'Develop leaders within the squads and promote knowledge exchange.',
      'Implement improvements based on client feedback.',
    ],
    pair: 'specialist1',
  },
  {
    id: 'specialist1',
    name: 'Specialist I',
    level: 'tactical',
    description:
      'The Specialist I is a professional with deep knowledge in a specific technology area. He is responsible for solving complex problems and innovating within his specialty.',
    responsibilities: [
      'Solve complex problems in your area.',
      'Innovate and propose technical solutions.',
      'Serve as a technical reference.',
      'Share knowledge with the team.',
    ],
    behaviors: [
      'Serve as a technical reference and communicate complexities clearly.',
      'Develop innovative technical solutions and high quality.',
      'Solve complex technical problems.',
      'Share advanced technical knowledge with the team.',
      'Contribute to the development of solutions that improve the client experience.',
    ],
    pair: 'coordinator',
  },
  {
    id: 'manager',
    name: 'Manager',
    level: 'tactical',
    description:
      'The Manager of Development is responsible for leading one or more teams, ensuring project delivery within the deadline and with quality. He manages resources, defines priorities and acts in the resolution of conflicts.',
    responsibilities: [
      'Lead development teams.',
      'Manage resources and define priorities.',
      'Ensure project delivery on time.',
      'Resolve conflicts and problems within the team.',
    ],
    behaviors: [
      'Manage communication between the team and the management.',
      'Coordinate multiple squads, ensuring project delivery on time and with quality.',
      'Facilitate the resolution of conflicts and complex problems.',
      'Promote the continuous development of team members.',
      'Lead initiatives that improve the client experience.',
    ],
    pair: 'specialist2',
  },
  {
    id: 'specialist2',
    name: 'Specialist II',
    level: 'tactical',
    description:
      'The Specialist II has an advanced level of knowledge and experience in his area. He is responsible for leading technical initiatives and collaborating with other specialists to solve technical challenges.',
    responsibilities: [
      'Lead technical initiatives.',
      'Collaborate with other specialists.',
      'Solve advanced technical challenges.',
      'Mentor junior developers.',
    ],
    behaviors: [
      'Communicate technical advances and challenges to the team.',
      'Deliver advanced technical solutions within the deadline.',
      'Solve advanced technical problems.',
      'Mentor junior and senior developers.',
      'Develop technical solutions focused on improving the client experience.',
    ],
    pair: 'manager',
  },
  {
    id: 'general_manager',
    name: 'General Manager',
    level: 'strategic',
    description:
      'The General Manager of Development is responsible for the strategic management of multiple teams or tribes. He defines the long-term vision and ensures that all projects are aligned with the company\'s objectives.',
    responsibilities: [
      'Define the long-term vision and strategy.',
      'Manage multiple teams or tribes.',
      'Ensure the alignment of projects with the company\'s objectives.',
      'Take critical strategic decisions.',
    ],
    behaviors: [
      'Represent the development tribe in the high management.',
      'Define the general vision and direction of the tribe.',
      'Take critical strategic decisions.',
      'Develop leaders and promote innovation culture.',
      'Ensure that the tribe\'s strategy is aligned with the improvement of the client experience.',
    ],
    pair: 'specialist3',
  },
  {
    id: 'specialist3',
    name: 'Specialist III',
    level: 'strategic',
    description:
      'The Specialist III is one of the most experienced professionals in the company, with a deep understanding of his area of activity. He leads innovation projects and acts as a consultant for high management.',
    responsibilities: [
      'Lead innovation projects and develop top solutions.',
      'Act as a consultant for high management.',
      'Develop top solutions.',
      'Share knowledge with the organization.',
    ],
    behaviors: [
      'Communicate clearly and precisely the innovative solutions.',
      'Develop top solutions within the established deadlines.',
      'Solve highly complex technical problems.',
      'Promote knowledge exchange and innovation within the organization.',
      'Develop technical solutions that provide significant value to clients.',
    ],
    pair: 'general_manager',
  },
  {
    id: 'director',
    name: 'Director',
    level: 'strategic',
    description:
      'The Director of Development is responsible for the general vision and direction of the development tribe. He ensures the execution of the company\'s strategy and promotes continuous innovation.',
    responsibilities: [
      'Define the general vision and direction of the tribe.',
      'Promote continuous innovation.',
      'Ensure the execution of the company\'s strategy.',
      'Represent the tribe in high management.',
    ],
    behaviors: [
      'Represent the development tribe in high management.',
      'Define the general vision and direction of the tribe.',
      'Take critical strategic decisions.',
      'Develop leaders and promote innovation culture.',
      'Ensure that the tribe\'s strategy is aligned with the improvement of the client experience.',
    ],
    pair: null,
  },
]

const functionalRoles = [
  {
    id: 'head',
    name: 'Head',
    description: 'Responsible for defining the vision and strategy of the engineering tribe.',
    responsibilities: [
      'Define the vision and strategy of the engineering tribe.',
      'Ensure effective resource allocation.',
      'Promote innovation and continuous improvement.',
      'Represent the tribe in high management.',
    ],
    pair: null,
  },
  {
    id: 'em',
    name: 'Engineering Manager (EM)',
    description:
      'Manager that leads squads, ensures project delivery with quality and deadline, develops the team and promotes collaboration and innovation.',
    responsibilities: [
      'Manage one or more squads, ensuring that the teams are aligned with the organization\'s objectives and operate efficiently.',
      'Ensure project delivery on time and with quality, supervising progress and implementing strategies to maintain excellence standards.',
      'Implement a continuous feedback system, both formal and informal, to ensure that team members are aware of their areas of improvement and achievements.',
      'Identify and develop internal talent to ensure a solid succession plan for critical functions in the team.',
      'Manage conflicts and promote collaboration in the team, resolving disagreements and encouraging a healthy working environment.',
      'Ensure that all team members understand and are aligned with the product\'s vision and strategy, promoting a clear understanding of business priorities.',
      'Facilitate the team\'s adaptation to organizational and technological changes, ensuring a smooth transition and minimizing negative impacts.',
      'Develop reports and metrics to track team performance and project progress, presenting these data to stakeholders ensuring transparency and alignment.',
      'Identify, evaluate and mitigate risks throughout the project lifecycle, ensuring that possible obstacles are managed proactively.',
      'Implementar e manter processos de desenvolvimento ágil, assegurando a adoção de práticas ágeis para otimizar a eficiência e a entrega contínua de valor.',
      'Stay updated with new tools and technologies that can benefit the team and improve development processes.',
      'Facilitate communication between the team and other stakeholders, acting as a bridge between the technical team and other areas of the company.',
      'Promote the adoption and learning of the best technologies and practices to continuously improve processes and products.',
      'Lead recruitment and retention efforts, actively participating in the selection of new talent and implementing strategies to keep the team engaged and satisfied.',
      'Promote diversity and inclusion in the team, promoting an inclusive working environment that values different perspectives and experiences.',
    ],
    pair: null,
  },
  {
    id: 'tl',
    name: 'Tech Lead (TL)',
    description:
      'Developer that ensures technical delivery quality, solves complex problems, monitors metrics, acts on incidents and ensures compliance with security policies.',
    responsibilities: [
      'Ensure technical delivery quality and efficiency, ensuring that they meet the defined standards.',
      'Apply critical thinking to analyze problems from different perspectives, identifying effective solutions.',
      'Monitor performance metrics of applications (performance, errors, etc.), monitoring key indicators and implementing improvements.',
      'Act on incidents, responding quickly, identifying root causes and applying corrective solutions.',
      'Ensure compliance with security policies and regulations, ensuring that all projects and practices of the team are in compliance with the company\'s security standards.',
      'Conduct refinement ceremonies, facilitating planning sessions to ensure a well-defined backlog.',
      'Represent the squad technically in internal and external ceremonies, communicating clearly the needs and technical progress.',
      'Build/develop features of high complexity when necessary.',
      'Help team members with tasks in delay or difficulties, offering technical support and guidance.',
      'Take technical decisions of lower criticality within the squad, promoting agility in development.',
      'Ensure that the code is well structured, clean and maintains high standards, promoting solid development practices such as code reviews and automated tests.',
    ],
    pair: null,
  },
]

const raciData = [
  {
    task: 'Define the global vision and strategy',
    Head: 'A',
    EM: 'C',
    TL: 'I',
  },
  {
    task: 'Ensure effective resource allocation',
    Head: 'A',
    EM: 'C',
    TL: 'I',
  },
  {
    task: 'Promote innovation and continuous improvement',
    Head: 'A',
    EM: 'I',
    TL: 'R',
  },
  {
    task: 'Lead technical activities between squads',
    Head: 'C',
    EM: 'I',
    TL: 'R',
  },
  {
    task: 'Manage budgets and costs',
    Head: 'A',
    EM: 'C',
    TL: 'I',
  },
  {
    task: 'Develop the technology strategy',
    Head: 'R',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Lead the implementation of projects',
    Head: 'I',
    EM: 'R',
    TL: 'C',
  },
  {
    task: 'Ensure compliance with security policies',
    Head: 'A',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Manage contracts and suppliers',
    Head: 'A',
    EM: 'C',
    TL: 'I',
  },
  {
    task: 'Promote innovation culture',
    Head: 'R',
    EM: 'C',
    TL: 'C',
  },
  {
    task: 'Develop and maintain technical documentation',
    Head: 'I',
    EM: 'R',
    TL: 'R',
  },
  {
    task: 'Manage/track the squad\'s performance',
    Head: 'I',
    EM: 'R',
    TL: 'C',
  },
  {
    task: 'Conduct refinement meetings',
    Head: 'I',
    EM: 'C',
    TL: 'A',
  },
  {
    task: 'Perform performance evaluations',
    Head: 'I',
    EM: 'R',
    TL: 'C',
  },
  {
    task: 'Identify and mitigate risks',
    Head: 'A',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Promote training and continuous development',
    Head: 'R',
    EM: 'A',
    TL: 'C',
  },
  {
    task: 'Monitor the squad\'s services (applications)',
    Head: 'I',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Define and implement quality processes',
    Head: 'A',
    EM: 'C',
    TL: 'C',
  },
  {
    task: 'Ensure scalability of solutions',
    Head: 'C',
    EM: 'C',
    TL: 'R',
  },
  {
    task: 'Track technological trends and innovations',
    Head: 'A',
    EM: 'I',
    TL: 'R',
  },
  {
    task: 'Manage crises and incidents',
    Head: 'A',
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

    const levelBadgeMap = {
      operational: 'Operational',
      tactical: 'Tactical',
      strategic: 'Strategic',
    }

    let stepIndex = 1
    const handled = new Set()

    const makeColumn = (job) => {
      const badge = levelBadgeMap[job.level] || 'Level'
      const firstResponsibility = job.responsibilities?.[0] || ''
      return `
        <div class="platform__step-col" id="description_${job.id}">
          <div class="platform__step-title">${job.name}</div>
          <div class="platform__step-body">${job.description}</div>
          <div class="platform__step-body platform__step-extra">${firstResponsibility}</div>
          <div class="platform__step-badge">${badge}</div>
        </div>
      `
    }

    jobs.forEach((job) => {
      if (handled.has(job.id)) return

      const pairJob = job.pair ? jobs.find((j) => j.id === job.pair) : null
      const hasPair = pairJob && !handled.has(pairJob.id)

      const step = document.createElement('div')
      const stepNumber = String(stepIndex).padStart(2, '0')
      stepIndex += 1

      if (hasPair) {
        step.classList.add('platform__step', 'platform__step--pair')

        const [left, right] =
          job.id.startsWith('specialist') && !pairJob.id.startsWith('specialist')
            ? [job, pairJob]
            : pairJob.id.startsWith('specialist') && !job.id.startsWith('specialist')
              ? [pairJob, job]
              : [job, pairJob]

        step.innerHTML = `
          <div class="platform__step-num">${stepNumber}</div>
          <div class="platform__step-pair">
            ${makeColumn(left)}
            <div class="platform__step-vdivider"></div>
            ${makeColumn(right)}
          </div>
        `

        handled.add(job.id)
        handled.add(pairJob.id)
      } else {
        step.classList.add('platform__step')
        step.id = `description_${job.id}`
        step.innerHTML = `
          <div class="platform__step-num">${stepNumber}</div>
          <div>
            <div class="platform__step-title">${job.name}</div>
            <div class="platform__step-body">${job.description}</div>
            <div class="platform__step-body platform__step-extra">${job.responsibilities?.[0] || ''}</div>
            <div class="platform__step-badge">${levelBadgeMap[job.level] || 'Level'}</div>
          </div>
        `
        handled.add(job.id)
      }

      jobContainer.appendChild(step)
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
        <td><span class="raci-cell raci-${item.EM.toLowerCase()}" data-original-color="${getColor(item.EM)}">${item.EM}</span></td>
        <td><span class="raci-cell raci-${item.TL.toLowerCase()}" data-original-color="${getColor(item.TL)}">${item.TL}</span></td>
      `
      table.appendChild(row)
    })
  }

  function getColor(role) {
    switch (role) {
      case 'R':
        return '#f97316'
      case 'A':
        return '#a855f7'
      case 'C':
        return '#38bdf8'
      case 'I':
        return '#71717a'
      default:
        return '#444'
    }
  }

  function createRoleElement(role) {
    const roleElement = document.createElement('div')
    roleElement.classList.add('role-description')
    roleElement.innerHTML = `
      <div class="role-chip-wrap">
        <span class="role-chip">Functional role</span>
      </div>
      <h3>${role.name}</h3>
      <p class="role-context">${role.description}</p>
      <ul class="role-items">
        ${role.responsibilities.map((responsibility) => `<li><span class="material-icons">check_circle</span><span>${responsibility}</span></li>`).join('')}
      </ul>
    `
    return roleElement
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
  renderFunctionalRoles()
  renderRaciTable()
})
