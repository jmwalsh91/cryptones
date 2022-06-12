import { Dispatch, SetStateAction } from 'react'
import * as Tone from 'tone'

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
  disposeSequences: Dispatch<SetStateAction<any>>
  //TODO: remove
  trigger?: any
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
  /*   source: string
  sensitivity: number */
  dispatchedEndpoint: string
  synth: Tone.FMSynth
  dub: Tone.Sequence | null
  overdub: Tone.Sequence | null
}

//TODO: Keep other setters here, in the event we need to .post to API and store in DB.
export interface toneDataDispatcher {
  setSource?: React.Dispatch<React.SetStateAction<string>>
  setSensitivity?: React.Dispatch<React.SetStateAction<number>>
  setDub: React.Dispatch<React.SetStateAction<Tone.Sequence<any> | null>>
  setOverdub: React.Dispatch<React.SetStateAction<Tone.Sequence<any> | null>>
}
export interface chartDataDispatcher {
  setDispatchedEndpoint: React.Dispatch<React.SetStateAction<string>>
}
