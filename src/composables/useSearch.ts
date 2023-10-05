import { useMoviesStore } from '@/stores/useMoviesStore'

type TUseSearchResult = {
  handleSearch(value: string): void
}

export function useSearch(): TUseSearchResult {
  const movieState = useMoviesStore()

  return {
    handleSearch: movieState.setSearchValue
  }
}
