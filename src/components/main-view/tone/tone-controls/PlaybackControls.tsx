/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Pause, PlayArrow, Stop } from '@mui/icons-material'
import { ButtonGroup, IconButton, Paper } from '@mui/material'

import * as neu from '../../../../styles/neu'

import { audioControls } from '~/types/interfaces'

interface playbackProps {
  color: 'primary' | 'secondary'
  iconSize: 'small' | 'medium' | 'large'
  controls: audioControls
}

function PlaybackControls({ color, iconSize, controls }: playbackProps) {
  return (
    <Paper
      variant="outlined"
      css={css`
        ${neu.depressed}
      `}
    >
      <ButtonGroup>
        {/*         <IconButton aria-label="MusicNote" color={color} size={iconSize}>
          <MusicNote fontSize="large" />
        </IconButton> */}
        <IconButton
          aria-label="PlayArrow"
          color={color}
          size={iconSize}
          onClick={() => controls.startPlayback()}
        >
          <PlayArrow fontSize="large" />
        </IconButton>
        <IconButton aria-label="Pause" color={color} size={iconSize}>
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
