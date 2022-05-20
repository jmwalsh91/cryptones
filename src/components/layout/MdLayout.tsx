import { Container, Grid } from '@mui/material'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from '../ErrorFallback'
import FullWidthCard from '../main-view/chart/FullWidthCard'
import MappingsCard from '../main-view/map/MappingsCard'
import ToneCard from '../main-view/tone/ToneCard'

function MdLayout() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <FullWidthCard />
          </ErrorBoundary>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <MappingsCard />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <ToneCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default MdLayout
