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

import { useMode } from '~/utils/hooks/useMode'

/* import AlgorandLogo from '../../../public/algorand-algo-logo.svg'
 */
import BitcoinLogo from '../../../public/bitcoin-btc-logo.svg'
import EthereumLogo from '../../../public/eth3.svg'
/* import PolkadotLogo from '../../../public/polkadot-new-dot-logo.svg'
import SolanaLogo from '../../../public/solana-sol-logo.svg' */
import { useChartDataDispatch } from '../../../services/ToneContextWrapper'
import { tokenObject } from '../../../types/interfaces'
import TokenSelect from '../../formComponents/TokenSelect'
import TokenLogo from './TokenLogo'

const tokenChoices = ['BTC', 'ETH']

const tokens: Array<tokenObject> = [
  { name: 'BTC', logo: BitcoinLogo },
  /*   { name: 'SOL', logo: SolanaLogo },
   */ { name: 'ETH', logo: EthereumLogo },
  /*   { name: 'DOT', logo: PolkadotLogo },
  { name: 'ALGO', logo: AlgorandLogo }, */
]
interface Props {
  setEndpoint: Dispatch<SetStateAction<string>>
  startUpdate: TransitionStartFunction
}

function TokenCard({ setEndpoint, startUpdate }: Props) {
  const [selectedToken, setSelectedToken] = useState<tokenObject>(tokens[0])
  const endpointDispatcher = useChartDataDispatch()
  const currentTheme = useTheme()
  const themedNeu = useMode()

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
      sx={{ height: { xs: '10rem', md: '100%' }, mb: { xs: '2rem', md: 0 } }}
    >
      <Stack
        spacing={3}
        sx={{
          flexDirection: { xs: 'row', md: 'column' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: { xs: 'space-between', md: 'space-around' },
          padding: { xs: 2, md: 5 },
          mb: { xs: '2rem', md: '0rem' },
        }}
      >
        <TokenLogo tokenLogo={selectedToken?.logo} />
        <TokenSelect
          selectedToken={selectedToken}
          values={tokenChoices}
          helperText="choose token"
          handleTokenSelect={handleTokenSelect}
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            minHeight: {
              xs: '100%',
              md: '1rem',
            },
            minWidth: {
              xs: '1rem',
              md: '100%',
            },
            maxWidth: {
              xs: '1rem',
              md: '100%',
            },
            marginTop: {
              xs: '0.5rem',
              md: '1rem',
            },
            marginRight: {
              xs: '.25rem',
              md: 0,
            },
          }}
          css={css`
            ${themedNeu.raised}
            color: ${currentTheme.palette.text.primary}
          `}
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
