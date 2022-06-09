/* eslint-disable @typescript-eslint/no-unused-vars */
//TODO: ^^ is because of not using ' val'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Slider, Stack, Typography } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import * as Tone from 'tone'

import { useMode } from '~/utils/hooks/useMode'

//Valid props for SlideSelector
interface BPMSelectorProps {
  size: string
}

function BPMSlider({ size }: BPMSelectorProps) {
  const [val, setVal] = useState<number>(120)
  const themedNeu = useMode()
  const handleChange = (
    event: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => {
    setVal(newValue as number)
    Tone.Transport.bpm.rampTo(newValue as number, 0.5)
  }
  return (
    <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>
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
