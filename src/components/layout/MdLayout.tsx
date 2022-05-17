import { Container, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

import FullWidthCard from '../surfaces/FullWidthCard'

import { cryptonesApi } from '~/services/Axios'
import { formattedOhlc, ohlcvResponse, volumeArray } from '~/types/interfaces'

//TODO: properly type...
type Props = {
  main?: any
  cardOne?: any
  cardTwo?: any
}

function MdLayout({ cardOne, cardTwo }: Props) {
  const [dataOHLC, setDataOHLC] = useState<formattedOhlc>()
  const [volumeArr, setVolumeArr] = useState<volumeArray>()

  const getOhlcv = async () => {
    let ohlcvResponse: ohlcvResponse = await cryptonesApi
      .get('/api/ohlcv')
      .then((response) => {
        const res: ohlcvResponse = {
          formattedOhlc: response.data.data.formattedOhlc,
          volumeArray: response.data.data.volumeArray,
        }
        console.log(res)
        return (ohlcvResponse = res)
      })
    setVolumeArr(ohlcvResponse.volumeArray)
    setDataOHLC(ohlcvResponse.formattedOhlc)
    return { ohlcvResponse }
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
          <FullWidthCard ohlcvData={dataOHLC} />
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
