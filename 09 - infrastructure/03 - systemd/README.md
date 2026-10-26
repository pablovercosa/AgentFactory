# systemd/

Modelos/unidades e timers `systemd --user` previstos para serviços locais, como LightRAG e tarefas de retomada. Incluir dependências, ambiente, diretórios, limites de recursos, logs, estado e procedimentos de habilitar/desabilitar.

Credenciais não devem ser embutidas na unidade; usar arquivo de ambiente com permissões restritas. Validar o serviço manualmente e verificar seu estado/logs antes de habilitar boot ou timers. Retomada exige checkpoint, elegibilidade e política aprovada.

Base: especificação, seções 6.3, 8.5 e 14.5.