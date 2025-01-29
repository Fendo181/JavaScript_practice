<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 v-bind:class="titleClass">Make me red</h1>
	<!-- これでも書ける   -->
  <h1 :class="titleClass">どうも！！</h1>
</template>

<style>
.title {
  color: red;
}
</style>
