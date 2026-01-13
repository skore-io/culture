export const tribes = {
  diagnostico: {
    name: 'Diagnóstico',
    description: 'Tribo responsável pelo domínio de diagnóstico de um colaborador (PDI, etc).',
    key: 'diagnostico',
  },
  desenvolvimento: {
    name: 'Desenvolvimento',
    description: 'Tribo responsável pelo desenvolvimento de um colaborador (Treinamentos, etc).',
    key: 'desenvolvimento',
  },
  plataforma: {
    name: 'Plataforma',
    description: 'Tribo shared services responsável integração dos produtos e mobile apps.',
    key: 'plataforma',
  },
}

export const squads = {
  diagnostico_individual: {
    name: 'Diagnóstico Individual',
    description:
      'Outcome: entendimento claro, equalitário e confiável das avaliações e critérios de perfomance',
    key: 'diagnostico_individual',
    tribe_key: tribes.diagnostico.key,
  },
  resultado: {
    name: 'Resultado',
    description:
      'Outcome: Tangibilizar o impacto do nosso produto ao conectar desenvolvimento, competências e performance com resultados de negócio.',
    key: 'resultado',
    tribe_key: tribes.diagnostico.key,
  },
  protagonismo: {
    name: 'Protagonismo e Hábito',
    description: 'Outcome: Transformar planos em ações rotineiras para buscar desenvolvimento.',
    key: 'protagonismo',
    tribe_key: tribes.desenvolvimento.key,
  },
  treinamentos: {
    name: 'Treinamentos',
    description:
      'Outcome: evoluir performance e desenvolver competências conectada às metas e ao crescimento real.',
    key: 'treinamentos',
    tribe_key: tribes.desenvolvimento.key,
  },
  oficina_de_conteudo: {
    name: 'Oficina de Conteúdo',
    description:
      'Outcome: Facilitar a disponibilização de conteúdos alinhados com a necessidades de colaboradores e da organização.',
    key: 'oficina_de_conteudo',
    tribe_key: tribes.desenvolvimento.key,
  },
  ux_integrada: {
    name: 'UX integrada',
    description:
      'Outcome: Garantir uma experiência unificada, simples e intuitiva, sem barreiras de usabilidade, em toda a plataforma.',
    key: 'ux_integrada',
    tribe_key: tribes.plataforma.key,
  },
  core: {
    name: 'Core',
    description: 'Outcome: Reduzir barreiras de administração e operação.',
    key: 'core',
    tribe_key: tribes.plataforma.key,
  },
  mobile: {
    name: 'Mobile',
    description:
      'Outcome: Garantir uma experiência unificada, simples e intuitiva, sem barreiras de usabilidade, em toda a plataforma.',
    key: 'mobile',
    tribe_key: tribes.plataforma.key,
  },
  dados: {
    name: 'Dados',
    description:
      'Outcome: Criar modelo de dados unificado que permitam análises relacionadas ao produto, indicadores de negócio e suporte agentes de IA.',
    key: 'dados',
    tribe_key: tribes.plataforma.key,
  },
}
