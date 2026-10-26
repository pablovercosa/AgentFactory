# migrations/

Migrações ordenadas e versionadas para schemas PostgreSQL, acompanhadas de revisão, testes e correspondência com a versão do serviço/Registry.

Usar estratégia expand/contract quando consumidores coexistirem; validar dados e compatibilidade em ambiente isolado; prever backup, recuperação ou rollback antes de aplicação. Uma reversão SQL não garante desfazer efeitos externos. Nunca executar migração em produção apenas porque o arquivo existe.

Base: especificação, seções 7.3, 7.5, 7.10 e 19.6–19.7.