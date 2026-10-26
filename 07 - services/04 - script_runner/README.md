# services/script_runner/

Executor planejado para scripts registrados e aprovados. Antes de execução deverá validar manifesto, versão/hash, schema de entrada, allowlist, dependências e permissões; limitar recursos/tempo e sanitizar o registro de resultados.

Executar código candidato em ambiente isolado de teste, nunca como artefato aprovado. Capturar saída estruturada e erros sem segredos. O Script Runner reduz chamadas de IA em tarefas determinísticas, mas não deve ocultar efeitos colaterais nem executar argumentos arbitrários.

Base: especificação, seções 12.1–12.3 e 19.4.