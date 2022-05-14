import { Meta, StoryFn } from '@storybook/react'

import MappingsCard from '../surfaces/MappingsCard'

const meta: Meta = {
  title: 'Mappings Card',
  component: MappingsCard,
}

export default meta

export const Default = () => <MappingsCard>Hi </MappingsCard>
