import { describe, it, expect, afterAll, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { mount } from '@vue/test-utils'
import MovieDetails from '@/components/MovieDetails.vue'
import { mockMovie } from '@/__mocks__'
import { useMoviesStore } from '@/stores/useMoviesStore'
import * as api from '@/api'
import * as urlHelpers from '@/helpers/getPosterUrl'
import { nextTick } from 'vue'

describe('MovieDetails', () => {
  beforeEach(() => {
    vi.spyOn(api, 'getMovieById').mockResolvedValue(mockMovie)
    vi.spyOn(urlHelpers, 'getPosterUrl').mockReturnValue('url')
    setActivePinia(createPinia())
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should match initial empty snapshot', () => {
    const wrapper = mount(MovieDetails, {
      props: { id: mockMovie.id }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toContain('LOADING...')
  })

  it.only('should match snapshot with data', async () => {
    const state = useMoviesStore()
    await state.getMoviesData()

    const wrapper = mount(MovieDetails, { props: { id: mockMovie.id } })

    await nextTick()

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).not.toContain('LOADING...')
  })
})
