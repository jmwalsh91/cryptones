/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import useSWR from 'swr'
import * as Tone from 'tone'

import { useToneContext } from '../../../services/ToneContextWrapper'
import * as neu from '../../../styles/neu'
import { audioControls } from '../../../types/interfaces'
import { mockOhlc } from '../../stories/mockOhlc'
import PlaybackControls from './tone-controls/PlaybackControls'
import { differenceArray, mapDataToSequence } from './tone-utils/tone'
import { newSynth, stopPlayback } from './tone-utils/tone'

//TODO: interface for data useable by tone.JS

//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.
function ToneCard() {
  const [notes, setNotes] = useState<any>()
  const synth: Tone.FMSynth = newSynth()
  const toneContext = useToneContext()
  const { data } = useSWR('/api/ohlcv', { suspense: false })
  const now = Tone.now()
  Tone.Transport.bpm.value = 60

  useEffect(() => {
    if (
      data?.formattedOhlc &&
      toneContext?.source &&
      toneContext.source === 'difference'
    ) {
      console.log(data.formattedOhlc)
      setNotes(differenceArray(data.formattedOhlc, toneContext.sensitivity))
      console.log(notes)
      mapDataToSequence(synth, notes)
    }
  }, [
    toneContext?.source,
    toneContext?.sensitivity,
    toneContext?.target,
    data?.formattedOhlc,
  ])

  const playSynth = () => {
    console.log('play synth!')
    console.log(notes)
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
