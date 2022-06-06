/* eslint-disable @typescript-eslint/no-unused-vars */
//TODO: ^^ is because of not using ' val'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Slider, Stack, Typography, useTheme } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import * as Tone from 'tone'

import * as base from '../../styles/base'
import * as neu from '../../styles/neu'
//Valid props for SlideSelector
interface BPMSelectorProps {
  size: string
}

function BPMSlider({ size }: BPMSelectorProps) {
  const [val, setVal] = useState<number>(120)
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  const handleChange = (
    event: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => {
    setVal(newValue as number)
    Tone.Transport.bpm.rampTo(newValue as number, 0.5)
  }
  return (
    <Box
      width={300}
      m={2}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack>
        <Typography variant="h5">BPM</Typography>
        <Slider
          color="secondary"
          defaultValue={120}
          aria-label="BPM Select"
          valueLabelDisplay="auto"
          step={2}
          min={40}
          max={240}
          onChange={handleChange}
          css={css`
            height: 10px;
          `}
        />
      </Stack>
    </Box>
  )
}

export default BPMSlider
