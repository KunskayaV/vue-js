import type { Meta, StoryObj } from '@storybook/vue3'

import ItemDate from '@/components/ItemDate.vue'

const meta = {
  title: 'ItemDate',
  component: ItemDate,
  tags: ['autodocs']
} satisfies Meta<typeof ItemDate>

export default meta
type Story = StoryObj<typeof meta>

export const Date: Story = {
  args: {
    date: '2000'
  }
}
