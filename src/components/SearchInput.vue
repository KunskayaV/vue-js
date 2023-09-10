<template>
  <label class="search-input-label" v-if="label" for="search">{{ label }}</label>
  <input
    id="search"
    name="search"
    class="search-input"
    placeholder="Search..."
    v-model.trim="value"
    @keyup.enter="handleSearch"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    searchTextValue?: string
  }>(),
  { label: '', searchTextValue: '' }
)

const emit = defineEmits<{
  'update:searchTextValue': [text: string]
  submit: [value: string]
}>()

const value = computed({
  get() {
    return props.searchTextValue
  },
  set(value: string) {
    emit('update:searchTextValue', value)
  }
})

const handleSearch = (event: Event) => {
  emit('submit', (event.target as HTMLInputElement).value)
}
</script>

<style scoped>
.search-input {
  width: 100%;
  padding: 12px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #ffffff;
  background-color: rgba(28, 28, 28, 0.9);
  border-radius: 4px;
  border: none;
}

.search-input-label {
  margin-bottom: 4px;
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #ffffff;
  text-transform: uppercase;
}
</style>
