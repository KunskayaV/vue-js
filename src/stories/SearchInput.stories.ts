import type { Meta, StoryObj } from '@storybook/vue3'

import SearchInput from '@/components/SearchInput.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'SearchInput',
  component: SearchInput,
  decorators: [() => ({ template: '<div style="width: 400px;"><story/></div>' })],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Input: Story = {}

export const InputWithLabel: Story = {
  args: {
    label: 'Search movies'
  }
}
