import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import Alerts, { AlertProps } from './alerts'
import { IAlertMessage } from './alerts/interfaces'
import AlertMessage from './alerts/models/AlertMessage'

export default {
  title: 'Demos/Alerts',
  component: Alerts,
}

const Template: Story<ComponentProps<typeof Alerts>> = (args: AlertProps) => <Alerts {...args} />

export const Default = Template.bind({})

const mockItems: IAlertMessage[] = []

for(let i = 0; i < 5; i++) {
  mockItems.push(new AlertMessage('A test message'))
}

Default.args = {
  items: mockItems
}
