import { Meta } from '@storybook/react'

import SlideSelector from '../formComponents/SlideSelector'

const meta: Meta = {
  title: 'Slide Selector',
  component: SlideSelector,
}

export default meta

export const Default = () => (
  <SlideSelector sliderSize="medium" color="secondary" />
)
