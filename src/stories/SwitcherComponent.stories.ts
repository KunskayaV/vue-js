import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import SwitcherComponent from '@/components/SwitcherComponent.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'SwitcherComponent',
  component: SwitcherComponent,
  tags: ['autodocs']
} satisfies Meta<typeof SwitcherComponent>

export default meta

type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

const items = [
  {
    name: 'searchBy',
    value: 'title',
    label: 'Title'
  },
  {
    name: 'searchBy',
    value: 'genre',
    label: 'Genre'
  }
]

export const Switcher: Story = {
  render: (args) => ({
    components: { SwitcherComponent },
    setup() {
      const value = ref(args.currentValue)

      return { args, value }
    },
    template: '<SwitcherComponent v-bind="args" v-model:currentValue="value" />'
  }),
  args: { items, title: 'Search by', currentValue: items[0].value }
}
