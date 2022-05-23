/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack, Typography } from '@mui/material'
import * as tone from 'tone'

import * as neu from '../../../styles/neu'
import PlaybackControls from './tone-controls/PlaybackControls'
import { newSynth } from './tone-utils/tone'
//TODO: interface for data useable by tone.JS
type Props = { data?: object }

//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.
function ToneCard({ data }: Props) {
  /* const toneData = data */
  const synth: tone.Synth = newSynth()
  const playSynth = () => {
    synth.triggerAttackRelease(100, '8n')
  }
  return (
    <Paper
      css={css`
        ${neu.depressed}
      `}
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        px: '1rem',
        py: '.5rem',
      }}
    >
      <Stack spacing={2} alignItems={'center'}>
        <Typography variant="h5">Output:</Typography>
        <Typography variant="body1">{data ? 'data' : 'Placeholder'}</Typography>
        <button onClick={() => playSynth()}></button>
        <PlaybackControls iconSize="large" color="secondary" />
      </Stack>
    </Paper>
  )
}

export default ToneCard
