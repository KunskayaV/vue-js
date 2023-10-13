<template>
  <ul data-testid="results-list" class="results-list" v-if="items.length">
    <li v-for="item in items" :key="item.id">
      <slot name="item" :item="item"></slot>
    </li>
  </ul>
  <div class="results-empty" v-else>
    <span class="results-empty-text">NO movies found</span>
  </div>
</template>

<script setup lang="ts">
import type { TMovie } from '@/types'

defineProps<{
  items: TMovie[]
}>()
</script>

<style scoped>
.results-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 32px;
  padding: 32px;
}

.results-empty {
  display: flex;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  background-color: #232323;
}

.results-empty-text {
  font-size: 1.5;
  font-weight: 500;
  color: #ffffff;
}
</style>
