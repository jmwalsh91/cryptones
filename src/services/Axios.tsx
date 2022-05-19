import axios, { AxiosInstance } from 'axios'

const cryptonesURL = import.meta.env.VITE_CRYPTONESURL

//Instantiates AxiosInstance for route w/ API URL from env
export const cryptonesApi: AxiosInstance = axios.create({
  baseURL: cryptonesURL,
  timeout: 5000,
})
