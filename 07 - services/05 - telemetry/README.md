# services/telemetry/

Coletor planejado para normalizar eventos de agentes, scripts e serviços e registrar duração, qualidade, falhas, tokens/custo, versão e contexto necessário à avaliação.

Sanitizar e minimizar dados antes de persistir: nunca registrar credenciais e controlar conteúdo pessoal/privado por projeto. Eventos devem preservar proveniência e identificadores úteis sem expor payloads sensíveis. A telemetria alimenta baselines, datasets e propostas de evolução, não publicação automática.

Definir schema, retenção e tratamento de falhas de coleta antes da implantação.

Base: especificação, seções 17.1–17.2 e 19.5.