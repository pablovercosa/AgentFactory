# templates/agent/

Modelos para definir agente com instruções portáveis, manifesto específico da Agent Factory e adaptadores de Claude Code/OpenCode. O manifesto central registra versão, dependências e políticas; arquivos de adaptador traduzem para sintaxe nativa do executor.

A referência a skills/MCPs deve corresponder a dependências declaradas e autorizadas. Validar descoberta, permissões, modelo e comportamento em cada executor. Não tratar o manifesto unificado como configuração nativa automaticamente interpretada.

Base: especificação, seção 11.