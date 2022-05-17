import { cryptonesApi } from '~/services/Axios'

export const getOhlcv = async () => {
  const { resFormatted, volArr } = await cryptonesApi
    .get('/api/ohlcv')
    .then((response) => {
      const volArr = response.data.volArr
      const resFormatted = response.data.resFormatted
      return { resFormatted, volArr }
    })
  return { resFormatted, volArr }
}
