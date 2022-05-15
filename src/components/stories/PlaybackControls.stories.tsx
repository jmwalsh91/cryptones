import { Meta } from '@storybook/react'

import PlaybackControls from '../toneControls/PlaybackControls'

const meta: Meta = {
  title: 'Playback Controls',
  component: PlaybackControls,
}

export default meta

export const Default = () => (
  <PlaybackControls iconSize="medium" color="secondary" />
)
