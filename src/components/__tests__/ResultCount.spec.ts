import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ResultCount from '../ResultCount.vue'

describe('ResultCount', () => {
  it('should render correct count', () => {
    const wrapper = mount(ResultCount, { props: { count: 2 } })

    expect(wrapper.find('span').text()).toBe('2 movie found')
  })
})
