import { Meta } from '@storybook/react'

import SensitivitySlider from '../formComponents/SensitivitySlider'

const meta: Meta = {
  title: 'Sensitivity Slider',
  component: SensitivitySlider,
}
const handleClick = () => {
  console.log('click')
}
export default meta

export const Default = () => (
  <SensitivitySlider
    sliderSize="medium"
    color="secondary"
    handler={() => handleClick()}
  />
)
