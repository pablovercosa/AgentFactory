# skills/

Biblioteca de instruções reutilizáveis para capacidades atômicas. Cada skill deve ter `SKILL.md` curto e descobrível, manifesto da Agent Factory para versão/dependências/políticas e, quando necessário, `references/`, `scripts/` e `tests/`.

## Composição e publicação
Consultar Registry antes de criar; explicitar dependências de outras skills e MCPs; lembrar que uma menção em Markdown não carrega automaticamente outra skill. Validar descoberta e execução em cada executor-alvo. Publicar snapshots imutáveis aprovados, não apontar produção para uma árvore de edição mutável.

Skills orientam o agente, mas não substituem autorização efetiva do MCP, sistema externo ou Script Runner. Segredos não devem aparecer em instruções, exemplos ou logs.

Base: especificação, seção 10.