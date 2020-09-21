# webdriverioFMK
Webdriverio framework test with cucumber

## Requirements
- NodeJS v
- Git
- Vscode 

## Setup project

Run this command to install the projet 

```sh
npm install
```

#### Project structure :

```
- .ide  //vscode settings folders (autocompletion gherkins)
- wdio.conf.js // WebdriverIO configuration
- node_modules // nodejs dependencies folder
- src // source folder
-- features // Feature files containing scenarii
-- pages // Pages objects folder
-- steps // Steps definition folder
- package-lock.json // nodejs versioned dependencies tree file
- package.json // nodejs dependencies file
- tsconfig.json
- README.md
```

#### Execute tests locally

Execute the following command to launch the automated tests locally
```sh
npm wdio wdio.conf.js
```
OR 

```sh
npm run local
```