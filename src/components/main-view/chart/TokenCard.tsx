/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack } from '@mui/material'
import {
  createRef,
  ExoticComponent,
  lazy,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react'

import AlgorandLogo from '../../../public/algorand-algo-logo.svg'
import BitcoinLogo from '../../../public/bitcoin-btc-logo.svg'
import EthereumLogo from '../../../public/ethereum-eth-logo.svg'
import PolkadotLogo from '../../../public/polkadot-new-dot-logo.svg'
import SolanaLogo from '../../../public/solana-sol-logo.svg'
import * as neu from '../../../styles/neu'
import TokenSelect from '../../formComponents/TokenSelect'
import TokenLogo from './TokenLogo'
const tokenChoices = ['SOL', 'BTC', 'ETH', 'DOT', 'ALGO']

/*TODO: LAZY LOAD, FIGURE OUT TYPES 
const BitcoinLogo: Promise<typeof SVGElement> = lazy(
  (): Promise<{ new (): SVGElement; prototype: SVGElement }> =>
    import('../../../public/bitcoin-btc-logo.svg').then((BitcoinLogo) => {
      return BitcoinLogo
    })
) */
const logos = [
  { name: 'SOL', component: SolanaLogo },
  { name: 'BTC', component: BitcoinLogo },
  { name: 'ETH', component: EthereumLogo },
  { name: 'DOT', component: PolkadotLogo },
  { name: 'ALGO', component: AlgorandLogo },
]
function TokenCard() {
  const logoRef: RefObject<unknown> = useRef()
  const [selectedToken, setSelectedToken] = useState()

  const handleTokenSelect = (val): SetStateAction<undefined> => {
    const { name, component } = logos.find((logos) => logos.name === val)
    console.log(name)
    console.log(component)
    setSelectedToken(component)
    return val
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
        <TokenLogo logo={selectedToken} />
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
