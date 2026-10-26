# services/cross_agent_bridge/

MCP planejado para delegação autorizada de Claude Code a OpenCode e retorno estruturado. O fluxo ilustrativo invoca o CLI e interpreta eventos JSON; o schema efetivo deve ser observado na versão instalada. Exemplo não é implementação de produção.

Exigir allowlists de projetos/agentes/diretórios, tarefa limitada, timeout, streaming/limite de saída, sanitização de ambiente, cancelamento, controle de sessões, logs sanitizados e prevenção de chamadas cíclicas. Não permitir edição concorrente da mesma árvore. Resultado completo pode ficar em artefato aprovado, com resumo/referência retornado ao chamador.

Implementar parser com fixtures reais e validar autenticação, cotas, permissões e isolamento antes de ativar.

Base: especificação, seção 15.