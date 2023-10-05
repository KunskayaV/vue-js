<template>
  <div class="duration-container">
    <span>{{ props.year }}</span>
    <span>{{ minutes }} min</span>
  </div>
</template>

<script setup lang="ts">
import { getDuration } from '@/helpers/getDuration'
import { computed } from 'vue'

const props = defineProps<{ year: string; duration: string }>()

const minutes = computed(() => getDuration(props.duration))
</script>

<style scoped>
.duration-container {
  display: flex;
  gap: 24px;
  padding-block: 24px;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #f65261;
}
</style>
