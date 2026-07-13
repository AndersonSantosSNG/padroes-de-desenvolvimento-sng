---
id: estrutura-projetos
title: 4. Estrutura de Projetos
category: Estrutura
createdBy: Anderson Santos
createdAt: 13/07/2026
lastUpdatedBy: Anderson Santos
lastUpdatedAt: 13/07/2026
version: 1.0
---

Este documento define a organização mínima esperada para projetos de software desenvolvidos na companhia. A estrutura padronizada facilita a leitura do código, a manutenção e a integração entre equipes.

### 📁 Estrutura Recomendada

```text
src/
  Domain/
  Application/
  Infrastructure/
  Presentation/
  Tests/
  Docs/
```

### 🧩 Responsabilidade de Cada Camada

* **Domain:** entidades, value objects, regras de negócio centrais e interfaces de domínio.
* **Application:** casos de uso, orquestração, regras de aplicação e fluxo de operações.
* **Infrastructure:** integrações com banco de dados, filas, serviços externos, arquivos e frameworks técnicos.
* **Presentation:** controllers, endpoints, interfaces de usuário e componentes de entrada/saída.
* **Tests:** testes unitários, de integração e validações automatizadas.
* **Docs:** documentação técnica, ADRs, diagramas e referências operacionais.

### 📌 Regras de Organização

* Cada módulo deve ter responsabilidades bem delimitadas.
* Arquivos e pastas devem seguir nomes consistentes e descritivos.
* Evitar acúmulo de lógica em arquivos genéricos ou utilitários sem contexto.
* Manter a estrutura alinhada com a arquitetura adotada pelo projeto.
