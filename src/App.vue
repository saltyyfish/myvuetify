<template>
  <v-app>
    <v-main>
    <router-view></router-view>
   

   
    </v-main>
    
    
    
  </v-app>
</template>

<script lang="ts">
import Home from './views/Home.vue'

export default {
  name: 'App',
  components:{
    Home
  },
  
}
</script>
