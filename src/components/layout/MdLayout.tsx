import { Container, Grid } from '@mui/material'
import { Suspense, useState, useTransition } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ToneContextWrapper from '../../services/ToneContextWrapper'
import ErrorFallback from '../err-and-feedback/ErrorFallback'
import MappingsFallback from '../err-and-feedback/MappingsFallback'
import FullWidthCard from '../main-view/chart/FullWidthCard'
import MappingsCard from '../main-view/map/MappingsCard'
import ToneCard from '../main-view/tone/ToneCard'

function MdLayout() {
  /**
   * triggered by button clicker handler in ErrorFallback, to update MdLayout as the parent component of the error boundary.
   */
  const [trigger, setTrigger] = useState<number>(0)

  //TODO: see if transition causes MdLayout rerender
  const [isToneContextUpdating, startUpdateToneContext] = useTransition()
  return (
    <Container sx={{ my: '1rem' }}>
      <ToneContextWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FullWidthCard />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => setTrigger(trigger + 1)}
            >
              <Suspense fallback={<MappingsFallback />}>
                <MappingsCard />
              </Suspense>
            </ErrorBoundary>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback="fallback2">
                <ToneCard
                  startUpdateToneContext={startUpdateToneContext}
                  isToneContextUpdating={isToneContextUpdating}
                />
              </Suspense>
            </ErrorBoundary>
          </Grid>
        </Grid>
      </ToneContextWrapper>
    </Container>
  )
}

export default MdLayout
