import { Paper, Typography } from '@mui/material'
import { Suspense } from 'react'
import useSWR from 'swr'

//TODO: Clean up component props, adding SWR may have made them irrelevant.

//TODO: Chart component
function FullWidthCard() {
  const { data } = useSWR('/api/ohlcv')

  return (
    <Paper sx={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <Suspense fallback="fallback">
        {data ? (
          <Typography variant="h1">hi</Typography>
        ) : (
          <Typography variant="h1">no.</Typography>
        )}
      </Suspense>
    </Paper>
  )
}

export default FullWidthCard
