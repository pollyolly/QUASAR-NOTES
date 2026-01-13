## QUASAR

### Craete Project Quasar
```
$npm init quasar@latest
```
```
- App with Quasar Cli
- Project folder: jmr-portfolio
- Quasar v2 (Vue 3 | Latest and greatest)
- Javascript
- Quasar App CLI with Vite 6 (v2)
- Package name: jmr-portfolio
- Project product name: jmr-portfolio
- Project description: jmr-portfolio
- Composition API with <script setup>
- Sass with SCSS syntax (We can disable this to enable CSS only)
- State Management (Pinia)
- Add Prettier for code formatting: n
- Yes, use npm
```
### Install Quasar CLI
```
$npm i -g @quasar/cli
```
### Run Project
```
$npm run dev
```
or
```
$quasar dev
```
### Install Node modules
```
$npm install
```
### Build Project
```
$quasar build -m <mode>

Replace <mode> with one of the following:
- spa (Single Page Application)
- ssr (Server-Side Rendering)
- pwa (Progressive Web App)
- bex (Browser Extension)
- cordova (for mobile apps with Cordova)
- capacitor (for mobile apps with Capacitor)
- electron (for desktop apps)
```

### Quasar Icons

https://fonts.google.com/icons


### Configuration
Prevent Opening New Browser Tab
```
  <q-item
    clickable
    tag="a"
    target="_self"
    :href="props.link"
  >
  <!--  target="_blank" -->
```
#### Router Configuration
Change the URL Path 
```
//quasar.config.js
vueRouterMode: 'history', //http://localhost:9001/about
               'hash',    //http://localhost:9001/#/about
```
Sample Route
```
//router/routes.js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'myprojects', component: () => import('pages/MyProjectsPage.vue') },
      { path: 'resume', component: () => import('pages/ResumePage.vue') },
      { path: 'contactme', component: () => import('pages/ContactMePage.vue') },
    ]
  }
```
Get Router Console Log
```
//router/index.js
  Router.beforeEach((to, from, next)=>{
    console.log(to);
    document.title = to.name //Change Page Title
    next();
  })
```
Prevent Page Refresh
```
//src/components/EssentialLinks.vue
 <!-- <q-item
    clickable
    tag="a"
    target="_self"
    :href="props.link"
  > -->
<!-- Quasar by default using Vue Router to use router-link -->
  <q-item
    clickable
    tag="router-link" 
    :to="props.link"
```
Access Route Values
```
 <q-toolbar-title>
    {{ $route.name }}
</q-toolbar-title>
```
### Troubleshoot
Adding "fullscreen" class in q-page may cause q-item clickable not to work
```
<q-item clickable></q-item>
```
```
<q-page class="fullscreen">
</q-page>
```
### Helpful Links

[Dynamic Page](https://www.youtube.com/watch?v=Pcrzy1f1fK4)

[Quasar PWA Optimization](https://medium.com/simform-engineering/building-the-future-with-quasar-a-vue-js-framework-revolution-74b09723a91d)

[Quasar Apex Charts](https://quasar-apexcharts.netlify.app/)

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
[table-of-permutations](https://quasar.dev/style/spacing#table-of-permutations)
```vim
Example: q-pr-md (q-padding-right-midium)
```
### Installing Quasar Plugins
[Notify Plugin](https://quasar.dev/quasar-plugins/notify#introduction)
```
//File.vue
import { Notify } from 'quasar';

Notify.create({
    message: 'Form submitted successfully!',
    color: 'green-4',
    icon: 'check_circle',
    position: 'top'
});
```
```
// Quasar CLI
// quasar.config.js
framework: {
      config: {
        notify: {
          position: 'top-right',
          timeout: 2500,
          textColor: 'white',
          actions: [{ icon: 'close', color: 'white' }]
        }
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
```
$quasar new store store_name
```
```
This will automatically install Pinia and create store in src/stores/store_name.js
```
### Handling Quasar Table
[Quasar QTable add/delete/update rows](https://codepen.io/mickey58/pen/eYYVqWv)

### Quasar Sample Applications
[Quasar Samples](https://github.com/quasarframework/quasar-awesome)

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

