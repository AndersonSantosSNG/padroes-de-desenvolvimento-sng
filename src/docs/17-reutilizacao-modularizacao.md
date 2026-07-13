---
id: reutilizacao-modularizacao
title: 17. Reutilização de Código e Modularização
category: Qualidade
createdBy: Anderson Santos
createdAt: 13/07/2026
lastUpdatedBy: Anderson Santos
lastUpdatedAt: 13/07/2026
version: 1.0
---

Este documento estabelece as diretrizes para a criação de componentes, funções e serviços reutilizáveis, visando eliminar a duplicidade de código entre sistemas e acelerar o desenvolvimento de novas soluções.

### 🧩 Princípios de Reutilização

Antes de iniciar o desenvolvimento de qualquer nova funcionalidade, lógica utilitária ou componente visual, o desenvolvedor deve obrigatoriamente seguir o fluxo de validação abaixo:

* **Investigação Prévia:** Verificar na base de código atual, em repositórios compartilhados ou em bibliotecas internas da companhia se a funcionalidade (ou parte dela) já não foi implementada, evitando retrabalho.
* **Generalização de Funções:** Caso identifique uma função ou lógica que está sendo escrita de forma muito específica, mas que possui potencial de uso em outros cenários, o desenvolvedor deve refatorá-la para torná-la genérica e parametrizável.

### 📌 Estratégia de Modularização por Stack

Módulos transversais que se repetem em múltiplos sistemas (como autenticação/login, layouts base, integração com gateways padrão ou helpers de formatação) devem ser extraídos do código principal e gerenciados de forma centralizada:

* **No Backend (.NET/C#):** Lógicas compartilhadas e clientes de integração devem ser isolados em projetos de biblioteca de classes (`Class Library`). Se o módulo for transversal a múltiplos sistemas da companhia (ex: autenticação core, barramento de mensageria), ele deve ser empacotado e distribuído internamente (via NuGet Server interno ou referências de submódulos).
* **No Frontend (React + TypeScript):** Componentes visuais comuns (botões, cards, tabelas padronizadas) e hooks customizados (ex: consumo de APIs, autenticação) devem ser modularizados. Lógicas genéricas devem ser isoladas da regra de negócio da aplicação para permitir que o repositório principal trate apenas do fluxo crítico do sistema.

### 🚫 Práticas a Evitar

* Duplicar pastas inteiras de código, componentes ou services de um projeto antigo para um novo ("CTRL+C / CTRL+V").
* Acoplar regras de negócio específicas da squad dentro de funções que deveriam ser puramente utilitárias ou genéricas.
* Criar soluções proprietárias para problemas comuns já resolvidos por bibliotecas nativas ou amplamente testadas pelo mercado.
