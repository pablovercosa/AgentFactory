# agent-evaluator/

Agente planejado para avaliar versões de agentes com suites reproduzíveis, baselines e critérios explícitos. A avaliação deve cobrir qualidade/correção, segurança, regressões e, quando aplicável, latência e custo.

## Procedimento
- Fixar versão, configuração, executor, modelo e dataset para comparação justa.
- Executar casos positivos, limites, entradas inválidas e regressões conhecidas.
- Registrar evidências, falhas e condições de teste; sanitizar dados sensíveis.
- Comparar com baseline e recomendar aprovação, rejeição ou nova análise.

Resultados orientam evolução, mas não publicam mudanças por si mesmos. Segurança e correção não podem ser compensadas por velocidade ou redução de tokens.

Base: especificação, seções 17.2–17.4 e 22.