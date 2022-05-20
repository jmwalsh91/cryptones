import { Meta } from '@storybook/react'

import ToneCard from '../main-view/tone/ToneCard'

const meta: Meta = {
  title: 'Tone Card',
  component: ToneCard,
}

export default meta

const mockData = {
  data: [1, 6, 5, 43, 23, 212, 65, 54],
}
export const Default = () => <ToneCard data={mockData} />
