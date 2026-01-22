## QUASAR
<image src="https://github.com/pollyolly/QUASAR-NOTES/blob/main/bet-game-v1.png" height="350" />

### Project Link
[Betting Game](https://betting-game-quasar.vercel.app/)

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
```
```
Replace <mode> with one of the following:
- spa (Single Page Application)
- ssr (Server-Side Rendering)
- pwa (Progressive Web App)
- bex (Browser Extension)
- cordova (for mobile apps with Cordova)
- capacitor (for mobile apps with Capacitor)
- electron (for desktop apps)
```
### Deploy in Vercel
```
$quasar build -m spa
```
```
1. Create a git repository named betting-game-quasar.
2. Copy the generated files inside betting-game-quasar/dist/spa/*
3. $cp -r betting-game-quasar/dist/spa/* betting-game-quasar/
4. Deploy in vercel the git repository to vercel.
5. Sample Output: https://betting-game-quasar.vercel.app/
```
### Deploy with Nginx
[Deploy SPA with NginX](https://quasar.dev/quasar-cli-vite/developing-spa/deploying)
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
     redirect: { name:'About' } //Redirect base url to 'About' url path
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Index', component: () => import('pages/IndexPage.vue') },
      { path: 'about', name:'About', component: () => import('pages/AboutPage.vue') },
      { path: 'myprojects', name:'Myprojects', component: () => import('pages/MyProjectsPage.vue') },
      { path: 'resume', name:'Resume', component: () => import('pages/ResumePage.vue') },
      { path: 'contactme', name:'Contactme', component: () => import('pages/ContactMePage.vue') },
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
```
app-folder/quasar.config.js
```
```
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
### Dialog
[QDialog](https://quasar.dev/vue-components/dialog/)
```
//Main.vue
<template>
    <div class="q-pa-sm">
        <q-btn label="Show Title" color="primary" @click="onSubmit" />
    </div>
    <q-dialog v-model="showTitle" persistent>
          <TitleComponent />
    </q-dialog>
</template>
<script>
import TitleComponent from 'src/components/TitleComponent';
import { ref } from 'vue';
const showTitle = ref(false);
export default {
   components:{
      TitleComponent
   },
   setup(){
       const onSubmit = () => {
           showTitle.value = true;
       }
       return {
          showTitle
      }
   }
}
</script>
```
```
//TitleComponent.vue
<template>
   <h1>Hello World</h1>
</template>
<script>
</script>
```
### Installing Quasar Plugins
[Notify Plugin](https://quasar.dev/quasar-plugins/notify#introduction)
```
//File.vue
import { Notify } from 'quasar';

Notify.create({
    message: 'Form submitted successfully!',
    color: 'green-4', //red-4
    icon: 'check_circle', //cancel
    position: 'top'
});
```
```
// Quasar CLI
// quasar.config.js
framework: {
      config: {
        notify: {
          timeout:1000 //Timeout for notify to disappear
        }
      },
      plugins: [
        'Notify' //Notify plugin
      ]
    },
```
### Quasar Apex Charts
[Quasar Charts](https://github.com/patrickmonteiro/quasar-apexcharts/tree/master/src/boot)

[Vue Apex Charts](https://github.com/apexcharts/vue3-apexcharts/tree/main)

```vim
$npm install apexcharts --save
$npm install vue-apexcharts --save or $npm install vue3-apexcharts

//src/boot/apexcharts.js
import VueApexCharts from 'vue3-apexcharts'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  app.use(VueApexCharts)
})
```
[When to use boot file](https://quasar.dev/quasar-cli-vite/boot-files#when-to-use-boot-files)
```
//quasar.conf.js
boot: [
      'apexcharts' //<apexcharts>.js
    ],
```
```
<template>
<div class="flex">
  <usersGraph
    width="500"
    type="line"
    :options="usersOptions"
    :series="userSeries">
  </usersGraph>
</div>
</template>
<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
    components: {
        usersGraph: VueApexCharts,
    },
    data: function () {
    return {
      usersOptions: {
        chart: {
          id: "usersgraph",
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' ,'Sep', 'Oct', 'Nov', 'Dec'],
        },
      },
      userSeries: [
        {
          name: "Users Per Month",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 78, 90, 34, 45],
        },
      ],
    }
  }
}
</script>
```
### Eventbus
[Quasar EventBus](https://quasar.dev/quasar-utils/event-bus-util#introduction)
```
//bus.js
import { EventBus } from 'quasar';
const bus = new EventBus();
export default bus;
```
```
import Bus from 'src/utility/bus';

Bus.on('some-event', (arg1, arg2, arg3) => {
 // do some work
});
Bus.emit('some-event', 'arg1', 'arg2', 'arg3')
```
### Props
```
Props is syncing of data between two component (Child and Parent Component).
i.e: When you call Component Parent and Component Child with their Props the data is always sync.
```
```
//App.vue
<template>
    <TitleComponent :ListData=ListData />
    <button @click="onSubmit">Submit Title</button>
</template>
<script>
import { ref } from 'vue';
import TitleComponent from './TitleComponent.vue';
const ListData = ref({});

export default {
    components: {
      TitleComponent
    },
    setup(){
      const onSubmit = () => {
        ListData.value = {title: 'Testing'};
      }
      return {
        onSubmit,
        ListData
     }
  }
}
</script>
```
```
//TitleComponent.vue
<template>
   <h1>{{ ListData.title }}</h1>
</template>
<script>
export default {
  props: {
     ListData: {
      type: Object,
      required: false 
     }
   }
}
</script>
```
### Axios
[Ajax Axios](https://quasar.dev/quasar-cli-vite/ajax-requests/)
```
import { defineBoot } from '#q-app/wrappers';
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:9999/' })

export default defineBoot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = axios
  // this will allow you to use this.$axios (for Vue Options API form)
  // so you won't necessarily have to import axios in each vue file
  app.config.globalProperties.$api = api
  // this will allow you to use this.$api (for Vue Options API form)
  // so you can easily perform requests against your app's API
})
export { axios, api }
```
### Ajax Bar
Note: ref="bar" will get null if the page is loaded earlier this may cause rendering problem.
```
<template>
        <q-ajax-bar
            ref="bar"
            position="top"
            color="accent"
            size="10px"
            :delay="delay" 
        />
</template>
<script>
import { ref } from 'vue';
    const bar = ref(0);
    const delay = ref(3000);
    const triggerLoading = () => {
        const barRef = bar.value;
        barRef.start();
        setTimeout(()=>{
            const barRef = bar.value;
            if(barRef) {
                barRef.stop();
            }
        }, Math.random() * 3000 + 1000);
    }
export default {
  setup(){
    return {
      delay,
      bar,
      triggerLoading,
    }
  }
}
</script>
```
### Use State Management Pinia
```
$quasar new store store_name
```
```
This will automatically install Pinia and create store in src/stores/store_name.js
```
### Quasar File Upload
[Quasar File Upload](https://quasar.dev/vue-components/uploader#nodejs)

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
[Best Quasar Tutorial for All](https://www.youtube.com/watch?v=gxcSztHnxeY&list=PLAiDzIdBfy8iu_MZrq3IPuSFcRgCQ0iL0&index=8)

[Learn Quasar Components](https://www.youtube.com/playlist?list=PLFZAa7EupbB7xC-C0YwYk7aXIAbHYX1Xl)

[PWA Quasar Laravel API](https://www.youtube.com/playlist?list=PL3pX4NAc7vJswKOWNO2kVobd-b2RiOOlY)

[Quasar QTable API Pagination, Loading, Sorting](https://www.youtube.com/watch?v=jnwdEtrdRuI)

[Quasar QTable Server Side](https://quasar.dev/vue-components/table#server-side-pagination-filter-and-sorting)

