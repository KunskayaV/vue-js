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
        <MovieDetailsDuration :year="movieDetails.year" :duration="movieDetails.duration" />
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
import { computed } from 'vue'

// TODO: temp solution for id
const props = defineProps<{ id: number | undefined }>()

const appState = useMoviesStore()
const movieDetails = computed(() => props.id && appState.getMovieDetailsById(props.id))

const posterUrl = getPosterUrl()
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
