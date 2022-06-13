/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Typography, useTheme } from '@mui/material'
import { TransitionStartFunction, useState } from 'react'
import * as Tone from 'tone'
import { Timeline } from 'tone'

import BPMSlider from '~/components/formComponents/BPM'
import TrackIndicator from '~/components/formComponents/TrackIndicator'
import VolumeSlider from '~/components/formComponents/VolumeSlider'
import { useMode } from '~/utils/hooks/useMode'

import { useToneContext } from '../../../services/ToneContextWrapper'
import * as base from '../../../styles/base'
import { audioControls } from '../../../types/interfaces'
import PlaybackControls from './tone-controls/PlaybackControls'
import { stopPlayback, transportControls } from './tone-utils/tone'

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
  const toneContext = useToneContext()
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
            font-weight: 700;
            text-shadow: 10px 1px 12px ${currentTheme.palette.secondary.main},
              5px 8px 12px ${currentTheme.palette.primary.main};
            color: ${currentTheme.palette.background.default};
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
