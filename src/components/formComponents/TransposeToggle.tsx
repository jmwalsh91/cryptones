/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { Button, FormControlLabel, Stack } from '@mui/material'
import Switch from '@mui/material/Switch'
import { Dispatch, LegacyRef, SetStateAction, useState } from 'react'
import KeySelect from './KeySelect'

/* import * as base from '../../styles/base'
import * as neu from '../../styles/neu' */

type Props = {
  keyModeRef: LegacyRef<HTMLInputElement>
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
  const [root, setRoot] = useState<string>(rootArray[0])
  const [mode, setMode] = useState<Mode>(Mode.Major)
  const handleModeChange = (mode: Mode.Major | Mode.Minor): void => {
    console.log(mode)
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
      alignItems={'stretch'}
      mb={3}
    >
      <input value={[root, mode]} type="hidden" ref={keyModeRef} />

      <FormControlLabel
        sx={{ justifyContent: 'center' }}
        control={
          <Switch
            checked={prettierState}
            size="medium"
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
      <div>
        <KeySelect root={root} setRoot={setRoot} rootArr={rootArray} />
        <Button onClick={() => handleModeChange(mode)}>{mode}</Button>
      </div>
    </Stack>
  )
}
