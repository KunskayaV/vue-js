import type { Meta, StoryObj } from '@storybook/vue3'

import ResultCount from '@/components/ResultCount.vue'

const meta = {
  title: 'ResultCount',
  component: ResultCount,
  tags: ['autodocs']
} satisfies Meta<typeof ResultCount>

export default meta
type Story = StoryObj<typeof meta>

export const Results: Story = {
  args: {
    count: 7
  }
}
