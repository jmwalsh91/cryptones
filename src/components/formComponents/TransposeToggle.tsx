/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { FormControlLabel, Stack, Typography } from '@mui/material'
import Switch from '@mui/material/Switch'
import { useState } from 'react'

/* type Props = {
  handler?: () => void
} */
/* interface modeIndex {
  index: number
} */
function TransposeToggle() {
  const [prettier, setPrettier] = useState<boolean>(false)
  const [root, setRoot] = useState<number>(0)
  /*   const [mode, setMode] = useState<modeIndex['index']>(0) */

  const handleKeyChange = (str: string) => {
    switch (str) {
      case 'up':
        if (rootArray[root + 1]) setRoot(root + 1)
        else setRoot(0)
        break
      case 'down':
        if (rootArray[root - 1]) setRoot(root - 1)
        else setRoot(rootArray.length - 1)
    }
  }

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
  /* const modeArray = ['major', 'minor', 'egyptian'] */

  return (
    <Stack
      direction="row"
      justifyContent={'center'}
      alignContent={'center'}
      mb={3}
    >
      <FormControlLabel
        control={
          <Switch
            checked={prettier}
            onChange={() => setPrettier(!prettier)}
            inputProps={{ 'aria-label': 'controlled' }}
            css={css`
              transform: rotate(270deg);
            `}
          />
        }
        label="Prettier"
        labelPlacement="top"
      />
      <span
        css={css`
          display: inherit;
          border: 1px solid white;
          align-items: center;
          width: 4.2rem;
        `}
      >
        <ArrowBackIosSharpIcon
          css={css`
            text-align: left;
          `}
          onClick={() => handleKeyChange('down')}
        />
        <Typography
          variant="h5"
          css={css`
            text-align: center;
          `}
        >
          {rootArray[root]}
        </Typography>
        <ArrowForwardIosIcon
          css={css`
            align-self: right;
          `}
          onClick={() => handleKeyChange('up')}
        />
      </span>
    </Stack>
  )
}

export default TransposeToggle
