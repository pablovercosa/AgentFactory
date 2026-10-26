# scripts/library/

Coleção de scripts determinísticos aprovados e reutilizáveis, organizada por finalidade. Exemplos previstos incluem inspeção/triagem de logs e consultas de metadados; soluções existentes devem ser localizadas antes de criar duplicatas.

Cada artefato deve ter versão e proveniência, contrato JSON de entrada/saída, validação de parâmetros, permissões mínimas, limites de execução e testes. Registrar efeitos colaterais e compatibilidade. O Script Runner deverá executar versão aprovada, não código recém-gerado.

Não armazenar segredos ou dados de projeto no código compartilhado.

Base: especificação, seções 12.1–12.3.