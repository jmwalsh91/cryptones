import { Box, Color, Slider } from '@mui/material'
import React from 'react'

interface sliderProps {
  sliderSize: 'small' | 'medium'
  color: 'primary' | 'secondary'
}
function SlideSelector({ sliderSize, color }: sliderProps) {
  return (
    <Box width={300} m={2}>
      <Slider
        size={sliderSize}
        color={color}
        defaultValue={70}
        aria-label={sliderSize}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}

export default SlideSelector
