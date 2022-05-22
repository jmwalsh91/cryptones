import { Meta } from '@storybook/react'

import PlaybackControls from '../main-view/tone/tone-controls/PlaybackControls'

const meta: Meta = {
  title: 'Playback Controls',
  component: PlaybackControls,
}

export default meta

export const Default = () => (
  <PlaybackControls iconSize="large" color="secondary" />
)
