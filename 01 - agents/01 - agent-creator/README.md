# agent-creator/

Agente planejado para transformar requisitos em uma proposta de agente reutilizável, sem duplicar capacidades já catalogadas.

## Fluxo esperado
1. Extrair objetivo, executor, projeto, restrições e critérios de aceitação.
2. Consultar Registry, skills, MCPs, agentes e modelos disponíveis.
3. Recomendar composição existente ou explicitar lacunas antes de propor algo novo.
4. Gerar instruções portáveis, manifesto/dependências e adaptadores específicos por executor.
5. Preparar testes de descoberta, permissões, comportamento e regressão.
6. Entregar proposta revisável; não publicar nem habilitar automaticamente.

A referência ao `database-specialist` e a especialistas legados no exemplo QuickStore ilustra a regra de reutilização. Credenciais e autorizações não devem ser inferidas do pedido. Aprovação de publicação permanece humana.

Base: especificação, seções 10, 11, 18 e 20.