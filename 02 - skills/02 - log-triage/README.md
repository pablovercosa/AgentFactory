# log-triage/

Skill para pré-processar logs, agrupar ocorrências e destacar padrões para análise posterior. O objetivo é reduzir trabalho repetitivo e fornecer contexto conciso, não declarar causa raiz apenas por correlação textual.

## Uso e limites
Scripts determinísticos podem normalizar formatos, contar ocorrências e selecionar amostras representativas; o agente interpreta casos ambíguos. Preservar timestamp, origem e contexto necessário, mas sanitizar tokens, segredos e dados pessoais antes de persistir ou compartilhar. Registrar limites do parser e exemplos não classificados.

Avaliar precisão, falsos agrupamentos e regressões com dataset versionado. Se a tarefa for resolvida por script aprovado, preferi-lo a uma chamada generativa desnecessária.

Base: especificação, seções 12.2, 13.4 e 17.2.