/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack, Typography } from '@mui/material'
import { TransitionStartFunction, useContext, useEffect, useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import * as Tone from 'tone'

import { useToneContext } from '../../../services/ToneContextWrapper'
import * as neu from '../../../styles/neu'
import { audioControls } from '../../../types/interfaces'
import { mockOhlc } from '../../stories/mockOhlc'
import PlaybackControls from './tone-controls/PlaybackControls'
import { differenceArray, mapDataToSequence } from './tone-utils/tone'
import { newSynth, stopPlayback } from './tone-utils/tone'

//TODO: interface for data useable by tone.JS
interface Props {
  startUpdateToneContext: TransitionStartFunction
  isToneContextUpdating: boolean
}

const endpoints = [
  '/api/ohlcv/',
  '/api/ohlcv/BTC/15min',
  '/api/ohlcv/ETH/15min',
  '/api/ohlcv/ALGO/15min',
  '/api/ohlcv/SOL/15min',
]
//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.
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
