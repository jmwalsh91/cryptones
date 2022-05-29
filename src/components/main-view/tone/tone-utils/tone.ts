import * as Tone from 'tone'
import { Synth } from 'tone'

export const newSynth = () => {
  //filter for fun
  //default synth
  /*   const pluckedSynth: Tone.PluckSynth = new Tone.PluckSynth().toDestination()
  return pluckedSynth */
  const fmSynth: Tone.FMSynth = new Tone.FMSynth().toDestination()
  return fmSynth
}

export const stopPlayback = (/*callback?*/) => {
  console.log(Tone.Transport.disposed)
  Tone.Transport.stop()
}
//TODO: update to accept types of each synth subclass that will be available to user
export const mapDataToSequence = (synth: Tone.FMSynth, notes: number[]) => {
  const seq = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, 0.5, time)
  }, notes).start(0)
  return seq
}

//apply mappings
// apply src to init array, get note value
// put switch on sensitivity
// apply sensitivity to src
// translate to note values
//submit

// apply sensitivity (multiply by %) to input value
// so that a wide variety of input values can be transformed to values which are audible, perceptibly different, or pleasant.
export const applySensitivity = (
  sensitivity: number,
  value: number
): number => {
  return sensitivity * value
}
//Local Stack

//TODO: add typings, Partial<something<something,something>>
export function differenceArray(data: Array<any>): number[] {
  console.log('props data is ' + data)
  const difArray: number[] = []
  const arr: number[] = data.reduce(
    (_previousValue: number, _currentValue: number, _ind: number) => {
      if (data[_ind][1][3] === data[0][1][3]) {
        return
      } else {
        const dif = data[_ind][1][3] - data[_ind - 1][1][3]
        return difArray.push(Math.abs(Math.trunc(dif)))
      }
    },
    0
  )
  return difArray
}
