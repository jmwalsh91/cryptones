import { Meta } from '@storybook/react'

import PlaybackControls from '../main-view/tone/tone-controls/PlaybackControls'
import { transportControls } from '../main-view/tone/tone-utils/tone'

const meta: Meta = {
  title: 'Playback Controls',
  component: PlaybackControls,
}

export default meta

const controls = transportControls

export const Default = () => (
  <PlaybackControls iconSize="large" color="secondary" controls={controls} />
)
