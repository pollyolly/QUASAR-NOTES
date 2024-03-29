## QUASAR

### Installation Linux & Windows
```vim
$npm i -g @quasar/cli

NodeJs:
https://nodejs.org/en/download/releases/

Requirements:
NodeJs 14+
```

### Run Dev
```vim
$npx quasar dev
```

### Migration From Linux to Windows
```vim
Note: Do note copy the node_modules
$cd quasar-app-folder
$npm install
```
### Remove EsLint 
```vim
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
```vim
https://quasar.dev/style/spacing#table-of-permutations
i.e: q-pr-md (q-padding-right-midium)
```
### Installing Quasar Plugins
[Notify Plugin](https://quasar.dev/quasar-plugins/notify#introduction)
```json
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
### Qusar Apex Charts
[Quasar Charts](https://github.com/patrickmonteiro/quasar-apexcharts/tree/master/src/boot)
```vim
npm install apexcharts --save
npm install vue-apexcharts --save


//src/boot/apexcharts.js
import VueApexCharts from 'vue3-apexcharts'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  app.use(VueApexCharts)
})

//https://quasar.dev/quasar-cli-vite/boot-files#when-to-use-boot-files
//quasar.conf.js
boot: [
      'apexcharts' //<apexcharts>.js
    ],
```
### Use State Management Pinia
```vim
$quasar new store store_name
* This will automatically install Pinia and create store in src/stores/store_name.js
```
### Handling Quasar Table
[Quasar QTable add/delete/update rows](https://codepen.io/mickey58/pen/eYYVqWv)

### Quasar Sample Applications
[Quasar Samples](https://github.com/quasarframework/quasar-awesome)

[Crpool 3d](https://carpol.picktype.com/v/truck#0ae093d8-39d9-4b01-81df-303161d33158)
```vim
https://threejs.org/
```
### Vue2 Old Best Docu
[Vue2 Docu](https://v2.vuejs.org/v2/api/#watch)
### Vuetify UI's Sample
https://morioh.com/p/06de012d5316
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

[Quasar QTable API Pagination, Loading, Sorting](https://www.youtube.com/watch?v=jnwdEtrdRuI)

[Quasar QTable Server Side](https://quasar.dev/vue-components/table#server-side-pagination-filter-and-sorting)
### Vue Tutorial
[Vue Tutorial](https://vuejs.org/examples/#hello-world)

### Rest API Security and HTML5
[OWASP Rest API Sec](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)

[HTML5 Sec](https://html5sec.org/)
