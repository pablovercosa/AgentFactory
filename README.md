# Agent Factory

Raiz do projeto e deste Vault. A Agent Factory organiza componentes reutilizáveis para criar, executar, avaliar e distribuir agentes, skills e scripts.

## Organização
- `agents/`, `skills/` e `scripts/`: capacidades reutilizáveis.
- `services/`, `packages/` e `infrastructure/`: componentes da plataforma.
- `projects/`: configurações e conhecimento específicos de cada projeto.
- `templates/`: modelos iniciais; preencher e validar antes de publicar.
- `.fontes/Secrets/`: credenciais; nunca registrar ou reproduzir seus valores.
- `.outros/`: ambientes, dados operacionais, runtime e logs que precisam permanecer dentro desta pasta, mas fora do conteúdo de autoria.

A especificação principal está em `01 - Descrição Projeto/Agent Factory.md`. O que aparece no plano é proposta; não significa que o componente já esteja implementado.
