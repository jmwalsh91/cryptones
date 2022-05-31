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
  stopPlayback: () => void
  startPlayback: () => void
}

export interface sensitivitySliderValues {
  defaultValue: number
  step: number
  marks: boolean
  min: number
  max: number
}

//Context interfaces
export type dispatchToneDataString = React.Dispatch<
  React.SetStateAction<string | undefined>
>
export type dispatchToneDataNumber = React.Dispatch<
  React.SetStateAction<number | undefined>
>
export interface toneDataContext {
  source: string
  sensitivity: number
  target: string
  dispatchedEndpoint: string
}
export interface toneDataDispatcher {
  setSource?: React.Dispatch<React.SetStateAction<string>>
  setSensitivity?: React.Dispatch<React.SetStateAction<number>>
  setTarget?: React.Dispatch<React.SetStateAction<string>>
  setNotes: any
}
export interface chartDataDispatcher {
  setDispatchedEndpoint: React.Dispatch<React.SetStateAction<string>>
}
