import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SwitcherComponent from '../SwitcherComponent.vue'
import { searchByFilters } from '@/constants'

describe('SwitcherComponent', () => {
  const props = {
    title: 'Search by',
    items: searchByFilters,
    currentValue: searchByFilters[0].value
  }
  it('should render correctly', () => {
    const wrapper = mount(SwitcherComponent, { props })

    expect(wrapper.text()).toContain('Search by')
    expect(wrapper.text()).toContain(searchByFilters[0].label)
    expect(wrapper.text()).toContain(searchByFilters[1].label)
  })

  it('should update currentValue', async () => {
    const propsWithUpdate = {
      ...props,
      'onUpdate:currentValue': (e: string | number) => wrapper.setProps({ currentValue: e })
    }
    const wrapper = mount(SwitcherComponent, { props: propsWithUpdate, attachTo: document.body })

    const [firstRadio, secondRadio] = wrapper.findAll('[data-testid=switcher]')

    expect(firstRadio.find('input').element.checked).toBe(true)
    expect(secondRadio.find('input').element.checked).toBe(false)
    expect(wrapper.props('currentValue')).toBe(searchByFilters[0].value)

    await secondRadio.trigger('click')

    expect(firstRadio.find('input').element.checked).toBe(false)
    expect(secondRadio.find('input').element.checked).toBe(true)
    expect(wrapper.props('currentValue')).toBe(searchByFilters[1].value)
  })
})
