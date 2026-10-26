# config/

Configurações versionáveis e não secretas da Agent Factory. Os arquivos deste diretório são políticas propostas para componentes de roteamento/continuidade, não configuração nativa automaticamente interpretada por Claude Code ou OpenCode.

## Arquivos
- `model-routing.yaml`: preferências de executor/provider/modelo, fallback e limites de custo.
- `quota-policy.yaml`: detecção/pausa por cota, estados, checkpoints e regras de retomada.
- `cross-agent.yaml`: allowlists, profundidade, timeout, limites e isolamento da Bridge.
- `jev-policy.yaml`: opções permitidas e condições para usar o JEV como classificador auxiliar.

Os arquivos devem declarar versão/estado, usar placeholders e ser validados pelo componente que os consumir. Não incluir credenciais: guardar segredos em `.fontes/Secrets/` e referenciá-los sem copiar valores. Fallback pago, retomada ou delegação não devem ser habilitados sem autorização e testes.

Base: especificação, seções 13–16.