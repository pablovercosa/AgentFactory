# packages/devops/

Pacote de recursos técnicos reutilizáveis para Linux, serviços, GitHub, implantação, operações e monitoramento. Procedimentos devem ser compatíveis com versões registradas e explicitar ambiente, permissões, impacto, verificação e rollback.

Separar diagnóstico de execução mutável: operações remotas ou privilegiadas exigem autorização específica. Não incluir credenciais em exemplos ou logs. Componentes de infraestrutura podem ser adaptados a projetos, mas não compartilham acesso a seus dados automaticamente.

Base: especificação, seções 6, 19 e 22.