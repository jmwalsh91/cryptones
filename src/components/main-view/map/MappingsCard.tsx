import { StyledOptions } from '@emotion/styled'
import { Button, Grid, Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'

import InputSelect from '../../formComponents/InputSelect'
import SlideSelector from '../../formComponents/SlideSelector'

interface Props {
  children?: ReactNode
  attributes?: StyledOptions<Props>
}

function MappingsCard(props: Props) {
  return (
    <>
      <Paper sx={{ width: '100%', height: '100%' }} {...props}>
        <Typography variant="h3" marginX={'1rem'}>
          Mappings:
        </Typography>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Grid item xs={4} container justifyContent={'center'}>
            <InputSelect
              label={'Src'}
              values={['difference']}
              helperText={'Select source'}
            />
          </Grid>
          <Grid item sm={4} container sx={{ justifyContent: 'center' }}>
            <Typography variant="h6">Sensitivity</Typography>
            <SlideSelector sliderSize="small" color="primary" />
          </Grid>
          <Grid item xs={4} container justifyContent={'center'}>
            <InputSelect
              label={'Target'}
              values={['Note value']}
              helperText={'Select target'}
            />
          </Grid>
          <Grid item container justifyContent={'end'}>
            <Button variant="outlined">MAP</Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default MappingsCard
