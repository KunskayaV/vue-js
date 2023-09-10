<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  label: string
  size?: 'small' | 'medium' | 'large'
}>()

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const classes = computed(() => ({
  'search-button': true,
  [`search-button--${props.size || 'medium'}`]: true
}))

const onClick = () => {
  emit('click', 1)
}
</script>

<style scoped>
.search-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  font-size: 12px;
  padding: 10px 16px;
}
.search-button--medium {
  font-size: 14px;
  padding: 11px 24px;
}
.search-button--large {
  font-size: 16px;
  padding: 12px 36px;
}
</style>
