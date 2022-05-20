import { StyledOptions } from '@emotion/styled'
import { Grid, Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'

import InputSelect from '../formComponents/InputSelect'
import SlideSelector from '../formComponents/SlideSelector'

interface Props {
  children?: ReactNode
  attributes?: StyledOptions<Props>
}

function MappingsCard(props: Props) {
  return (
    <>
      <Paper sx={{ width: '100%', height: '100%' }} {...props}>
        <Typography variant="h5">Mappings:</Typography>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          <Grid item xs={4}>
            <InputSelect
              label={'Src'}
              values={['difference']}
              helperText={'Select source'}
            />
          </Grid>
          <Grid item sm={4} container sx={{ justifyContent: 'space-around' }}>
            <Typography variant="h6">Sensitivity</Typography>
            <SlideSelector sliderSize="medium" color="primary" />
          </Grid>
          <Grid item xs={4}>
            <InputSelect
              label={'Target'}
              values={['Note value']}
              helperText={'Select target'}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default MappingsCard
