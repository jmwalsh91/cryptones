import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { ohlcvData, volumeData } from '~/types/interfaces'
const cryptonesURL = import.meta.env.VITE_CRYPTONESURL

export const cryptonesApi: AxiosInstance = axios.create({
  baseURL: cryptonesURL,
  timeout: 5000,
})

console.log(cryptonesURL)
export interface apiDataFromOhclv {
  formattedOhcl: ohlcvData['formattedOhcl']
  volumeArray: volumeData
}

export interface apiResponseArray {
  [propName: string]: Array<string> | Array<number> | Array<Array<string>>
}

export interface ohclvInterceptorReturn {
  res: Array<Array<any>>
}
cryptonesApi.interceptors.response.use(
  (
    response: AxiosResponse<apiResponseArray, apiResponseArray>
  ): apiDataFromOhclv => {
    const data = response.data
    const formattedOhcl = data.formattedOhcl
    const volumeArray = data.volumeArray
    const res: apiDataFromOhclv = {
      formattedOhcl: formattedOhcl,
      volumeArray: volumeArray,
    }
    return res
  }
)
