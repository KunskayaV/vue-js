import type { Meta, StoryObj } from '@storybook/vue3'

import ItemReleaseDate from '@/components/ItemReleaseDate.vue'

const meta = {
  title: 'ItemReleaseDate',
  component: ItemReleaseDate,
  tags: ['autodocs']
} satisfies Meta<typeof ItemReleaseDate>

export default meta
type Story = StoryObj<typeof meta>

export const ReleaseDate: Story = {
  args: {
    date: '2000-12-25'
  }
}
