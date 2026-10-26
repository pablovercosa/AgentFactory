# extraction/

Procedimentos/componentes para extrair texto e metadados de fontes autorizadas antes da ingestão no RAG/GraphRAG. Preservar identificador da fonte, versão, data, classificação e referência de origem; registrar falhas de parsing.

Conteúdo externo deve ser tratado como dado não confiável. Verificar autorização e tipo/formato, evitar ingestão de segredos/dados de outros projetos e sanitizar saídas. Ingestão incremental deve detectar alterações e manter possibilidade de reprocessamento.

Base: especificação, seções 8.1 e 8.6.