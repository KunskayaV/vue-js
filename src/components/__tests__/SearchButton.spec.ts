import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchButton from '../SearchButton.vue'

describe('SearchButton', () => {
  it('should match snapshot', () => {
    expect(
      mount(SearchButton, { props: { label: 'Search', size: 'small' } }).html()
    ).toMatchSnapshot()
    expect(
      mount(SearchButton, { props: { label: 'Search', size: 'medium' } }).html()
    ).toMatchSnapshot()
    expect(
      mount(SearchButton, { props: { label: 'Search', size: 'large' } }).html()
    ).toMatchSnapshot()
  })

  it('should run click handler', async () => {
    const handler = vi.fn()
    const wrapper = mount(SearchButton, {
      props: { label: 'Search', size: 'small', onClick: handler }
    })

    const button = wrapper.get('button')

    button.trigger('click')

    expect(handler).toBeCalled()
  })
})
