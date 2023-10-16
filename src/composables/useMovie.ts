import { getMovieById } from '@/api'
import type { TMovie } from '@/types'
import { onMounted, ref, type Ref } from 'vue'

type TUseMovieResult = {
  movieDetails: Ref<TMovie | null>
  error: Ref<string | null>
}

export function useMovie(id: number): TUseMovieResult {
  const movieDetails = ref<TMovie | null>(null)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      const data = await getMovieById(id)
      movieDetails.value = data
    } catch (err) {
      error.value = 'An error occurred while trying to fetch movie'
    }
  })

  return {
    movieDetails,
    error
  }
}
