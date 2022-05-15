import { Meta, StoryFn } from '@storybook/react'
import SlideSelector from '../formComponents/SlideSelector'

import MappingsCard from '../surfaces/MappingsCard'

const meta: Meta = {
  title: 'Slide Selector',
  component: SlideSelector,
}

export default meta

export const Default = () => (
  <SlideSelector sliderSize="medium" color="secondary" />
)
