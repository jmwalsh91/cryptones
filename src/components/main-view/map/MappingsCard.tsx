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
      <Paper
        sx={{ width: '100%', height: '100%', justifyContent: 'center' }}
        {...props}
      >
        <Typography variant="h3" marginY={'1rem'} textAlign={'center'}>
          Mappings:
        </Typography>
        <Grid
          container
          sx={{ justifyContent: 'space-between', alignContent: 'baseline' }}
        >
          <Grid item xs={3} container justifyContent={'center'}>
            <InputSelect
              label={'Src'}
              values={['difference']}
              helperText={'Select source'}
            />
          </Grid>
          <Grid
            item
            sm={3}
            container
            sx={{ justifyContent: 'center', alignContent: 'baseline' }}
          >
            <Typography variant="h6">Sensitivity</Typography>
            <SlideSelector sliderSize="small" color="primary" />
          </Grid>
          <Grid item xs={3} container justifyContent={'center'}>
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
