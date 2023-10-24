import { describe, it, expect, afterAll, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { mount } from '@vue/test-utils'
import MovieDetails from '@/components/MovieDetails.vue'
import { mockMoviesResponse } from '@/__mocks__'
import { useMoviesStore } from '@/stores/useMoviesStore'
import * as api from '@/api'
import * as urlHelpers from '@/helpers/getPosterUrl'

describe('MovieDetails', () => {
  beforeEach(() => {
    vi.spyOn(api, 'getMovies').mockResolvedValue(mockMoviesResponse)
    vi.spyOn(urlHelpers, 'getPosterUrl').mockReturnValue('url')
    setActivePinia(createPinia())
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should match initial empty snapshot', () => {
    const wrapper = mount(MovieDetails, {
      props: { id: mockMoviesResponse[0].id }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toContain('LOADING...')
  })

  it.only('should match snapshot with data', async () => {
    const state = useMoviesStore()
    await state.getMoviesData()

    const wrapper = mount(MovieDetails, { props: { id: mockMoviesResponse[0].id } })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).not.toContain('LOADING...')
  })
})
