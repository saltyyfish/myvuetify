<template>
  <v-sheet width="300">
    <v-form>
      <v-text-field type="text" v-model="submitstring"> </v-text-field>
      <v-btn @click="next"> submit </v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

var submitstring = "";

function next() {
  router.push({
    path: "/chat",
    query: { chatstring: submitstring },
  });
}
</script>
