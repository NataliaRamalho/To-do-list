# To do List
Aplicação que cria uma lista de tarefas

Sumário
=================
   1. [Principais tecnologias utilizadas](#Principais-tecnologias-utilizadas)
   2. [Funcionalidades principais](#Funcionalidades-principais)
   3. [Pré requisitos para executar o projeto](#Pré-requisitos-para-executar-o-projeto)
   4. [Como executar o projeto](#como-executar-o-projeto)


# Principais tecnologias utilizadas  
 * Node.js 
 * Zod
 * Prisma 
 * SQLite
 * Next.js 
 * React 
 * Tailwind 
 * TypeScript 
 * EsLint 

 # Funcionalidades principais 
  * Cadastrar tarefa 
  * Excluir tarefa
  * Deletar tarefa
  * Listar tarefa
  * Marcar tarefa como concluída

# Pré requisitos para executar o projeto 
- [Node.js](https://nodejs.org/en/)  
- Editor de código. Recomenda-se o [VSCode](https://code.visualstudio.com/)
- Pacote npm ou yarn. O pacote npm vem junto com o [Node.js](https://nodejs.org/en/)

# Como executar o projeto 
- Baixe este repositório 
Caso tenha o [git](https://git-scm.com/downloads) instalado, digite o comando abaixo no seu terminal. 
Se não, faça o download do repositório e descompacte o arquivo.

`````
git clone https://github.com/NataliaRamalho/to-do-list.git
`````

## Executando o backend
- Abra o projeto em um editor de código  
- Digite no terminal o comando a seguir, para entrar na pasta do backend 

```
   cd backend 
```
- Instale as dependências do projeto, com o comando: 

```
 yarn install
 ou  
 npm install
```
- Renome o arquivo **_env** para **.env** 

- Rode as migrations para criar o banco sqlite local: 
```
   npx prisma migrate dev
```


- Execute o projeto com o comando a seguir: 

```
   yarn dev 
   ou
   npm dev
```
Parabéns o backend está executando, na porta 3001 😃.  

## Executando o frontend (web)
- Com o backend rodando, abra outro terminal e digite o comando a seguir, para entrar na pasta do frontend

```
   cd frontend
```

- Instale as dependências do projeto, com o comando: 

```
 yarn install
 ou  
 npm install
```

- Renome o arquivo **_env.local** para **.env.local** 


- Execute o projeto com o comando a seguir: 

```
   yarn dev 
   ou
   npm dev
```
Parabéns o frontend está executando na url: http://localhost:3000/.  
