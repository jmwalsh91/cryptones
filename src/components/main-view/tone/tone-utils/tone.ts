import * as Tone from 'tone'
import { Synth } from 'tone'

export const newSynth = () => {
  const fmSynth: Tone.FMSynth = new Tone.FMSynth().toDestination()
  return fmSynth
}

export const stopPlayback = (/*callback?*/) => {
  console.log(Tone.Transport.disposed)
  Tone.Transport.stop(Tone.now())
}
//TODO: update to accept types of each synth subclass that will be available to user
export const mapDataToSequence = (synth: Tone.FMSynth, notes: number[]) => {
  const seq = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, 0.5, time)
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
  console.log('props data is ' + data)
  const difArray: number[] = []
  data.reduce((_previousValue: number, _currentValue: number, _ind: number) => {
    if (data[_ind][1][3] === data[0][1][3]) {
      console.log('reduce if hit')
      return
    } else {
      console.log('else')
      const difValue = data[_ind][1][3] - data[_ind - 1][1][3]
      console.log(difValue)
      return difArray.push(
        Math.abs(Math.trunc(applySensitivity(sensitivity, difValue)))
      )
    }
  }, 0)
  console.log(difArray)
  return difArray
}
