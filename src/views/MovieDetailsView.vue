<template>
  <div class="details-page-body">
    <header class="details-header">
      <img alt="App logo" class="logo" src="@/assets/logo.png" width="180" height="25" />
      <router-link to="/">
        <img alt="Search" class="search" src="@/assets/search.svg" width="30" height="30" />
      </router-link>
    </header>
    <main>
      <div class="wrapper">
        <MovieDetails ref="detailsInfo" :id="movieId" />
      </div>
      <div v-if="!!detailsInfo?.genre" class="details-filter-header">
        <p>Films by {{ detailsInfo?.genre }} genre</p>
      </div>
      <div class="wrapper">
        <ResultsList :items="matchMovies">
          <template v-slot:item="{ item }">
            <router-link :to="{ name: 'details', params: { id: item.id } }">
              <MovieCard :item="item" />
            </router-link>
          </template>
        </ResultsList>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import ResultsList from '@/components/ResultsList.vue'
import MovieCard from '@/components/MovieCard.vue'
import PageFooter from '@/components/PageFooter.vue'
import MovieDetails from '@/components/MovieDetails.vue'
import { getMovies } from '@/api'
import { ESearchByFilter, ESortByValues, MATCH_MOVIES_LENGTH } from '@/constants'
import type { TMovie } from '@/types'

const props = defineProps<{
  id: number
}>()

const movieId = ref(props.id)
const matchMovies = ref<TMovie[]>([])
const detailsInfo = ref<InstanceType<typeof MovieDetails> | null>(null)

watchEffect(async () => {
  if (detailsInfo.value?.genre) {
    const data = await getMovies({
      sortBy: ESortByValues.Date,
      searchBy: ESearchByFilter.Genre,
      filter: detailsInfo.value.genre
    })
    matchMovies.value = data
      .filter((movie) => movie.id !== movieId.value)
      .slice(0, MATCH_MOVIES_LENGTH)
  }
})
</script>

<style scoped>
.details-page-body {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-width: 960px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #030303;
}

.wrapper {
  padding-inline: 5%;
}

.details-header {
  display: flex;
  justify-content: space-between;
  padding-block: 20px;
  padding-inline: 5%;
}

.page-header {
  margin-block: 24px;
  font-size: 2rem;
  line-height: 1.5;
  letter-spacing: 1.5;
  text-transform: uppercase;
  color: #ffffff;
}

.details-filter-header {
  padding-block: 24px;
  padding-left: 48px;
  color: #ffffff;
  background-color: #555555;
}
</style>
