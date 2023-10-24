import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchInput from '../SearchInput.vue'

describe('SearchInput', () => {
  const props = {
    modelValue: ''
  }

  beforeEach(() => {
    props.modelValue = ''
  })

  it('should match snapshot without label', () => {
    expect(mount(SearchInput, { props }).html()).toMatchSnapshot()
  })

  it('should match snapshot with label', () => {
    expect(
      mount(SearchInput, { props: { ...props, label: 'Find movie' } }).html()
    ).toMatchSnapshot()
  })

  it.only('should update value on input', async () => {
    const searchText = 'Pulp fiction'
    const propsWithUpdate = {
      ...props,
      'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e })
    }

    const wrapper = mount(SearchInput, { props: propsWithUpdate })

    const input = wrapper.get('input')

    await input.setValue(searchText)

    expect(wrapper.props('modelValue')).toBe(searchText)
  })
})
