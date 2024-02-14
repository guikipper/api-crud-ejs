# Projeto API CRUD EJS 🚀

## Sobre o Projeto 📖

Este projeto é uma aplicação monolítica experimental desenvolvida com o objetivo de aprender e demonstrar as funcionalidades básicas de um CRUD (Create, Read, Update, Delete). Utilizando a linguagem JavaScript tanto no lado do cliente quanto no servidor, o projeto oferece uma interface gráfica intuitiva que permite aos usuários interagirem com um banco de dados MongoDB de forma simples e direta. 🌐

A aplicação é construída sobre o Node.js, utilizando o Express para o roteamento e o EJS (Embedded JavaScript) como template engine. Isso facilita a comunicação entre o servidor e a interface do usuário dentro de um mesmo projeto. A comunicação com o banco de dados MongoDB é realizada através do Mongoose, um elegante modelador de objetos MongoDB para Node.js, que proporciona uma solução direta, baseada em esquemas, para modelar os dados da aplicação. 🛠️

## Funcionalidades 🔍

- **Create (Criar):** Permite aos usuários adicionar novos registros ao banco de dados. ➕
- **Read (Ler):** Oferece a visualização de todos os registros presentes no banco de dados. 📖
- **Update (Atualizar):** Habilita a modificação de registros existentes no banco de dados. 🔄
- **Delete (Deletar):** Permite a remoção de registros do banco de dados. ❌

## Tecnologias Utilizadas 💻

- **Node.js:** Ambiente de execução JavaScript para o servidor. 🟢
- **Express:** Framework para aplicativo da web do Node.js. 🛤️
- **EJS:** Template engine para gerar o HTML dinâmico a partir do servidor. 🖌️
- **MongoDB:** Banco de dados NoSQL para armazenar os dados do CRUD. 🍃
- **Mongoose:** Biblioteca do Node.js que proporciona modelagem de objetos para MongoDB com base em esquemas. 📐


## Rodando o projeto
- Antes de executar o projeto, é necessário configurar a conexão com o MongoDB no arquivo `src/loaders/mongodb.js`. Você deve inserir sua credencial de conexão ao MongoDB neste arquivo.

```javascript
// src/loaders/mongodb.js
```

### Instalação
1. Abra o projeto no GitHub Codespaces ou clone o repositório localmente em sua máquina.
    ```bash
    git clone https://github.com/guikipper/api-crud-ejs
    cd api-crud-ejs
    ```

2. Instale as dependências do projeto.

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento.

    ```bash
    npm run dev
    ```
    
3. Digite no navegador

    ```bash
    [npm run dev](http://localhost:3000/home)
    ```

## Print do Projeto

![Captura de tela 2024-02-14 200418](https://github.com/guikipper/api-crud-ejs/assets/33471042/d7f31db7-91c4-4f3d-b79e-67b599bbd8da)

