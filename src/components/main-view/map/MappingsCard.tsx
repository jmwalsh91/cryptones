/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
/* import { Button, Grid, Paper, Typography, useTheme } from '@mui/material' */
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
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

import * as base from '../../../styles/base'
import * as neu from '../../../styles/neu'
import SensitivitySlider from '../../formComponents/SensitivitySlider'
import { mapDataToSequence } from '../tone/tone-utils/tone'
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
  const dispatchToneData = useDispatch()
  const toneContext = useToneContext()
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  const { data } = useSWR(toneContext?.dispatchedEndpoint, { suspense: true })

  //TODO: Gauge relative benefit of moving into a useSubmitMap hook?
  //TODO: Add "target" arg to mapData... for sequence name.
  const handleSubmit = async (e: SyntheticEvent, target: string) => {
    e.preventDefault()
    const updateTarget =
      target === 'dub' ? dispatchToneData?.setDub : dispatchToneData?.setOverdub
    const keyMode = keyModeRef?.current?.value.split(',')
    let notesArray
    switch (source) {
      case 'difference':
        notesArray = differenceArray(data.formattedOhlc, sensitivity)
        if (!prettierState && toneContext) {
          updateTarget(mapDataToSequence(toneContext?.synth, notesArray))
        }
        if (prettierState && keyMode && toneContext) {
          const keyArr: keyFilter = keyArray(keyMode[0], keyMode[1] as Mode)
          const filtered = filterNotes(keyArr, notesArray)
          updateTarget(mapDataToSequence(toneContext?.synth, filtered))
        }
        break
      case 'deviation':
        notesArray = deviationArray(data.formattedOhlc, sensitivity)
        if (!prettierState && toneContext) {
          updateTarget(mapDataToSequence(toneContext?.synth, notesArray))
        }
        if (prettierState && keyMode && toneContext) {
          const keyArr: keyFilter = keyArray(keyMode[0], keyMode[1] as Mode)
          updateTarget(
            mapDataToSequence(
              toneContext?.synth,
              filterNotes(keyArr, notesArray)
            )
          )
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
          <Grid
            item
            md={2}
            gap={2}
            container
            sx={{
              justifyContent: { xs: 'space-evenly' },
              direction: { xs: 'row', md: 'column' },
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                minWidth: {
                  xs: '40%',
                  md: '6rem',
                },
              }}
              onClick={(e) => handleSubmit(e, 'dub')}
              css={css`
                ${themedNeu.raised}
                color: ${currentTheme.palette.text.primary}
              `}
            >
              {toneContext?.dub ? 'already dubbed' : 'dub'}
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                minWidth: {
                  xs: '40%',
                  md: '6rem',
                },
              }}
              css={css`
                ${themedNeu.raised}
                color: ${currentTheme.palette.text.primary}
              `}
              onClick={(e) => handleSubmit(e, 'overdub')}
            >
              {toneContext?.overdub ? 'already overdubbed' : 'overdub'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default MappingsCard
