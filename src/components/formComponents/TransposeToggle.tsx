/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { Button, FormControlLabel, Stack } from '@mui/material'
import Switch from '@mui/material/Switch'
import { Dispatch, LegacyRef, SetStateAction, useState } from 'react'

import * as neu from '../../styles/neu'
import KeySelect from './KeySelect'

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

export const TransposeToggle: ({ keyModeRef }: Props) => EmotionJSX.Element = ({
  keyModeRef,
  dispatchPrettier,
  prettierState,
}: Props) => {
  const [root, setRoot] = useState<string>(rootArray[0])
  const [mode, setMode] = useState<Mode>(Mode.Major)
  const [disabled, setDisabled] = useState(true)
  const handleModeChange = (mode: Mode.Major | Mode.Minor): void => {
    console.log(mode)
    mode === Mode.Major ? setMode(Mode.Minor) : setMode(Mode.Major)
  }
  const disabledRootMode = prettierState ? null : neu.disabled
  const handlePrettierToggle = () => {
    console.log('clicky')
    setDisabled(!disabled)
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
      <div
        role="contentinfo"
        id="select key and mode section"
        aria-description="A dropdown to select a key and a button that toggles the mode from major to minor. These are disabled when the toggle labeled 'prettier' is off"
        aria-disabled={disabled}
        aria-live="assertive"
        css={css`
          ${disabledRootMode}
        `}
      >
        <KeySelect
          aria-describedby="select key and mode section"
          root={root}
          setRoot={setRoot}
          rootArr={rootArray}
        />
        <Button
          aria-describedby="select key and mode section"
          onClick={() => handleModeChange(mode)}
        >
          {mode}
        </Button>
      </div>
    </Stack>
  )
}
