import * as Tone from 'tone'

export const newSynth = () => {
  //filter for fun

  //default synth
  const pluckedSynth: Tone.PluckSynth = new Tone.PluckSynth().toDestination()
  return pluckedSynth
}
//apply mappings
// apply src to init array, get note value
// put switch on sensitivity
// apply sensitivity to src
// translate to note values
//submit

//function from v1 for find difference
//TODO: add typings, Partial<something<something,something>>
export function differenceArray(data: Array<any>) {
  console.log('props data is ' + data)
  const difArray: any = []
  const arr = data.reduce((_previousValue, _currentValue, _ind) => {
    if (data[_ind][1][3] === data[0][1][3]) {
      return console.log('first pos')
    } else {
      const dif = data[_ind][1][3] - data[_ind - 1][1][3]
      return difArray.push(Math.abs(Math.trunc(dif)))
    }
  }, 0)
  return difArray
}
