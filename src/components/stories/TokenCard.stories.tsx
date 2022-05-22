import { Meta } from '@storybook/react'

import SolanaLogo from '../../public/solana-sol-logo.svg'
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

export const Default = () => <TokenCard />
