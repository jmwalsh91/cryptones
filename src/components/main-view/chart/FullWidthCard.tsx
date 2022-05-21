import { Paper } from '@mui/material'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import useSWR from 'swr'

import ErrorFallback from '../../err-and-feedback/ErrorFallback'

const ChartComponent = lazy(() => import('./ChartComponent'))
//TODO: Clean up component props, adding SWR may have made them irrelevant.

//TODO: Chart component
function FullWidthCard() {
  const { data } = useSWR('api/ohlcv', {
    suspense: true,
  })

  return (
    <Paper sx={{ width: '100%' }}>
      <ErrorBoundary fallback={<ErrorFallback error={Error} />}>
        <Suspense fallback="fallback">
          <ChartComponent data={data.formattedOhlc} />
        </Suspense>
      </ErrorBoundary>
      <span>hello</span>
    </Paper>
  )
}

export default FullWidthCard
