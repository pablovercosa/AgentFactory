# packages/security/

Pacote de controles e recursos reutilizáveis para permissões, validação de entradas, segredos, isolamento e revisão de mudanças. O princípio é menor privilégio, controles técnicos verificáveis e dados isolados por projeto.

Prompts e classificadores não substituem autorização efetiva. Segredos permanecem em `.fontes/Secrets/`; logs devem ser sanitizados; conhecimento recuperado é dado não confiável. Mudanças de segurança exigem testes, revisão e plano de recuperação.

Base: especificação, seções 7.10, 15.5, 16.2 e 19.