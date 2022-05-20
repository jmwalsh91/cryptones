import { Paper } from '@mui/material'
import { Suspense, lazy, useEffect } from 'react'
import useSWR from 'swr'

const ChartComponent = lazy(() => import('./ChartComponent'))
//TODO: Clean up component props, adding SWR may have made them irrelevant.

//TODO: Chart component
function FullWidthCard() {
  const { data } = useSWR('api/ohlcv', {
    suspense: true,
  })

  useEffect(() => {
    console.log(data.formattedOhlc)
  })
  return (
    <Paper sx={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <Suspense fallback="fallback">
        <ChartComponent data={data.formattedOhlc} />
      </Suspense>
    </Paper>
  )
}

export default FullWidthCard
