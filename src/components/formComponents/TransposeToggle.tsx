/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button, FormControlLabel, Stack, Typography } from '@mui/material'
import Switch from '@mui/material/Switch'
import {
  Dispatch,
  HTMLInputTypeAttribute,
  LegacyRef,
  MutableRefObject,
  SetStateAction,
  useState,
} from 'react'

type Props = {
  keyModeRef: LegacyRef<HTMLInputElement> /* | MutableRefObject<string[]> */
  dispatchPrettier: Dispatch<SetStateAction<boolean>>
  prettierState: any
}
export enum Mode {
  Major = 'major',
  Minor = 'minor',
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

type rootIndex = number
export const TransposeToggle: ({ keyModeRef }: Props) => EmotionJSX.Element = ({
  keyModeRef,
  dispatchPrettier,
  prettierState,
}: Props) => {
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

  const handlePrettierToggle = () => {
    console.log('clicky')
    dispatchPrettier(!prettierState)
  }
  return (
    <Stack
      direction="row"
      justifyContent={'center'}
      alignContent={'center'}
      mb={3}
    >
      <input value={[rootArray[root], mode]} type="hidden" ref={keyModeRef} />

      <FormControlLabel
        control={
          <Switch
            checked={prettierState}
            onChange={() => handlePrettierToggle()}
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
      <Button onClick={() => handleModeChange}>Current Mode: {mode} </Button>
    </Stack>
  )
}
