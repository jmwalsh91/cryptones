/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Paper, Stack, useTheme } from '@mui/material'
import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  TransitionStartFunction,
  useState,
} from 'react'

import AlgorandLogo from '../../../public/algorand-algo-logo.svg'
import BitcoinLogo from '../../../public/bitcoin-btc-logo.svg'
import EthereumLogo from '../../../public/ethereum-eth-logo.svg'
import PolkadotLogo from '../../../public/polkadot-new-dot-logo.svg'
import SolanaLogo from '../../../public/solana-sol-logo.svg'
import { useChartDataDispatch } from '../../../services/ToneContextWrapper'
import * as neu from '../../../styles/neu'
import { tokenObject } from '../../../types/interfaces'
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
const tokens: Array<tokenObject> = [
  { name: 'SOL', logo: SolanaLogo },
  { name: 'BTC', logo: BitcoinLogo },
  { name: 'ETH', logo: EthereumLogo },
  { name: 'DOT', logo: PolkadotLogo },
  { name: 'ALGO', logo: AlgorandLogo },
]

interface Props {
  setEndpoint: Dispatch<SetStateAction<string>>
  startUpdate: TransitionStartFunction
}
function TokenCard({ setEndpoint, startUpdate }: Props) {
  const [selectedToken, setSelectedToken] = useState<tokenObject>(tokens[0])
  const endpointDispatcher = useChartDataDispatch()
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark

  const handleTokenSelect = (val: string): tokenObject | undefined => {
    const tokenItem: tokenObject | undefined = tokens.find(
      (tokens) => tokens.name === val
    )
    if (tokenItem) {
      const token: tokenObject = tokenItem
      setSelectedToken(token)
      return token
    }
    if (!tokenItem) {
      return undefined
    }
  }
  //TODO: Interval button
  const updateData = (e: SyntheticEvent) => {
    e.preventDefault()
    if (selectedToken.name) {
      const params = `/api/ohlcv/${selectedToken.name}/15min`
      setEndpoint(params)
      endpointDispatcher?.setDispatchedEndpoint(params)
      return console.log(params)
    }
    if (!selectedToken.name) {
      return Error
    }
  }
  return (
    <Paper
      css={css`
        ${themedNeu.depressed}
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
        <TokenLogo tokenLogo={selectedToken?.logo} />
        <TokenSelect
          label="token"
          values={tokenChoices}
          helperText="choose token"
          handler={handleTokenSelect}
        />
        <Button
          onClick={(e: SyntheticEvent) =>
            startUpdate(() => {
              updateData(e)
            })
          }
        >
          Submit
        </Button>
      </Stack>
    </Paper>
  )
}

export default TokenCard
