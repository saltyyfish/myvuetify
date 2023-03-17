<template>
  <v-sheet  width="300">
    <router-view></router-view>
    <v-text-field  type="text" v-model="submitstring">
     
    </v-text-field> 
    <v-btn @click="next()"> submit
      </v-btn>
    </v-sheet>
</template>

<script >
import { defineComponent ,ref} from 'vue'
import { useRouter } from 'vue-router'


const submitstring = ref('')

export default defineComponent({
  name: 'Home',
 
 
 methods:{

  next()
 {
   this.$router.push({path:'/chat',query:{chatstring:submitstring.value}})
 }
 }
}
)
</script>
