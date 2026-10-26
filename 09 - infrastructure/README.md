# infrastructure/

Definições versionáveis da infraestrutura que sustenta a Agent Factory: PostgreSQL, migrations e unidades/timers de usuário previstas. Documentar dependências, versões, permissões, configuração, observabilidade, backup e recuperação.

Manter código/configuração desejada separado de estado de runtime, cópias de banco, ambientes virtuais e credenciais, que não pertencem ao conteúdo versionável. Aplicar menor privilégio; testar mudanças em ambiente isolado e não iniciar/alterar serviços sem validação e autorização.

Base: especificação, seções 6–9 e 19.