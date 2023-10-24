import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ResultsList from '@/components/ResultsList.vue'
import { mockMoviesResponse } from '@/__mocks__/mocks'

describe('ResultsList', () => {
  it('should render with items', () => {
    const wrapper = mount(ResultsList, {
      props: { items: mockMoviesResponse },
      slots: {
        item: '<div>Item</div>'
      }
    })

    expect(wrapper.findAll('li').length).toBe(mockMoviesResponse.length)
    expect(wrapper.text()).not.toContain('NO movies found')
  })

  it('should render empty', () => {
    const wrapper = mount(ResultsList, {
      props: { items: [] },
      slots: {
        item: '<div>Item</div>'
      }
    })

    expect(wrapper.findAll('li').length).toBe(0)
    expect(wrapper.text()).toContain('NO movies found')
  })
})
