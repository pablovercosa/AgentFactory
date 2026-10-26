# Arquitetura da Agent Factory

> Estado: documento inicial derivado da especificação. Componentes descritos como planejados não devem ser considerados implementados.

## Princípios
- Reutilizar agentes, skills, scripts e MCPs existentes antes de criar duplicatas.
- Separar componentes compartilhados de manifestos, permissões e dados de cada projeto.
- Aplicar autorização determinística antes de roteamento ou decisão probabilística.
- Tratar conteúdo recuperado como dado não confiável, não como instrução executável.
- Manter credenciais fora do código e dos logs; dados locais permanecem em `.outros/`.
- Avaliar mudanças com testes, revisão e aprovação humana antes de publicação.

## Componentes previstos
- **Registry**: catálogo versionado de componentes, dependências e compatibilidade.
- **Execution Router / Script Runner**: seleção e execução controlada de ferramentas determinísticas.
- **Model Router**: seleção de executor e modelo conforme política e avaliação.
- **Knowledge MCP**: recuperação de conhecimento autorizado e proveniência.
- **Telemetry / Evaluation**: evidências, métricas e comparação de versões.
- **Project Bootstrap**: configuração isolada por projeto.
- **Quota & Resume Manager**: checkpoints e retomada limitada e idempotente.
- **Cross-Agent Bridge**: delegação controlada entre Claude Code e OpenCode.
- **JEV Decision Engine**: classificação auxiliar restrita às opções previamente permitidas.

## Fluxo de alto nível
1. Identificar projeto, escopo, dados e permissões.
2. Consultar Registry e políticas aplicáveis.
3. Preferir ferramenta determinística existente; caso contrário, selecionar agente/modelo autorizado.
4. Validar entradas e limites antes da execução.
5. Registrar telemetria sanitizada e avaliar o resultado.
6. Encaminhar mudanças para testes, revisão e aprovação.

## Segurança e dados
Credenciais ficam em `.fontes/Secrets/`; dados locais e runtime em `.outros/`. Não registrar segredos. Aplicar menor privilégio e isolamento por projeto. Decisões do JEV não autorizam operações destrutivas. Serviços e contratos ainda precisam de implementação, testes e revisão de segurança.