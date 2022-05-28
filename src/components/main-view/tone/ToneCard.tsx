/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack, Typography } from '@mui/material'
import { useState, useContext } from 'react'
import * as Tone from 'tone'
import { ToneData } from '~/services/ToneContextWrapper'

import * as neu from '../../../styles/neu'
import { mockOhlc } from '../../stories/mockOhlc'
import PlaybackControls from './tone-controls/PlaybackControls'
import { differenceArray } from './tone-utils/tone'
import { newSynth } from './tone-utils/tone'
//TODO: interface for data useable by tone.JS
type Props = { data?: object }

//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.
function ToneCard({ data }: Props) {
  const [notes, setNotes] = useState<any>()
  const now = Tone.now()
  const synth: Tone.PluckSynth = newSynth()
  const { source, target, sensitivity } = useContext(ToneData)

  //TODO: Hook up to MappingsCard's submitted value and accept args. This is to test req to API deployed on azure + tone's behavior in prod
  const playSynth = async () => {
    await Tone.start()
    const diff = differenceArray(mockOhlc)
    await setNotes(diff)
    await new Tone.Sequence((time, note) => {
      synth.triggerAttackRelease(note, '8n', time)
      console.log(note)
    }, notes).start(0)
    Tone.Transport.start(now)
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
          {data ? 'data' : 'Placeholder'} {source} {target}
        </Typography>
        <button onClick={() => playSynth()}></button>
        <PlaybackControls iconSize="large" color="secondary" />
      </Stack>
    </Paper>
  )
}

export default ToneCard
