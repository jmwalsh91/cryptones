import { Meta } from '@storybook/react'
import * as Tone from 'tone'

import PlaybackControls from '../main-view/tone/tone-controls/PlaybackControls'
import { stopPlayback } from '../main-view/tone/tone-utils/tone'

import type * as interfaces from '../../types/interfaces'

const meta: Meta = {
  title: 'Playback Controls',
  component: PlaybackControls,
}

export default meta

const playSynth = () => {
  console.log('play synth')
  if (Tone.context.state) {
    return null
  } else console.error('error')
}
const controls: interfaces.audioControls = {
  startPlayback: playSynth,
  stopPlayback: stopPlayback,
}
export const Default = () => (
  <PlaybackControls iconSize="large" color="secondary" controls={controls} />
)
