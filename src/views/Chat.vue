<template>
  <div>
    <v-card width="300">
      <v-card-text>
        <p>{{ chatstring }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRoute();

const chatstring = ref("");
onMounted(() => {
  chatstring.value = route.query.chatstring;
});
</script>
