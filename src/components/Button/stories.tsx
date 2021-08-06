import { Story, Meta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    title: 'Title',
    background: '#e9ad07',
    contentColor: '#fff',
    hasIcon: true,
    iconPosition: 'left'
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />
