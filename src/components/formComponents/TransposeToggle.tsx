/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { FormControlLabel, Stack, Typography } from '@mui/material'
import Switch from '@mui/material/Switch'
import { useState } from 'react'

type Props = {
  keyRef: any
  handler?: () => void
}
enum Mode {
  Major = 'major',
  Minor = 'minor',
}

type rootIndex = number
export const TransposeToggle: ({ keyRef }: Props) => EmotionJSX.Element = ({
  keyRef,
}: Props) => {
  const [prettier, setPrettier] = useState<boolean>(false)
  const [root, setRoot] = useState<rootIndex>(0)
  const [mode, setMode] = useState<Mode>(Mode.Major)

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

  const handleModeChange = (mode: Mode.Major | Mode.Minor): void => {
    mode === Mode.Major ? setMode(Mode.Minor) : setMode(Mode.Major)
  }
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

  return (
    <Stack
      direction="row"
      justifyContent={'center'}
      alignContent={'center'}
      mb={3}
    >
      <input value={[rootArray[root], mode]} type="hidden" ref={keyRef} />

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
