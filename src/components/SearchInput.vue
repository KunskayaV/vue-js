<template>
  <label class="search-input-label" v-if="label" for="search">{{ label }}</label>
  <input
    id="search"
    name="search"
    class="search-input"
    placeholder="Search..."
    :value="modelValue"
    @input="$emit('update:modelValue', $event?.target?.value || '')"
  />
</template>

<script lang="ts" setup>

 withDefaults(
  defineProps<{
    label?: string
    modelValue?: string
  }>(),
  { label: '' }
)

defineEmits<{
  'update:modelValue': [text: string]
}>()

</script>

<style scoped>
.search-input {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  color: #ffffff;
  background-color: rgba(28, 28, 28, 0.9);
  border-radius: 4px;
  border: none;
}

.search-input-label {
  margin-bottom: 4px;
  display: inline-block;
  font-size: 0.85rem;
  color: #ffffff;
  text-transform: uppercase;
}
</style>
