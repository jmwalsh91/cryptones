import { Paper } from '@mui/material'
import { Suspense, lazy, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import useSWR from 'swr'

import ErrorFallback from '~/components/err-and-feedback/ErrorFallback'
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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback="fallback">
          <ChartComponent data={data.formattedOhlc} />
        </Suspense>
      </ErrorBoundary>
    </Paper>
  )
}

export default FullWidthCard
