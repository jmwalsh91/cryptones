import { Meta } from '@storybook/react'
import { useState, useTransition } from 'react'
import useSWR from 'swr'

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
  const [endpoint, setEndpoint] = useState<string>('api/ohlcv')
  const [isUpdating, startUpdate] = useTransition()
  const { data } = useSWR(endpoint, {
    suspense: true,
  })
  return <TokenCard startUpdate={startUpdate} setEndpoint={setEndpoint} />
}
