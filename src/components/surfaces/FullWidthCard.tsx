import { Paper, Typography } from '@mui/material'

import { ohlcvData } from '~/types/interfaces'

type Props = {
  ohlcvData: ohlcvData | [] | undefined
}

function FullWidthCard({ ohlcvData }: Props) {
  return (
    <Paper sx={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <Typography variant="h1">hi</Typography>
    </Paper>
  )
}

export default FullWidthCard
