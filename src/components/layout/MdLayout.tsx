import { Container, Grid } from '@mui/material'
import { Suspense, useEffect, useState } from 'react'

import FullWidthCard from '../surfaces/FullWidthCard'

import { apiDataFromOhclv, cryptonesApi } from '~/services/Axios'
import { ohlcvData, volumeData } from '~/types/interfaces'

//TODO: properly type...
type Props = {
  main?: any
  cardOne?: any
  cardTwo?: any
}

function MdLayout({ main, cardOne, cardTwo }: Props) {
  const [dataOHLC, setDataOHLC] = useState<ohlcvData | []>()
  const [volumeArr, setVolumeArr] = useState<volumeData>()

  const getOhlcv = async () => {
    const { volumeArray, formattedOhcl }: apiDataFromOhclv = await cryptonesApi
      .get('/api/ohlcv')
      .then((response): apiDataFromOhclv => {
        //TODO: Fix typing
        const responseObject: apiDataFromOhclv | any = response
        return responseObject
      })
    setVolumeArr(volumeArray)
    setDataOHLC(formattedOhcl)
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
