API Connect - Usuários

Objetivo



A API Connect é uma API REST desenvolvida como Produto Mínimo Viável (MVP) para realizar o gerenciamento de usuários.



A aplicação permite cadastrar, listar, buscar, atualizar e remover usuários por meio de requisições HTTP.



Os dados são armazenados temporariamente em memória durante a execução do servidor.



Tecnologias utilizadas

Node.js

Express

JavaScript

Git

GitHub

Como executar o projeto

1\. Clone o repositório

git clone LINK\_DO\_REPOSITORIO

2\. Acesse a pasta do projeto

cd api-connect-nome-sobrenome

3\. Instale as dependências

npm install

4\. Execute o servidor

node index.js



O servidor será iniciado na porta 3000:



http://localhost:3000

Endpoints

Método	Endpoint	Descrição	Status

POST	/users	Cria um novo usuário	201

GET	/users	Lista todos os usuários	200

GET	/users/:id	Busca um usuário pelo ID	200 / 404

PUT	/users/:id	Atualiza um usuário	200 / 400 / 404

DELETE	/users/:id	Remove um usuário	204 / 404

Criar usuário



POST /users



Exemplo de requisição:



{

&#x20; "name": "Maria",

&#x20; "email": "maria@email.com"

}



Resposta de sucesso:



{

&#x20; "data": {

&#x20;   "id": 1,

&#x20;   "name": "Maria",

&#x20;   "email": "maria@email.com"

&#x20; }

}



Status: 201 Created



Erro de validação



Caso o nome ou o e-mail não sejam informados:



{

&#x20; "error": "Nome e e-mail são obrigatórios"

}



Status: 400 Bad Request



Listar usuários



GET /users



Exemplo de resposta:



{

&#x20; "data": \[

&#x20;   {

&#x20;     "id": 1,

&#x20;     "name": "Maria",

&#x20;     "email": "maria@email.com"

&#x20;   }

&#x20; ]

}



Status: 200 OK



Buscar usuário por ID



GET /users/:id



Exemplo:



/users/1



Caso o usuário não exista:



{

&#x20; "error": "Usuário não encontrado"

}



Status: 404 Not Found



Atualizar usuário



PUT /users/:id



Exemplo:



{

&#x20; "name": "Maria Silva",

&#x20; "email": "mariasilva@email.com"

}



Status: 200 OK



Remover usuário



DELETE /users/:id



Exemplo:



/users/1



Status: 204 No Content

