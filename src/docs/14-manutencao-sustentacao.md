---
id: manutencao-sustentacao
title: 14. Manutenção e Sustentação
category: Operações
createdBy: Anderson Santos
createdAt: 13/07/2026
lastUpdatedBy: Anderson Santos
lastUpdatedAt: 13/07/2026
version: 1.0
---

Este documento define os critérios para a sustentação, correção de falhas e evolução controlada de sistemas em produção, equilibrando a estabilidade da plataforma com a velocidade de entrega.

### 🧱 Regras de Atendimento

* **Análise de Causa Raiz:** Toda correção de bug crítico em produção deve gerar um diagnóstico rápido da causa raiz para que a correção não seja apenas um paliativo (*contorno*), mas sim uma solução definitiva.
* **Janelas de Manutenção:** Alterações estruturais em bancos de dados de produção ou serviços legados de alta criticidade devem ser planejadas e executadas fora do horário de pico.

### 📌 Práticas de Sustentação

* **Refatoração Incremental (Regra do Escoteiro):** Sempre que realizar a manutenção de um arquivo ou módulo antigo, deixe o código um pouco mais limpo e organizado do que como você o encontrou, aplicando as diretrizes do guia de padrões.
* **Monitoramento e Logs:** Todo código corrigido ou mantido deve garantir a escrita adequada de logs estruturados para facilitar a identificação de anomalias futuras.
