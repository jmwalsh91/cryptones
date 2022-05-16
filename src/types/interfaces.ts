/* export interface ohlcvData {
  data: Array<object>
}

export interface volumeData {
  data: Array<string>
}
 */

export type formattedOhcl = []
export interface ohlcvData {
  formattedOhcl: formattedOhcl | []
}

export type volumeData = number[] | string[][]
