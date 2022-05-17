import { Paper, Typography } from '@mui/material'

import { formattedOhlc } from '~/types/interfaces'

//TODO: Axios doesn't have good support for Suspense with data fetching, pivot to SWR.
type Props = {
  ohlcvData?: formattedOhlc | [] | undefined
}

function FullWidthCard({ ohlcvData }: Props) {
  return (
    <Paper sx={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      {ohlcvData ? (
        <Typography variant="h1">hi</Typography>
      ) : (
        <Typography variant="h1">no.</Typography>
      )}
    </Paper>
  )
}

export default FullWidthCard
