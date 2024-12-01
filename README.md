API REST com Node.js e NestJS
=============================

Este projeto é uma API RESTful desenvolvida com Node.js e NestJS, que implementa autenticação via JWT, CRUD de Usuários e Produtos, e cache em uma rota.

* * * * *

Pré-requisitos
--------------

1.  Node.js
2.  npm 
3.  NestJS CLI
    `npm install -g @nestjs/cli`.

* * * * *

Como executar
-------------

1.  Clone o repositório do projeto com o comando:\
    `git clone <https://github.com/gustavoarnoni/api-rest-nest>`\
    Depois, entre na pasta do projeto com:\
    `cd <api-rest-nest>`.

2.  Instale as dependências necessárias com o comando:\
    `npm install`.

3.  Inicie o servidor de desenvolvimento com o comando:\
    `npm run start:dev`.

4.  Acesse a aplicação no navegador ou em uma ferramenta de API, utilizando a URL base:\
    `http://localhost:3000`.

* * * * *

Rotas
-----

### Autenticação

1.  Registrar Usuário: `POST /auth/register`\
    Permite criar um novo usuário.

2.  Login: `POST /auth/login`\
    Retorna um token JWT para autenticação.

### Usuários

1.  Listar Usuários: `GET /users`\
    Retorna a lista de todos os usuários cadastrados.

2.  Buscar Usuário por ID: `GET /users/:id`\
    Retorna os dados de um usuário específico.

3.  Criar Usuário: `POST /users`\
    Adiciona um novo usuário ao sistema.

4.  Atualizar Usuário: `PATCH /users/:id`\
    Atualiza os dados de um usuário específico.

5.  Deletar Usuário: `DELETE /users/:id`\
    Remove um usuário do sistema.

### Produtos

1.  Listar Produtos: `GET /products`\
    Retorna a lista de todos os produtos cadastrados (com cache de 10 segundos).

2.  Buscar Produto por ID: `GET /products/:id`\
    Retorna os dados de um produto específico.

3.  Criar Produto: `POST /products`\
    Adiciona um novo produto ao sistema.

4.  Atualizar Produto: `PATCH /products/:id`\
    Atualiza os dados de um produto específico.

5.  Deletar Produto: `DELETE /products/:id`\
    Remove um produto do sistema.

* * * * *

Tecnologias
-----------

1.  Node.js
2.  NestJS
3.  JWT para autenticação
4.  Cache Manager para cache de rotas
5.  bcrypt para hash de senhas
