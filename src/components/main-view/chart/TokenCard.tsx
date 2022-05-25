/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack } from '@mui/material'
import { useState } from 'react'

import AlgorandLogo from '../../../public/algorand-algo-logo.svg'
import BitcoinLogo from '../../../public/bitcoin-btc-logo.svg'
import EthereumLogo from '../../../public/ethereum-eth-logo.svg'
import PolkadotLogo from '../../../public/polkadot-new-dot-logo.svg'
import SolanaLogo from '../../../public/solana-sol-logo.svg'
import * as neu from '../../../styles/neu'
import TokenSelect from '../../formComponents/TokenSelect'
import TokenLogo from './TokenLogo'

import { tokenObject } from '~/types/interfaces'
const tokenChoices = ['SOL', 'BTC', 'ETH', 'DOT', 'ALGO']

/*TODO: LAZY LOAD, FIGURE OUT TYPES 
const BitcoinLogo: Promise<typeof SVGElement> = lazy(
  (): Promise<{ new (): SVGElement; prototype: SVGElement }> =>
    import('../../../public/bitcoin-btc-logo.svg').then((BitcoinLogo) => {
      return BitcoinLogo
    })
) */
const tokens: Array<tokenObject> = [
  { name: 'SOL', logo: SolanaLogo },
  { name: 'BTC', logo: BitcoinLogo },
  { name: 'ETH', logo: EthereumLogo },
  { name: 'DOT', logo: PolkadotLogo },
  { name: 'ALGO', logo: AlgorandLogo },
]
function TokenCard() {
  const [selectedToken, setSelectedToken] = useState<tokenObject>()

  const handleTokenSelect = (val: string): tokenObject | undefined => {
    const token: tokenObject | undefined = tokens.find(
      (tokens) => tokens.name === val
    )
    setSelectedToken(token)
    if (token) return token
    if (!token) console.error(Error)
  }

  return (
    <Paper
      css={css`
        ${neu.depressed}
      `}
      sx={{
        xs: {
          height: '3rem',
        },
        lg: {
          width: '100%',
          height: '100%',
        },
        justifyContent: 'center',
        px: '1rem',
        py: '.5rem',
      }}
      /* sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        px: '1rem',
        py: '.5rem',
      }} */
    >
      <Stack
        justifyContent="space-around"
        p={7}
        sx={{ flexDirection: { xs: 'row', md: 'column' } }}
      >
        <TokenLogo token={selectedToken} />
        <TokenSelect
          label="token"
          values={tokenChoices}
          helperText="choose token"
          handler={handleTokenSelect}
        />
      </Stack>
    </Paper>
  )
}

export default TokenCard
