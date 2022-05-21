import { StyledOptions } from '@emotion/styled'
import { Button, Grid, Paper, Typography } from '@mui/material'
import { ReactNode, SyntheticEvent } from 'react'
import { mutate } from 'swr'

import InputSelect from '../../formComponents/InputSelect'
import SlideSelector from '../../formComponents/SlideSelector'

import { cryptonesApi } from '~/services/Axios'

interface Props {
  children?: ReactNode
  attributes?: StyledOptions<Props>
}

function MappingsCard(props: Props) {
  const obj = {
    keyi: 'value',
  }
  const handleSubmit = async (e: SyntheticEvent, cacheMapping: object) => {
    e.preventDefault()
    const cachedMapping = await cryptonesApi
      .post('/api/cache', cacheMapping)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.error(error))
    return mutate('mapping', cachedMapping)
  }
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
            <Button variant="outlined" onClick={(e) => handleSubmit(e, obj)}>
              MAP
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default MappingsCard
