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
  Models/
  Views/
  Controllers/
  Services/
  Tests/
  Docs/
```

### 🧩 Responsabilidade de Cada Camada

- **Models:** Entidades, mapeamentos de banco de dados, objetos de domínio e regras de negócio centrais.
- **Views:** Componentes de interface de usuário, páginas, DTOs e contratos de resposta/visualização de entrada e saída.
- **Controllers:** Orquestração de rotas, validações iniciais de requisição, direcionamento de fluxos e retorno de dados.
- **Services:** Casos de uso, centralização das regras de negócio complexas e integrações externas (banco de dados, APIs e serviços técnicos).
- **Tests:** Testes unitários, de integração e validações automatizadas.
- **Docs:** Documentação técnica, ADRs, diagramas e referências operacionais.

### 📌 Regras de Organização

- Cada módulo deve ter responsabilidades bem delimitadas.
- Arquivos e pastas devem seguir nomes consistentes e descritivos.
- Evitar acúmulo de lógica em arquivos genéricos ou utilitários sem contexto.
- Manter a estrutura alinhada com a arquitetura adotada pelo projeto.
