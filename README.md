# Typescript playground

## Introduction

Playing with typescript, understanding its use in with NodeJS Express

## Start

- Initialize the folder

```sh
npm init
```

- Install the packages

```sh
npm i dotenv express typescript
```

- And dev dependencies

```sh
npm i -D @types/debug debug @types/express concurrently eslint
```

- Configure eslint

```sh
npm init @eslint/config
```

This will ask you a series of questions. For this project we’ll answer the following

    How would you like to use ESLint? : To check syntax and find problems
    What type of modules does your project use? : JavaScript modules (import/export)
    Which framework does your project use? : None of these
    Does your project use TypeScript? : Yes
    Where does your code run? : Node
    What format do you want your config file to be in? : JavaScript
    Finally, you will be prompted to install some additioanl eslint libraries. Choose Yes.

- Configure your package.json

```js
{
  "type": "module",
  "name": "learn-ts",
  "version": "1.0.0",
  "description": "Learn TS",
  "main": "dist/index.js",
  "scripts": {
    "start:BUILD_🏰": "tsc -w",
    "start:RUN_🚀": "nodemon dist/index.js",
    "start:LINT_💥❓❗": "eslint . --ext .ts",
    "watch": "concurrently \"npm:start:*\" -c green.bold,yellow.bold,blue.bold"
  },
  "keywords": [
    "typescript"
  ],
  "author": "yumicode",
  "license": "MIT",
  "dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "mongodb": "^4.9.0",
    "typescript": "^4.8.2"
  },
  "devDependencies": {
    "@types/debug": "^4.1.7",
    "@types/express": "^4.17.13",
    "@typescript-eslint/eslint-plugin": "^5.35.1",
    "@typescript-eslint/parser": "^5.35.1",
    "concurrently": "^7.3.0",
    "debug": "^4.3.4",
    "eslint": "^8.23.0"
  }
}
```

- Don't forget type "module"
- Add "concurrently" to launch compiler and your server

## Playground 

Each file covers some tips in Typescript.

[Types with variables](./src/variables.ts)
[Types with functions](./src/functions.ts)