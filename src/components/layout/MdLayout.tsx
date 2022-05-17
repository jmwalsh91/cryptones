import { Container, Grid } from '@mui/material'
import { Suspense, useEffect, useState } from 'react'

import FullWidthCard from '../surfaces/FullWidthCard'

import { cryptonesApi } from '~/services/Axios'
import { ohlcvResponse } from '~/types/interfaces'

//TODO: properly type...
type Props = {
  main?: any
  cardOne?: any
  cardTwo?: any
}

function MdLayout({ main, cardOne, cardTwo }: Props) {
  const [dataOHLC, setDataOHLC] = useState()
  const [volumeArr, setVolumeArr] = useState()

  const getOhlcv = async (): Promise<ohlcvResponse> => {
    const response: any = await cryptonesApi
      .get('/api/ohlcv')
      .then((response) => {
        //TODO: Fix typing
        return response
      })
    setVolumeArr(volumeArray)
    setDataOHLC(formattedOhlc)
    return { formattedOhlc, volumeArray }
  }
  useEffect(() => {
    getOhlcv()
  }, [])
  useEffect(() => {
    console.log(volumeArr, dataOHLC)
  })
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Suspense fallback="fallback here">
            <FullWidthCard ohlcvData={dataOHLC} />
          </Suspense>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          {cardOne}
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          {cardTwo}
        </Grid>
      </Grid>
    </Container>
  )
}

export default MdLayout
