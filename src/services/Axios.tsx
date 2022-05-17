import axios, { AxiosInstance } from 'axios'

import { formattedOhlc, ohlcvResponse, volumeArray } from '~/types/interfaces'

const cryptonesURL = import.meta.env.VITE_CRYPTONESURL

export const cryptonesApi: AxiosInstance = axios.create({
  baseURL: cryptonesURL,
  timeout: 5000,
})

console.log(cryptonesURL)

//TODO: correct typing
cryptonesApi.interceptors.response.use((response) => {
  const data = response.data
  const formattedOhlc: formattedOhlc = data.formattedOhcl
  const volumeArray: volumeArray = data.volumeArray
  const res: ohlcvResponse = {
    formattedOhlc: formattedOhlc,
    volumeArray: volumeArray,
  }
  return res
})
