/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Grid, Paper } from '@mui/material'
import { Suspense, lazy, useState, useTransition } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import useSWR from 'swr'

import { useMode } from '~/utils/hooks/useMode'

import * as neu from '../../../styles/neu'
import ErrorFallback from '../../err-and-feedback/ErrorFallback'
import TokenCard from './TokenCard'

const ChartComponent = lazy(() => import('./ChartComponent'))

function FullWidthCard() {
  const [endpoint, setEndpoint] = useState<string>('api/ohlcv')
  const [isUpdating, startUpdate] = useTransition()
  const themedNeu = useMode()
  const { data } = useSWR(endpoint, {
    suspense: true,
  })

  return (
    <Paper
      sx={{ width: '100%', p: '1rem' }}
      css={css`
        ${themedNeu.depressed}
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
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <ErrorBoundary fallback={<ErrorFallback error={ErrorFallback} />}>
                <TokenCard
                  setEndpoint={setEndpoint}
                  startUpdate={startUpdate}
                />
              </ErrorBoundary>
            </Grid>

            <Grid
              item
              container
              sm={12}
              md={9}
              lg={9}
              justifyContent={'center'}
            >
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
