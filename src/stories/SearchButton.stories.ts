import type { Meta, StoryObj } from '@storybook/vue3'

import SearchButton from '@/components/SearchButton.vue'

const meta = {
  title: 'SearchButton',
  component: SearchButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof SearchButton>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    label: 'Search',
    size: 'small'
  }
}

export const Medium: Story = {
  args: {
    label: 'Search',
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    label: 'Search',
    size: 'large'
  }
}
