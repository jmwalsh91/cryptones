/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Grid, Paper } from '@mui/material'
import { Suspense, lazy, useState } from 'react'
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
      <Grid container justifyContent={'space-between'}>
        <Grid item md={3} sm={12}>
          <TokenCard setEndpoint={setEndpoint} />
        </Grid>

        <Grid item sm={12} md={8}>
          <ErrorBoundary fallback={<ErrorFallback error={Error} />}>
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
    </Paper>
  )
}

export default FullWidthCard
