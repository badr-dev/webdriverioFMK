# webdriverioFMK
Webdriverio framework test with cucumber, integrated in circleCI

## Requirements
- NodeJS v13
- Git
- Vscode 

## Setup project

To install the project, run the following command 

```sh
npm install
```

#### Project structure :

```
- .circleci // containg configuration file of the pipeline
- wdio.conf.js // WebdriverIO configuration
- node_modules // nodejs dependencies
- src // source folder
-- features // Feature files containing scenarii
-- pages // Pages objects folder containing the selectors
-- steps // Steps definition folder
- package-lock.json // nodejs versioned dependencies files
- package.json // nodejs dependencies file
- tsconfig.json // typescript configuration
- README.md
```

#### Execute tests locally

To execute the automated tests, run this command (By default, it will be executed on chrome browser. You set up the browsers in the config file capabilities )
```sh
npm wdio wdio.conf.js
```
OR 

```sh
npm run local
```