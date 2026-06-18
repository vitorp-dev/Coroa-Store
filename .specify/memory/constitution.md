# Constituicao do Coroa Store

## Core Principles

### I. Fluxo de Negocio em Primeiro Lugar
Toda funcionalidade MUST preservar o fluxo principal de negocio da plataforma:
acesso autenticado do cliente, descoberta de produtos, composicao do carrinho,
confirmacao do pedido, acompanhamento do pedido e visibilidade do backoffice
comercial. Qualquer trabalho que nao se conecte claramente a uma jornada de
negocio validada pela documentacao do projeto MUST ser tratado como secundario e
nao pode deslocar fluxos criticos do MVP sem aprovacao explicita.

### II. Frontend Orientado a Componentes
O frontend MUST ser construido com componentes pequenos, reutilizaveis e
orientados ao dominio. As telas MUST compor componentes de UI e de feature ja
existentes antes de introduzir markup especifico de pagina. Tokens visuais
compartilhados, comportamentos de acessibilidade, estados de carregamento,
estados vazios e apresentacao de status MUST ser centralizados sempre que
afetarem mais de uma area funcional.

### III. Especificacao Antes da Implementacao
Novas funcionalidades MUST comecar com o fluxo do Spec Kit: alinhamento com a
constituicao, especificacao da feature, plano de implementacao e decomposicao em
tarefas antes de qualquer codigo. Cada especificacao MUST definir historias de
usuario, cenarios de aceite, casos de borda, regras de negocio e premissas. A
codificacao so pode comecar sem especificacao completa em correcoes triviais que
nao alterem comportamento, escopo ou arquitetura.

### IV. Integracoes Testaveis e Observaveis
Qualquer integracao com SQL Server, TOTVS Protheus, servicos de autenticacao ou
APIs futuras MUST ficar isolada atras de limites de servico explicitos e ser
desenhada considerando falhas. Funcionalidades que afetem pedidos, precos,
transicoes de status ou payloads de integracao MUST incluir estrategia de
validacao, logs rastreaveis e comportamento de contingencia claro para o usuario,
evitando inconsistencias silenciosas.

### V. Seguranca e Protecao de Dados por Padrao
Autenticacao, controle de sessao, tratamento de credenciais e fluxos de dados de
clientes ou pedidos MUST adotar comportamento seguro por padrao. Dados sensiveis
MUST nunca ser registrados em log sem justificativa, limites de perfil MUST ser
respeitados tanto na interface quanto na logica de servico, e qualquer
funcionalidade que trate dados pessoais ou comerciais MUST considerar impacto de
LGPD, auditabilidade e acesso com menor privilegio desde o inicio.

## Restricoes Tecnicas

A stack atual do frontend e React, TypeScript e Vite. Novo codigo MUST
permanecer compativel com essa stack, a menos que uma especificacao e um plano
aprovem explicitamente a mudanca. A arquitetura do frontend MUST privilegiar
pastas por feature e primitivas de UI reutilizaveis. Contratos de integracao
MUST ser tratados como dependencias externas e nao podem ser embutidos em
componentes de apresentacao. Performance, responsividade e compatibilidade com
navegadores sao requisitos do projeto, nao refinamentos opcionais.

## Fluxo de Entrega e Portoes de Qualidade

Cada feature planejada MUST identificar sua historia principal de usuario,
regras de negocio, limites de dependencia e estrategia de validacao. Os planos
MUST incluir uma verificacao da constituicao cobrindo impacto no fluxo de
negocio, reuso de componentes, risco de integracao e implicacoes de seguranca.
As tarefas MUST ser organizadas para que ao menos uma historia de usuario valiosa
possa ser implementada e validada de forma independente. Antes de considerar uma
feature pronta, a equipe MUST verificar:

- a jornada esperada do usuario funciona de ponta a ponta dentro do escopo
- estados de validacao e falha estao visiveis e compreensiveis
- integracoes ou mocks sao rastreaveis e nao duplicam logica de negocio
- documentacao e artefatos de especificacao refletem o comportamento entregue

## Governance

Esta constituicao governa as decisoes de produto e tecnicas deste repositorio.
Toda spec, plano, lista de tarefas, implementacao e revisao MUST verificar
conformidade com estes principios. Alteracoes exigem justificativa documentada
na spec ou no artefato de planejamento correspondente, atualizacao semantica de
versao e revisao dos templates ou arquivos de orientacao afetados. Versoes
minor adicionam ou expandem materialmente principios; versoes patch esclarecem
orientacoes existentes; versoes major redefinem ou removem governanca
estabelecida. A orientacao operacional fica em `README.md` e no fluxo do Spec
Kit dentro de `.specify/`.

**Version**: 1.0.1 | **Ratified**: 2026-06-17 | **Last Amended**: 2026-06-17
