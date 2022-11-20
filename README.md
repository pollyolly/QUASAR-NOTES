## QUASAR

### Installation Linux & Windows
```
$npm i -g @quasar/cli

NodeJs:
https://nodejs.org/en/download/releases/

Requirements:
NodeJs 14+
```

### Run Dev
```
$npx quasar dev
```

### Migration From Linux to Windows
```
Note: Do note copy the node_modules
$cd quasar-app-folder
$npm install
```
### Remove EsLint 
```
app-folder/quasar.config.js
eslint: {
      // fix: true,
      // include = [],
      // exclude = [],
      // rawOptions = {},
      //warnings: true, //Comment
      //errors: true //Comment
    },
```
