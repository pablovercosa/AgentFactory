# bin/

Local reservado a comandos/wrappers de linha de comando da Agent Factory. A especificação prevê operações de preparação/execução e mecanismos de retomada, mas não define aqui um CLI já funcional.

Todo comando futuro deve ter contrato e help, validar argumentos, identificar projeto/ambiente permitido, usar menor privilégio, produzir saída verificável e sanitizada, respeitar cotas e pedir aprovação para efeitos externos. Delegar apenas a componentes aprovados; não aceitar shell/caminhos arbitrários nem embutir credenciais.

Documentar versão, pré-requisitos, testes e rollback antes de disponibilizar.

Base: especificação, seções 6, 14 e 21.