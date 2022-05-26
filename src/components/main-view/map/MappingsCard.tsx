/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyledOptions } from '@emotion/styled'
import { Button, Grid, Paper, Typography } from '@mui/material'
import { ApexOptions } from 'apexcharts'
import { AxiosResponse } from 'axios'
/* import { AxiosResponse } from 'axios' */
import { ReactNode, SyntheticEvent, useState } from 'react'
import useSWR, { mutate, useSWRConfig } from 'swr'
/* import * as Tone from 'tone' */

import { cryptonesApi } from '../../../services/Axios'
import * as neu from '../../../styles/neu'
import InputSelect from '../../formComponents/InputSelect'
import SlideSelector from '../../formComponents/SlideSelector'

interface Props {
  children?: ReactNode
  attributes?: StyledOptions<Props>
}

function MappingsCard(props: Props) {
  //TODO: DATA FROM INPUT FIELDS
  //TODO: UPDATE INITIAL STATE TO BE __ARRAY[0]
  const [source, setSource] = useState<string>('difference')
  /*   const [sensitivity, setSensitivity] = useState<number>(50) */
  const [target, setTarget] = useState<string>('Note value')

  const fetcher = (endpoint: string) =>
    cryptonesApi(endpoint).then((res) => res.data)

  const obj = {
    2: source,
    4: target,
  }
  const handleSubmit = async (e: SyntheticEvent, cacheMapping: object) => {
    e.preventDefault()
    const cachedMapping = await cryptonesApi
      .post('/api/cache', cacheMapping)
      .then((response: AxiosResponse<any, any>) => {
        console.log(response)
      })
      .catch((error) => console.error(error))

    return mutate('mapping', cachedMapping)
  }
  return (
    <>
      <Paper
        css={css`
          ${neu.depressed}
        `}
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          px: '1rem',
          py: '.5rem',
        }}
        {...props}
      >
        <Typography variant="h4" marginY={'.5rem'} textAlign={'left'}>
          MAP:
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
              handler={setSource}
            />
          </Grid>
          <Grid
            item
            sm={3}
            container
            sx={{ justifyContent: 'center', alignContent: 'baseline' }}
            css={css`
              ${neu.raised}
            `}
          >
            <Typography variant="h6">Sensitivity</Typography>
            <SlideSelector sliderSize="small" color="primary" />
          </Grid>
          <Grid item xs={3} container justifyContent={'center'}>
            <InputSelect
              label={'Target'}
              values={['Note value']}
              helperText={'Select target'}
              handler={setTarget}
            />
          </Grid>
          <Grid item container justifyContent={'end'}>
            <Button
              variant="contained"
              size="large"
              sx={{ m: '2rem', mr: '1rem' }}
              onClick={(e) => handleSubmit(e, obj)}
              css={css`
                ${neu.raised}}
              `}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default MappingsCard
