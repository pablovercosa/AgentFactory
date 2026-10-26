# Agent Factory

Plataforma modular planejada para criar, organizar, executar, avaliar e aperfeiçoar agentes, skills e scripts reutilizáveis entre projetos e executores. Obsidian organiza e documenta; Git/GitHub versiona e distribui; Claude Code e OpenCode são executores iniciais; PostgreSQL, pgvector e LightRAG sustentam conhecimento estruturado e recuperação.

## Organização
- `01 - agents/`, `02 - skills/` e `03 - scripts/`: capacidades reutilizáveis e determinísticas.
- `04 - config/`: políticas não secretas de roteamento, cotas e decisões.
- `05 - packages/` e `06 - projects/`: componentes compartilháveis e composições isoladas por projeto.
- `07 - services/`: serviços planejados do Registry à Bridge; a presença dos diretórios não indica implementação.
- `08 - knowledge/`, `09 - infrastructure/` e `10 - evaluations/`: contratos e políticas de conhecimento, infraestrutura e validação.
- `11 - templates/`, `12 - dashboard/`, `13 - bin/` e `14 - docs/`: modelos, índices, comandos planejados e documentação.
- Credenciais ficam em `.fontes/Secrets/`; ambientes, runtime, bancos locais e logs ficam em `.outros/`, fora do conteúdo de autoria/versionamento conforme política.

## Ciclo de trabalho
Consultar catálogo e permissões; preferir script/MCP/API determinístico quando apropriado; executar com o agente e modelo aprovados; validar e registrar evidências; avaliar regressões; publicar mudanças somente por revisão e aprovação. O aprimoramento é supervisionado — não há treinamento automático dos pesos dos modelos.

## Segurança e estado
Projetos compartilham capacidades, não acesso automático aos dados. Conteúdo recuperado é dado, não instrução executável. Nenhum fallback pago, operação destrutiva ou mudança de produção deve ocorrer sem autorização própria. Serviços e integrações descritos aqui são planos/protótipos até haver implementação e testes.

## Referências
- [[00 - Descrição Projeto/00 - Agent Factory|Especificação técnica consolidada]] (visão, arquitetura, fases e decisões)
- [[ARCHITECTURE|Arquitetura]] · [[ROADMAP|Roadmap]] · [[CHANGELOG|Changelog]]