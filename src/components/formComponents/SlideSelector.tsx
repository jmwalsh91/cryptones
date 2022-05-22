/** @jsxImportSource @emotion/react */
import { Box, Slider } from '@mui/material'

//Valid props for SlideSelector
interface sliderProps {
  sliderSize: 'small' | 'medium'
  color: 'primary' | 'secondary'
}

//TODO: Make 'target' props to determine MODULATION or VOLUME so that this can be reusable, and update story.
//TODO: Modulation, Volume AND 'select range' ?
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
