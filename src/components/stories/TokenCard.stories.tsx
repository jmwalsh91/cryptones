import { Meta } from '@storybook/react'
import { useState, useTransition } from 'react'

/* import SolanaLogo from '../../public/solana-sol-logo.svg' */
import TokenCard from '../main-view/chart/TokenCard'
const meta: Meta = {
  title: 'Token Card',
  component: TokenCard,
}
/* 
const mockProps = {
  logo: SolanaLogo,
} */

export default meta

export const Default = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [endpoint, setEndpoint] = useState<string>('api/ohlcv')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUpdating, startUpdate] = useTransition()

  return <TokenCard startUpdate={startUpdate} setEndpoint={setEndpoint} />
}
