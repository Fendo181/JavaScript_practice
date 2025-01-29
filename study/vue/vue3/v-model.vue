<script setup>
import { ref } from 'vue'

const text = ref('')

function onInput(e) {
  text.value = e.target.value
}
</script>

<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
	<!-- これでも同じ?   -->
  <input v-bind:value="text" v-on:input="onInput" placeholder="Type here! here!!">
  <p>{{ text }}</p>
	<!-- 省略形   -->
  <input v-model="text" placeholder="Type here! model!!">
  <p>{{ text }}</p>
</template>
