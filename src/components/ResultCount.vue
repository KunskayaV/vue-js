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
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 1.1px;
  line-height: 1.5;
  color: #ffffff;
}
</style>
