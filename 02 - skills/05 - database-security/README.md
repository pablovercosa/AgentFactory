# database-security/

Skill para revisar controles de segurança de bancos: identidade, roles, privilégios, isolamento, exposição, segredos e trilhas de auditoria. Prioriza menor privilégio e separação dos bancos principal e de RAG.

## Revisão
Verificar acesso efetivo e configuração autorizada; identificar credenciais expostas e permissões excessivas; apresentar evidências e recomendações graduais; considerar isolamento por projeto/RLS antes de dados sensíveis. Não copiar valores de segredo para relatórios.

A skill não altera roles, políticas ou dados sem autorização específica, revisão do impacto e procedimento de recuperação. Validar recomendações em ambiente isolado.

Base: especificação, seções 7.1, 7.10 e 19.1–19.4.