# script-optimizer/

Agente planejado para detectar tarefas repetitivas e determinísticas que possam ser executadas por script, API ou mecanismo convencional com resultado equivalente.

## Fluxo esperado
Consultar Registry e procurar script validado; estimar benefício e custo de manutenção; caso falte solução, propor um script com contrato e entradas validadas; testar em ambiente isolado; rejeitar candidatos com falhas ou regressões; encaminhar candidatos aprovados para revisão/PR. IA permanece responsável por interpretação quando necessária, não por repetir cálculo mecânico.

O Script Runner deve executar somente artefatos aprovados, com limites e auditoria. Não executar código novo em produção nem guardar segredos no script.

Base: especificação, seções 12.1–12.4 e 17.5.