# scripts/manifests/

Manifestos específicos da Agent Factory descrevem scripts para descoberta e validação: identificador estável, versão, ponto de entrada, schemas, dependências, permissões, limites, testes e projetos compatíveis.

O manifesto não é configuração nativa universal dos executores. O Registry resolve dependências e versões; o Script Runner valida que o artefato corresponde à versão/hash aprovado antes de executar. Alterações de schema exigem compatibilidade e testes explícitos.

Nunca guardar credenciais nos manifestos; referenciar apenas identificadores de segredo autorizados.

Base: especificação, seções 10.2, 12.3 e 17.