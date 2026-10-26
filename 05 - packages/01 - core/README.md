# packages/core/

Pacote reservado às capacidades centrais compartilhadas da Agent Factory: contratos comuns, Registry, roteamento, avaliação e governança. A especificação prevê esses componentes como partes a desenvolver, não como código já disponível neste diretório.

Manter interfaces e schemas versionados, dependências explícitas e compatibilidade entre consumidores. O Registry deve possibilitar descoberta de versões e dependências; avaliação deve preservar baselines e evidências. Não colocar nele regras de negócio ou dados privados de um projeto.

Base: especificação, seções 3.2, 17 e 18.