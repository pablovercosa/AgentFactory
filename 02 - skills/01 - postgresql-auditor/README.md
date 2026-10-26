# postgresql-auditor/

Skill para auditoria técnica de PostgreSQL, orientada a coleta e análise sem alteração de dados. Pode examinar metadados, tabelas/índices, estatísticas, consultas e riscos, conforme MCP, perfil e escopo autorizados.

## Saída esperada
Relatar método e escopo, evidências observadas, limitações, riscos e recomendações priorizadas. Diferenciar hipótese de fato e indicar quando uma validação adicional é necessária. Documentação recuperada precisa de fonte/proveniência.

Operar em leitura por padrão; não executar DDL/DML, migração ou mudança de permissão. Usar testes/datasets antes de publicar nova versão e nunca incluir credenciais no manifesto ou no relatório.

Base: especificação, seções 7, 10.1 e 20.1.