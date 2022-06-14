import { Key, Note } from '@tonaljs/tonal'
import * as Tone from 'tone'

import { audioControls } from '../../../../types/interfaces'
import { Mode } from '../../../formComponents/TransposeToggle'
/**
 * instantiate new synthesizer object as default synth
 * @todo multiple options, perhaps stored as in an enum.
 * @returns new {@link Tone.FMSynth}
 */
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
/***********************************
 * CONTEXT AND TRANSPORT FUNCTIONS *
 ***********************************/
/**
 * starts the transport
 * {@link Tone.Transport.start()}
 */
const startTransport = () => {
  Tone.Transport.start(Tone.now())
}
/**
 * pauses the transport (position along transport timeline is preserved)
 * @param callback
 * @todo determine if getTransport... belongs in return
 *
 * {@link Tone.Transport.pause}
 */
export function pauseTransport(callback?: any) {
  Tone.Transport.pause()
}
/**
 * stops the transport, position along transport timeline is not preserved and playback will start at the event in the sequence.
 * {@link Tone.Transport.stop}
 */

export const stopPlayback = (/*callback?*/) => {
  console.log(Tone.Transport.disposed)
  Tone.Transport.stop(Tone.now())
}

/**
 * clears all events in each provided {@link Tone.Sequence}, then disposes each sequence so that state in browser is in sync with state within React, and then cancels all scheduled events in transport timeline.
 * @param {Tone.Sequence | null} seq - Sequence to clear and dispose
 * @param {Tone.Sequence | null} seq2 - Sequence to clear and dispose
 * @returns void
 */
export function dispose(seq: Tone.Sequence | null, seq2: Tone.Sequence | null) {
  seq?.clear().dispose()
  seq2?.clear().dispose()
  return Tone.Transport.cancel(0)
}
/**
 * @type {audioControls}
 * contains:
 * @function {@link stopPlayback}
 * @function {@link startTransport}
 * @function {@link pauseTransport}
 * @function {@link dispose}
 */
export const transportControls: audioControls = {
  /** stop audio playback */
  stopPlayback: stopPlayback,
  /** start the transport / audio playback */
  startTransport: startTransport,
  /** pause the transport / audio playback */
  pauseTransport: pauseTransport,
  /** @function dispose */
  dispose: dispose,
}
/**
 * sets the {@link Tone.Transport.timeSignature} to 3/4
 */
export function threeFour() {
  Tone.Transport.timeSignature = 3
}
/**
 * sets the {@link Tone.Transport.timeSignature} to 4/4
 */
export function fourFour() {
  Tone.Transport.timeSignature = 4
}

/**
 * Creates new Sequence, accepts an instance of the {@link Tone.FMSynth} and an array of note values. Event in function body is called at each index as the global tone transport progresses along its timeline. 
 * @param synth
 * @param notes
 * @returns new {@link Tone.Sequence} instance
 */

/******************************
 * ALGORITHM & MAP FUNCTIONS  *
 ******************************/
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
/**
 * Should rightly be called "amplify value": multiplies value returned by algorithm to increase or decrease the 'spread' between note values and affects the pitch.
 * @param {number} sensitivity
 * @param {number} value
 * @returns number
 * @example
 * value 70 * sensitivity 4 = return 280
 * vs 70 * 1 = 70
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

/************************
 * TONAL JS FUNCTIONS  *
 ************************/

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
/*****************************/
