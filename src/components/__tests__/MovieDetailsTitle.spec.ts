import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MovieDetailsTitle from '../MovieDetailsTitle.vue'

describe('MovieDetailsTitle', () => {
  const props = {
    title: 'Title',
    rating: 4.2,
    genre: 'Drama'
  }
  it('should match snapshot', () => {
    const wrapper = mount(MovieDetailsTitle, { props })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render correct data', () => {
    const wrapper = mount(MovieDetailsTitle, { props })

    expect(wrapper.find('[date-testid=details-title]').text()).toBe(props.title)
    expect(wrapper.find('[date-testid=details-rating]').text()).toBe(String(props.rating))
    expect(wrapper.find('[date-testid=details-genre]').text()).toBe(props.genre)
  })
})
