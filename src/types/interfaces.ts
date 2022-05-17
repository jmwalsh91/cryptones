export type formattedOhlc = any[][]
export type volumeArray = number[]

export interface ohlcvResponse {
  formattedOhlc: formattedOhlc
  volumeArray: volumeArray
}
