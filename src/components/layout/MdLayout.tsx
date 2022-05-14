import { Container, Grid } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  main?: ReactNode
  cardOne?: ReactNode
  cardTwo?: ReactNode
}

function MdLayout({ main, cardOne, cardTwo }: Props) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {main}
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          {cardOne}
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          {cardTwo}
        </Grid>
      </Grid>
    </Container>
  )
}

export default MdLayout
