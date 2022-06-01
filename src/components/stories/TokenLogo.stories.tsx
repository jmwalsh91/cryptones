import { Meta } from '@storybook/react'

import SolanaLogo from '../../public/solana-sol-logo.svg'
import TokenLogo from '../main-view/chart/TokenLogo'
const meta: Meta = {
  title: 'Token Logo',
  component: TokenLogo,
}
/* 
const mockProps = {
  logo: SolanaLogo,
} */

export default meta

export const Default = () => <TokenLogo tokenLogo={SolanaLogo} />
