import axios, { AxiosInstance } from 'axios'
const cryptonesURL = process.env.VITE_CRYPTONESURL

export const cryptonesApi: AxiosInstance = axios.create({
  baseURL: cryptonesURL,
  timeout: 5000,
})

console.log(cryptonesURL)
