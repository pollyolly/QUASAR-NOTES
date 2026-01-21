<template>
    <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="cancel" color="negative" text-color="white" />
          <span class="q-ml-sm">You are deleting Chat Number: {{ propsDeleteData.chatnumber }}.</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Delete" color="negative" v-close-popup />
        </q-card-actions>
    </q-card>
</template>
<script>
// import { ref, defineModel } from 'vue';
// import { Notify } from 'quasar';
// import bus from 'src/utility/bus';

export default { 
  props:{
    propsDeleteData: {
      type: Object,
      required: false
    }
  },
  mounted(){
    
  },
  setup(){
    return {
      
    }
  }
}
</script>