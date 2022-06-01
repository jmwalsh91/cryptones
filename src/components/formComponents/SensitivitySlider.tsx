/* eslint-disable @typescript-eslint/no-unused-vars */
//TODO: ^^ is because of not using ' val'
/** @jsxImportSource @emotion/react */
import { Box, Slider } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'
import { Dispatch } from 'react'

//Valid props for SlideSelector
interface sensitivitySelectorProps {
  sliderSize: 'small' | 'medium'
  color: 'primary' | 'secondary'
  handler: Dispatch<React.SetStateAction<number>>
}

function SensitivitySlider({
  sliderSize,
  color,
  handler,
}: sensitivitySelectorProps) {
  const [val, setVal] = useState<number>(1)

  const handleChange = (
    event: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => {
    setVal(newValue as number)
    return handler(newValue as number)
  }
  return (
    <Box width={300} m={2}>
      <Slider
        size={sliderSize}
        color={color}
        defaultValue={1}
        aria-label={sliderSize}
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0.1}
        max={2}
        onChangeCommitted={handleChange}
      />
    </Box>
  )
}

export default SensitivitySlider
