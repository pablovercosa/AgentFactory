# Roadmap

> Plano inicial conforme as fases da especificação. É um roteiro, não evidência de implementação.

1. **Fundação e versionamento** — estrutura, convenções, segurança e contratos.
2. **Skills e scripts iniciais** — componentes reutilizáveis, manifestos e testes.
3. **Agentes e adaptadores** — formatos nativos por executor e validação.
4. **PostgreSQL e Registry** — catálogo, versões, dependências e histórico.
5. **Conhecimento RAG/GraphRAG** — ingestão autorizada, proveniência e recuperação.
6. **Telemetria e continuidade** — métricas sanitizadas, checkpoints e retomada.
7. **Avaliação e CI** — datasets, benchmarks e barreiras de regressão.
8. **Aperfeiçoamento supervisionado** — propostas versionadas, testes e aprovação.
9. **Roteamento e Cross-Agent Bridge** — políticas, limites e testes de delegação.
10. **Multiprojetos e operação** — isolamento, bootstrap, observabilidade e recuperação.

## Critério de avanço
Cada fase requer critérios verificáveis, testes e revisão dos riscos. Não implantar serviços ou habilitar operações remotas apenas com base neste roadmap. Registrar decisões e mudanças efetivamente concluídas no `CHANGELOG.md`.