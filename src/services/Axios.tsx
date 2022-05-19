import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { formattedOhlc, ohlcvResponse, volumeArray } from '~/types/interfaces'

const cryptonesURL = import.meta.env.VITE_CRYPTONESURL

//Instantiates AxiosInstance for route w/ API URL from env
export const cryptonesApi: AxiosInstance = axios.create({
  baseURL: cryptonesURL,
  timeout: 5000,
})
