import { Key, Note } from '@tonaljs/tonal'
import * as Tone from 'tone'

import { Mode } from '~/components/formComponents/TransposeToggle'

import { audioControls } from '~/types/interfaces'

export const newSynth = () => {
  const reverb = new Tone.Reverb(2).toDestination()
  const delay = new Tone.Delay(0.7).connect(reverb)
  const fmSynth: Tone.FMSynth = new Tone.FMSynth({
    harmonicity: 7,
    envelope: { attack: 0.5, decay: 0.4, sustain: 1, release: 0.5 },
  })
    .connect(delay)
    .toDestination()
  return fmSynth
}

const startTransport = () => {
  console.log('play synth')
  console.log(Tone.context.state)
  Tone.Transport.start(Tone.now())
}

export const stopPlayback = (/*callback?*/) => {
  console.log(Tone.Transport.disposed)
  Tone.Transport.stop(Tone.now())
}

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
export function dispose(seq: Tone.Sequence | null, seq2: Tone.Sequence | null) {
  seq?.clear().dispose()
  seq2?.clear().dispose()
  return Tone.Transport.cancel(0)
}

export const transportControls: audioControls = {
  stopPlayback: stopPlayback,
  startTransport: startTransport,
  dispose: dispose,
}
//TODO: update to accept types of each synth subclass that will be available to user
//TODO: strengthen typing with notes.
export const mapDataToSequence = (
  synth: Tone.FMSynth | Tone.FMSynth,
  notes: any[]
) => {
  //TODO: VELOCITY PARAM
  const seq = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, 0.5, time)
    console.log(Note.fromFreq(note))
  }, notes).start(0)
  console.log(seq)
  return seq
}

// apply sensitivity (multiply by %) to input value
// so that a wide variety of input values can be transformed to values which are audible, perceptibly different, or pleasant.
/**
 * @function applySensitivity
 * @param {number} sensitivity
 * @param {number} value
 * @returns number
 */
export const applySensitivity = (
  sensitivity: number,
  value: number
): number => {
  return sensitivity * value
}

/**
 *
 * @param  {any[]} data ohlc or ohlcv data from API response, TODO: strengthen typing
 * @param sensitivity reduce the extent to which difference between sequential values corresponds to difference in frequency values output by function.
 * @returns {number[]}
 * TODO: If difference is less than 1 between vals, should have an x100 option? and a snackbar if the < 1 condition is met without x100 being checked?
 * TODO: strengthen data typing: Partial<something<something,something>>
/**
 */
export function differenceArray(
  data: Array<any>,
  sensitivity: number
): number[] {
  const difArray: number[] = []
  data.reduce((_previousValue: number, _currentValue: number, _ind: number) => {
    if (data[_ind][1][3] === data[0][1][3]) {
      return
    } else {
      const difValue = data[_ind][1][3] - data[_ind - 1][1][3]
      return difArray.push(
        Math.abs(Math.trunc(applySensitivity(sensitivity, difValue)))
      )
    }
  }, 0)
  console.log(difArray)
  return difArray
}

/**
 * @function deviationArray
 * @param {any[]} data ohlc or ohlcv data from API response, TODO: strengthen typing
 * @param sensitivity
 * @returns
 */
export function deviationArray(data: any[], sensitivity: number): number[] {
  const devArray: number[] = []
  data.reduce((_previousValue: number, _currentValue: number, _ind: number) => {
    if (data[_ind][1][3] === data[0][1][3]) {
      return
    } else {
      const devValue = data[0][1][3] - data[_ind - 1][1][3]
      return devArray.push(
        Math.abs(Math.trunc(applySensitivity(sensitivity, devValue)))
      )
    }
  }, 0)
  return devArray
}

/**
 * TONAL JS FUNCTIONS
 */

/**
 * @function keyArray
 * @param {string} key name of key (see: https://en.wikipedia.org/wiki/Pitch_class)
 * @param {Mode} mode Currently, only "major" and "minor" are enumerated values, TODO: expand functionality to include other modes.
 * @return array of notes that corresponds to key and mode
 */
export type keyFilter = readonly string[]

export function keyArray(key: string, mode: Mode): keyFilter {
  if (mode === Mode.Minor) {
    return Key.minorKey(key).natural.scale
  } else return Key.majorKey(key).scale
  /*   if (mode === Mode.Major) { 
  return key.major... here } */
}

/**
 * @function filterNotes
 * @param {keyFilter} keyArray array of notes to compare against frequency values provided as second argument to filterNotes
 * @param {number[]} notes array of frequency values generated by applied algorithm
 * @return
 */

export function filterNotes(
  keyArray: keyFilter,
  notes: number[]
): (string | null)[] {
  return notes.map((note) => {
    if (keyArray.includes(Note.pitchClass(Note.fromFreq(note)))) {
      return Note.fromFreq(note)
    } else return null
  })
}
/**
 * @function
 * @params
 */
