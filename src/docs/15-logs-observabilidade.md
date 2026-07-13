Aqui está o formato Markdown pronto para o tópico de **Logs e Observabilidade**, mantendo o rigor técnico, os metadados (*front-matter*) e a padronização visual dos seus arquivos anteriores.

Este documento foca em estruturar como o time deve registrar eventos para que diagnosticar problemas em produção seja rápido e eficiente.

```markdown
---
id: logs-observabilidade
title: 15. Logs e Observabilidade
category: Operações
createdBy: Anderson Santos
createdAt: 13/07/2026
lastUpdatedBy: Anderson Santos
lastUpdatedAt: 13/07/2026
version: 1.0
---

Este documento estabelece as diretrizes para a criação de logs estruturados e telemetria. O objetivo é garantir que o comportamento dos sistemas em produção seja transparente, auditável e de fácil diagnóstico em caso de falhas.

### 🧩 Níveis de Log (Severidade)

As equipes devem utilizar os níveis de log de forma consciente e padronizada de acordo com o contexto do evento:

* **Information (Info):** Registro de fluxos normais da aplicação e marcos importantes do sistema (ex: `Iniciando processamento do pedido #1024`, `Integração concluída com sucesso`).
* **Warning (Aviso):** Eventos inesperados que não interrompem o funcionamento do sistema, mas que indicam possíveis problemas futuros (ex: `Tempo de resposta acima da média na API XPTO`, `Tentativa de login inválida para o usuário X`).
* **Error (Erro):** Falhas que interrompem a execução de uma operação específica, mas não derrubam a aplicação inteira. Deve vir acompanhado da Exception tratada (ex: `Falha ao salvar registro no banco de dados`, `Erro ao processar pagamento via Gateway`).
* **Critical (Crítico):** Falhas catastróficas que comprometem a integridade do serviço ou indicam indisponibilidade total do sistema. Exige ação imediata da equipe (ex: `Incapaz de conectar ao banco de dados principal`, `Estouro de memória no serviço core`).

### 📌 Regras de Implementação

* **Logs Estruturados:** É obrigatório o uso de logs estruturados em formato JSON ou via propriedades de objetos (como no Serilog para .NET), permitindo buscas indexadas e filtros avançados nas ferramentas de monitoramento.
* **Informação Contextual:** Sempre inclua identificadores únicos no contexto do log (ex: `TaskId`, `UserId`, `TenantId`, `OrderNumber`) para facilitar o rastreamento do fluxo de ponta a ponta.
* **Mascaramento de Dados Sensíveis:** É terminantemente proibido registrar dados sensíveis ou informações pessoais identificáveis (PII) abertamente nos logs, como senhas, tokens, CPFs, e cartões de crédito.

### 🚫 Práticas a Evitar

* Uso indiscriminado de `Console.WriteLine` ou `print()` em ambiente produtivo.
* Mensagens genéricas ou sem contexto descritivo como `Ocorreu um erro`, `Erro na API` ou apenas a mensagem crua da exceção sem tratamento adequado.
* Logar fluxos inteiros ou objetos gigantescos no nível `Information`, causando poluição visual nas ferramentas de análise e consumo desnecessário de armazenamento.

```