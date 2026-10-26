# agent-evolver/

Agente planejado para analisar avaliações e propor mudanças em instruções, dependências ou fluxo de agentes. A evolução é supervisionada: evidências e falhas recorrentes podem originar uma versão candidata, nunca uma alteração automática da versão estável.

## Ciclo
Reunir execuções e resultados comparáveis → identificar causa provável → propor mudança pequena e rastreável → criar testes contra o baseline → avaliar regressões → abrir revisão/PR. Se não houver evidência suficiente, registrar a hipótese e não alterar o componente.

Preservar versão publicada e caminho de rollback; não atualizar produção sem revisão e aprovação. A Agent Factory não altera automaticamente pesos de modelos.

Base: especificação, seções 17.3–17.5 e 19.7.