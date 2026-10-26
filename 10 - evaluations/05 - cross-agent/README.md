# cross-agent/

Casos para avaliar delegação Claude Code ↔ OpenCode pela Bridge. Cobrir autorização de projeto/agente, parsing de eventos JSON reais, resultado estruturado, qualidade, stderr/exit code, timeout, cancelamento, limite de saída, ambiente sanitizado e prevenção de ciclos.

Validar compatibilidade com versões observadas do CLI/MCP, sessão e repetição idempotente. Usar executores simulados/fixtures em testes automatizados; não expor tokens ou permitir edição concorrente da mesma árvore.

Base: especificação, seção 15.