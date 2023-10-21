import { ESearchByFilter, ESortByValues } from '@/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMovies } from '@/api'
import type { TMovie, TRequestParams } from '@/types'

export const useMoviesStore = defineStore('moviesStore', () => {
  const searchValue = ref<string>('')
  const searchByValue = ref<ESearchByFilter>(ESearchByFilter.Title)
  const sortByValue = ref<ESortByValues>(ESortByValues.Date)
  const movies = ref<TMovie[]>([])
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
    const params: TRequestParams = {
      sortBy: sortByValue.value,
      searchBy: searchByValue.value,
      filter: searchValue.value
    }

    const data = await getMovies(params)

    movies.value = data
    isMoviesDataLoaded.value = true
  }

  function getMovieDetailsById(id: number): TMovie | undefined {
    return movies.value.find((movie) => movie.id === id)
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
    isMoviesDataLoaded
  }
})
