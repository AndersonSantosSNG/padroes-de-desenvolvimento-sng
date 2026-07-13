---
id: arquitetura
title: 3. Arquitetura
category: Arquitetura
createdBy: Anderson Santos
createdAt: 13/07/2026
lastUpdatedBy: Anderson Santos
lastUpdatedAt: 13/07/2026
version: 1.0
---

Este documento define a abordagem arquitetural padrão para o desenvolvimento de soluções dentro da companhia. A arquitetura deve priorizar clareza, manutenibilidade, escalabilidade e alinhamento com os princípios de engenharia de software.

### 🧱 Padrão Arquitetural Obrigatório

Para projetos novos, a estrutura arquitetural deve seguir os seguintes princípios:

* **Arquitetura baseada em camadas:** separação clara entre Domain, Application, Infrastructure e Presentation.
* **Padrão MVCS para APIs novas:** organização do fluxo em Model, View, Controller e Service/Use Case, conforme o contexto.
* **SOLID obrigatório:** cada componente deve seguir os princípios de responsabilidade única, aberto/fechado, substituição de Liskov, segregação de interfaces e inversão de dependência.
* **Baixo acoplamento e alta coesão:** evitar dependências desnecessárias entre módulos.

### 📐 Regras de Implementação

* Evitar lógica de negócio em controllers, endpoints ou views.
* Centralizar regras de negócio em serviços, use cases ou objetos de domínio.
* Isolar integrações externas em camadas específicas de infraestrutura.
* Utilizar interfaces para abstração de dependências e facilitar testes.
* Manter contratos claros entre camadas para reduzir impacto de mudanças.

### ✅ Diretrizes de Manutenção

* A arquitetura deve ser simples o suficiente para ser compreendida rapidamente por novos desenvolvedores.
* Alterações devem ser feitas sem quebrar contratos existentes, sempre preservando compatibilidade.
* Quando necessário, priorizar refatoração incremental em vez de reescrever sistemas inteiros.
