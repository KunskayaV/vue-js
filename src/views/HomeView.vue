<script setup lang="ts">
withDefaults(defineProps<{ msg: string }>(), { msg: 'This is Home page' })
</script>

<template>
  <main>
    <h1>{{ msg }}</h1>
  </main>
</template>
