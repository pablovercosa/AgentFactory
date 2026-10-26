# projects/

Manifestos, dependências, lockfiles, configurações e documentação específica dos projetos consumidores. Cada projeto compõe capacidades do Registry por versão, mantendo dados, permissões, conhecimento e orçamento isolados.

Project Bootstrap é planejado para ler e validar manifestos, resolver dependências e apresentar configuração candidata; não deve implantar mudanças automaticamente. Compartilhar capacidades não concede acesso aos dados dos demais. Credenciais ficam fora do repositório e são referenciadas por mecanismo autorizado.

## Projetos-modelo
QuickStore (diagnóstico de legado/banco), Custo-Brasil (XML e regras fiscais), PDTI (documentos e dependências institucionais) e Investments (backtesting). Os exemplos descrevem cenários, não integrações implantadas.

Base: especificação, seções 18 e 20.