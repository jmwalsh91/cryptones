/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import * as Tone from 'tone'

import { useToneContext } from '../../../services/ToneContextWrapper'
import * as neu from '../../../styles/neu'
import { audioControls } from '../../../types/interfaces'
import { mockOhlc } from '../../stories/mockOhlc'
import PlaybackControls from './tone-controls/PlaybackControls'
import { differenceArray } from './tone-utils/tone'
import { newSynth, stopPlayback } from './tone-utils/tone'

//TODO: interface for data useable by tone.JS
type Props = { data?: object }

//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.
function ToneCard({ data }: Props) {
  const [notes, setNotes] = useState<any>()
  const synth: Tone.FMSynth = newSynth()
  const toneContext = useToneContext()
  const now = Tone.now()

  Tone.Transport.bpm.value = 60

  const playSynth = () => {
    console.log('play synth!')
    console.log(Tone.context)
    Tone.Transport.start(1)
  }
  const controls: audioControls = {
    stopPlayback: stopPlayback,
    startPlayback: playSynth,
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
        <Typography variant="body1">
          {data ? 'data' : 'Placeholder'} {toneContext?.source}{' '}
          {toneContext?.target}
        </Typography>
        <PlaybackControls
          iconSize="large"
          color="secondary"
          controls={controls}
          now={now}
        />
      </Stack>
    </Paper>
  )
}

export default ToneCard
