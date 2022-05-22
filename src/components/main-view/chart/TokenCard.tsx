/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper, Stack } from '@mui/material'

import SolanaLogo from '../../../public/solana-sol-logo.svg'
import * as neu from '../../../styles/neu'
import InputSelect from '../../formComponents/InputSelect'
import TokenLogo from './TokenLogo'
const tokenChoices = ['BTC', 'SOL', 'ETH', 'DOT', 'ALGO']
function TokenCard() {
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
        <TokenLogo logo={SolanaLogo} />
        <InputSelect
          label="token"
          values={tokenChoices}
          helperText="choose token"
        />
      </Stack>
    </Paper>
  )
}

export default TokenCard
