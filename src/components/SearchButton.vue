<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  label: string
  size?: 'small' | 'medium' | 'large'
}>()

const classes = computed(() => ({
  'search-button': true,
  [`search-button--${props.size || 'medium'}`]: true
}))

</script>

<style scoped>
.search-button {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  background-color: #f65261;
  text-transform: uppercase;
  color: #ffffff;
}
.search-button--small {
  font-size: 0.75rem;
  padding: 10px 16px;
}
.search-button--medium {
  font-size: 0.875rem;
  padding: 11px 24px;
}
.search-button--large {
  font-size: 1rem;
  padding: 12px 36px;
}
</style>
