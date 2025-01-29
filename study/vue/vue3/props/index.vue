<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const greeting = ref('ここだよ~!!')
</script>

<template>
  <ChildComp :msg="greeting" />
</template>
