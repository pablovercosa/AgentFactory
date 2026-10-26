# services/execution_router/

Roteador planejado para escolher o meio de execução após identificar tarefa, projeto, catálogo e permissões. A ordem arquitetural prioriza solução determinística aprovada (script/MCP/API); se insuficiente, seleciona agente/executor autorizado; decisão probabilística/JEV só auxilia em ambiguidades entre opções já permitidas.

Validar entradas, limites e política de custo antes de executar; verificar resultado e encaminhar telemetria sanitizada. O roteador não concede permissões, não inventa ferramentas nem aprova sozinho ações destrutivas.

Base: especificação, seções 12.4, 13, 16.2 e 16.7.