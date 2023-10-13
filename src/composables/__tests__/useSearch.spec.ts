import { describe, it, expect, afterAll, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { useMoviesStore } from '@/stores/useMoviesStore'
import { useSearch } from '@/composables/useSearch'

describe('MovieDetails', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should provide handler to set search value to the store', () => {
    const searchText = 'searchText'

    const state = useMoviesStore()
    vi.spyOn(state, 'setSearchValue')

    const { handleSearch } = useSearch()

    handleSearch(searchText)

    expect(state.setSearchValue).toBeCalledWith(searchText)
  })
})
