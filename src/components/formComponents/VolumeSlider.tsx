/* eslint-disable @typescript-eslint/no-unused-vars */
//TODO: ^^ is because of not using ' val'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Slider, Stack, Typography } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import * as Tone from 'tone'

//Valid props for SlideSelector
/* interface VolumeSelectorProps {
  handler: Dispatch<React.SetStateAction<number>>
} */

function VolumeSlider() {
  const [val, setVal] = useState<number>()
  const handleChange = (
    event: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => {
    setVal(newValue as number)
    Tone.getDestination().volume.rampTo(newValue as number, 0.01)
    console.log(val)
  }
  //TODO: STYLE
  return (
    <Box mb={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
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
            height: 10px;
          `}
        />
      </Stack>
    </Box>
  )
}

export default VolumeSlider
