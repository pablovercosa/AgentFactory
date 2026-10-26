# quota-resume/

Testes de detecção de cota, pausa, checkpoints, estados persistentes, elegibilidade e retomada limitada/idempotente. Incluir reset esperado, checkpoint incompleto, limite de tentativas, aprovação pendente e cancelamento.

Separar cota identificada de falhas de rede, autenticação e permissão; não disparar fallback pago automaticamente. Verificar que checkpoint não contém segredos e que efeitos já concluídos não são repetidos indevidamente. Informar limites de recuperação do executor.

Base: especificação, seção 14.