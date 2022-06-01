import { Meta } from '@storybook/react'
import { useTransition } from 'react'

import ToneCard from '../main-view/tone/ToneCard'

const meta: Meta = {
  title: 'Tone Card',
  component: ToneCard,
}

export default meta

/* tslint:disable-next-line */
export const Default = () => {
  const [isToneContextUpdating, startUpdateToneContext] = useTransition()
  return (
    <ToneCard
      startUpdateToneContext={startUpdateToneContext}
      isToneContextUpdating={isToneContextUpdating}
    />
  )
}
