/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import * as Tone from 'tone'
import { useToneContext } from '~/services/ToneContextWrapper'
import { audioControls } from '~/types/interfaces'

import * as neu from '../../../styles/neu'
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

  //TODO: Hook up to slider.
  Tone.Transport.bpm.value = 60
  //TODO: Hook up to MappingsCard's submitted value and accept args. This is to test req to API deployed on azure + tone's behavior in prod

  useEffect(() => {
    const diff = differenceArray(mockOhlc)
    const initTone = async () => {
      await setNotes(diff)
      await new Tone.Sequence((time, note) => {
        console.log('new tone sequence')
        synth.triggerAttackRelease(note, '8n', time)
        console.log(note)
      }, notes).start(0)
    }
    initTone()
  }, [])

  const playSynth = () => {
    console.log('play synth!')
    Tone.Transport.start(now)
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
