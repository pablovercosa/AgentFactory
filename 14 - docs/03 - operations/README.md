# docs/operations/

Procedimentos operacionais para diagnóstico, observabilidade, backup/restauração, cotas/retomada, avaliações e rollback. Cada procedimento deve indicar alvo, impacto, pré-condições, autorização, comandos, sinais de sucesso/falha e recuperação.

Não confundir quota com falha de rede/autenticação/permissão; não prometer retomada quando sessão/host/provedor não suportar. Sanitizar logs, testar restauração e distinguir rollback do repositório de reversão de efeitos externos.

Base: especificação, seções 14, 19.5–19.7 e 22.