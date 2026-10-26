# services/

Componentes internos que a Agent Factory precisará desenvolver: Registry, Knowledge MCP, Execution Router, Script Runner, Telemetry Collector, Evaluation Engine, Project Bootstrap, Model Router, Quota & Resume Manager, Cross-Agent Bridge e JEV Decision Engine.

São planos/protótipos, não aplicações instaladas por existirem pastas ou exemplos. Antes de implementar, definir contrato e estado, permissões, isolamento, tratamento de falhas, observabilidade, testes, versionamento e operação/rollback. Alguns módulos podem ser bibliotecas Python, não processos permanentes.

A arquitetura prevê consulta a catálogo e políticas antes de execução, validação de resultados, telemetria sanitizada e publicação após revisão.

Base: especificação, seções 3.2, 4 e 9–18.