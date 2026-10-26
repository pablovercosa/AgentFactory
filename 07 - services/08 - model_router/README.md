# services/model_router/

Componente planejado para selecionar executor, provider e modelo conforme tarefa, projeto, compatibilidade, qualidade avaliada, política de custo e limites disponíveis. Deve respeitar configurações nativas de Claude Code/OpenCode e traduzir o manifesto unificado da Agent Factory quando necessário.

Usar modelo econômico só quando testes comparativos sustentarem qualidade suficiente. Assinatura de um executor não implica autorização para chamadas API separadas. Fallback pago deve ser explicitamente autorizado; registrar decisão e razões sem expor segredos.

Base: especificação, seção 13.