# scripts/

Código para tarefas determinísticas, repetitivas ou com contrato verificável. Antes de criar, procurar no Registry por solução aprovada; scripts devem economizar chamadas generativas sem retirar interpretação necessária.

## Requisitos de artefato
Definir identificador/versão, entrada e saída estruturadas, schema, erros, permissões e limites; validar argumentos; evitar credenciais embutidas; incluir testes unitários e de contrato; executar em isolamento. O Script Runner futuro deverá validar manifesto e versão/hash antes de permitir execução.

Código candidato não é código aprovado. Testes, revisão e publicação versionada são necessários; telemetria deve ser sanitizada.

Base: especificação, seção 12.