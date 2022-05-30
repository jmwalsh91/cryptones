import { Container, Grid } from '@mui/material'
import { useTransition } from 'react'

import ToneContextWrapper from '../../services/ToneContextWrapper'
import FullWidthCard from '../main-view/chart/FullWidthCard'
import MappingsCard from '../main-view/map/MappingsCard'
import ToneCard from '../main-view/tone/ToneCard'

function MdLayout() {
  //TODO: see if transition causes MdLayout rerender
  const [isToneContextUpdating, startUpdateToneContext] = useTransition()
  return (
    <Container sx={{ my: '1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FullWidthCard />
        </Grid>
        <ToneContextWrapper>
          <Grid item xs={12} sm={6} md={7}>
            <MappingsCard />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <ToneCard
              startUpdateToneContext={startUpdateToneContext}
              isToneContextUpdating={isToneContextUpdating}
            />
          </Grid>
        </ToneContextWrapper>
      </Grid>
    </Container>
  )
}

export default MdLayout
