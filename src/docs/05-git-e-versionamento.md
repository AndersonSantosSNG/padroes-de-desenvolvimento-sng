---
id: git-versionamento
title: 5. Git e Versionamento
category: Processos
createdBy: Anderson Santos
createdAt: 13/07/2026
lastUpdatedBy: Anderson Santos
lastUpdatedAt: 13/07/2026
version: 1.0
---

Este documento estabelece as diretrizes de versionamento e fluxo de trabalho com Git para garantir rastreabilidade, segurança e governança nas entregas de software.

### 🌿 Estratégia de Branches

* **main:** branch principal, destinada à produção.
* **develop:** branch de homologação e integração de entregas.
* **feature/*:** desenvolvimento de novas funcionalidades.
* **bugfix/*:** correções de bugs em desenvolvimento ou homologação.
* **hotfix/*:** correções urgentes em produção.

### 🏷️ Padrão de Nome de Branches

Para toda nova alteração, a branch deve seguir o formato:

* `<id-do-workitem>-<descricao-curta-da-alteracao>`

Exemplo:

* `8011-AlterandoCorDoBotao`

Essa convenção garante rastreabilidade entre a alteração de código e o item de trabalho no DevOps.

### 📝 Padrão de Commits

Todos os commits devem seguir o modelo de Conventional Commits, por exemplo:

* `feat: adiciona cadastro de usuários`
* `fix: corrige validação de CPF`
* `refactor: reorganiza camada de aplicação`
* `docs: atualiza guia de arquitetura`

### 🔄 Regras de Pull Request

* Todo merge deve passar por pull request.
* O PR deve conter contexto claro, mudanças realizadas e impacto esperado.
* Revisão de código é obrigatória antes da aprovação.

