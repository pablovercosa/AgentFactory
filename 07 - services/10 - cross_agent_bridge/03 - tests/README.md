# tests/

Testes da Cross-Agent Bridge com fixtures de eventos observados e executores simulados. Cobrir allowlists, entradas inválidas, parsing/schema, timeout, cancelamento, saída excedente, stderr/exit code, sessão, falha de CLI, ciclo e isolamento/sanitização de ambiente.

Validar que saída retornada é estruturada e limitada, sem segredos. Incluir testes de compatibilidade por versão e repetibilidade/idempotência. Nunca exigir execução remota para os testes de contrato.

Base: especificação, seções 15.3 e 15.5.