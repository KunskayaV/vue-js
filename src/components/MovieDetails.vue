<template>
  <div>
    <div v-if="!movieDetails" class="loading-container">
      <span>LOADING...</span>
    </div>
    <div v-else class="movie-details">
      <img
        class="poster-image"
        :src="posterUrl"
        :alt="movieDetails.storyline"
        width="300"
        height="400"
      />
      <div class="movie-description">
        <MovieDetailsTitle
          :title="movieDetails.title"
          :rating="movieDetails.averageRating"
          :genre="getItemGenreLine(movieDetails?.genres)"
        />
        <MovieDetailsDuration :date="movieDetails.releaseDate" :duration="movieDetails.duration" />
        <p v-if="!!movieDetails.storyline">{{ movieDetails.storyline }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieDetailsTitle from './MovieDetailsTitle.vue'
import MovieDetailsDuration from './MovieDetailsDuration.vue'
import { useMoviesStore } from '@/stores/useMoviesStore'
import { getPosterUrl } from '@/helpers/getPosterUrl'
import { getItemGenreLine } from '@/helpers/getItemGenreLine'
import { computed, onMounted, ref } from 'vue'
import type { TMovie } from '@/types'
import { getMovieById } from '@/api/getMovieById'

// TODO: temp solution for id
const props = defineProps<{ id: number | undefined }>()
const movieDetails = ref<TMovie | null | undefined>(null)
const genre = computed(() => movieDetails?.value?.genres?.[0])

const appState = useMoviesStore()

onMounted(async () => {
  if (props.id) {
    movieDetails.value = appState.getMovieDetailsById(props.id)

    if (!movieDetails.value) {
      const data = await getMovieById(props.id)
      movieDetails.value = data
    }
  }
})

const posterUrl = getPosterUrl()
defineExpose({ genre })
</script>

<style scoped>
.movie-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 48px;
}

.movie-description {
  margin-left: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-inline: 24px;
  color: #ffffff;
}

.loading-container {
  display: flex;
  justify-content: center;
  padding-top: 5%;
  height: 20%;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 1.5;
  color: white;
}

.poster-image {
  background-color: #bdbdbd;
}
</style>
