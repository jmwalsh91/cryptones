import { Pause, Stop, PlayArrow, MusicNote } from '@mui/icons-material'
import { IconButton, Paper, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

interface playbackProps {
  color: 'primary' | 'secondary'
  iconSize: 'small' | 'medium' | 'large'
}

function PlaybackControls({ color, iconSize }: playbackProps) {
  return (
    <Paper variant="outlined">
      <ButtonGroup>
        <IconButton aria-label="MusicNote" color={color} size={iconSize}>
          <MusicNote />
        </IconButton>
        <IconButton aria-label="PlayArrow" color={color} size={iconSize}>
          <PlayArrow />
        </IconButton>
        <IconButton aria-label="Pause" color={color} size={iconSize}>
          <Pause />
        </IconButton>
        <IconButton aria-label="Stop" color={color} size={iconSize}>
          <Stop />
        </IconButton>
      </ButtonGroup>
    </Paper>
  )
}

export default PlaybackControls
