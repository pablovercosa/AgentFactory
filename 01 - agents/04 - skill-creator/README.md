# skill-creator/

Agente planejado para converter uma descrição de necessidade em uma proposta de skill atômica, reutilizável e compatível com os executores previstos.

## Fluxo esperado
Consultar Registry e dependências; delimitar uma responsabilidade; preparar `SKILL.md`, manifesto próprio da Agent Factory, referências e scripts quando necessários; definir avaliações; testar descoberta, entradas, permissões e execução; encaminhar a versão candidata para PR/revisão. O `SKILL.md` deve ser curto e descobrível; procedimentos extensos ficam em `references/` e código determinístico em `scripts/`.

A citação de outra skill não garante seu carregamento. Dependências devem ser declaradas e resolvidas pelo executor/orquestrador. Não publicar automaticamente nem incorporar permissões ou credenciais sem aprovação.

Base: especificação, seções 10.1–10.5.