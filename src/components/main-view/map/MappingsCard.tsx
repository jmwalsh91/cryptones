/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
/* import { Button, Grid, Paper, Typography, useTheme } from '@mui/material' */
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
/* import { AxiosResponse } from 'axios' */
import { ReactNode, SyntheticEvent, useRef, useState } from 'react'
import useSWR from 'swr'

import AlgoSelect from '~/components/formComponents/AlgoSelect'
import {
  Mode,
  TransposeToggle,
} from '~/components/formComponents/TransposeToggle'

// eslint-disable-next-line import/order
import {
  useDispatch,
  useToneContext,
} from '../../../services/ToneContextWrapper'

/* import * as Tone from 'tone' */

import * as base from '../../../styles/base'
import * as neu from '../../../styles/neu'
import SensitivitySlider from '../../formComponents/SensitivitySlider'
import {
  deviationArray,
  differenceArray,
  filterNotes,
  keyArray,
  keyFilter,
} from '../tone/tone-utils/tone'

interface Props {
  children?: ReactNode
}

function MappingsCard(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [source, setSource] = useState<string>('difference')
  const [sensitivity, setSensitivity] = useState<number>(1)
  const [prettierState, setPrettier] = useState<boolean>(false)
  const keyModeRef = useRef<HTMLInputElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatchToneData = useDispatch()
  const toneContext = useToneContext()
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  const { data } = useSWR(toneContext?.dispatchedEndpoint, { suspense: true })

  //TODO: Gauge relative benefit of moving into a useSubmitMap hook?
  const handleSubmit = async (e: SyntheticEvent) => {
    console.log(data)
    e.preventDefault()
    const keyMode = keyModeRef?.current?.value.split(',')
    let notesArray
    switch (source) {
      case 'difference':
        notesArray = differenceArray(data.formattedOhlc, sensitivity)
        if (!prettierState) {
          dispatchToneData?.setNotes(notesArray)
        }
        if (prettierState && keyMode) {
          console.log(keyMode)
          const keyArr: keyFilter = keyArray(keyMode[0], keyMode[1] as Mode)
          const filtered = filterNotes(keyArr, notesArray)
          dispatchToneData?.setNotes(filtered)
        }
        break
      case 'deviation':
        notesArray = deviationArray(data.formattedOhlc, sensitivity)
        if (!prettierState) {
          dispatchToneData?.setNotes(notesArray)
        }
        if (prettierState && keyMode) {
          const keyArr: keyFilter = keyArray(keyMode[0], keyMode[1] as Mode)
          dispatchToneData?.setNotes(filterNotes(keyArr, notesArray))
        }
        break
    }
    return
  }

  return (
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
          sx={{ textAlign: { xs: 'center', md: 'left' }, mb: '1rem' }}
        >
          {' '}
          Mapping
        </Typography>
        <Grid container gap={3} sx={{ justifyContent: 'space-between' }}>
          <Grid
            item
            xs={3}
            container
            sx={{ minWidth: { xs: '100%', md: '100px' } }}
            css={css`
              ${themedNeu.raised};
              align-items: center;
              justify-content: space-around;
            `}
          >
            <AlgoSelect handler={setSource} />
          </Grid>
          <Grid
            item
            md={3}
            container
            css={css`
              ${themedNeu.raised};
              min-width: 10rem;
              align-items: center;
              justify-content: space-around;
            `}
          >
            <SensitivitySlider
              sliderSize="small"
              color="primary"
              handler={setSensitivity}
            />

            <TransposeToggle
              prettierState={prettierState}
              dispatchPrettier={setPrettier}
              keyModeRef={keyModeRef}
            />
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{
              minHeight: {
                xs: '1rem',
                md: '100%',
              },
              minWidth: {
                xs: '100%',
                md: '1rem',
              },
              marginRight: {
                xs: 0,
                md: '.25rem',
              },
            }}
            onClick={(e) => handleSubmit(e)}
            css={css`
              ${themedNeu.raised}
              color: ${currentTheme.palette.text.primary}
            `}
          >
            Submit
          </Button>
        </Grid>
      </Paper>
    </>
  )
}

export default MappingsCard
