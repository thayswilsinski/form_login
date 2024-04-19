# form_login
# Projeto de Página de Login 🌟

Olá! Este é o projeto de página de login que desenvolvemos em colaboração com o nosso estimado professor Léu, no ano passado. A estrutura inicial foi criada durante a aula, e esse ano temos que aprimorar suas funcionalidades.

Este projeto consiste em duas páginas web: uma página de cadastro e uma página de login, desenvolvidas com HTML, CSS e JavaScript.

## ℹ️ Informações:

- **Nome completo**
- **Data de nascimento**
- **E-mail**
- **CPF**
- **Senha**
- **Confirmação de senha**

## 🚀 Funcionalidades:

- Validação dos campos obrigatórios (todos os campos são obrigatórios).
- Verificação da igualdade entre senha e confirmação de senha.
- Exibição de senha: um botão ao lado do campo de senha permite que o usuário revele a senha digitada.

## 🖥️ Estrutura do HTML:

- Utilização do framework Bootstrap para o layout responsivo.
- Campos de entrada de dados (input) com validação embutida.

## 🛠️ Script JavaScript (cadastro.js):

- Função `validarCadastro()`: realiza a validação dos campos do formulário de cadastro.
- Função `mostrarSenha()`: permite ao usuário mostrar ou ocultar a senha digitada.

## 🚪 Página de Login (login.html)

A página de login permite que os usuários autenticados acessem o sistema fornecendo um nome de usuário e senha.

### Funcionalidades:

- Validação dos campos obrigatórios (nome de usuário e senha).
- Autenticação de usuário: a lógica de autenticação pode ser adicionada ao script JavaScript.

### 🖥️ Estrutura do HTML:

- Utilização do ícone Remix para ícones de usuário e senha.
- Utilização do Bootstrap para o layout responsivo.

### 🛠️ Script JavaScript (login.js):

- Função `validarLogin()`: realiza a validação dos campos do formulário de login.

## 🔑 Página de Recuperação de Senha (recovery.html)

A página de recuperação de senha permite que os usuários solicitem a recuperação de senha fornecendo seu endereço de e-mail.

### Funcionalidades:

- Validação do campo de e-mail.
- Envio de e-mail de recuperação.

### 🖥️ Estrutura do HTML:

- Utilização do framework Bootstrap para o layout responsivo.
- Campo de entrada de e-mail com validação embutida.

### 🛠️ Script JavaScript (recovery.js):

- Lógica para enviar o e-mail de recuperação (ainda não implementada).
