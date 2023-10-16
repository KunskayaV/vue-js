import { getMovies } from '@/api'
import { useMoviesStore } from '@/stores/useMoviesStore'
import type { TMovie, TRequestParams } from '@/types'
import { onMounted, ref, type Ref } from 'vue'

type TUseMoviesResult = {
  isMoviesDataLoaded: Ref<boolean>
  movies: Ref<TMovie[]>
  error: Ref<string | null>
  getMoviesData(): Promise<void>
}

export function useMovies(): TUseMoviesResult {
  const movies = ref<TMovie[]>([])
  const error = ref<string | null>(null)
  const isMoviesDataLoaded = ref(false)

  const state = useMoviesStore()

  async function getMoviesData() {
    const params: TRequestParams = {
      sortBy: state.sortByValue,
      searchBy: state.searchByValue,
      filter: state.searchValue
    }

    try {
      const data = await getMovies(params)
      movies.value = data
    } catch (err) {
      error.value = 'An error occurred while trying to fetch movies'
    }

    isMoviesDataLoaded.value = true
  }

  onMounted(() => {
    getMoviesData()
  })

  return {
    isMoviesDataLoaded,
    movies,
    error,
    getMoviesData
  }
}
