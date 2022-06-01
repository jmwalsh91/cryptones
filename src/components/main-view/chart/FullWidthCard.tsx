/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Grid, Paper } from '@mui/material'
import { Suspense, lazy, useState, useTransition } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import useSWR from 'swr'

import * as neu from '../../../styles/neu'
import ErrorFallback from '../../err-and-feedback/ErrorFallback'
import TokenCard from './TokenCard'

const ChartComponent = lazy(() => import('./ChartComponent'))
//TODO: Clean up component props, adding SWR may have made them irrelevant.

//TODO: Chart component
function FullWidthCard() {
  const [endpoint, setEndpoint] = useState<string>('api/ohlcv')
  const [isUpdating, startUpdate] = useTransition()
  const { data } = useSWR(endpoint, {
    suspense: true,
  })

  return (
    <Paper
      sx={{ width: '100%', p: '1rem' }}
      css={css`
        ${neu.depressed}
      `}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback="fallback2">
          <Grid
            container
            justifyContent={'space-between'}
            css={
              isUpdating
                ? css`
                    ${neu.pendingSection}
                  `
                : null
            }
          >
            <Grid item md={3} sm={12}>
              <ErrorBoundary fallback={<ErrorFallback error={ErrorFallback} />}>
                <TokenCard
                  setEndpoint={setEndpoint}
                  startUpdate={startUpdate}
                />
              </ErrorBoundary>
            </Grid>

            <Grid item sm={12} md={8}>
              <ErrorBoundary fallback={<ErrorFallback error={ErrorFallback} />}>
                <Suspense fallback="fallback">
                  <ChartComponent
                    data={data.formattedOhlc}
                    name={data.tokenName}
                    interval={data.interval}
                  />
                </Suspense>
              </ErrorBoundary>
            </Grid>
          </Grid>
        </Suspense>
      </ErrorBoundary>
    </Paper>
  )
}

export default FullWidthCard
