# services/quota_resume_manager/

Componente planejado para gerir tarefas persistentes quando uma cota real interromper a execução: distinguir o evento de falhas de rede/autenticação/permissão; persistir estado/checkpoint; aguardar janela aplicável; revalidar elegibilidade e retomar de modo limitado e idempotente.

Estados previstos incluem `QUEUED`, `RUNNING`, `PAUSED_QUOTA`, `WAITING_RESET`, `READY_TO_RESUME`, `WAITING_APPROVAL`, `COMPLETED`, `FAILED` e `CANCELLED`. O checkpoint deve registrar progresso e efeitos concluídos sem segredos. Retomada/fallback não é garantida e pode exigir aprovação.

Base: especificação, seção 14.