/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack, Typography } from '@mui/material'
import { TransitionStartFunction } from 'react'
import * as Tone from 'tone'

import { useToneContext } from '../../../services/ToneContextWrapper'
import * as base from '../../../styles/base'
import * as neu from '../../../styles/neu'
import { audioControls } from '../../../types/interfaces'
import PlaybackControls from './tone-controls/PlaybackControls'
import { mapDataToSequence } from './tone-utils/tone'
import { newSynth, stopPlayback } from './tone-utils/tone'

//TODO: interface for data useable by tone.JS
interface Props {
  startUpdateToneContext: TransitionStartFunction
  isToneContextUpdating: boolean
}

//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ToneCard({ startUpdateToneContext, isToneContextUpdating }: Props) {
  const synth: Tone.FMSynth = newSynth()
  const toneContext = useToneContext()
  Tone.Transport.bpm.value = 60

  //TODO: ERROR FEEDBACK
  const playSynth = () => {
    console.log('play synth')
    console.log(Tone.context.state)
    if (toneContext?.notes) {
      mapDataToSequence(synth, toneContext.notes)
      Tone.Transport.start(Tone.now())
    } else console.error('error')
  }
  const controls: audioControls = {
    stopPlayback: stopPlayback,
    startPlayback: playSynth,
  }
  return (
    <Paper
      css={css`
        ${neu.depressed};
        ${base.toneCard};
      `}
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        px: '1rem',
        py: '.5rem',
      }}
    >
      <Stack
        spacing={2}
        alignItems={'center'}
        css={
          isToneContextUpdating
            ? css`
                ${neu.pendingSection}
              `
            : null
        }
      >
        <Typography variant="h5">Output:</Typography>
        <Typography variant="body1">
          {toneContext?.source} {toneContext?.target}
        </Typography>
        <PlaybackControls
          iconSize="large"
          color="secondary"
          controls={controls}
        />
      </Stack>
    </Paper>
  )
}

export default ToneCard
