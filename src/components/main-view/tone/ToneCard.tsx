/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Typography, useTheme } from '@mui/material'
import { TransitionStartFunction } from 'react'
import * as Tone from 'tone'

import BPMSlider from '../../../components/formComponents/BPM'
import TrackIndicator from '../../../components/formComponents/TrackIndicator'
import VolumeSlider from '../../../components/formComponents/VolumeSlider'
import * as base from '../../../styles/base'
import { useMode } from '../../../utils/hooks/useMode'
import PlaybackControls from './tone-controls/PlaybackControls'
import { transportControls } from './tone-utils/tone'

//TODO: interface for data useable by tone.JS
interface Props {
  startUpdateToneContext: TransitionStartFunction
  isToneContextUpdating: boolean
}

//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.
export const signal = new Tone.Signal().toDestination()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ToneCard({ startUpdateToneContext, isToneContextUpdating }: Props) {
  const currentTheme = useTheme()
  const themedNeu = useMode()
  const controls = transportControls

  //TODO: ERROR FEEDBACK

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
      <span>
        <Typography
          variant="h2"
          css={css`
            ${themedNeu.titleGlow}
          `}
          sx={{ textAlign: 'center' }}
        >
          Output
        </Typography>
        <TrackIndicator />
      </span>

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
