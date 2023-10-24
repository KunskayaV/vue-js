<template>
  <div class="duration-container">
    <span date-testid="details-year">{{ year }}</span>
    <span date-testid="details-duration">{{ minutes }} min</span>
  </div>
</template>

<script setup lang="ts">
import { getDuration } from '@/helpers/getDuration'
import { getYearFromDate } from '@/helpers/getYearFromDate'
import { computed } from 'vue'

const props = defineProps<{ date: string; duration: string }>()

const year = computed(() => getYearFromDate(props.date))
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
