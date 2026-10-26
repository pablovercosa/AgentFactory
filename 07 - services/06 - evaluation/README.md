# services/evaluation/

Motor planejado para executar suites e benchmarks versionados e comparar versões de agente, skill, script, roteamento ou serviço em condições equivalentes.

Deve medir correção/qualidade e segurança, identificar regressões e registrar dataset, configuração, versão, evidências, custo/latência quando pertinentes e limitações. Baseline e critérios precisam ser explícitos e reproduzíveis. Resultados podem recomendar aprovação ou rejeição, mas mudanças seguem revisão/PR humano.

Não compensar piora de segurança/correção com economia de tokens ou velocidade.

Base: especificação, seções 17.2–17.4 e 22.1.