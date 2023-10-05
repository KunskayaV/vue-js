import {
  DATE_PROPERTY,
  ESearchByFilter,
  ESortByValues,
  GENRE_PROPERTY,
  TITLE_PROPERTY,
  RATING_PROPERTY,
  MATCH_MOVIES_LENGTH
} from '@/constants'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getMovies } from '@/api'
import type { TMovie } from '@/types'

export const useMoviesStore = defineStore('moviesStore', () => {
  const searchValue = ref('')
  const searchByValue = ref(ESearchByFilter.Title)
  const sortByValue = ref(ESortByValues.Date)
  const moviesData = ref<TMovie[]>([])
  const isMoviesDataLoaded = ref(false)

  function setSearchValue(value: string) {
    searchValue.value = value
  }
  function setSearchByValue(value: ESearchByFilter) {
    searchByValue.value = value
  }
  function setSortByValue(value: ESortByValues) {
    sortByValue.value = value
  }

  async function getMoviesData() {
    const data = await getMovies()

    moviesData.value = data
    isMoviesDataLoaded.value = true
  }

  function getMovieDetailsById(id: number): TMovie | undefined {
    return moviesData.value.find((movie) => movie.id === id)
  }

  const filteredMovies = computed(() => {
    return moviesData.value.filter((movie) => {
      if (searchByValue.value == ESearchByFilter.Title) {
        return movie[TITLE_PROPERTY].toLowerCase().includes(searchValue.value.toLowerCase())
      } else {
        return movie[GENRE_PROPERTY].some((genre) =>
          genre.toLowerCase().includes(searchValue.value.toLowerCase())
        )
      }
    })
  })

  const movies = computed(() => {
    return [...filteredMovies.value].sort((a, b) => {
      const property = sortByValue.value == ESortByValues.Rating ? RATING_PROPERTY : DATE_PROPERTY

      if (a[property] < b[property]) {
        return 1
      } else {
        return -1
      }
    })
  })

  function getMatchMovies(id: number): TMovie[] {
    let index = -1
    const matchMovies = []
    const baseMovie = movies.value.find((movie) => movie.id === id)

    while (matchMovies.length < MATCH_MOVIES_LENGTH && ++index < movies.value.length) {
      const movieToCheck = movies.value[index]

      if (baseMovie && movieToCheck.genres.includes(baseMovie?.genres[0])) {
        matchMovies.push(movieToCheck)
      }
    }

    return matchMovies
  }

  return {
    searchValue,
    searchByValue,
    sortByValue,
    movies,
    setSearchValue,
    setSearchByValue,
    setSortByValue,
    getMoviesData,
    getMovieDetailsById,
    isMoviesDataLoaded,
    getMatchMovies
  }
})
