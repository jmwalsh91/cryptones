/** @jsxImportSource @emotion/react */
import { Box, Slider } from '@mui/material'

import { sensitivitySliderValues } from '~/types/interfaces'

//Valid props for SlideSelector
interface sliderProps {
  sliderSize: 'small' | 'medium'
  color: 'primary' | 'secondary'
}

function SensitivitySlider({ sliderSize, color }: sliderProps) {
  return (
    <Box width={300} m={2}>
      <Slider
        size={sliderSize}
        color={color}
        defaultValue={70}
        aria-label={sliderSize}
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0.1}
        max={2}
      />
    </Box>
  )
}

export default SensitivitySlider
