<template>
  <div class="details-page-body">
    <header class="details-header">
      <img alt="App logo" class="logo" src="@/assets/logo.png" width="180" height="25" />
      <img alt="Search" class="search" src="@/assets/search.svg" width="30" height="30" />
    </header>
    <main>
      <div class="wrapper">
        <MovieDetails :id="movieId" />
      </div>
      <div class="details-filter-header">
        <p>Films by {{ genre }} genre</p>
      </div>
      <div class="wrapper">
        <ResultsList :items="matchMovies">
          <template v-slot:item="{ item }">
            <MovieCard :item="item" />
          </template>
        </ResultsList>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'

import ResultsList from '@/components/ResultsList.vue'
import MovieCard from '@/components/MovieCard.vue'
import PageFooter from '@/components/PageFooter.vue'
import MovieDetails from '@/components/MovieDetails.vue'
import { useMoviesStore } from '@/stores/useMoviesStore'

const appState = useMoviesStore()

const movieId = computed(() => appState.movies[0]?.id)
const genre = computed(() => appState.movies[0]?.genres?.[0])

const matchMovies = computed(() => appState.getMatchMovies(movieId.value))

onMounted(() => {
  appState.getMoviesData()
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
