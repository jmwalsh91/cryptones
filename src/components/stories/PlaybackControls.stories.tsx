import { Meta } from '@storybook/react'

import PlaybackControls from '../main-view/tone/toneControls/PlaybackControls'

const meta: Meta = {
  title: 'Playback Controls',
  component: PlaybackControls,
}

export default meta

export const Default = () => (
  <PlaybackControls iconSize="medium" color="secondary" />
)
