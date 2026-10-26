# infrastructure-specialist/

Agente especializado planejado para diagnóstico e orientação sobre Linux, infraestrutura e serviços de plataforma. Deve usar skills/MCPs existentes e delimitar precisamente host, projeto, diretório e permissões aplicáveis.

## Limites operacionais
Diagnóstico é separado de mudança. Acesso remoto, `sudo`, alteração de serviços, rede, credenciais ou produção requer autorização específica, pré-condições, impacto, verificação e rollback. Não presumir autorização por ter acesso a uma ferramenta.

Registrar evidências sanitizadas; não expor segredos. Propostas de configuração devem ser revisadas e testadas antes da ativação.

Base: especificação, seções 6, 9 e 19.