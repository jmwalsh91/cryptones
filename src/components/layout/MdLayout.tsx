import { Container, Grid } from '@mui/material'
import { ReactNode } from 'react'

import FullWidthCard from '../surfaces/FullWidthCard'
import MappingsCard from '../surfaces/MappingsCard'
import ToneCard from '../surfaces/ToneCard'

//TODO: properly type...
type Props = {
  children?: ReactNode
}

function MdLayout({ children }: Props) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FullWidthCard />
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
