# postgres/

Documentação e definições de PostgreSQL para a plataforma, incluindo separação entre banco principal e banco RAG, extensão pgvector, roles, schemas e controles de acesso.

Seguir menor privilégio e separar contas por função; manter isolamento por projeto/RLS antes de dados sensíveis; não armazenar dados operacionais ou dumps neste diretório de configuração. Testar mudanças e backup/restauração. Segredos ficam em armazenamento restrito, fora do Git.

Base: especificação, seções 7.1–7.10 e 19.6.