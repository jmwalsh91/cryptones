import { css } from '@emotion/react'
import { Paper } from '@mui/material'

import SolanaLogo from '../../../public/solana-sol-logo.svg'
import * as neu from '../../../styles/neu'
import InputSelect from '../../formComponents/InputSelect'
import TokenLogo from './TokenLogo'
const tokenChoices = ['BTC', 'SOLANA', 'ETHEREUM', 'POLKADOT', 'ALGORAND']
function TokenCard() {
  return (
    <Paper
      css={css`
        ${neu.depressed}
      `}
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        px: '1rem',
        py: '.5rem',
      }}
    >
      <TokenLogo logo={SolanaLogo} />
      <InputSelect
        label="token"
        values={tokenChoices}
        helperText="choose token"
      />
    </Paper>
  )
}

export default TokenCard
