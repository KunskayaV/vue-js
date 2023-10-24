<template>
  <span class="item-release-date">{{ year }}</span>
</template>

<script lang="ts" setup>
import { getYearFromDate } from '../helpers/getYearFromDate'
import { computed } from 'vue'
const props = defineProps<{
  date: string
}>()
const year = computed(() => getYearFromDate(props.date))
</script>

<style scoped>
.date {
  display: inline-block;
  padding-block: 4px;
  padding-inline: 8px;
  border: 1px #bdbdbd solid;
  border-radius: 2px;
  font-size: 0.8rem;
  line-height: 1;
  color: #bdbdbd;
}
</style>
