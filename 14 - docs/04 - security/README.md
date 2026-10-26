# docs/security/

Políticas e procedimentos de classificação de dados, gestão de segredos, autorização, isolamento, execução segura, retenção e resposta a incidentes. Aplicar menor privilégio e separar explicitamente dados por projeto.

Credenciais ficam em `.fontes/Secrets/`, nunca no Git, em manifestos, logs ou prompts delegados indiscriminadamente. Conteúdo recuperado é dado não confiável; prompts/JEV não substituem controles técnicos. Documentar verificações, limites e resposta sem reproduzir valores sensíveis.

Base: especificação, seções 15.5, 16.2 e 19.