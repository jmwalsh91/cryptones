export type formattedOhlc = any[][]
export type volumeArray = number[]

export interface ohlcvResponse {
  formattedOhlc: formattedOhlc
  volumeArray: volumeArray
}

export interface tokenObject {
  name: string
  logo: string
}

export interface audioControls {
  stop?: any
}
