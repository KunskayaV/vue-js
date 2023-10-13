import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ItemDate from '../ItemDate.vue'

describe('ItemDate', () => {
  it('renders properly', () => {
    const wrapper = mount(ItemDate, { props: { date: '2023-10-11' } })

    expect(wrapper.find('span').text()).toEqual('2023')
  })
})
