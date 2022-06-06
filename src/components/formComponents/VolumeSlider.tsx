/* eslint-disable @typescript-eslint/no-unused-vars */
//TODO: ^^ is because of not using ' val'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Slider, Stack, Typography, useTheme } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'
import { Dispatch } from 'react'
import * as Tone from 'tone'

import * as base from '../../styles/base'
import * as neu from '../../styles/neu'
//Valid props for SlideSelector
/* interface VolumeSelectorProps {
  handler: Dispatch<React.SetStateAction<number>>
} */

function VolumeSlider() {
  const [val, setVal] = useState<number>()
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  const handleChange = (
    event: Event | SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setVal(newValue as number)
    Tone.getDestination().volume.rampTo(newValue as number, 0.01)
    console.log(val)
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
          defaultValue={-12}
          aria-label="Volume Slider"
          valueLabelDisplay="auto"
          step={1}
          min={-60}
          max={1}
          onChange={handleChange}
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
