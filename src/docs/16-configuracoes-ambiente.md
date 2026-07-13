---
id: configuracoes-ambiente
title: 16. Gerenciamento de Configurações e Variáveis
category: Segurança
createdBy: Anderson Santos
createdAt: 13/07/2026
lastUpdatedBy: Anderson Santos
lastUpdatedAt: 13/07/2026
version: 1.0
---

Este documento define o padrão para o gerenciamento de parâmetros, strings de conexão e variáveis de ambiente entre os diferentes cenários e stacks homologadas na companhia.

### 🧩 Regras por Stack e Ecossistema

As equipes devem seguir as convenções nativas de cada tecnologia da stack oficial, garantindo que nenhum dado sensível seja exposto no controle de versão:

* **Backend Principal (.NET/C#):**
  * Utilizar o arquivo `appsettings.json` apenas para configurações globais não sensíveis.
  * Valores específicos por ambiente e strings de conexão devem ser mapeados via variáveis de ambiente do sistema e lidos através do provedor nativo de configurações (`ConfigurationManager`).
  * Para desenvolvimento local, segredos devem ser armazenados usando a ferramenta *User Secrets* do .NET. É obrigatório expor um arquivo `appsettings.Example.json` limpo no repositório.

* **Frontend Principal (React + TypeScript):**
  * Configurações dinâmicas (como URLs de APIs externas) devem ser controladas por arquivos `.env`.
  * Como os valores são injetados no cliente final em tempo de *build*, **nunca** armazene chaves privadas ou segredos de infraestrutura no frontend.
  * Manter no repositório o arquivo `.env.example` mapeando todas as chaves necessárias para a execução do app local.

* **Automações e Scraping (Python):**
  * Utilizar a biblioteca `python-dotenv` ou o módulo nativo `os` para carregar parâmetros de execução de scripts de extração de dados e automações.
  * Manter o arquivo `.env.example` documentando as credenciais ou tokens exigidos pelo script.

* **Sistemas Legados (PHP):**
  * Utilizar gerenciadores de ambiente como o `vlucas/phpdotenv` para extrair variáveis do arquivo local `.env`, descontinuando o uso de constantes ou dados fixados diretamente nos arquivos de escopo global do projeto.

### 📌 Diretrizes Gerais de Organização

* **Isolamento de Ambientes:** Parâmetros de infraestrutura, acessos e bancos de dados devem ser estritamente segregados entre `Development` (Local), `Homologation` (Validação) e `Production` (Sistemas Críticos).
* **Validação no Start (Fail-Fast):** Aplicações backend (.NET, Python e PHP) devem validar a existência e a integridade de variáveis de ambiente obrigatórias logo na rotina de inicialização do ciclo de vida, interrompendo a execução imediatamente caso algum parâmetro crítico esteja ausente.
