import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import Alert from './alerts/components/Alert'

// @deprecated
export default {
  title: 'Demos/Alert',
  component: Alert,
  argTypes: {
    body: {
      control: { type: 'text' }
    }
  }
}

const Template: Story<ComponentProps<typeof Alert>> = args => <Alert {...args} />

export const Default = Template.bind({})

Default.args = {
  body: 'This is an example alert'
}
