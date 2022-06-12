/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Typography, useTheme } from '@mui/material'
import { TransitionStartFunction, useState } from 'react'
import * as Tone from 'tone'
import { Timeline } from 'tone'

import BPMSlider from '~/components/formComponents/BPM'
import VolumeSlider from '~/components/formComponents/VolumeSlider'
import { useMode } from '~/utils/hooks/useMode'

import { useToneContext } from '../../../services/ToneContextWrapper'
import * as base from '../../../styles/base'
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
export const signal = new Tone.Signal().toDestination()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ToneCard({ startUpdateToneContext, isToneContextUpdating }: Props) {
  const [trigger, setTrigger] = useState<number>(0)
  const [sequence1, setSequence1] = useState<Tone.Sequence | null>()
  const [sequence2, setSequence2] = useState<any>([])

  //TODO: select note length
  /*   const [division, setDivision] = useState<string>('16n') */
  const synth: Tone.FMSynth = newSynth()
  const toneContext = useToneContext()
  const currentTheme = useTheme()
  const themedNeu = useMode()

  const disposeSequences = () => {
    sequence1?.dispose()
    sequence2?.dispose()
    setSequence1(null)
    setSequence2(null)
    console.log(Tone.getTransport())
    console.log(sequence1, sequence2)
  }

  //TODO: ERROR FEEDBACK
  const playSynth = () => {
    console.log('play synth')
    console.log(Tone.context.state)
    if (toneContext?.notes && !sequence1) {
      setSequence1(mapDataToSequence(synth, toneContext.notes))
      console.log(sequence1)
      Tone.Transport.start(Tone.now())
    }
    if (sequence1) {
      if (sequence2.length > 2 || toneContext?.notes == sequence2) {
        Tone.Transport.start(Tone.now())
        //TODO: ALERT
        console.error('there is already something there')
        console.log(Tone.getContext())
      } else if (toneContext?.notes && sequence2.length === 0) {
        setSequence2(mapDataToSequence(synth, toneContext.notes))
        console.log(sequence2)
        Tone.Transport.start(Tone.now())
      }
    }
  }

  const controls: audioControls = {
    stopPlayback: stopPlayback,
    startPlayback: playSynth,
    disposeSequences: disposeSequences,
    trigger: trigger,
  }
  return (
    <Paper
      css={css`
        ${themedNeu.depressed};
        ${base.toneCard};
      `}
      sx={{
        width: '100%',
        height: '100%',
        px: '1rem',
        py: '.5rem',
      }}
    >
      <Typography
        variant="h2"
        css={css`
          font-weight: 700;
          text-shadow: 10px 1px 12px ${currentTheme.palette.secondary.main},
            5px 8px 12px ${currentTheme.palette.primary.main};
          color: ${currentTheme.palette.background.default};
        `}
        sx={{ textAlign: 'center' }}
      >
        Output
      </Typography>
      <div
        css={css`
          ${base.playBackControls}
          display: flex;
          flex-direction: column;
          justify-items: flex-end;
        `}
      >
        {' '}
        <BPMSlider size="desktop" />
        <VolumeSlider />
        <PlaybackControls
          iconSize="large"
          color="secondary"
          controls={controls}
        />
      </div>
    </Paper>
  )
}

export default ToneCard
