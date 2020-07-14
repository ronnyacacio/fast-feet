<h1 align="center">
    <img alt="FastFeet" title="#fastfeet" src=".github/logo.png" width="300px"  />
</h1>

<p align="center">
  <a href="https://github.com/ronnyacacio">
    <img alt="Author" src="https://img.shields.io/badge/author-ronnyacacio-7d40e7?style=flat-square">
  </a>

  <a href="#">
    <img alt="Languages" src="https://img.shields.io/github/languages/count/ronnyacacio/fast-feet?color=7d40e7&style=flat-square">
  </a>

  <a href="https://github.com/ronnyacacio/fast-feet/stargazers">
    <img alt="Stars" src="https://img.shields.io/github/stars/ronnyacacio/fast-feet?color=7d40e7&style=flat-square">
  </a>

  <a href="https://github.com/ronnyacacio/fast-feet/commits/master">
    <img alt="LastCommit" src="https://img.shields.io/github/last-commit/ronnyacacio/fast-feet?color=7d40e7&style=flat-square">
  </a>

  <a href="#">
    <img alt="RepoSize" src="https://img.shields.io/github/repo-size/ronnyacacio/fast-feet?color=7d40e7&style=flat-square">
  </a>

  <a href="https://github.com/ronnyacacio/fast-feet/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=7d40e7&style=flat-square">
  </a>
</p>

<br />

## 💻 Projeto

O FastFeet é um projeto que visa gerenciar as encomendas e entregas de uma transportadora. Onde a sede "fastfeet" utiliza a parte WEB enquanto os entregadores usam o app mobile para dar feedback de problemas ou sucesso na entrega dos produtos.

</br>

## ⛏ API

<h1 align="center">
    <img src=".github/api.png" />
</h1>

## 🌐 WEB

<h1 align="center">

[![FastFeet WEB](https://res.cloudinary.com/marcomontalbano/image/upload/v1594745617/video_to_markdown/images/youtube--JOzv2KwB0Aw-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/JOzv2KwB0Aw "FastFeet WEB")

</h1>

## 📱 Mobile

<h1 align="center">

[![FastFeet Mobile](https://res.cloudinary.com/marcomontalbano/image/upload/v1594745680/video_to_markdown/images/youtube--0Hnx4bo6yl8-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/0Hnx4bo6yl8 "FastFeet Mobile")

</h1>

## 🚀 Pricipais Tecnologias

- [React](https://reactjs.org)
- [Node](https://nodejs.org/en/)
- [Expo](https://docs.expo.io/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Date-fns](https://date-fns.org/)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://www.npmjs.com/package/multer)
- [Bee-queue](https://github.com/bee-queue/bee-queue)
- [NodeMailer](https://nodemailer.com/about/)
- [Redux](https://redux.js.org/)
- [Redux-saga](https://redux-saga.js.org/)
- [UnForm](https://github.com/Rocketseat/unform)
- [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Navigation](https://reactnavigation.org/)

<br />

## 🔥 Instalação

```bash
# Clone este repositório
$ git clone https://github.com/ronnyacacio/fast-feet.git

# Crie um arquivo .env na pasta backend e o preencha conforme o arquivo .env.example
# Crie um banco de dados postgres na sua máquina com o nome fast-feet

# Navegue até a pasta backend e execute os seguintes comandos:
$ yarn
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all
$ yarn dev
$ yarn queue

# Depois disso, entre na pasta web e execute os comandos:
$ yarn
$ yarn start

# E finalmente, entre na pasta mobile e execunte os comandos:
$ yarn
$ expo start

# Observações:
- Não esqueça de mudar a baseURL no arquivo `src/services/api.js` da pasta e mobile para o IP da sua máquina
```

<p align="center">
  Made with 💜 by <a href="https://www.linkedin.com/in/ronnyacacio/"> Ronny Acácio </a>
</p>
