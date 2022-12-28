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
### Layout and Alignment
```
https://quasar.dev/style/spacing#table-of-permutations
i.e: q-pr-md (q-padding-right-midium)
```
### Installing Quasar Plugins
[Notify Plugin](https://quasar.dev/quasar-plugins/notify#introduction)
```
// Quasar CLI
// quasar.config.js
framework: {
      config: {
        notify: {}
      },
      plugins: [
        'Notify' //Notify plugin
      ]
    },
```
### Use State Management Pinia
```
$quasar new store store_name
* This will automatically install Pinia and create store in src/stores/store_name.js
```
### Quasar Sample Applications
[Quasar Samples](https://github.com/quasarframework/quasar-awesome)

[Crpool 3d](https://carpol.picktype.com/v/truck#0ae093d8-39d9-4b01-81df-303161d33158)
```
https://threejs.org/
```
### Vue2 Old Docu
```
https://v2.vuejs.org/v2/api/#watch
```
### Handling Quasar Links
[Handling Links](https://quasar.dev/vue-components/button?search=1&test=1#Handling-links)
### State Mngt. Pinia in Quasar
[Quasar Pinia](https://quasar.dev/quasar-cli-webpack/state-management-with-pinia)
### Pinia
[Pinia Statemanegement](https://pinia.vuejs.org/core-concepts/#setup-stores)
### Pinia and Vuex
[Pinia and Vuex](https://blog.logrocket.com/complex-vue-3-state-management-pinia/#configuring-the-router)
### Quasar Tutorial
[Learn Quasar Components](https://www.youtube.com/playlist?list=PLFZAa7EupbB7xC-C0YwYk7aXIAbHYX1Xl)

[PWA Quasar Laravel API](https://www.youtube.com/playlist?list=PL3pX4NAc7vJswKOWNO2kVobd-b2RiOOlY)
### Vue Tutorial
[Vue Tutorial](https://vuejs.org/examples/#hello-world)
