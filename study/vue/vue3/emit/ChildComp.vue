<script setup>
// 発行されるイベントを宣言
const emit = defineEmits(['response'])

// responseイベントに対して、hello from childを渡している
emit('response', 'hello from child')
</script>

<template>
  <h2>Child component</h2>
  <h3>そうだね!</h3>
</template>
