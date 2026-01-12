export const tribes = {
  diagnostico: {
    name: 'Diagnóstico',
    description: 'Tribo responsável pelo domínio de diagnóstico de um colaborador (PDI, etc).',
  },
  desenvolvimento: {
    name: 'Desenvolvimento',
    description: 'Tribo responsável pelo desenvolvimento de um colaborador (Treinamentos, etc).',
  },
  plataforma: {
    name: 'Plataforma',
    description: 'Tribo shared services responsável integração dos produtos e mobile apps.',
  },
}

export const squads = {
  diagnosticoIndividual: {
    name: 'Diagnóstico Individual',
    description:
      'Outcome: entendimento claro, equalitário e confiável das avaliações e critérios de perfomance',
    tribeKey: 'diagnostico',
  },
  resultado: {
    name: 'Resultado',
    description:
      'Outcome: Tangibilizar o impacto do nosso produto ao conectar desenvolvimento, competências e performance com resultados de negócio.',
    tribeKey: 'diagnostico',
  },
  protagonistaismoEHabito: {
    name: 'Protagonismo e Hábito',
    description: 'Outcome: Transformar planos em ações rotineiras para buscar desenvolvimento.',
    tribeKey: 'desenvolvimento',
  },
  treinamentos: {
    name: 'Treinamentos',
    description:
      'Outcome: evoluir performance e desenvolver competências conectada às metas e ao crescimento real.',
    tribeKey: 'desenvolvimento',
  },
  oficinaDeConteudo: {
    name: 'Oficina de Conteúdo',
    description:
      'Outcome: Facilitar a disponibilização de conteúdos alinhados com a necessidades de colaboradores e da organização.',
    tribeKey: 'desenvolvimento',
  },
  uXIntegrada: {
    name: 'UX integrada',
    description:
      'Outcome: Garantir uma experiência unificada, simples e intuitiva, sem barreiras de usabilidade, em toda a plataforma.',
    tribeKey: 'plataforma',
  },
  core: {
    name: 'Core',
    description: 'Outcome: Reduzir barreiras de administração e operação.',
    tribeKey: 'plataforma',
  },
  mobile: {
    name: 'Mobile',
    description:
      'Outcome: Garantir uma experiência unificada, simples e intuitiva, sem barreiras de usabilidade, em toda a plataforma.',
    tribeKey: 'plataforma',
  },
  dados: {
    name: 'Dados',
    description:
      'Outcome: Criar modelo de dados unificado que permitam análises relacionadas ao produto, indicadores de negócio e suporte agentes de IA.',
    tribeKey: 'plataforma',
  },
}
