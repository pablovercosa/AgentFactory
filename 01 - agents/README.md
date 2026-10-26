# agents/

Catálogo de agentes especializados e portáveis. Cada agente reúne instruções (`AGENT.md`), manifesto da Agent Factory, dependências e adaptadores gerados para os executores; os formatos nativos de Claude Code e OpenCode não são intercambiáveis.

## Ciclo de criação e uso
Antes de criar um agente, consultar Registry e skills/MCPs disponíveis. Definir escopo, projeto, permissões e modelo; montar proposta e adaptadores; validar descoberta e permissões em cada executor; avaliar casos e regressões; publicar somente como versão revisada/aprovada. Uma referência no texto não garante que a skill seja carregada automaticamente.

## Catálogo
- `agent-creator`: propõe agentes a partir de requisitos e componentes existentes.
- `agent-evaluator`: compara comportamento com critérios e evidências.
- `agent-evolver`: transforma avaliações em propostas testáveis.
- `skill-creator` e `skill-evolver`: criam e evoluem skills sob validação.
- `script-optimizer`: identifica rotinas que podem ser determinísticas.
- `database-specialist` e `infrastructure-specialist`: especialidades de diagnóstico.

Agentes são projetos em evolução, não serviços autônomos já implantados. Aplicar menor privilégio, isolamento de dados por projeto e aprovação humana para efeitos externos ou privilegiados.

Base: especificação, seções 11, 17 e 18.