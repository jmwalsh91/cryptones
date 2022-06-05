/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyledOptions } from '@emotion/styled'
import { Button, Grid, Paper, Typography, useTheme } from '@mui/material'
/* import { AxiosResponse } from 'axios' */
import { ReactNode, SyntheticEvent, useState } from 'react'
import useSWR from 'swr'

import AlgoSelect from '~/components/formComponents/AlgoSelect'

// eslint-disable-next-line import/order
import {
  useDispatch,
  useToneContext,
} from '../../../services/ToneContextWrapper'

/* import * as Tone from 'tone' */

import * as base from '../../../styles/base'
import * as neu from '../../../styles/neu'
import InputSelect from '../../formComponents/InputSelect'
import SensitivitySlider from '../../formComponents/SensitivitySlider'
import { deviationArray, differenceArray } from '../tone/tone-utils/tone'

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
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  const { data } = useSWR(toneContext?.dispatchedEndpoint, { suspense: false })

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    let array
    switch (source) {
      case 'difference':
        array = differenceArray(data.formattedOhlc, sensitivity)
        dispatchToneData?.setNotes(array)
        break
      case 'deviation':
        array = deviationArray(data.formattedOhlc, sensitivity)
        dispatchToneData?.setNotes(array)
        break
    }
    return console.log('submitted')
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
          ${themedNeu.depressed};
          ${base.mapCard};
        `}
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          px: '1rem',
        }}
        {...props}
      >
        <Typography
          variant="h2"
          css={css`
            font-weight: 700;
            text-shadow: 10px 1px 20px ${currentTheme.palette.primary.main},
              5px 8px 10px ${currentTheme.palette.secondary.main};
            color: ${currentTheme.palette.background.default};
          `}
          sx={{ textAlign: 'left' }}
        >
          {' '}
          Mapping
        </Typography>
        <Grid
          container
          sx={{ justifyContent: 'space-between', alignContent: 'baseline' }}
        >
          <Grid
            item
            xs={3}
            container
            sx={{ m: 1, p: 1, minWidth: 100 }}
            css={css`
              ${themedNeu.raised};
            `}
          >
            <AlgoSelect />
          </Grid>
          <Grid
            item
            sm={3}
            container
            css={css`
              ${themedNeu.raised}
            `}
          >
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
                ${themedNeu.raised}}
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
