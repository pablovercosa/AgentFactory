---
name: example-agent
description: "{{descrição_curta_do_agente}}"
tools: Read, Grep, Glob, Skill
skills:
  - example-skill
memory: project
---

# Instruções específicas do Claude Code

Use `../AGENT.md` como fonte portátil de responsabilidades, limites e critérios de resultado.

- Substitua `example-agent`, `example-skill` e a descrição por valores aprovados.
- Reduza a lista `tools` ao mínimo necessário para o agente.
- Configure memória e ferramentas segundo o escopo do projeto e a versão instalada.
- Não conceda permissões de escrita só para contornar uma falha de ferramenta.
