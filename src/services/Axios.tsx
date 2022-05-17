import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { formattedOhlc, ohlcvResponse, volumeArray } from '~/types/interfaces'

const cryptonesURL = import.meta.env.VITE_CRYPTONESURL

//Instantiates AxiosInstance for route w/ API URL from env
export const cryptonesApi: AxiosInstance = axios.create({
  baseURL: cryptonesURL,
  timeout: 5000,
})

//intercepts response from API and returns correct shape, returns to axios getter for route.
cryptonesApi.interceptors.response.use(
  (
    response: AxiosResponse<ohlcvResponse, any>
  ): ohlcvResponse | Promise<any> => {
    //unpack and reassign
    const formattedOhlc: formattedOhlc = response.data.formattedOhlc
    const volumeArray: volumeArray = response.data.volumeArray
    //define response object
    const res: ohlcvResponse = {
      formattedOhlc: formattedOhlc,
      volumeArray: volumeArray,
    }
    //return to axios instance for route ohlcv
    return res
  },
  (error) => {
    //axios will reject if status !2xx
    return Promise.reject(error)
  }
)
