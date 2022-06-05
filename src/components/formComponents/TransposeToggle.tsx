/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Stack, Typography } from '@mui/material'
import Switch from '@mui/material/Switch'
import Tooltip from '@mui/material/Tooltip'
import React, { useState } from 'react'

type Props = {
  handler?: () => void
}
interface modeIndex {
  index: number
}
function TransposeToggle({ handler }: Props) {
  const [root, setRoot] = useState<number>(0)
  const [mode, setMode] = useState<modeIndex['index']>(0)
  //TODO: set dispatch for context, need Tonal JS
  //TODO: Figure out UI for this component
  /*   const handleChange = () => {

    handler()
  } */
  const rootArray = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
  ]
  const modeArray = ['major', 'minor', 'egyptian']
  return (
    <Stack direction="row" justifyContent={'center'}>
      <Tooltip title="Map to scale">
        <Switch
          css={css`
            transform: rotate(270deg);
          `}
        />
      </Tooltip>
      <ArrowBackIosSharpIcon onClick={() => setRoot(root - 1)} />
      <Typography variant="h5">{rootArray[root]}</Typography>
      <ArrowForwardIosIcon onClick={() => setRoot(root + 1)} />
    </Stack>
  )
}

export default TransposeToggle
