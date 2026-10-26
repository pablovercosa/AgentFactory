# adapters/

Adaptadores planejados que traduzem o contrato comum da Cross-Agent Bridge para versões/interfaces específicas dos executores. A integração inicial é Claude Code → OpenCode; direção inversa é possibilidade futura, não parte presumida do protótipo.

Cada adaptador deve verificar CLI/capacidades instaladas, construir argumentos sem shell arbitrário, normalizar eventos estruturados e preservar sessão/erros conforme schema observado. Manter allowlists e permissões fora da tradução; adaptador não pode ampliá-las.

Usar fixtures reais versionadas e testes de compatibilidade.

Base: especificação, seções 15.1–15.5.