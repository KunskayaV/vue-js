import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MovieDetailsDuration from '../MovieDetailsDuration.vue'
import { mockMovie } from '@/__mocks__'

describe('MovieDetailsDuration', () => {
  it('should match snapshot', () => {
    const wrapper = mount(MovieDetailsDuration, {
      props: { date: mockMovie.releaseDate, duration: mockMovie.duration }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render correct data', () => {
    const wrapper = mount(MovieDetailsDuration, {
      props: { date: '2023-10-12', duration: 'PT90M' }
    })

    expect(wrapper.find('[date-testid=details-year]').text()).toBe('2023')
    expect(wrapper.find('[date-testid=details-duration]').text()).toBe('90 min')
  })
})
