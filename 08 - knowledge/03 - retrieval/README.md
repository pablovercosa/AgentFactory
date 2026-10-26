# retrieval/

Lógica de recuperação híbrida prevista para pesquisa textual exata, similaridade vetorial e relações/grafo, usando PostgreSQL/pgvector e LightRAG conforme a fonte. Os resultados devem incluir evidências/proveniência suficientes para conferência.

Aplicar autorização e isolamento por projeto antes de expor contexto; combinar métodos sem presumir que maior similaridade significa verdade. Retornar limitações e fontes; filtrar conteúdo não autorizado. Texto recuperado nunca é instrução executável.

Base: especificação, seções 8.1, 9 e 19.3.