
<template>
  <figure class="poster">
    <img class="poster-image" :src="item.posterUrl" v-lazyload :alt="item.shortDescription" width="300" height="400" />
    <figcaption class="info">
      <div class="info-wrapper">
        <span class="name">{{  item.name }}</span>
        <span class="genre">{{  item.genre }}</span>
      </div>
      <ItemReleaseDateVue :date="item.date" />
    </figcaption>
  </figure>
</template>


<script setup lang="ts">
import type { TMovie } from '@/types';
import ItemReleaseDateVue from './ItemReleaseDate.vue';
import type { Directive } from 'vue';


defineProps<{ item: TMovie; }>();

const vLazyload: Directive<HTMLImageElement> = {
  mounted: (el) => el.setAttribute('loading', "lazy"),
}

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