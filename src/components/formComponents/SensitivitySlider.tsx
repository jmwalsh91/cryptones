/* eslint-disable @typescript-eslint/no-unused-vars */
//TODO: ^^ is because of not using ' val'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  Box,
  FormLabel,
  Slider,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'
import { Dispatch } from 'react'

import * as base from '../../styles/base'
import * as neu from '../../styles/neu'
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
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  const handleChange = (
    event: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => {
    setVal(newValue as number)
    return handler(newValue as number)
  }
  return (
    <Box
      width={300}
      m={2}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack>
        <FormLabel id="Set Sensitivity">
          <Typography variant="h5">Sensitivity</Typography>
        </FormLabel>
        <Slider
          size={sliderSize}
          color={color}
          defaultValue={1}
          aria-label={sliderSize}
          valueLabelDisplay="auto"
          step={0.1}
          min={0.1}
          max={10}
          onChangeCommitted={handleChange}
          css={css`
            height: 10px;
          `}
        />
      </Stack>
    </Box>
  )
}

export default SensitivitySlider
