import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { StyledOptions } from '@emotion/styled'
import { Grid, Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'

import InputSelect from '../formComponents/InputSelect'

interface Props {
  children?: ReactNode
  attributes?: StyledOptions<Props>
}

function MappingsCard(props: Props) {
  return (
    <Paper sx={{ width: '66vw', height: '33vh' }} {...props}>
      <Typography variant="h5">Mappings:</Typography>
      <Grid container sx={{ justifyContent: 'space-evenly' }}>
        <Grid item xs={5}>
          <InputSelect
            label={'Src'}
            values={['difference']}
            helperText={'Select source'}
          />
        </Grid>
        <Grid item xs={5}>
          <InputSelect
            label={'Target'}
            values={['Note value']}
            helperText={'Select target'}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MappingsCard
