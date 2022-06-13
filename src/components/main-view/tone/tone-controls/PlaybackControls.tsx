/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Pause, PlayArrow, Stop } from '@mui/icons-material'
import { ButtonGroup, IconButton, Paper, useTheme } from '@mui/material'

import {
  useDispatch,
  useToneContext,
} from '../../../../services/ToneContextWrapper'
import * as base from '../../../../styles/base'
import * as neu from '../../../../styles/neu'
import { audioControls } from '../../../../types/interfaces'
import { dispose } from '../tone-utils/tone'

interface playbackProps {
  color: 'primary' | 'secondary'
  iconSize: 'small' | 'medium' | 'large'
  controls: audioControls
}

function PlaybackControls({ color, iconSize, controls }: playbackProps) {
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  const toneContext = useToneContext()
  const dispatch = useDispatch()

  function handleDispose() {
    //TODO: start transition and then user feedback, validate no events are scheduled before setting states to null
    dispose(toneContext.dub, toneContext.overdub)
    dispatch.setDub(null)
    dispatch.setOverdub(null)
  }
  return (
    <Paper
      variant="outlined"
      css={css`
        ${themedNeu.raised}
        ${base.centerChildren}
        ${base.playBackControls}
      `}
    >
      <ButtonGroup>
        <IconButton
          aria-label="PlayArrow"
          color={color}
          size={iconSize}
          onClick={() => controls.startTransport()}
        >
          <PlayArrow fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Pause"
          color={color}
          size={iconSize}
          onClick={() => handleDispose()}
        >
          <Pause fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Stop"
          color={color}
          size={iconSize}
          onClick={() => controls.stopPlayback()}
        >
          <Stop fontSize="large" />
        </IconButton>
      </ButtonGroup>
    </Paper>
  )
}

export default PlaybackControls
