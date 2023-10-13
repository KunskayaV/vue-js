<template>
  <div class="switcher-container">
    <span class="switcher-title">{{ title }}</span>
    <div>
      <label
        v-for="item in items"
        class="switcher-label"
        :class="{ 'switcher-label--active': item.value === value }"
        :key="item.value"
        data-testid="switcher"
      >
        {{ item.label }}
        <input :name="item.name" :value="item.value" type="radio" v-show="false" v-model="value" />
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type TSwitcherItem = {
  value: string | number
  name: string
  label: string
}

const props = withDefaults(
  defineProps<{
    title?: string
    items: TSwitcherItem[]
    currentValue: TSwitcherItem['value']
  }>(),
  { title: '' }
)

const emit = defineEmits<{
  'update:currentValue': [value: TSwitcherItem['value']]
}>()

const value = computed({
  get() {
    return props.currentValue
  },
  set(value: TSwitcherItem['value']) {
    emit('update:currentValue', value)
  }
})
</script>

<style scoped>
.switcher-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.switcher-title {
  text-transform: uppercase;
  color: #ffffff;
}

.switcher-label {
  cursor: pointer;
  display: inline-block;
  padding-block: 8px;
  padding-inline: 16px;
  font-size: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  background-color: #424242;
}

.switcher-label:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.switcher-label:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.switcher-label--active {
  background-color: #f65261;
}
</style>
