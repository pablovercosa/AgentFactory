# services/registry/

Serviço planejado para catálogo versionado e consultável de agentes, skills, scripts, MCPs, modelos, dependências, projetos e compatibilidade. Sua finalidade é permitir descoberta e reutilização antes da criação de novos componentes.

O Registry deverá distinguir versões candidatas de aprovadas, manter proveniência/hash e resolver dependências/impacto. Project Bootstrap e roteadores poderão consultá-lo; acesso a dados de projeto continua sujeito a política própria. Não presumir implementação ou persistência até haver código, schema, testes e revisão.

Base: especificação, seções 3.2, 7.5, 18.1 e 18.4.