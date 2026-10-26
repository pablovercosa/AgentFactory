# policies/

Políticas da Cross-Agent Bridge que restringem quais projetos, agentes e diretórios podem ser delegados, além de profundidade máxima, timeout, tamanho da tarefa/saída, ambiente permitido e comportamento de recursão.

Restrições precisam ser verificadas no código a cada chamada, não apenas descritas no prompt. Não aceitar caminhos arbitrários, tokens indiscriminados ou edição concorrente da mesma árvore. Desabilitar recursão ilimitada; ciclo e autorização devem ser testados antes da ativação.

Base: especificação, seção 15.5 e `04 - config/cross-agent.yaml`.