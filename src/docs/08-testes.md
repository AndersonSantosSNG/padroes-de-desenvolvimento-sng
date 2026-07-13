---
id: testes
title: 8. Testes
category: Qualidade
createdBy: Anderson Santos
createdAt: 13/07/2026
lastUpdatedBy: Anderson Santos
lastUpdatedAt: 13/07/2026
version: 1.0
---

Este documento estabelece as diretrizes para a estratégia de testes nos projetos. O objetivo é garantir que as soluções sejam confiáveis, resilientes e fáceis de evoluir.

### 🧪 Tipos de Teste Obrigatórios

* **Testes unitários:** obrigatórios para regras críticas, validações e lógica de negócio central.
* **Testes de integração:** recomendados para validar fluxos entre camadas, APIs e integrações externas.
* **Testes de regressão:** devem ser aplicados sempre que houver alterações que possam impactar comportamento anterior.

### 📌 Cobertura e Qualidade

* A cobertura mínima deve ser definida pela equipe de engenharia e registrada no projeto.
* Testes devem ser escritos antes ou junto com a implementação sempre que possível.
* Casos de falha devem ser documentados e utilizados para evitar regressões.

### ✅ Critérios de Aceitação

* Alterações críticas não devem ser liberadas sem testes adequados.
* Testes devem ser executados automaticamente no pipeline de CI/CD.
* Código sem testes relevantes deve ser tratado como risco técnico.
