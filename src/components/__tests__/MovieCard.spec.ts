import { describe, it, expect, beforeEach, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'
import { mockMovie } from '@/__mocks__'

describe('MovieCard', () => {
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(1)
  })

  it('should match snapshot', () => {
    const wrapper = mount(MovieCard, { props: { item: mockMovie } })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render correct title', () => {
    const wrapper = mount(MovieCard, { props: { item: mockMovie } })

    expect(wrapper.find('[date-testid=title]').text()).toBe(mockMovie.title)
  })

  it('should render correct genre', () => {
    const wrapper = mount(MovieCard, { props: { item: mockMovie } })

    expect(wrapper.find('[date-testid=genre]').text()).toBe(
      mockMovie.genres[0] + ' & ' + mockMovie.genres[1]
    )
  })
})
