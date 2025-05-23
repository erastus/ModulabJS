<p align="center">
  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo" /></a>
</p>

[circleci-image]: https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png
[circleci-url]: https://developer.mozilla.org/es/docs/Web/JavaScript

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework designed to streamline the development and testing of JavaScript files for Modulab.</p>

## Description

ModulabJS uses TypeScript as its primary development language, transpiled to JavaScript in [ES5](https://www.w3schools.com/js/js_es5.asp) format, compatible with the Modulab application's production environment. The main objective is to automate and facilitate the development process, allowing the creation of modules in TypeScript that are subsequently converted into .js files ready to be integrated into the application.

In addition, a testing environment is implemented with Jest, which allows for efficient testing isolated from the module logic. This solves one of the main limitations of direct development in Modulab: the lack of a suitable environment for fast and reliable testing. This architecture accelerates the development cycle, improves code quality, and reduces the time and cost associated with manual validation in production.


## Project setup

```bash
$ npm install
```

## Compile

```bash
# production mode
$ npm run compile
```

## Run tests

```bash
# unit tests
$ npm run test

# watch mode
$ npm run test:watch
```
