<script setup>
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <!-- make this button work -->
  <button>Count is: {{ count }}</button>
  <button v-on:click='increment'>
    Count is {{ count }}
  </button>
  <!-- v-onは@で省略できます   -->
    <button @click='increment'>
    Count is {{ count }}
  </button>
</template>
