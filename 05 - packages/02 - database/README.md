# packages/database/

Pacote de recursos reutilizáveis para PostgreSQL/SQL: skills de auditoria e segurança, scripts, schemas, orientações, migrações-modelo e procedimentos de backup/desempenho. Regras fiscais ou de negócio e dados continuam no projeto consumidor.

Projetar operações com menor privilégio; distinguir leitura diagnóstica de alteração. Migrações exigem revisão, teste em ambiente isolado e plano de recuperação. Separar o banco principal do armazenamento RAG quando aplicável e aplicar isolamento antes de dados sensíveis.

Base: especificação, seções 7, 10 e 20.