---
description: "{{descrição_curta_do_agente}}"
mode: subagent
permissions:
  - action: edit
    resource: "*"
    effect: deny
  - action: shell
    resource: "*"
    effect: ask
---

# Instruções específicas do OpenCode

Use `../AGENT.md` como fonte portátil de responsabilidades, limites e critérios de resultado. Carregue somente as skills autorizadas no manifesto.

- Salve a cópia gerada em `.opencode/agents/<id>.md`.
- O ID do agente vem do nome do arquivo; revise permissões para o projeto real.
- O Model Router pode definir o modelo; não fixe um modelo sem necessidade.
- Confirme a sintaxe com a versão instalada do OpenCode antes de publicar.
