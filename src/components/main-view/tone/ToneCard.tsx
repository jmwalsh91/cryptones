/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Typography, useTheme } from '@mui/material'
import { TransitionStartFunction } from 'react'
import * as Tone from 'tone'

import BPMSlider from '~/components/formComponents/BPM'
import VolumeSlider from '~/components/formComponents/VolumeSlider'

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
  //TODO: select note length
  /*   const [division, setDivision] = useState<string>('16n') */
  const synth: Tone.FMSynth = newSynth()
  const toneContext = useToneContext()
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark

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
