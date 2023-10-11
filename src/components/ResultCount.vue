<template>
  <span class="result-count">{{ count }} movie found</span>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    count?: number
  }>(),
  { count: 0 }
)
</script>

<style scoped>
.result-count {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.5em;
  color: #ffffff;
}
</style>
