# packages/

Pacotes lógicos para compartilhar capacidades da plataforma entre projetos. Um pacote reúne componentes relacionados e deve declarar versões, dependências, compatibilidade, permissões e política de distribuição; cada projeto seleciona apenas o que necessita.

Pacotes não são serviços implantados nem cópias de dados de projeto. O Registry/Project Bootstrap previstos deverão resolver componentes e lockfiles; publicação requer validação. Separar capacidades reutilizáveis de dados, regras de negócio e credenciais específicas do consumidor.

Base: especificação, seções 18.1–18.3.