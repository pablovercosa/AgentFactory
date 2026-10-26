# services/jev_decision/

Módulo planejado de decisões estruturadas via JEV/TypeSafe. Atua como classificador auxiliar apenas quando regras determinísticas deixam ambiguidade entre opções já autorizadas; não executa ferramentas nem substitui políticas.

Validar entradas e allowlist antes/depois da decisão, rejeitar resposta fora das opções e calibrar critérios/limiares com dataset real e versão instalada do SDK. `Choice`, `Score` ou `Noul` não devem ser inferidos além da API validada. Probabilidade/confiança nunca é aprovação automática de operação destrutiva.

Base: especificação, seções 16.1–16.7.