# TechMarket API 🛒🚀

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?logo=apachekafka&logoColor=white)](https://kafka.apache.org/)

Uma API RESTful escalável para um sistema de marketplace, desenvolvida com arquitetura modular e tecnologias modernas.

## 🚀 Tecnologias

- **Node.js** + **Express** - Runtime e framework web
- **TypeScript** - Tipagem estática e melhor developer experience
- **Docker** + **PostgreSQL** - Containerização e banco de dados
- **Kafka** - Mensageria para eventos assíncronos
- **Prisma ORM** - Camada de acesso a dados type-safe
- **JWT** - Autenticação e autorização

```
## 📦 Estrutura do Projeto

src/
├── modules/ # Arquitetura modular
│ ├── user/ # Módulo de usuários
│ ├── product/ # Módulo de produtos
│ ├── order/ # Módulo de pedidos
│ └── notification/ # Módulo de notificações
├── config/ # Configurações (Kafka, DB)
├── events/ # Producers/Consumers do Kafka
├── app.ts # Configuração do Express
└── server.ts # Entrada da aplicação

```
## ⚡️ Começando

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- Yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/devjubis/techmarket-api.git
cd techmarket-api

2. Instale as dependências:

yarn install

3. Execute em modo desenvolvimento:
yarn dev

4.Acesse: http://localhost:3000/health

📋 Endpoints
GET /health - Health check da API

Mais endpoints em desenvolvimento...

🛣️ Roadmap
Configuração do Docker e PostgreSQL

Integração com Prisma ORM

Módulo de Autenticação (JWT)

Módulo de Usuários

Integração com Kafka

Módulo de Produtos e Pedidos

Testes automatizados

Deploy e CI/CD

🤝 Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido por Juliana 🚀

