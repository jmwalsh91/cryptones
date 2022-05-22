import { Meta } from '@storybook/react'

import ChartComponent from '../main-view/chart/ChartComponent'
import { mockOhlc } from './mockOhlc'
const meta: Meta = {
  title: 'Chart Component',
  component: ChartComponent,
}

export default meta

export const Default = () => <ChartComponent data={mockOhlc} />
