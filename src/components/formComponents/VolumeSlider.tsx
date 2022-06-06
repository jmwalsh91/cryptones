/* eslint-disable @typescript-eslint/no-unused-vars */
//TODO: ^^ is because of not using ' val'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Slider, Stack, Typography, useTheme } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'
import { Dispatch } from 'react'

import * as base from '../../styles/base'
import * as neu from '../../styles/neu'
//Valid props for SlideSelector
interface VolumeSelectorProps {
  handler: Dispatch<React.SetStateAction<number>>
}

function VolumeSlider({ handler }: VolumeSelectorProps) {
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
        <Typography variant="h5">Volume</Typography>
        <Slider
          color="secondary"
          defaultValue={1}
          aria-label="Volume Slider"
          valueLabelDisplay="auto"
          step={0.1}
          min={0.1}
          max={2}
          onChangeCommitted={handleChange}
          css={css`
            background: #2f2c2c;
            height: 10px;
          `}
        />
      </Stack>
    </Box>
  )
}

export default VolumeSlider
