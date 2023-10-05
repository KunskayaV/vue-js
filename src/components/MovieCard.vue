<template>
  <figure class="poster">
    <img
      class="poster-image"
      :src="posterUrl"
      v-lazyload
      :alt="item.storyline"
      width="300"
      height="400"
    />
    <figcaption class="info">
      <div class="info-wrapper">
        <span class="name">{{ item.title }}</span>
        <span class="genre">{{ genreLine }}</span>
      </div>
      <ItemDate :date="item.releaseDate" />
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ItemDate from './ItemDate.vue'
import { getItemGenreLine } from '@/helpers/getItemGenreLine'
import type { TMovie } from '@/types'
import type { Directive } from 'vue'
import { getPosterUrl } from '@/helpers/getPosterUrl'

const props = defineProps<{ item: TMovie }>()

const vLazyload: Directive<HTMLImageElement> = {
  mounted: (el) => el.setAttribute('loading', 'lazy')
}

const posterUrl = getPosterUrl()
const genreLine = ref(getItemGenreLine(props.item.genres))
</script>

<style scoped>
.poster {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
}

.poster-image {
  background-color: #bdbdbd;
}

.info {
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  color: #bdbdbd;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 1.1px;
}

.genre {
  margin-top: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
