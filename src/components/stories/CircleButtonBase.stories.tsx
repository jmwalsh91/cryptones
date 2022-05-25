import { Meta } from '@storybook/react'

import CircleButtonBase from '../formComponents/CircleButtonBase'

const meta: Meta = {
  title: 'Circle Button Base',
  component: CircleButtonBase,
}

export default meta

const demoHandler = () => {
  console.log('demo')
}
export const Default = () => (
  <CircleButtonBase handler={demoHandler}> Lorem </CircleButtonBase>
)
