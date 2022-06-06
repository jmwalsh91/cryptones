import { SingleBed } from '@mui/icons-material'
import { Key, Note } from '@tonaljs/tonal'
import * as Tone from 'tone'
import { PluckSynth } from 'tone'

import { Mode } from '~/components/formComponents/TransposeToggle'

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

export const stopPlayback = (/*callback?*/) => {
  console.log(Tone.Transport.disposed)
  Tone.Transport.stop(Tone.now())
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
export const applySensitivity = (
  sensitivity: number,
  value: number
): number => {
  return sensitivity * value
}

//TODO: strengthen data typing: Partial<something<something,something>>
//TODO: If difference iss less than 1 between vals, should have an x100 option? and a snackbar if the < 1 condition is met without x100 being checked?
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

export function deviationArray(
  data: Array<any>,
  sensitivity: number
): number[] {
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
 * @params key, Mode
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
 * @params keyArray @type keyfilter
 * @params notes @type number[]
 * @return
 */

export function filterNotes(keyArray: keyFilter, notes: number[]) {
  console.log(keyArray, notes)
  return notes.map((note) => {
    console.log(keyArray.includes(Note.fromFreq(note)))
    keyArray.includes(Note.fromFreq(note))
    return Note.fromFreq(note)
  })
}
/**
 * @function
 * @params
 */
