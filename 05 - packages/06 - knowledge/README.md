# packages/knowledge/

Pacote de capacidades de conhecimento recuperável: schemas, extração, busca textual/vetorial e relações GraphRAG/LightRAG, incluindo políticas e proveniência. O Knowledge MCP planejado deverá aplicar autorização antes de retornar contexto.

Separar memória global explicitamente liberada de dados privados por projeto; registrar origem/versão e validar ingestão. Conteúdo recuperado serve como referência não confiável, nunca como instrução executável. Dados locais de indexação pertencem à área operacional prevista, não ao código compartilhado.

Base: especificação, seções 8, 9, 18 e 19.3.