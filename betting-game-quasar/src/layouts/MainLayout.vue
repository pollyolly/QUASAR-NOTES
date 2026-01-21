<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Bet Game
        </q-toolbar-title>
        <div>Bet Game v 1.0.0</div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <BreadCrumbs />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import BreadCrumbs from 'src/components/BreadCrumbs.vue'

const linksList = [
  {
    title: 'Dashboard',
    caption: 'Dashboard Display',
    icon: 'dashboard',
    link: 'dashboard'
  },
  {
    title: 'Chat',
    caption: 'Chat Window',
    icon: 'chat',
    link: 'chat'
  },
    {
    title: 'Messages',
    caption: 'Messages List',
    icon: 'email',
    link: 'message'
  },
  {
    title: 'Inquiry',
    caption: 'Inquiry list',
    icon: 'help',
    link: 'inquiry'
  },
  {
    title: 'Client Message',
    caption: 'Client Message',
    icon: 'message',
    link: 'client_message'
  }
]
const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

export default {
  components: {
    EssentialLink,
    BreadCrumbs
  },
  setup(){
    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
}
</script>
