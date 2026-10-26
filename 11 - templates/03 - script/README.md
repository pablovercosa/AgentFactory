# templates/script/

Modelo para script determinístico com contrato JSON, manifesto de identificação/versão, permissões, limites e teste-base. O autor deve implementar transformação específica, validar argumentos e definir comportamento para erros e efeitos colaterais.

Adicionar testes de contrato e limites em ambiente isolado; documentar dependências e proveniência; fixar artefato/hash aprovado. O template não autoriza execução: o Script Runner previsto deverá validar o manifesto e a política antes de rodar.

Base: especificação, seções 12.1–12.3.