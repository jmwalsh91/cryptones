/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyledOptions } from '@emotion/styled'
import { Button, Grid, Paper, Typography } from '@mui/material'
/* import { AxiosResponse } from 'axios' */
import { ReactNode, SyntheticEvent, useState } from 'react'
import useSWR from 'swr'

// eslint-disable-next-line import/order
import {
  useDispatch,
  useToneContext,
} from '../../../services/ToneContextWrapper'

/* import * as Tone from 'tone' */

import * as neu from '../../../styles/neu'
import InputSelect from '../../formComponents/InputSelect'
import SensitivitySlider from '../../formComponents/SensitivitySlider'
import { differenceArray } from '../tone/tone-utils/tone'

interface Props {
  children?: ReactNode
  attributes?: StyledOptions<Props>
}

function MappingsCard(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [source, setSource] = useState<string>('difference')
  const [sensitivity, setSensitivity] = useState<number>(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [target, setTarget] = useState<string>('Note value')
  const dispatchToneData = useDispatch()
  const toneContext = useToneContext()
  /*   const fetcher = (endpoint: string, object: object) =>
    Axios.cryptonesApi.post(endpoint, object).then((res) => res.data) */

  const { data } = useSWR(toneContext?.dispatchedEndpoint, { suspense: false })

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(data)
    const array = differenceArray(data.formattedOhlc, sensitivity)
    dispatchToneData?.setNotes(array)
    return console.log('submitted')
    //GENERATE NOTES: data from endpoint -> (source -> sensitivity -> target) => return dispatch setNotes(array)
  }

  /*   const handleSubmit = async (e: SyntheticEvent, cacheMapping: object) => {
    e.preventDefault()
    const cachedMapping = await fetcher('/api/cache', cacheMapping)
      .then((response: AxiosResponse<any, any>) => {
        console.log(response)
        //TODO: likely best to set object properties and memoize the setter, though I believe React Fiber will hold off on update until it hits the return here...
        //TODO: consider startTransition here, change styling of submit button?
        dispatchToneData?.setSource(source)
        dispatchToneData?.setSensitivity(sensitivity)
        dispatchToneData?.setTarget(target)
        return response.data
      })
      .catch((error) => console.error(error))

    return cachedMapping
  }
 */ return (
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
              values={['difference', 'absolute']}
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
            <SensitivitySlider
              sliderSize="small"
              color="primary"
              handler={setSensitivity}
            />
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
              onClick={(e) => handleSubmit(e)}
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
