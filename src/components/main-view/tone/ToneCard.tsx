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
  const [notes, setNotes] = useState<any>()
  const synth: Tone.FMSynth = newSynth()
  const toneContext = useToneContext()
  const { cache, mutate } = useSWRConfig()
  const { data } = useSWR(endpoints, { suspense: false })
  const now = Tone.now()
  Tone.Transport.bpm.value = 60
  let sequence

  //TODO: This is messy,
  useEffect(() => {
    console.log('use effect')
    console.log(data)
    if (
      data?.formattedOhlc &&
      toneContext?.source &&
      toneContext.source === 'difference'
    ) {
      startUpdateToneContext(() => {
        console.log(data.formattedOhlc)
        setNotes(differenceArray(data.formattedOhlc, toneContext.sensitivity))
        Tone.Transport.start(1)
      })
    }
    sequence = mapDataToSequence(synth, notes)
  }, [toneContext, data])

  const playSynth = () => {
    console.log('play synth')
    Tone.Transport.start(0)
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
          {data ? 'data' : 'Placeholder'} {toneContext?.source}{' '}
          {toneContext?.target}
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
