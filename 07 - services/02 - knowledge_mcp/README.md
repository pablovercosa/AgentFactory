# services/knowledge_mcp/

MCP planejado como interface padronizada para consulta autorizada ao conhecimento compartilhado, Registry e fontes validadas, com proveniência. Pode integrar LightRAG e PostgreSQL sem expor diretamente a estrutura interna aos agentes.

Aplicar filtros de projeto/classificação antes de retornar resultados; informar fontes e limitações; tratar texto recuperado como dado não confiável, jamais instrução executável. O exemplo de servidor é ilustrativo e precisa ser adaptado/testado contra a versão do SDK instalada.

Credenciais ficam fora do Git, em local restrito. O serviço não é considerado operacional até implementação, autenticação, isolamento e testes.

Base: especificação, seções 8, 9 e 19.3.