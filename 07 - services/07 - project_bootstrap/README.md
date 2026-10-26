# services/project_bootstrap/

Componente planejado para iniciar um projeto consumidor a partir de manifesto: validar dados/privacidade/cotas, consultar Registry, resolver componentes e versões, produzir dependências/lockfile e preparar configuração isolada.

O fluxo deve listar capacidades existentes e lacunas, gerar uma proposta revisável e validar compatibilidade dos adaptadores. Não implantar integrações externas, publicar componentes ou modificar ambiente sem aprovação específica. Dados e conhecimento de outros projetos não são herdados automaticamente.

Base: especificação, seções 18.1–18.4 e 20.5.