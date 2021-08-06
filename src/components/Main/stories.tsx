import { Story, Meta } from '@storybook/react'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default title',
    description: 'default description'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Secondary: Story = (args) => <Main {...args} />
Secondary.args = {
  title: 'labasd',
  description: 'xcxccdc'
}
