import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import Alerts, { AlertProps } from './alerts'

export default {
  title: 'Demos/Alerts',
  component: Alerts,
}

const Template: Story<ComponentProps<typeof Alerts>> = (args: AlertProps) => <Alerts {...args} />

export const Default = Template.bind({})

Default.args = {
  items: []
}
