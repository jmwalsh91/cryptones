import { Container, Grid } from '@mui/material'
import { SWRConfig } from 'swr'

import FullWidthCard from '../main-view/chart/FullWidthCard'
import MappingsCard from '../main-view/map/MappingsCard'
import ToneCard from '../main-view/tone/ToneCard'

function MdLayout() {
  return (
    <Container sx={{ my: '1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FullWidthCard />
        </Grid>
        <SWRConfig>
        <Grid item xs={12} sm={6} md={7}>
          <MappingsCard />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <ToneCard />
        </Grid>
        </SWRConfig>
      </Grid>

    </Container>
  )
}

export default MdLayout
