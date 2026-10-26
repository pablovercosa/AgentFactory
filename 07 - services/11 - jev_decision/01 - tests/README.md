# tests/

Testes do módulo JEV para choices permitidas, allowlist vazia, resposta fora das opções, ambiguidade, erro/timeout do SDK, critérios Score/Noul quando suportados e regressões por versão.

Calibrar com dataset representativo e medir acertos/falsos positivos/negativos. Confirmar que regra determinística e autorização precedem o JEV e que decisão alguma libera, sozinha, ação destrutiva. Usar fixtures/mocks, evitando chamadas externas em testes unitários.

Base: especificação, seções 16.2, 16.4–16.7 e avaliações JEV.